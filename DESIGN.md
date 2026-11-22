---
name: Mais Opções Comunicação Visual
description: Identidade cromada, hero tipográfico e fitas LED na paleta da marca.
colors:
  background: "#0b0c10"
  hero-background: "#080b12"
  hero-copy: "#c4c9d5"
  hero-assurance: "#aeb6c9"
  foreground: "#f5f5f5"
  yellow: "#ffc107"
  blue: "#0084ff"
  pink: "#ff008f"
  muted: "#b9bbc4"
  line: "#ffffff20"
  service-surface: "#111217"
  section-surface: "#101116"
  difference-surface: "#15161c"
  contact-surface: "#111218"
  form-surface: "#1b1c23"
typography:
  display:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "clamp(58px, 6.1vw, 90px)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  impact:
    fontFamily: "Orbitron, sans-serif"
    fontSize: "1.19em"
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "clamp(32px, 3.5vw, 49px)"
    fontWeight: 750
    lineHeight: 1.18
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.9
rounded:
  category: "3px"
  field: "4px"
  action: "5px"
  card: "8px"
spacing:
  field-gap: "18px"
  card-padding: "28px"
  service-gap: "32px"
  section: "110px"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.yellow}"
    rounded: "{rounded.action}"
    padding: "16px 24px"
  field:
    backgroundColor: "{colors.contact-surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.field}"
    padding: "13px 12px"
  service-card:
    backgroundColor: "{colors.service-surface}"
    rounded: "{rounded.card}"
  filter-active:
    backgroundColor: "transparent"
    textColor: "{colors.yellow}"
    rounded: "{rounded.field}"
    padding: "10px 19px"
  nav-contact:
    rounded: "{rounded.action}"
    padding: "13px 20px"
---

# Design System: Mais Opções Comunicação Visual

## Overview

**Creative North Star: "Luz e material da própria marca"**

O site apresenta o estúdio com superfícies grafite, logo original cromada e luz diagonal azul, magenta e amarela. O hero é tipográfico e centralizado, sem fotografia, com fitas LED segmentadas ao fundo. Fotografias reais fornecidas pelo cliente sustentam serviços e portfólio.

Montserrat organiza títulos e leitura; Orbitron marca o impacto. Ações vazadas revelam preenchimento amarelo na interação. A composição assimétrica de serviços permanece no desktop, com leitura em coluna nas telas menores. Conteúdo e navegação permanecem disponíveis com movimento reduzido.

**Key Characteristics:**
- Logo cromada original e paleta do cliente preservadas.
- Hero centralizado sem foto, com fitas LED segmentadas.
- Ações vazadas com preenchimento amarelo na interação.
- Serviços assimétricos no desktop e em coluna até 700px.
- Rolagem suave para roda, toque nativo e movimento reduzido.

## Colors

A identidade preserva azul #0084FF, magenta #FF008F, amarelo #FFC107 e grafite #1A1A1A do branding.jpeg. A UI usa fundo #0B0C10 e superfícies tonais extraídas do CSS, sem substituir a marca original.

O hero usa #080B12, texto descritivo #C4C9D5 e garantias #AEB6C9. Gradientes de azul e magenta, trama LED de 7px e shader com opacidade .95 formam a atmosfera. Amarelo orienta contornos, foco, filtros ativos e preenchimento de ações. A descrição dos tokens considera src/refinements.css, importado depois de src/styles.css.

## Typography

Montserrat é a família editorial; Orbitron, com fallback sans-serif, aparece no impacto do hero, faixa de serviços e etapas. O h1 central usa clamp(58px, 6.1vw, 90px), peso 800, entrelinha 1.08 e tracking -.04em; o impacto mede 1.19em com entrelinha 1.16. Duas linhas no desktop passam a três até 700px.

O h1 adapta-se em 1100px e 900px. Até 700px usa clamp(48px, 8.8vw, 62px), com impacto 1.14em; até 480px usa clamp(43px, 12vw, 57px), impacto 1.16em; até 359px mede 42px. Descrição do hero permanece 16px com entrelinha 1.9, ou 1.85 até 480px.

Títulos de seção mantêm Montserrat 750, com escalas responsivas. Textos comerciais passam a 16px até 700px, enquanto processo usa 14px. Campos usam 16px até 700px. Metadados de portfólio medem 12px até 700px e 13px até 480px.

## Layout

Container central: min(1320px, calc(100% - clamp(40px, 7vw, 104px))). Até 480px usa calc(100% - 40px); até 359px, calc(100% - 32px). O layout foi verificado a partir de 320px sem overflow horizontal.

Cabeçalho sempre fixo, com 90px; 80px até 900px e 78px até 480px. Menu recolhido até 900px, aberto em lista vertical. Âncoras respeitam scroll-padding-top de 100px.

