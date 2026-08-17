import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import md3Theme from 'starlight-theme-md3';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
	site: 'https://www.glimmer.org.cn',
	// Markdown插件
  	markdown: {
    	remarkPlugins: [remarkMath],
    	rehypePlugins: [rehypeKatex],
  	},
	integrations: [
		starlight({
			title: 'Glimmer',
			// logo: {
        	// 	src: './src/assets/glimmer_logo.png',
      		// },
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
				'katex/dist/katex.min.css'
      		],
			// 自定义组件
			components: {
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
					collapsed: true,
					items: [{ label: '招新说明', slug: 'information' },
						{ label: '其他渠道招新说明', slug: 'special_recruit' },
						{ label: 'Q&A 常见问题解答', slug: 'QA' }
					],
				},{
					label: '日常基础',
					collapsed: true,
					items: [{ label: '日常简介', slug: 'daily/introduction' },
						{ label: '1: 什么是计算机？', slug: 'daily/1' },
						{ label: '2: markdown', slug: 'daily/2' },
						{ label: '3: 数据的表示', slug: 'daily/3' },
						{ label: '4: 代码管理', slug: 'daily/4' },
						{ label: '5: 如何用好AI', slug: 'daily/5' },
						{ label: '6: loafer想打派(网络)', slug: 'daily/6' }
					],
				},{
					label: '计算机系统',
					collapsed: true,
					items: [{ label: '计算机系统简介', slug: 'cs/introduction' }
					],
				},{
					label: '前端',
					collapsed: true,
					items: [{ label: '前端简介', slug: 'frontend/introduction' }
					],
				},{
					label: '后端',
					collapsed: true,
					items: [{ label: '后端简介', slug: 'backend/introduction' }
					],
				},{
					label: '机器学习',
					collapsed: true,
					items: [{ label: '机器学习简介', slug: 'ml/introduction' }
					],
				}
			],
		}),
	],
});
