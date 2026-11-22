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
