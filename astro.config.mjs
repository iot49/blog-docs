// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';

// https://astro.build/config
export default defineConfig({
	site: process.env.DOMAIN ? `https://${process.env.DOMAIN}` : 'https://docs.boser-guyon.org',
	integrations: [
		starlight({
			title: 'Documentation',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/iot49/blog-code' }],
			plugins: [
				starlightSidebarTopics([
					{
						label: 'Blog',
						link: '/blog/',
						items: [
							{
								label: 'Project Overview',
								items: [
									{ label: 'System Architecture', slug: 'blog/architecture' },
								],
							},
							{
								label: 'Setup & Installation',
								items: [
									{ label: 'Installation', slug: 'blog/installation' },
									{ label: 'Environment Variables', slug: 'blog/setting-up-env' },
								],
							},
							{
								label: 'Features & Workflow',
								items: [
									{ label: 'Deployment', slug: 'blog/deployment' },
									{ label: 'Authentication', slug: 'blog/authentication' },
									{ label: 'Search', slug: 'blog/search' },
									{ label: 'Comments', slug: 'blog/comments' },
									{ label: 'Translation', slug: 'blog/translation' },
									{ label: 'VSCode Image Paste', slug: 'blog/vscode-images' },
									{ label: 'Jupyter Notebooks', slug: 'blog/jupyter-notebooks' },
									{ label: 'Authoring Guide', slug: 'blog/authoring' },
								],
							},
						],
					},
					{
						label: 'Railroad',
						link: '/railroad/',
						items: [
							{
								label: 'Parts',
								autogenerate: { directory: 'railroad' },
							},
						],
					},
				]),
			],
		}),
	],
});
