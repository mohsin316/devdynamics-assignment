import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // uncomment below code to enter in development mode

  // server: {
  //   proxy: {
  //     "/api": "http://localhost:4100",
  //   },
  // },
});
