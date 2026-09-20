import { join } from "node:path";
import { defineModule } from "runable";

export default defineModule({
  configKey: "ui",
  meta: { name: "@domutala/ui" },

  ssr: false,

  css: ["./app/css/main.css"],

  alias: { "@ui": join(import.meta.dirname, "./app") },

  modules: ["@runablejs/tailwindcss"],

  components: [{ dirs: "./app/components/ui", prefix: "U", pathPrefix: false }],

  tailwindcss: { injectCss: false },

  vite: {
    resolve: { dedupe: ["vue", "@vue/runtime-core", "@vue/runtime-dom"] },
    optimizeDeps: { exclude: ["vue", "@vue/runtime-core", "@vue/runtime-dom"] },
  },
});
