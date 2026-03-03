// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://doc.boser-guyon.org',
	integrations: [
		starlight({
			title: 'IoT Blog Documentation',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/iot49/blog-code' }],
			sidebar: [
				{
					label: 'Setup & Installation',
					items: [
						{ label: 'Installation', slug: 'installation' },
						{ label: 'Environment Variables', slug: 'setting-up-env' },
					],
				},
				{
					label: 'Features & Workflow',
					items: [
						{ label: 'Deployment', slug: 'deployment' },
						{ label: 'Authentication', slug: 'authentication' },
						{ label: 'Search', slug: 'search' },
						{ label: 'Comments', slug: 'comments' },
						{ label: 'Translation', slug: 'translation' },
						{ label: 'VSCode Image Paste', slug: 'vscode-images' },
						{ label: 'Jupyter Notebooks', slug: 'jupyter-notebooks' },
					],
				},
			],
		}),
	],
});
