import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsConfigPath from "vite-jsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-todoList/",
  plugins: [react(), jsConfigPath()],
});
