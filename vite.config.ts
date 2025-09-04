import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const isUserSite = repo === `${owner}.github.io`;

export default defineConfig({
  base: isUserSite ? "/" : `/${repo}/`,
  plugins: [tailwindcss(), react()],
});

