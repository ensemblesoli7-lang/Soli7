@AGENTS.md

# Soli7

Site vitrine de Soli7, ensemble lyrique de 6 chanteurs et une pianiste (association à but non lucratif). Objectif : promouvoir le groupe, notamment via ses événements publics et privés, passés et à venir.

One-page en français. **Tout le contenu (textes, membres, événements, médias) se modifie dans `content/site.ts`** ; les photos vont dans `public/images/`.

## Stack

- **Framework** : Next.js 16 (App Router, React 19, TypeScript)
- **Styling** : Tailwind CSS v4
- **Package manager** : npm

## Commandes

```bash
npm run dev      # Serveur de développement
npm run build    # Build production
npm run lint     # ESLint
npx tsc --noEmit # Vérification TypeScript
```

## Conventions

- **Langue de communication** : Français
- **Path alias** : `@/*` pointe vers la racine du projet
- **Identité git** : `Soli7 <ensemble.soli7@gmail.com>` (config locale au repo). Ne jamais committer avec une autre identité.
- **GitHub** : compte `ensemblesoli7-lang`, repo `ensemblesoli7-lang/Soli7`. Le remote et le credential helper locaux forcent ce compte.
