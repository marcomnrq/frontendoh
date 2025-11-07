import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
	plugin: [vue()],
	test: {
		globals: true,
		environment: "jsdom",
	},
});
