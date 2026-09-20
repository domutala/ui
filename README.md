# Domutala UI

Design system Vue pour les applications Domutala, construit avec
[Runable](https://runable.dev), Tailwind CSS et Reka UI.

Le module fournit des composants préfixés par `U`, des tokens de design, un
thème clair/sombre et une couleur d’accent personnalisable par application.

## Installation

Installe le package dans une application Runable :

```bash
pnpm add domutala-ui
```

Puis active le module dans `runable.config.ts` :

```ts
import { defineConfig } from "runable";

export default defineConfig({
  modules: ["domutala-ui"],
});
```

Le module enregistre automatiquement ses composants avec le préfixe `U` et
charge sa feuille de styles.

## Utilisation

Les composants sont disponibles directement dans les templates Vue :

```vue
<template>
  <UButton color="accent" variant="elevated">
    Enregistrer
  </UButton>

  <UBadge color="success" variant="tonal">
    Actif
  </UBadge>

  <UAlert
    type="info"
    title="Information"
    text="Une nouvelle version est disponible."
  />
</template>
```

## Couleur d’accent

La couleur d’accent par défaut est :

```css
oklch(57.8% 0.228 260.025)
```

Chaque application peut la remplacer dans sa propre feuille CSS :

```css
:root {
  --accent-color: oklch(62% 0.2 145);
  --accent-color-foreground: #ffffff;
}
```

Les boutons, badges, états de focus et autres composants utilisant la couleur
`accent` s’adapteront automatiquement.

## Boutons et badges

Les boutons et badges partagent les mêmes couleurs sémantiques :

- `default`
- `accent`
- `danger`
- `info`
- `success`
- `warning`
- `neutral`

Variantes disponibles :

- `elevated` : fond plein avec ombre ;
- `flat` ou `default` : fond plein sans ombre ;
- `tonal` : fond à faible opacité ;
- `outline` : bordure utilisant la couleur courante ;
- `ghost` : fond transparent sans ombre.

```vue
<template>
  <UButton color="danger" variant="outline">Supprimer</UButton>
  <UBadge color="info" variant="tonal">Nouveau</UBadge>
</template>
```

## Tailles

Les composants qui proposent une propriété `size` utilisent généralement les
valeurs suivantes :

```vue
<template>
  <UButton size="sm">Petit</UButton>
  <UButton size="default">Standard</UButton>
  <UButton size="lg">Grand</UButton>

  <UInput size="sm" placeholder="Petit champ" />
  <USwitch size="lg" />
</template>
```

Les boutons proposent également `icon`, `icon-sm` et `icon-lg`.

## Header

`UHeader` fournit une navigation desktop et un menu responsive. Le menu mobile
peut prendre la forme d’une modale, d’un panneau latéral ou d’un tiroir.

```vue
<template>
  <UHeader title="Mon application" mode="slideover">
    <nav class="flex items-center gap-2">
      <a href="/">Accueil</a>
      <a href="/about">À propos</a>
    </nav>

    <template #right>
      <UButton variant="ghost" color="accent">Connexion</UButton>
    </template>

    <template #body="{ close }">
      <nav class="flex flex-col gap-2">
        <a href="/" @click="close">Accueil</a>
        <a href="/about" @click="close">À propos</a>
      </nav>
    </template>
  </UHeader>
</template>
```

Modes disponibles : `modal`, `slideover` et `drawer`.

## Thème clair et sombre

Le composable `useTheme` permet d’initialiser, modifier ou alterner le thème :

```vue
<script setup lang="ts">
const { theme, initializeTheme, toggleTheme } = useTheme();

onMounted(initializeTheme);
</script>

<template>
  <UButton variant="ghost" color="accent" @click="toggleTheme">
    Thème actuel : {{ theme }}
  </UButton>
</template>
```

Le choix est conservé dans `localStorage` sous la clé `domutala-theme`.

## Développement

Installe les dépendances :

```bash
pnpm install
```

Prépare et lance le playground :

```bash
pnpm playground:prepare
pnpm playground:dev
```

Compile le playground :

```bash
pnpm playground:build
```

Le playground est disponible dans le dossier `playground/` et sert à vérifier
les composants dans une véritable application Runable.

## Structure

```text
app/
├── components/ui/   Composants Vue
├── composables/     Composables partagés
├── css/main.css     Tokens et styles Tailwind
└── lib/             Utilitaires internes
playground/           Application de démonstration
runable.config.ts     Définition du module Runable
```

## Technologies

- Vue 3
- Runable
- Tailwind CSS 4
- Reka UI
- shadcn-vue
- Lucide Vue
