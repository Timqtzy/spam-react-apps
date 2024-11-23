import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/spam-react-apps/", // Replace <REPOSITORY_NAME> with your GitHub repository name
});
