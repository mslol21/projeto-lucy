# Implementação CRO — Novembro Azul 2026

Componentes novos:
- `ShareActions`: CTA de compartilhamento no header desktop e barra fixa mobile.
- `FasciaConnectionSection`: informações de cuidado corporal e reabilitação com linguagem cautelosa.
- `BodyAwarenessChecklist`: registro **local** de observações, sem persistência de dados de saúde; download .txt e compartilhamento opcional.
- `GuideLeadCard`: formulário de solicitação do guia, sem coletar dados clínicos.
- `ReadingIndex`: índice lateral em desktop, com IntersectionObserver.

## Integração do formulário

Configurar a variável de ambiente **server-side** `GUIDE_LEAD_WEBHOOK_URL` em um provedor HTTPS confiável. O endpoint POST `/api/guia` valida nome, contato, consentimento e encaminha apenas os dados necessários ao webhook. Sem o webhook, retorna HTTP 503 e exibe mensagem transparente; não há sucesso simulado.

**Atenção:** a automação do webhook precisa realmente disponibilizar o PDF e realizar o envio ao contato antes de divulgar o formulário. Nenhum PDF é enviado diretamente pelo código atual. É necessário também publicar aviso de privacidade identificando controlador, finalidade, retenção, direitos do titular e canal de contato, além de prever antispam/rate limiting no provedor antes do lançamento.

## Validação obrigatória

```bash
npm ci
npm run lint
npx tsc --noEmit
npm run build
```

Testar no navegador (mobile, desktop, navegação por teclado, leitores de tela e redirecionamento do WhatsApp). Validar conteúdo clínico com a responsável antes da publicação.

## Limites de saúde

O checklist não fornece diagnósticos, scores de risco, recomendações de exames individuais nem envia respostas ao servidor. As alegações sobre fasciaterapia evitam afirmar eficácia comprovada para neuropatia diabética ou câncer de próstata.
