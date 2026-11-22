---
name: Mais Opções Comunicação Visual
description: Identidade cromada, luz diagonal e projetos reais.
colors:
  background: "#0b0c10"
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
    fontSize: "clamp(52px, 5.3vw, 82px)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  impact:
    fontFamily: "Orbitron, sans-serif"
    fontSize: "1.15em"
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
  showcase: "9px"
spacing:
  field-gap: "18px"
  card-padding: "28px"
  service-gap: "32px"
  hero-gap: "40px"
  section: "110px"
components:
  button-primary:
    backgroundColor: "linear-gradient(175deg, #ffdc48 0%, #ffc107 45%, #ecab00 100%)"
    textColor: "#15120a"
    rounded: "{rounded.action}"
    padding: "16px 21px"
  field:
    backgroundColor: "{colors.contact-surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.field}"
    padding: "13px 12px"
  service-card:
    backgroundColor: "{colors.service-surface}"
    rounded: "{rounded.card}"
  filter-active:
    backgroundColor: "{colors.yellow}"
    textColor: "#181306"
    rounded: "{rounded.field}"
    padding: "10px 19px"
  nav-contact:
    rounded: "{rounded.action}"
    padding: "13px 20px"
---

# Design System: Mais Opções Comunicação Visual

## Overview

**Creative North Star: "Luz e material da própria marca"**

O site apresenta o estúdio por meio de superfícies grafite, logo original cromada, luz diagonal e fotografias reais dos trabalhos fornecidos pelo cliente. A direção cinematográfica do hero dá presença ao material; a composição editorial assimétrica organiza serviços e evidências comerciais.

Orbitron marca palavras de impacto, enquanto Montserrat sustenta títulos e leitura. O amarelo conduz ações, e azul e magenta aparecem como luz, faixas e detalhes da identidade. Conteúdo permanece legível sem animação.

**Key Characteristics:**
- Logo cromada original e acentos da identidade do cliente.
- Hero com luz diagonal e fotografia de projeto real.
- CTAs amarelos com acabamento metálico e texto escuro.
- Serviços assimétricos no desktop e em coluna no mobile.
- Movimento decorativo com alternativa de movimento reduzido.

## Colors

A paleta combina fundo quase preto com o trio saturado do branding.jpeg. Os tokens de interface estão no frontmatter, extraídos de src/styles.css. Amarelo orienta ações, filtros ativos, ícones, links e foco. Azul e magenta aparecem em faixas diagonais, pontos da marca e iluminação ambiente. Branco suave e cinza secundário sustentam leitura.

O grafite #1A1A1A pertence à identidade do cliente. A interface entregue usa as superfícies específicas listadas no frontmatter, sobre fundo #0B0C10.

## Typography

Montserrat, com fallback sans-serif, é a família de leitura e de títulos editoriais. Orbitron, com fallback sans-serif, aparece no impacto do hero, faixa de serviços, números do processo e detalhes da marca. Preservar a logo como imagem original.

O hero usa peso 800 e entrelinha 1.08; a palavra Orbitron mede 1.15em no desktop. Títulos de seção usam peso 750 e entrelinha 1.18. Títulos de serviço usam 24px, peso 650 e entrelinha 1.3. Corpo comercial principal: 16px; descrições de serviço, valores e processo: 14px no desktop. Até 800px, parte do texto principal mede 14px; até 600px, os textos comerciais voltam a 16px. Metadados e notas usam 11px.

No mobile, h1 usa clamp(50px, 13.5vw, 76px) e impacto 1.1em. Inputs, select e textarea usam 16px até 600px. Tracking aberto fica restrito a metadados e sinalização.

## Layout

Container central de no máximo 1320px, com largura calc(100% - 104px). Margem lateral de 32px até 1100px e 20px até 800px. Seções usam 110px verticais, reduzidos a 85px, 75px e 65px nos limites de 1100px, 800px e 600px.

Hero em duas colunas 1.04fr/1fr, gap 40px. Até 600px, vira uma coluna e empilha ações. Serviços usam 1.15fr/1fr, gap 32px; cartões 1 e 3 deslocam 45px verticalmente, com padding inferior compensatório na grade. Até 600px, todos ficam em uma coluna sem deslocamento.

Portfólio tem três colunas no desktop e duas até 600px; o projeto de frota ocupa toda a largura no mobile. Sobre e contato passam a uma coluna até 600px. Processo passa de quatro a duas colunas. Filtros quebram linha. Navegação mobile abre lista vertical até 600px. Cabeçalho torna-se fixo ao rolar. Há ajuste adicional do hero a partir de 1600px.

## Elevation & Depth

Superfícies tonais, bordas brancas translúcidas, iluminação ambiente, gradientes e fotografias criam profundidade. Showcase gira -3 graus no desktop e -2 graus no mobile, com sombra 8px 24px 70px #0008. Marca flutuante gira 6 graus e usa 0 14px 30px #0008. Botão combina brilho interno e sombra baixa; cabeçalho rolado usa blur de 16px. Lightbox escurece o fundo e aplica blur de 8px.

## Shapes

Geometria retangular com cantos discretos: categorias 3px, campos e filtros 4px, ações 5px, cartões e lightbox 8px, showcase 9px. Serviços usam 6px no mobile. Expansão, fechamento e WhatsApp são circulares. Faixas diagonais e inclinações retomam a identidade sem deformar a logo.

## Components

- **Botão principal:** gradiente amarelo metálico, texto escuro, peso 800, altura mínima 53px. Hover sobe 2px e altera sombra em 180ms; active desce 1px. Brilho atravessa em 700ms.
- **Navegação e links:** sublinhado amarelo no hover e contato em contorno. Foco visível global: outline amarelo de 2px, offset 6px.
- **Serviços:** imagem real com recorte próprio, categoria sobreposta, metadados, título, descrição e link amarelo. Hover amplia imagem a 1.04 e revela luz azul sutil; wipe dura 900ms.
- **Portfólio:** filtros com ativo amarelo, imagem ampliável e legenda. Hover amplia foto a 1.045; lightbox usa object-fit contain e fechamento de 44px.
- **Orçamento:** campos escuros com foco amarelo, formulário em superfície elevada, prévia da mensagem e ações de WhatsApp/cópia. Prepara orçamento pelo WhatsApp; não implica envio por servidor.
- **Movimento:** marquee linear de 45s, pausado no hover; imagens com transições de 700–800ms. Em prefers-reduced-motion: reduce, animações e transições são desativadas, scroll fica automático e shader é ocultado. Conteúdo não depende do movimento.

## Do's and Don'ts

### Do
- Do preservar a logo original cromada e o trio azul, magenta e amarelo do cliente.
- Do usar fotos reais fornecidas e respeitar os recortes específicos dos projetos.
- Do reservar amarelo para ações, foco e detalhes de orientação.
- Do manter serviços assimétricos no desktop e alinhados em coluna no mobile.
- Do preservar foco visível, leitura estática e movimento reduzido.

### Don't
- Don't redesenhar a logo ou substituir a identidade por uma marca genérica.
- Don't inventar contatos, depoimentos, estatísticas, certificações ou projetos.
- Don't atribuir fotos a serviços que elas não demonstram.
- Don't espalhar neon indiscriminadamente ou fixar WebGL sobre o conteúdo.
- Don't depender de animação para leitura ou navegação.
