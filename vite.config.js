import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    base: '/air-force-one-rescue/',
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'assets',
                    dest: ''
                }
            ]
        })
    ]
});
