"use client"
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/** Adapted from the client's reference: local sizing, brand colors and full disposal. */
export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const host = canvas?.parentElement
    if (!canvas || !host) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduced.matches) return
    let renderer: THREE.WebGLRenderer
    try { renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'low-power' }) } catch { return }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const uniforms = { resolution: { value: new THREE.Vector2() }, time: { value: 0 } }
    const geometry = new THREE.PlaneGeometry(2, 2)
    const material = new THREE.ShaderMaterial({
      uniforms, transparent: true, depthTest: false,
      vertexShader: 'void main(){gl_Position=vec4(position.xy,0.,1.);}',
      fragmentShader: `precision mediump float;
        uniform vec2 resolution; uniform float time;
        void main(){
          vec2 p=(gl_FragCoord.xy*2.-resolution)/min(resolution.x,resolution.y);
          float wave=sin(p.x*.8+time*.22)*.24;
          float line=p.y+p.x*.36-wave+.46;
          float blue=.012/max(abs(line),.006);
          float pink=.01/max(abs(line+.11+sin(p.x+time*.15)*.06),.008);
          float gold=.004/max(abs(line-.12),.009);
          vec3 color=vec3(.0,.36,1.)*blue+vec3(1.,.0,.42)*pink+vec3(1.,.62,.0)*gold;
          float vignette=1.-smoothstep(.4,2.4,length(p));
          gl_FragColor=vec4(color*vignette*.58, min(.8,(blue+pink+gold)*.6)*vignette);
        }`
    })
    scene.add(new THREE.Mesh(geometry, material))
    let frame = 0, visible = true, disposed = false, last = 0
    const draw = (now: number) => {
      if (disposed) return
      if (now-last>32) { uniforms.time.value=now/1000; renderer.render(scene,camera);last=now }
      frame=requestAnimationFrame(draw)
    }
    const sync = () => { cancelAnimationFrame(frame); if (!disposed && visible && !document.hidden && !reduced.matches) frame=requestAnimationFrame(draw) }
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
