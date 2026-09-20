import { defineConfig } from "runable";

export default defineConfig({
  output: "../.app",
  distdir: "../.output",
  ssr: true,

  modules: [".."],
});