Hero sem coluna de imagem: cópia central de até 1100px, descrição de até 560px e ações centralizadas. Altura e padding respondem à viewport; até 480px ações se empilham e ocupam toda a largura disponível.

Serviços preservam duas colunas assimétricas no desktop, com deslocamento de 45px nos cartões 1 e 3; até 700px ficam em uma coluna sem deslocamento. Portfólio usa três colunas no desktop, duas até 900px e uma até 480px. Sobre e contato passam a uma coluna até 700px. Processo usa duas colunas até 900px e uma até 359px. Seções usam 70px verticais até 700px e 60px até 480px.

## Elevation & Depth

A profundidade vem das superfícies grafite, bordas translúcidas, luz diagonal e fotografias dos projetos. Hero não usa showcase fotográfico ou marca flutuante. Cabeçalho fixo usa fundo #0b0c1040 e blur de 14px; o estado rolado mantém 90px no desktop e herda a camada escura do CSS base. Botões não têm brilho metálico ou sombra decorativa; WhatsApp flutuante conserva sombra 0 7px 24px #0007. Lightbox usa backdrop escuro com blur de 8px.

## Shapes

Cantos discretos: campos e filtros 4px, ações principais 5px, cartões e lightbox 8px. Categorias usam 3px. Ações de serviço têm raio 4px e altura mínima 46px. Expansão, fechamento e WhatsApp são circulares. No mobile estreito, expansão mede 42px e WhatsApp 52px. Preservar as proporções da logo original.

## Components

- **Ações vazadas:** fundo transparente e contorno amarelo; primária com padding 16px 24px, altura mínima 54px, peso 700. Pseudo-elemento preenche de baixo para cima via scaleY em 250ms, com cubic-bezier(.23,1,.32,1), no hover de ponteiro fino, foco e pressão. Texto preenchido usa #141108. Pressão usa scale(.98); hover sobe 1px. Secundárias usam contorno claro. O antigo brilho metálico está oculto.
- **Filtros:** ativo com fundo transparente, contorno e texto amarelos. Hover de ponteiro fino preenche amarelo em 250ms. Altura mínima 44px. Filtros quebram linha.
- **Serviços e portfólio:** fotografias reais com recortes próprios; transição de escala de 650ms e filtro de 450ms. O wipe antigo foi desativado. Hover de imagem é neutralizado em dispositivos sem hover. Lightbox preserva object-fit contain e fechamento acessível.
- **Orçamento:** campos escuros, foco amarelo, preparação e prévia da mensagem para WhatsApp e opção de cópia. Não implica envio por servidor. Conteúdo comercial e destino de contato permanecem preservados.
- **Navegação:** menu com opacidade em 200ms e deslocamento em 250ms. Foco global usa outline amarelo de 2px com offset 6px. Controle de menu tem área mínima 46px; links mobile, 48px.
- **Rolagem:** Lenis usa smoothWheel, lerp .1, autoRaf, autoToggle e anchors. Toque permanece nativo (syncTouch false); dialog, textarea, select e data-native-scroll preservam rolagem nativa. Navegação interrompe inércia. Movimento reduzido destrói a instância e usa comportamento nativo. Modal bloqueia overflow, com autoToggle coordenando a pausa.
- **LED:** shader de fitas azul, magenta e amarelo, com diodos segmentados. Fase usa time × .46. Renderização por requestAnimationFrame sem limitador de 30fps; delta é limitado a .05s. Pixel ratio limitado a 1.25 abaixo de 700px e 1.5 nas demais larguras. Pausa fora do viewport, em aba oculta e sob movimento reduzido; recursos são liberados no desmontar.
- **Movimento:** --motion-fast 160ms, --motion-ui 250ms, --ease-out cubic-bezier(.23,1,.32,1), --ease-in-out cubic-bezier(.77,0,.175,1). Marquee usa 36s. Movimento reduzido desativa animações/transições e shader; estados de ação continuam perceptíveis por cor e preenchimento estáticos.

## Do's and Don'ts

### Do
- Do preservar logo cromada, conteúdo comercial e paleta do cliente.
- Do manter o hero centralizado e sem foto, com LED decorativo ao fundo.
- Do usar ações vazadas com preenchimento amarelo nos estados interativos.
- Do respeitar toque nativo, foco visível e preferência de movimento reduzido.
- Do usar somente projetos reais fornecidos e preservar seus recortes.

### Don't
- Don't restaurar o showcase fotográfico ou brilho metálico antigo no hero.
- Don't inventar contatos, depoimentos, estatísticas, certificações ou projetos.
- Don't atribuir fotos a serviços que elas não demonstram.
- Don't espalhar neon indiscriminadamente ou fixar WebGL sobre o conteúdo.
- Don't depender de animação para leitura ou navegação.
