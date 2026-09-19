<script setup lang="ts">
import {
  ChevronDown,
  Copy,
  Download,
  Edit3,
  Moon,
  Plus,
  Save,
  Sun,
  Trash2,
} from "@lucide/vue";
import { ref } from "vue";

const { theme, toggleTheme } = useTheme();
const alertVisible = ref(true);
const notificationsEnabled = ref(true);
const compactSwitch = ref(false);
const squareSwitch = ref(true);
</script>

<template>
  <UHeader title="Domutala UI" mode="slideover">
    <nav class="flex items-center gap-1 text-sm">
      <a
        href="#foundations"
        class="rounded-md px-3 py-2 text-muted-foreground hover:bg-accent hover:text-foreground"
        >Fondations</a
      >
      <a
        href="#components"
        class="rounded-md px-3 py-2 text-muted-foreground hover:bg-accent hover:text-foreground"
        >Composants</a
      >
      <a
        href="#alerts"
        class="rounded-md px-3 py-2 text-muted-foreground hover:bg-accent hover:text-foreground"
        >Alertes</a
      >
    </nav>

    <template #right>
      <UButton
        variant="ghost"
        color="accent"
        size="icon"
        aria-label="Changer de thème"
        @click="toggleTheme"
      >
        <Sun v-if="theme === 'dark'" class="size-4" />
        <Moon v-else class="size-4" />
      </UButton>
    </template>

    <template #body="{ close }">
      <nav class="flex flex-col gap-1">
        <a
          href="#foundations"
          class="rounded-md px-3 py-2 hover:bg-accent"
          @click="close"
          >Fondations</a
        >
        <a
          href="#components"
          class="rounded-md px-3 py-2 hover:bg-accent"
          @click="close"
          >Composants</a
        >
        <a
          href="#alerts"
          class="rounded-md px-3 py-2 hover:bg-accent"
          @click="close"
          >Alertes</a
        >
      </nav>
    </template>
  </UHeader>

  <main class="mx-auto min-h-screen max-w-6xl px-6 py-12 lg:px-10">
    <div class="mb-14 max-w-2xl">
      <UBadge variant="tonal" color="accent" class="mb-4"
        >Runable + shadcn-vue</UBadge
      >
      <h1 class="text-4xl font-semibold tracking-tight sm:text-5xl">
        Domutala Design System
      </h1>
      <p class="mt-4 text-lg text-muted-foreground">
        Le socle visuel partagé de tes futurs projets.
      </p>
    </div>

    <section id="components" class="grid gap-6 md:grid-cols-2">
      <UCard id="foundations" class="scroll-mt-24 md:col-span-2">
        <UCardHeader>
          <UCardTitle>Fondations</UCardTitle>
          <UCardDescription
            >Couleurs, typographie, rayons et ombres.</UCardDescription
          >
        </UCardHeader>
        <UCardContent class="grid grid-cols-4 gap-3">
          <div class="aspect-square rounded-lg bg-primary" title="Primary" />
          <div
            class="aspect-square rounded-lg bg-secondary"
            title="Secondary"
          />
          <div class="aspect-square rounded-lg bg-muted" title="Muted" />
          <div
            class="aspect-square rounded-lg bg-destructive"
            title="Destructive"
          />
        </UCardContent>
      </UCard>

      <UCard class="md:col-span-2">
        <UCardHeader>
          <UCardTitle>Badges</UCardTitle>
          <UCardDescription>
            Les mêmes variantes et couleurs sémantiques que les boutons.
          </UCardDescription>
        </UCardHeader>
        <UCardContent class="space-y-5">
          <div
            v-for="color in [
              'default',
              'accent',
              'danger',
              'info',
              'success',
              'warning',
              'neutral',
            ] as const"
            :key="color"
            class="grid gap-3 sm:grid-cols-[6rem_1fr] sm:items-center"
          >
            <span
              class="text-sm font-medium capitalize text-muted-foreground"
              >{{ color }}</span
            >
            <div class="flex flex-wrap gap-3">
              <UBadge :color="color" variant="elevated">Elevated</UBadge>
              <UBadge :color="color" variant="flat">Flat</UBadge>
              <UBadge :color="color" variant="tonal">Tonal</UBadge>
              <UBadge :color="color" variant="outline">Outline</UBadge>
              <UBadge :color="color" variant="ghost">Ghost</UBadge>
            </div>
          </div>
        </UCardContent>
      </UCard>

      <UCard class="md:col-span-2">
        <UCardHeader>
          <UCardTitle>Boutons</UCardTitle>
          <UCardDescription
            >L’apparence et la couleur sont deux propriétés
            indépendantes.</UCardDescription
          >
        </UCardHeader>
        <UCardContent class="space-y-6">
          <div
            v-for="color in [
              'default',
              'accent',
              'danger',
              'info',
              'success',
              'warning',
            ] as const"
            :key="color"
            class="grid gap-3 sm:grid-cols-[6rem_1fr] sm:items-center"
          >
            <span
              class="text-sm font-medium capitalize text-muted-foreground"
              >{{ color }}</span
            >
            <div class="flex flex-wrap gap-3">
              <UButton :color="color" variant="elevated">Elevated</UButton>
              <UButton :color="color" variant="flat">Flat</UButton>
              <UButton :color="color" variant="tonal">Tonal</UButton>
              <UButton :color="color" variant="outline">Outline</UButton>
              <UButton :color="color" variant="ghost">Ghost</UButton>
            </div>
          </div>
        </UCardContent>
      </UCard>

      <UCard>
        <UCardHeader>
          <UCardTitle>Button group</UCardTitle>
          <UCardDescription>
            Regrouper des actions liées, horizontalement ou verticalement.
          </UCardDescription>
        </UCardHeader>
        <UCardContent class="flex flex-wrap items-start gap-6">
          <UButtonGroup>
            <UButton variant="outline" color="accent">
              <Edit3 /> Modifier
            </UButton>
            <UButton
              variant="outline"
              color="accent"
              size="icon"
              aria-label="Copier"
            >
              <Copy />
            </UButton>
            <UButton
              variant="outline"
              color="accent"
              size="icon"
              aria-label="Télécharger"
            >
              <Download />
            </UButton>
          </UButtonGroup>

          <UButtonGroup>
            <UButton variant="flat" color="accent">
              <Save /> Enregistrer
            </UButton>
            <UDropdownMenu>
              <UDropdownMenuTrigger as-child>
                <UButton
                  variant="flat"
                  color="accent"
                  size="icon"
                  aria-label="Plus d’options d’enregistrement"
                >
                  <ChevronDown />
                </UButton>
              </UDropdownMenuTrigger>
              <UDropdownMenuContent align="end">
                <UDropdownMenuItem>Enregistrer un brouillon</UDropdownMenuItem>
                <UDropdownMenuItem>Enregistrer comme modèle</UDropdownMenuItem>
              </UDropdownMenuContent>
            </UDropdownMenu>
          </UButtonGroup>
        </UCardContent>
      </UCard>

      <UCard>
        <UCardHeader>
          <UCardTitle>Switches</UCardTitle>
          <UCardDescription>
            Tailles, couleurs, formes et compositions avec libellé.
          </UCardDescription>
        </UCardHeader>
        <UCardContent class="space-y-6">
          <div class="flex items-center gap-5">
            <USwitch
              v-model="compactSwitch"
              size="sm"
              aria-label="Petit switch"
            />
            <USwitch
              v-model="notificationsEnabled"
              aria-label="Switch standard"
            />
            <USwitch size="lg" color="success" aria-label="Grand switch" />
            <USwitch disabled aria-label="Switch désactivé" />
          </div>

          <div class="flex items-center gap-5">
            <USwitch color="danger" aria-label="Switch danger" />
            <USwitch color="info" aria-label="Switch info" />
            <USwitch color="warning" aria-label="Switch warning" />
            <USwitch
              v-model="squareSwitch"
              shape="square"
              color="neutral"
              aria-label="Switch carré"
            />
          </div>

          <label
            class="flex cursor-pointer items-start justify-between gap-6 rounded-lg border p-4"
          >
            <span>
              <span class="block text-sm font-medium">Notifications</span>
              <span class="mt-1 block text-sm text-muted-foreground">
                Recevoir une notification lorsqu’une activité importante
                survient.
              </span>
            </span>
            <USwitch v-model="notificationsEnabled" class="mt-0.5" />
          </label>
        </UCardContent>
      </UCard>

      <UCard>
        <UCardHeader>
          <UCardTitle>Inputs</UCardTitle>
          <UCardDescription>
            Trois tailles, avec une mise au point discrète sans outline.
          </UCardDescription>
        </UCardHeader>
        <UCardContent class="space-y-4">
          <UInput size="sm" placeholder="Small" />
          <UInput placeholder="Default" />
          <UInput size="lg" placeholder="Large" />
        </UCardContent>
      </UCard>

      <UCard>
        <UCardHeader>
          <UCardTitle>Dropdown</UCardTitle>
          <UCardDescription>
            Placer les actions secondaires dans un menu contextuel.
          </UCardDescription>
        </UCardHeader>
        <UCardContent class="flex flex-wrap gap-3">
          <UDropdownMenu>
            <UDropdownMenuTrigger as-child>
              <UButton variant="tonal" color="info">
                Actions <ChevronDown />
              </UButton>
            </UDropdownMenuTrigger>
            <UDropdownMenuContent align="start" class="w-56">
              <UDropdownMenuLabel>Actions du document</UDropdownMenuLabel>
              <UDropdownMenuSeparator />
              <UDropdownMenuItem><Plus /> Créer une copie</UDropdownMenuItem>
              <UDropdownMenuItem><Download /> Télécharger</UDropdownMenuItem>
              <UDropdownMenuSeparator />
              <UDropdownMenuItem variant="destructive">
                <Trash2 /> Supprimer
              </UDropdownMenuItem>
            </UDropdownMenuContent>
          </UDropdownMenu>
        </UCardContent>
      </UCard>

      <UCard id="alerts" class="scroll-mt-24 md:col-span-2">
        <UCardHeader>
          <UCardTitle>Alertes</UCardTitle>
          <UCardDescription>
            Types contextuels, variantes, densité, bordures et fermeture à la
            manière de Vuetify.
          </UCardDescription>
        </UCardHeader>
        <UCardContent class="space-y-6">
          <div class="grid gap-3 lg:grid-cols-2">
            <UAlert
              type="success"
              title="Succès"
              text="Les modifications ont bien été enregistrées."
            />
            <UAlert
              type="info"
              title="Information"
              text="Une nouvelle version est disponible."
            />
            <UAlert
              type="warning"
              title="Attention"
              text="Cette action nécessite une confirmation."
            />
            <UAlert
              type="error"
              title="Erreur"
              text="Impossible de terminer cette opération."
            />
          </div>

          <div class="grid gap-3 lg:grid-cols-2">
            <UAlert
              type="info"
              variant="outline"
              border="left"
              density="compact"
              title="Outline compact"
            >
              Une alerte compacte avec une bordure accentuée.
            </UAlert>
            <UAlert
              type="warning"
              variant="elevated"
              prominent
              title="Alerte importante"
            >
              Le mode prominent renforce la présence de l’icône.
            </UAlert>
          </div>

          <div>
            <UAlert
              v-model="alertVisible"
              type="success"
              variant="flat"
              title="Alerte fermable"
              text="Clique sur la croix pour masquer cette alerte."
              closable
            />
            <UButton
              v-if="!alertVisible"
              variant="tonal"
              color="success"
              size="sm"
              @click="alertVisible = true"
            >
              Réafficher l’alerte
            </UButton>
          </div>
        </UCardContent>
      </UCard>
    </section>
  </main>
</template>
