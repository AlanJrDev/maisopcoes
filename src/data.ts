export const business = { name: 'Mais Opções Comunicação Visual', whatsapp: '5561994117588', displayPhone: '(61) 99411-7588' }
export const services = [
  { title: 'Fachadas que fazem parar.', short: 'Fachadas comerciais', category: 'Fachadas', image: 'bela-forma', description: 'O primeiro contato com a sua marca começa do lado de fora. Dê presença à sua loja com uma comunicação feita para o seu espaço.', tags: 'FACHADAS · IDENTIDADE · COMUNICAÇÃO EXTERNA' },
  { title: 'Sua marca em movimento.', short: 'Plotagem de veículos', category: 'Plotagem', image: 'nuty-frota', description: 'Transforme carros, caminhões e frotas em uma extensão da sua marca. Sua empresa presente por onde passar.', tags: 'VEÍCULOS · CAMINHÕES · FROTAS' },
  { title: 'Cada superfície, uma possibilidade.', short: 'Adesivos e impressão', category: 'Adesivos', image: 'vaneide-fachada', description: 'Vitrines, paredes e materiais impressos com cores e aplicações que respeitam a personalidade do seu negócio.', tags: 'ADESIVOS · VITRINES · IMPRESSÃO' },
  { title: 'Volume para a sua identidade.', short: 'Letras e materiais', category: 'Letras', image: 'terraplan', description: 'Letras caixa, luminosos e soluções em ACM, acrílico e PVC. Vamos escolher a aplicação que valoriza o seu projeto.', tags: 'LETRAS CAIXA · LUMINOSOS · ACM · PVC' }
]
export const projects = [
  { name:'Nuty & Boozy', type:'Plotagem de caminhão', category:'Plotagem', image:'nuty-frota', alt:'Caminhão com plotagem colorida para Nuty e Boozy' },
  { name:'Bela Forma', type:'Comunicação de fachada', category:'Fachadas', image:'bela-forma', alt:'Fachada e vitrines personalizadas da loja Bela Forma' },
  { name:'Vaneide Sousa Estúdio', type:'Adesivação de vitrine', category:'Adesivos', image:'vaneide-detalhe', alt:'Adesivos de vitrine em tons suaves para Vaneide Sousa Estúdio' },
  { name:'Terraplan Engenharia', type:'Letras e identificação', category:'Letras', image:'terraplan', alt:'Identificação em letras com volume aplicada no vidro da Terraplan Engenharia' },
  { name:'Burjack Brand', type:'Identidade no ponto de venda', category:'Adesivos', image:'burjack', alt:'Painel e faixas adesivas na entrada da loja Burjack Brand' },
  { name:'W Center', type:'Comunicação em vidro', category:'Fachadas', image:'w-center', alt:'Comunicação visual em vidro na entrada do W Center' }
]
export function whatsappUrl(message: string) { return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}` }
