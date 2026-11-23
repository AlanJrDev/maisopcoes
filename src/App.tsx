import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import type { FormEvent } from 'react'
import { gsap } from 'gsap'
import { Menu, X, Plus, Check, Layers, Zap, Handshake, ChevronDown, Maximize2, Copy, CheckCheck } from 'lucide-react'
import { WhatsAppIcon } from './components/ui/whatsapp-icon'
import { MetalButton } from './components/ui/metal-button'
import { business, projects, services, whatsappUrl } from './data'
import { useSmoothScroll } from './hooks/use-smooth-scroll'
import { useScrollReveal } from './hooks/use-scroll-reveal'
const Shader = lazy(() => import('./components/ui/web-gl-shader').then(m=>({default:m.WebGLShader})))

function Brand({large=false}: {large?:boolean}) { return <a className={`brand ${large?'brand-large':''}`} href="#inicio" aria-label="Mais Opções — início"><img src="/images/logo.png" alt="Mais Opções" width="240" height="80"/>{large && <span>COMUNICAÇÃO VISUAL</span>}</a> }

export default function App() {
  const [menu, setMenu] = useState(false)
  const [filter, setFilter] = useState('Todos')
  const [selected, setSelected] = useState<(typeof projects)[number]|null>(null)
  const [service, setService] = useState('Fachadas comerciais')
  const [draft, setDraft] = useState('')
  const [copied,setCopied] = useState(false)
  const [scrolled,setScrolled] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const lastTrigger=useRef<HTMLElement|null>(null)
  const scrollTo = useSmoothScroll()
  useScrollReveal(root)
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY>30)
    window.addEventListener('scroll',scroll,{passive:true});scroll()
    const media=gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)',()=>{
      gsap.from('.hero-line',{y:24,opacity:0,duration:.8,stagger:.07,ease:'power3.out',clearProps:'transform,opacity'})
    },root)
    return()=>{window.removeEventListener('scroll',scroll);media.revert()}
  },[])
  useEffect(()=>{if(selected)dialog.current?.showModal();document.documentElement.classList.toggle('gallery-open',Boolean(selected));return()=>document.documentElement.classList.remove('gallery-open')},[selected])
  useEffect(()=>{if(!menu)return;const close=(e:KeyboardEvent)=>{if(e.key==='Escape')setMenu(false)};document.addEventListener('keydown',close);return()=>document.removeEventListener('keydown',close)},[menu])
  const closeProject=()=>{dialog.current?.close();setSelected(null);lastTrigger.current?.focus()}
  const chooseService=(value:string)=>{setService(value);setDraft('');scrollTo('#contato')}
  function submit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data=new FormData(event.currentTarget)
    const message=`Olá, Mais Opções! Sou ${data.get('name')}${data.get('company')?` da empresa ${data.get('company')}`:''}.\nTenho interesse em ${service}.\n${data.get('details')}\nPodemos conversar sobre um orçamento?`
    setDraft(message);setCopied(false)
  }
  return <div ref={root}>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className={`header ${scrolled?'scrolled':''}`}>
      <div className="container header-inner"><Brand/><nav id="main-navigation" className={menu?'nav open':'nav'} aria-label="Navegação principal"><a href="#servicos" onClick={()=>setMenu(false)}>Soluções</a><a href="#projetos" onClick={()=>setMenu(false)}>Projetos</a><a href="#sobre" onClick={()=>setMenu(false)}>A Mais Opções</a><a href="#contato" className="nav-contact outline-action" onClick={()=>setMenu(false)}>Vamos conversar <WhatsAppIcon size={16}/></a></nav><button className="menu-toggle" aria-label={menu?'Fechar menu':'Abrir menu'} aria-expanded={menu} aria-controls="main-navigation" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div>
    </header>
    <main id="conteudo">
      <section id="inicio" className="hero">
        <div className="hero-ambient" aria-hidden="true"/><Suspense fallback={null}><Shader/></Suspense>
        <div className="led-grid" aria-hidden="true"/><div className="container hero-grid"><div className="hero-copy">
          <div className="hero-label hero-line"><span className="color-bars" aria-hidden="true"><i/><i/><i/></span> CRIATIVIDADE QUE GANHA FORMA.</div>
          <h1><span className="hero-line">Sua marca</span><span className="hero-line">merece ser</span><span className="hero-line hero-impact">vista<span className="yellow">.</span></span></h1>
          <p className="hero-line hero-description">Da primeira impressão ao último detalhe.<br/>{' '}Comunicação visual para colocar o seu negócio <strong>em destaque.</strong></p>
          <div className="hero-actions hero-line"><MetalButton onClick={()=>chooseService('Fachadas comerciais')}><WhatsAppIcon size={19}/> Quero destacar minha marca</MetalButton><a className="text-link outline-action" href="#projetos">Explore os projetos <Plus size={17}/></a></div>
          <div className="hero-assurance hero-line"><Check size={15}/> Soluções personalizadas <span/> Da ideia à aplicação</div>
        </div>
        </div>
        <div className="container hero-bottom"><a href="#servicos"><span className="scroll-capsule"><ChevronDown size={16}/></span> Tem mais possibilidades abaixo</a><span>FACHADAS · PLOTAGEM · IMPRESSÃO</span></div>
      </section>
      <div className="marquee" aria-label="Fachadas, ACM, adesivos, plotagem, letras luminosas e impressão"><div className="marquee-track">{[0,1,2,3].map(i=><span key={i} aria-hidden={i>0}>FACHADAS <Plus/> PLOTAGEM <Plus/> ADESIVOS <Plus/> LUMINOSOS <Plus/> IMPRESSÃO <Plus/> ACM <Plus/></span>)}</div></div>

      <section id="servicos" className="section services container">
        <div className="section-heading"><h2>Mais presença.<br/><span>Mais possibilidades.</span></h2><div><p>A sua ideia pode ganhar a rua, a vitrine ou a cidade inteira. Encontre a solução que faz sentido para a sua marca.</p><a href="#contato" className="text-link">Me ajude a escolher <Plus size={17}/></a></div></div>
        <div className="service-grid">{services.map((s,i)=><article className={`service-card service-${i} image-reveal`} key={s.short} onPointerMove={e=>{const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--mouse-x',`${e.clientX-r.left}px`);e.currentTarget.style.setProperty('--mouse-y',`${e.clientY-r.top}px`)}}>
          <div className="service-image"><img src={`/images/${s.image}.jpg`} alt={s.short} loading="lazy" width="800" height="900"/><div className="service-image-shade"/><span className="service-category">{s.short}</span></div><div className="service-info"><span className="service-tags">{s.tags}</span><h3>{s.title}</h3><p>{s.description}</p><button className="text-link" onClick={()=>chooseService(s.short)}>Quero um orçamento <Plus size={18}/></button></div>
        </article>)}</div>
      </section>

      <section className="about section" id="sobre"><div className="container about-grid"><div className="about-graphic" aria-hidden="true"><div className="diagonal diagonal-blue"/><div className="diagonal diagonal-pink"/><div className="diagonal diagonal-yellow"/><img src="/images/logo.png" alt="" width="720" height="240"/><span>MAIS DO QUE VISUAL.<br/><b>É A SUA IDENTIDADE.</b></span></div><div className="about-copy"><h2>A sua ideia.<br/>A nossa <span className="yellow">energia.</span></h2><p>A Mais Opções conecta criatividade, materiais e aplicação para transformar ideias em comunicação visual.</p><p>Cada negócio tem uma personalidade. Nosso papel é dar forma a ela: na fachada, no veículo, na vitrine e nos detalhes que fazem a sua marca ser reconhecida.</p><a href="#contato" className="text-link">Vamos criar essa presença juntos <Plus size={18}/></a></div></div></section>

      <section id="projetos" className="section projects container"><div className="section-heading"><h2>Do projeto<br/>para o <span>mundo real.</span></h2><p>Ideias que ganharam cor, forma e espaço.<br/>Explore os trabalhos apresentados pela Mais Opções.</p></div>
        <div className="project-filters" role="group" aria-label="Filtrar projetos">{['Todos',...services.map(service=>service.category)].map(f=><button key={f} className={filter===f?'active':''} aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f}{filter===f&&<span/>}</button>)}</div>
        <div className="project-grid">{projects.filter(p=>filter==='Todos'||p.category===filter).map(p=><button className={`project project-${p.image}`} key={p.name} onClick={e=>{lastTrigger.current=e.currentTarget;setSelected(p)}} aria-label={`Ampliar projeto ${p.name}`}><div className="project-img"><img src={`/images/${p.image}.jpg`} alt={p.alt} loading="lazy" width="900" height="1000"/><span className="expand-icon"><Maximize2 size={20}/></span></div><div className="project-caption"><h3>{p.name}</h3><span>{p.type}</span></div></button>)}</div>
      </section>

      <section className="difference section"><div className="container"><div className="difference-title"><h2>O detalhe faz<br/><span className="yellow">a diferença.</span></h2><p>Uma marca bem apresentada começa com escolhas bem feitas.</p></div><div className="values">{[{icon:Layers,title:'Qualidade em cada detalhe',text:'Atenção aos materiais, às cores e ao acabamento de cada aplicação.'},{icon:Zap,title:'Agilidade no seu projeto',text:'Um atendimento direto para entender a sua necessidade e combinar cada etapa.'},{icon:Handshake,title:'Parceria que impulsiona',text:'Soluções pensadas com você, respeitando a identidade do seu negócio.'}].map(v=><div className="value" key={v.title}><v.icon size={32} strokeWidth={1.3}/><h3>{v.title}</h3><p>{v.text}</p></div>)}</div></div></section>

      <section className="process section container"><div className="section-heading"><h2>Da conversa<br/>ao <span>“ficou incrível”.</span></h2><p>Um caminho claro para tirar a sua ideia do papel.</p></div><ol className="process-list">{[{title:'Conte a sua ideia',text:'O que você quer comunicar? Onde a sua marca precisa aparecer?'},{title:'Encontre a solução',text:'Definimos materiais, medidas e aplicações para preparar o orçamento.'},{title:'Veja ganhar forma',text:'Com a proposta aprovada, seguimos para a produção do seu projeto.'},{title:'Coloque em destaque',text:'Entrega ou instalação conforme o serviço e as condições combinadas.'}].map((s,i)=><li key={s.title}><span className="step">{String(i+1).padStart(2,'0')}</span><h3>{s.title}</h3><p>{s.text}</p></li>)}</ol></section>

      <section id="contato" className="contact section"><div className="container contact-grid"><div className="contact-copy"><span className="color-bars" aria-hidden="true"><i/><i/><i/></span><h2>Vamos colocar<br/>sua ideia em<br/><span className="yellow">destaque?</span></h2><p>Conte um pouco sobre o seu projeto.<br/>A próxima grande impressão pode ser a sua.</p><a className="contact-phone" href={whatsappUrl('Olá! Quero conversar sobre um projeto de comunicação visual.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={24}/><span><small>FALE COM A MAIS OPÇÕES</small>{business.displayPhone}</span></a></div>
          <form className="quote-form" onSubmit={submit} onChange={()=>setDraft('')}><h3>Seu projeto começa aqui.</h3><p>Prepare sua mensagem e continue pelo WhatsApp.</p><div className="form-row"><label>Seu nome<input name="name" autoComplete="given-name" placeholder="Como podemos te chamar?" required maxLength={90}/></label><label>Empresa <span>(opcional)</span><input name="company" autoComplete="organization" placeholder="Nome do seu negócio" maxLength={120}/></label></div><label>O que você tem em mente?<div className="select-wrap"><select value={service} onChange={e=>{setService(e.target.value);setDraft('')}}>{services.map(s=><option key={s.short}>{s.short}</option>)}<option>Ainda preciso de orientação</option></select><ChevronDown size={18}/></div></label><label>Conte sua ideia<textarea name="details" rows={3} placeholder="Tipo de projeto, medidas aproximadas, local de aplicação..." required maxLength={2000}/></label><MetalButton type="submit"><WhatsAppIcon size={19}/> Preparar meu orçamento</MetalButton><small className="form-note">Sem envio automático. Você revisa a mensagem antes de conversar.</small>{draft&&<div className="message-preview" role="status"><strong>Sua mensagem está pronta.</strong><p className="draft-text">{draft}</p><div className="draft-actions"><a className="send-whatsapp" href={whatsappUrl(draft)} target="_blank" rel="noreferrer">Continuar no WhatsApp <WhatsAppIcon size={17}/></a><button type="button" className="copy-message" onClick={async()=>{try{await navigator.clipboard.writeText(draft);setCopied(true)}catch{setCopied(false)}}}>{copied?<CheckCheck size={17}/>:<Copy size={17}/>} {copied?'Copiado':'Copiar'}</button></div></div>}</form>
        </div></section>
    </main>
    <footer><div className="container footer-main"><Brand large/><p>Mais opções.<br/><strong>Mais possibilidades para o seu negócio.</strong></p><a href="#inicio" className="text-link">Voltar ao início <Plus size={17}/></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Mais Opções Comunicação Visual.</span><span>Sua ideia, em destaque!</span></div></footer>
    <a className="floating-whatsapp" href={whatsappUrl('Olá, Mais Opções! Gostaria de um orçamento.')} target="_blank" rel="noreferrer" aria-label="Conversar com a Mais Opções no WhatsApp"><WhatsAppIcon size={25}/><span>Vamos conversar?</span></a>
    <dialog ref={dialog} className="lightbox" onCancel={()=>{setSelected(null);lastTrigger.current?.focus()}} onClick={e=>{if(e.target===e.currentTarget)closeProject()}} onClose={()=>setSelected(null)}>{selected&&<div className="lightbox-content"><button className="close-dialog" onClick={closeProject} aria-label="Fechar imagem"><X/></button><img src={`/images/${selected.image}.jpg`} alt={selected.alt}/><div><h3>{selected.name}</h3><p>{selected.type}</p><button className="text-link" onClick={()=>{closeProject();chooseService(services.find(service=>service.category===selected.category)?.short ?? 'Ainda preciso de orientação')}}>Quero um projeto assim <Plus size={18}/></button></div></div>}</dialog>
  </div>
}
