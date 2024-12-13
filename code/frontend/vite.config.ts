import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [ vue() ],
    server: {
        host: "127.0.0.1",
        watch: {
            usePolling: true, // Essential for Docker file system changes
        },
    },
})
