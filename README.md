# Mais Opções — Comunicação Visual

Landing page React + TypeScript + Vite. O branding fornecido é a referência visual: logo original, azul, magenta, amarelo e grafite. Fotos do próprio acervo, sem banco de imagens.

## Executar
`npm install`

`npm run dev`

`npm run build`

O build estático sai em `dist/`. `src/components/ui` contém o shader LED e o botão vazado com preenchimento reversível. `components.json` configura os aliases compatíveis com shadcn/ui, e o Tailwind 4 está ligado via Vite. Os estilos base estão em `src/styles.css`; os ajustes de movimento e responsividade estão em `src/refinements.css`.

## Conteúdo comercial
Editar `src/data.ts` para alterar o WhatsApp, serviços e projetos. Número confirmado pelo cliente: `(61) 99411-7588`. Cidade, endereço e Instagram não foram fornecidos e não foram inventados.

O formulário monta uma mensagem localmente. A pessoa revisa e continua no WhatsApp; nenhum dado é armazenado pelo site. Galeria com filtros, diálogo nativo com Escape e retorno de foco, navegação mobile e CTAs de serviço conectados ao seletor de orçamento.

## Movimento
Hero sem fotografia, com trilhas LED azul, magenta e amarelo em Three.js. GSAP cuida da entrada do título e de transições discretas no conteúdo. Lenis suaviza a roda do mouse e as âncoras; gestos touch e teclado usam rolagem nativa. A configuração de movimento reduzido desliga o shader e a suavização, e o shader pausa fora de tela/aba oculta.

Botões transparentes com contorno recebem preenchimento no hover, no foco do teclado e ao pressionar. O menu compacto começa em 900px; serviços ficam em uma coluna até 700px, e projetos até 480px. Campos mantêm 16px em telas pequenas.

## Hospedagem
`vercel.json` configura Vite, build e saída `dist`. O projeto deve ser importado pela raiz deste repositório. Repositório: https://github.com/AlanJrDev/maisopcoes. A configuração anterior do Sites é preservada em `.openai/hosting.json`; esta revisão tem a Vercel como destino de publicação.
