import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		proxy: {
			"/api": {
				target: "https://backend-socketchat.onrender.com",
				//target: "http://localhost:5000",
				//secure: false, // Agrega esta línea
                changeOrigin: true,
			},
		},
	},
});
