import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
  ],
  build: {
    emptyOutDir: true,
    sourcemap: true,
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, "lib/index.ts"),
      name: "@peteatkinson/pete-ui",
      fileName: (format: string) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react-jsx-runtime",
        },
      },
    },
  },
});
