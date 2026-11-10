# Novembro Azul 2026 — Escola de Fasciaterapia e Movimento

Landing page educativa e institucional desenvolvida para a campanha **Novembro Azul 2026** da **Escola de Fasciaterapia e Movimento**, sob liderança da profissional **Lucy Aihara** (Fisioterapeuta, Educadora Física e Fasciaterapeuta).

> **Slogan:** *"Informar também é uma forma de cuidar."*  
> **Mensagem Central:** *"Cuidar de si é também aprender a se conhecer."*  
> **Datas Centrais:** 14 de Novembro (Dia Mundial do Diabetes) e 17 de Novembro (Dia Nacional de Combate ao Câncer de Próstata).

---

## 1. Visão Geral e Princípios Editoriais

A campanha foi desenhada com perfil estritamente **educativo, acolhedor e institucional**, afastando-se de abordagens comerciais agressivas ou alarmistas:
- **Rigor com Evidências Oficiais:** Informações alinhadas às diretrizes do **Instituto Nacional de Câncer (INCA)**, do **Ministério da Saúde** e da **Sociedade Brasileira de Diabetes (SBD)**.
- **Decisão Compartilhada em Saúde Masculina:** Respeito integral à orientação do INCA, esclarecendo os benefícios e riscos do rastreamento em homens assintomáticos, sem impor PSA ou toque retal anuais como regra universal cega.
- **Conexão Somática Ética:** Apresentação da percepção corporal, movimento consciente e das fáscias como promotores de bem-estar e presença somática, com disclaimer explícito de que não substituem diagnóstico médico nem curam o diabetes ou o câncer.
- **Sem exposição em vídeo:** Desenvolvido integralmente em formato editorial estático, interativo e acessível, respeitando a premissa de ausência de gravações ou lives da cliente.

---

## 2. Identidade Visual & Design System

- **Paleta Oficial:**
  - `Azul Profundo`: `#17385B` (Autoridade, sobriedade e contraste institucional)
  - `Azul Suave`: `#84B7CE` (Acolhimento, serenidade e toques sutis)
  - `Marfim`: `#F5F2EB` (Fundo quente, suave e confortável para leitura prolongada)
  - `Verde Sálvia`: `#C7D9D2` (Vitalidade, saúde integrativa e equilíbrio)
- **Tipografia:**
  - Títulos: **Lora** (Serifada elegante, calorosa e com peso editorial humano)
  - Textos & UI: **Inter** (Alta legibilidade geométrica e clareza na escala tipográfica)
- **Design Elements:**
  - Formas orgânicas em SVG inspiradas nas redes fasciais e no movimento fluido corporal.
  - Cartões com elevação mínima (`shadow-xs`), bordas translúcidas e suporte total ao `prefers-reduced-motion`.

---

## 3. Arquitetura da Aplicação

```
lucy_aihara/
├── src/
│   ├── app/
│   │   ├── globals.css         # Variáveis de cor, tipografia e reset acessível
│   │   ├── layout.tsx          # Layout raiz, fontes Lora/Inter, OpenGraph, JSON-LD
│   │   ├── page.tsx            # Composição modular de todas as seções
│   │   ├── robots.ts           # Robots.txt dinâmico do Next.js
│   │   └── sitemap.ts          # Sitemap.xml dinâmico com canonical
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Barra de navegação acolhedora e responsiva
│   │   │   └── Footer.tsx      # Rodapé institucional, links oficiais e aviso ético
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx           # Seção 1: Eyebrow, H1, acolhimento e CTAs
│   │   │   ├── DatesPurposeSection.tsx   # Seção 2: Duas Datas, Um Propósito (14/11 e 17/11)
│   │   │   ├── DiabetesSection.tsx       # Seção 3: O que é DM, Tipo 1 x 2, 4 Ps, acolhimento
│   │   │   ├── MenHealthSection.tsx      # Seção 4: Próstata, sintomas e decisão compartilhada INCA
│   │   │   ├── BodyAwarenessSection.tsx  # Seção 5: Percepção corporal, fáscia e compromisso ético
│   │   │   ├── FaqSection.tsx            # Seção 6: Mitos e Verdades em Accordion acessível
│   │   │   ├── ShareSection.tsx          # Seção 7: Citação, cópia com feedback e WhatsApp
│   │   │   └── ReferencesSection.tsx     # Seção 8: Portais oficiais (INCA, SBD, Ministério da Saúde)
│   │   └── ui/
│   │       ├── Accordion.tsx         # Acordeão interativo com WAI-ARIA
│   │       ├── Button.tsx            # Botões acessíveis com variantes
│   │       ├── SectionHeader.tsx     # Cabeçalhos consistentes por seção
│   │       └── OrganicBackground.tsx # Vetores orgânicos somáticos em SVG
│   ├── data/
│   │   └── campaign-data.ts    # Centralização editorial de textos, dados e referências
│   └── types/
│       └── lucide-react.d.ts   # Declarações TypeScript de ícones
├── next.config.ts              # Configuração Next.js
├── postcss.config.mjs          # Pipeline PostCSS com Tailwind CSS v4
├── package.json                # Dependências limpas, sem banco de dados nem serviços pagos
└── tsconfig.json               # TypeScript strict mode
```

---

## 4. Como Executar Localmente

### Pré-requisitos
- Node.js versão 18+ (recomendado 20 LTS)
- npm versão 9+

### Passos
1. Clone o repositório ou navegue até o diretório do projeto:
   ```bash
   cd lucy_aihara
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra no navegador em:
   [http://localhost:3000](http://localhost:3000)

---

## 5. Verificação e Qualidade de Código

Para validar a integridade técnica do projeto a qualquer momento:

- **Checagem de Tipos TypeScript (Strict):**
  ```bash
  npx tsc --noEmit
  ```
- **Build de Produção Otimizado:**
  ```bash
  npm run build
  ```

---

## 6. Preparação para Publicação na Vercel

O projeto foi configurado com arquitetura nativa Next.js App Router (SSG - Static Site Generation) e deploy com zero custo e sem serviços pagos:

1. Suba o código para o seu repositório Git (GitHub, GitLab ou Bitbucket).
2. Acesse [vercel.com](https://vercel.com) e clique em **Add New Project**.
3. Importe o repositório do projeto.
4. O Vercel detectará automaticamente as configurações de build do Next.js:
   - **Framework Preset:** `Next.js`
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`
5. Clique em **Deploy**. A página estará no ar com HTTPS automático e CDN global.

---

## 7. Acessibilidade (WCAG 2.2 AA) & SEO

- **Skip Link:** Atalho invisível para leitores de tela e usuários de teclado pularem direto para o conteúdo (`#conteudo-principal`).
- **Contraste de Cores:** Relação de contraste `#17385B` em `#F5F2EB` de **11.2:1**, ultrapassando a exigência WCAG AA (4.5:1) e AAA (7:1).
- **Semântica WAI-ARIA:** Botões e acordeões equipados com `aria-expanded`, `aria-controls` e navegação total via teclado (`Tab`, `Enter`, `Space`).
- **SEO Estruturado:** Metatags completas, OpenGraph, Twitter Cards, `robots.txt`, `sitemap.xml` e Schema.org (`Organization` e `WebPage`) apenas com os dados institucionais oficiais de Lucy Aihara e da Escola.
