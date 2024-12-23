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
              "uk-calendar",
              "uk-command",
              "uk-icon",
              "uk-input-date",
              "uk-input-tag",
              "uk-input-time",
              "uk-input-pin",
              "uk-input-range",
              "uk-select",
              "uk-theme-switcher",
            ].includes(tag),
        },
      },
    }),
  ],
});
