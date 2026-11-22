"use client"
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/** LED ribbons in the brand palette; render only while visible and dispose on unmount. */
export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const host = canvas?.parentElement
    if (!canvas || !host) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    let renderer: THREE.WebGLRenderer
    try { renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'low-power' }) } catch { return }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 700 ? 1.25 : 1.5))
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const uniforms = { resolution: { value: new THREE.Vector2() }, time: { value: 0 } }
    const geometry = new THREE.PlaneGeometry(2, 2)
    const material = new THREE.ShaderMaterial({
      uniforms, transparent: true, depthTest: false,
      vertexShader: 'void main(){gl_Position=vec4(position.xy,0.,1.);}',
      fragmentShader: `precision mediump float;
        uniform vec2 resolution; uniform float time;
        float ribbon(vec2 p, float shift, float phase) {
          float curve = p.y + p.x * .42 - sin(p.x * 1.25 + time * .46 + phase) * .16 + shift;
          float d = abs(curve);
          float halo = .016 / (d + .035);
          float core = exp(-d * 190.) * 1.7;
          float travel = pow(.5 + .5 * sin(p.x * 2.3 - time * 1.4 + phase), 10.);
          return halo + core * (.58 + travel * 1.1);
        }
        void main(){
          vec2 uv = gl_FragCoord.xy / resolution;
          vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x,resolution.y);
          float blue = ribbon(p, .36, .0);
          float pink = ribbon(p, .56, .28);
          float gold = ribbon(p, .76, .5);
          vec3 light = vec3(.0,.47,1.) * blue + vec3(1.,.0,.47) * pink + vec3(1.,.69,.025) * gold;
          vec2 cell = fract(gl_FragCoord.xy / 5.) - .5;
          float diodes = .74 + .26 * (1. - smoothstep(.16,.47,length(cell)));
          float vignette = 1. - smoothstep(.5,2.6,length(p * vec2(.6,.8)));
          float textMask = mix(.35,1.,smoothstep(.12,.84,uv.x));
          gl_FragColor = vec4(light * 1.25 * diodes * vignette * textMask, min(.95,(blue+pink+gold)*.8) * vignette * textMask);
        }`
    })
    scene.add(new THREE.Mesh(geometry, material))
    let frame = 0, visible = true, disposed = false, last = 0
    const draw = (now: number) => {
      if (disposed) return
      uniforms.time.value += last ? Math.min((now-last)/1000, .05) : 0
      last=now
      renderer.render(scene,camera)
      frame=requestAnimationFrame(draw)
    }
    const sync = () => { cancelAnimationFrame(frame);last=0; if (!disposed && visible && !document.hidden && !reduced.matches) frame=requestAnimationFrame(draw) }
    const resize = new ResizeObserver(() => { const {width,height}=host.getBoundingClientRect(); renderer.setSize(width,height,false); renderer.getDrawingBufferSize(uniforms.resolution.value) })
    resize.observe(host)
    const observer = new IntersectionObserver(([entry]) => { visible=entry.isIntersecting;sync() })
    observer.observe(host)
    document.addEventListener('visibilitychange',sync)
    reduced.addEventListener('change',sync)
    const contextLost = (event: Event) => { event.preventDefault(); cancelAnimationFrame(frame) }
    canvas.addEventListener('webglcontextlost',contextLost)
    sync()
    return () => { disposed=true;cancelAnimationFrame(frame);resize.disconnect();observer.disconnect();document.removeEventListener('visibilitychange',sync);reduced.removeEventListener('change',sync);canvas.removeEventListener('webglcontextlost',contextLost);geometry.dispose();material.dispose();renderer.dispose() }
  }, [])
  return <canvas ref={canvasRef} className="hero-shader" aria-hidden="true" />
}
