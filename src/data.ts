export const business = { name: 'Mais Opções Comunicação Visual', whatsapp: '5561994117588', displayPhone: '(61) 99411-7588' }
export const services = [
  { title: 'Fachadas que fazem parar.', short: 'Fachadas comerciais', category: 'Fachadas', image: 'w-center-fachada', description: 'O primeiro contato com a sua marca começa do lado de fora. Dê presença à sua loja com uma comunicação feita para o seu espaço.', tags: 'FACHADAS · IDENTIDADE · COMUNICAÇÃO EXTERNA' },
  { title: 'Sua marca em movimento.', short: 'Plotagem de veículos', category: 'Plotagem', image: 'nuty-frota', description: 'Transforme carros, caminhões e frotas em uma extensão da sua marca. Sua empresa presente por onde passar.', tags: 'VEÍCULOS · CAMINHÕES · FROTAS' },
  { title: 'Cada superfície, uma possibilidade.', short: 'Adesivos e impressão', category: 'Adesivos', image: 'vaneide-fachada', description: 'Vitrines, paredes e materiais impressos com cores e aplicações que respeitam a personalidade do seu negócio.', tags: 'ADESIVOS · VITRINES · IMPRESSÃO' },
  { title: 'Volume para a sua identidade.', short: 'Letras em PVC expandido, acrílico e ACM', category: 'PVC, acrílico e ACM', image: 'casa-royal-letras', description: 'Letras e logos personalizados em PVC expandido, acrílico e ACM. Escolhemos com você o material e o acabamento adequados à aplicação.', tags: 'PVC EXPANDIDO · ACRÍLICO · ACM' },
  { title: 'Sua marca também brilha.', short: 'Letras e fachadas luminosas', category: 'Luminosos', image: 'nuty-luminoso', description: 'Letras e fachadas com iluminação para dar presença à sua marca também à noite. Uma solução pensada para o seu ponto comercial.', tags: 'LETRAS · FACHADAS · ILUMINAÇÃO' }
]
export const projects = [
  { name:'Nuty & Boozy', type:'Plotagem de caminhão', category:'Plotagem', image:'nuty-frota', alt:'Caminhão com plotagem colorida para Nuty e Boozy' },
  { name:'W Center Shopping', type:'Comunicação de fachada', category:'Fachadas', image:'w-center-fachada', alt:'Fachada do W Center Shopping com identidade e painéis de comunicação visual' },
  { name:'Vaneide Sousa Estúdio', type:'Adesivação de vitrine', category:'Adesivos', image:'vaneide-detalhe', alt:'Adesivos de vitrine em tons suaves para Vaneide Sousa Estúdio' },
  { name:'Casa Royal Decor', type:'Letras e logo recortados', category:'PVC, acrílico e ACM', image:'casa-royal-letras', alt:'Logo e letras pretas da Casa Royal Decor aplicadas em parede clara' },
  { name:'Atacadão da Nuty', type:'Fachada e letras iluminadas', category:'Luminosos', image:'nuty-luminoso', alt:'Fachada do Atacadão da Nuty com logo iluminada durante a noite' }
]
export function whatsappUrl(message: string) { return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}` }
