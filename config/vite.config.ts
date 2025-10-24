import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "library") {
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: resolve(__dirname, "../src/lib/index.ts"),
          name: "ComponentLibrary",
          fileName: (format) => `component-library.${format}.js`,
        },
        rollupOptions: {
          external: ["react", "react-dom"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
      },
    };
  }

  return {
    plugins: [react()],
    base: "/component-library/",
    css: {
      postcss: "./config/postcss.config.js",
    },
  };
});
