// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import md3Theme from 'starlight-theme-md3';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Glimmer-2026-微光招新',
			locales: {
        		root: {
          			label: '简体中文',
          			lang: 'zh-CN',
        		},
      		},
			plugins: [
				md3Theme({
					seed: '#0051FB',
					variant: 'tonalSpot',
					density: 'compact',
					shape: 'medium',
				}),
			],
			sidebar: [{
					label: '招新说明',
					slug: 'information',
				},
				{
					label: 'Start',
					items: [{ label: 'Welcome', slug: 'welcome' }],
				},
			],
		}),
	],
});
