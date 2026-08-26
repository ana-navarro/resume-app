# resume-app

## Papel no ecossistema (PT)

Frontend do Currículo Interativo. Conforme a Constitution Principle I
(`.specify/memory/constitution.md`), é o "frontend anêmico" do ecossistema — foca em UI, diagramação e
chat, sem regras de negócio próprias; toda a lógica vive nos serviços de backend, acessados via
`resume-bff`.

Componentes MUST usar `PascalCase` e a arquitetura do frontend MUST sempre priorizar componentização e
reutilização (Constitution Principle II).

## Status atual

Scaffold inicial gerado pelo Vite (template React + TypeScript) — ainda sem componentes, chamadas de API
ou telas específicas do Currículo Interativo implementadas.

## Stack

- React 19 + TypeScript
- Vite (build/dev server)
- ESLint

## Como rodar localmente

```sh
npm install
npm run dev
```

Outros scripts disponíveis (`package.json`):

- `npm run build` — build de produção (`tsc -b && vite build`)
- `npm run lint` — roda o ESLint
- `npm run preview` — serve o build de produção localmente

## Role in the ecosystem (EN)

The Interactive Resume's frontend. Per Constitution Principle I, this is the ecosystem's "anemic
frontend" — focused on UI, diagramming, and chat, with no business logic of its own; all logic lives in
the backend services, reached through `resume-bff`. Currently just the initial Vite (React + TypeScript)
scaffold — no project-specific components, API calls, or screens have been built yet.
