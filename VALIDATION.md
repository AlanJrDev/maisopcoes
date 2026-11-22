# Validação — 22/11/2026

- `npm run build`: TypeScript e Vite concluídos com código 0 após a última alteração funcional.
- Navegador: layout inspecionado em 1280, 1440 e 390px; nenhuma rolagem horizontal nas medições de 1440 e 390px.
- Console: sem erros ou avisos na sessão inspecionada.
- Galeria: filtro Plotagem retornou um projeto; Todos restaurou seis; ampliação e fechamento com Escape verificados.
- Orçamento: CTA de plotagem selecionou o serviço correspondente. Formulário gerou mensagem escapada para `https://wa.me/5561994117588`.
- Edição posterior ao preparo: prévia passou de um link de continuação para zero, exigindo preparo da mensagem atualizada. Nenhuma mensagem foi enviada durante a validação.
- Imagens: capturas finais feitas após percorrer a página; todas as imagens completas com largura natural positiva.
- Capturas locais em `.qa/desktop.jpg`, `.qa/desktop-hero.jpg`, `.qa/mobile.jpg` e `.qa/mobile-hero.jpg`.
- Revisão independente: dois achados resolvidos (invalidação do rascunho e recaptura após lazy loading). Disposição final: ship, limitada aos achados revisados.

## Limites
Não foram medidos Core Web Vitals, desempenho em aparelho físico ou contraste automatizado. Redução de movimento, pausa e descarte do shader foram inspecionados no código; não houve teste de hardware WebGL em múltiplos dispositivos. A existência de uma conta WhatsApp no número confirmado não foi verificada por envio de mensagem.

## Revisão LED, botões e responsividade

- Hero sem imagens confirmado no DOM (`.hero img`: zero). Botão principal com fundo transparente e texto amarelo em repouso; preenchimento total e texto escuro confirmados por foco do teclado.
- Nova versão medida em 1440, 768, 390 e 320px sem rolagem horizontal. Menu compacto disponível em tablet; serviços em uma coluna até 700px e projetos até 480px.
- Lenis ativo. Offset de âncora medido em aproximadamente 100px, consistente com a altura do cabeçalho. Toque permanece nativo.
- Galeria: Plotagem retorna um projeto, Todos retorna seis; diálogo fecha por Escape. Com diálogo aberto, tentativa de rolar o fundo manteve scrollY em 4531.
- Formulário: URL gerada para o número confirmado; editar o nome invalida a prévia. Nenhuma mensagem enviada.
- Console sem erros ou avisos nos testes. Fotos carregadas após percorrer a página.
- Capturas desta revisão: `.qa/v2/`. Evidências por região em desktop, tablet e celular; captura de página inteira indisponível nesta sessão.
- Revisão independente identificou e corrigiu falta de preenchimento de foco em dois controles no modo de movimento reduzido. Esse modo foi inspecionado no código, sem alteração de configuração do sistema.
