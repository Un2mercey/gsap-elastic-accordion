import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: 'Elastic',
            formats: ['es'],
            fileName: 'elastic',
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    plugins: [
        vue({
            reactivityTransform: true,
        }),
        dts(),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/styles/_variables.scss";`,
            },
        },
    },
});
