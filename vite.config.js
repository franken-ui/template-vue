import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) =>
            [
              "uk-command",
              "uk-icon",
              "uk-input-tag",
              "uk-input-pin",
              "uk-select",
              "uk-theme-switcher",
            ].includes(tag),
        },
      },
    }),
  ],
});
