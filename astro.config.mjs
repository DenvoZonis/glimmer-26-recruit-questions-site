// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import md3Theme from 'starlight-theme-md3';

export default defineConfig({
	site: 'https://www.glimmer.org.cn',
	base: '/recruit',
	integrations: [
		starlight({
			title: '微光工作室',
			logo: {
        		src: './src/assets/glimmer_logo.png',
      		},
			social: [
				{
					icon: 'email',
					label: '邮箱',
					href: 'mailto:glimmer401@outlook.com',
				},
			],
			pagination: false,
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
        		maxHeadingLevel: 3,
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
			// 自定义组件
			components: {
        		Hero: './src/components/CustomHero.astro',
				Footer: './src/components/Footer.astro',
      		},
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
					label: '招新相关',
					items: [{ label: '招新说明', slug: 'information' },
						{ label: '其他渠道招新说明', slug: 'special_recruit' },
						{ label: 'Q&A 常见问题解答', slug: 'QA' }
					],
				},{
					label: '日常基础',
					items: [{ label: '日常-1', slug: 'daily/daily-1' }],
				},{
					label: '计算机系统',
					items: [{ label: '计算机系统简介', slug: 'cs/introduction' }],
				},{
					label: '前端',
					items: [{ label: '前端简介', slug: 'frontend/introduction' }],
				},{
					label: '后端',
					items: [{ label: '后端简介', slug: 'backend/introduction' }],
				},{
					label: '机器学习',
					items: [{ label: '机器学习简介', slug: 'ml/introduction' }],
				}
			],
		}),
	],
});
