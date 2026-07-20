// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import md3Theme from 'starlight-theme-md3';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Glimmer-2026-微光招新',
			// HTML head标签自定义
			head: [{
          		tag: 'link',
          		attrs: {
            		rel: 'icon',
            		href: '/favicon.png',
            		sizes: '32x32',
          		},
        		},{
          		tag: 'link',
          		attrs: {
            		rel: 'apple-touch-icon',
            		href: '/apple-touch-icon.png',
            		sizes: '180x180',
          		},},],
			// 配置toc目录层级
      		tableOfContents: {
        		minHeadingLevel: 2,
        		maxHeadingLevel: 5,
      		},
			// 使用中文
			locales: {
        		root: {
          			label: '简体中文',
          			lang: 'zh-CN',
        		},
      		},
			// 自定义css
			customCss: [
        		'./src/styles/custom.css',
      		],
			// 主题配置
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
