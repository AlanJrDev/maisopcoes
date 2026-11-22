# Mais Opções — Comunicação Visual

Landing page React + TypeScript + Vite. O branding fornecido é a referência visual: logo original, azul, magenta, amarelo e grafite. Fotos do próprio acervo, sem banco de imagens.

## Executar
`npm install`

`npm run dev`

`npm run build`

O build estático sai em `dist/`. `src/components/ui` contém as adaptações do shader WebGL e do botão metálico fornecidos. `components.json` configura os aliases compatíveis com shadcn/ui, e o Tailwind 4 está ligado via Vite. Os estilos autorais estão em `src/styles.css`.

## Conteúdo comercial
Editar `src/data.ts` para alterar o WhatsApp, serviços e projetos. Número confirmado pelo cliente: `(61) 99411-7588`. Cidade, endereço e Instagram não foram fornecidos e não foram inventados.

O formulário monta uma mensagem localmente. A pessoa revisa e continua no WhatsApp; nenhum dado é armazenado pelo site. Galeria com filtros, diálogo nativo com Escape e retorno de foco, navegação mobile e CTAs de serviço conectados ao seletor de orçamento.

## Movimento
Coreografia baseada na abordagem HyperFrames: layout final primeiro e movimento depois. GSAP na abertura; Three.js no shader; faixas e luzes na paleta do cliente. Não foi solicitado nem renderizado vídeo MP4. Redução de movimento mantém conteúdo estático, e o shader pausa fora de tela/aba oculta.

## Hospedagem
`.openai/hosting.json` vincula esta pasta ao Site criado para esta solicitação. O pacote estático requer build validado antes da publicação.
