import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import md3Theme from 'starlight-theme-md3';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
	site: 'https://www.glimmer.org.cn',
	//base: '/recruit',
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
        		// Hero: './src/components/CustomHero.astro',
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
					items: [{ label: '计算机系统简介', slug: 'cs/introduction' },
						{ label: "C-EASY-1: C语言入门", slug: 'cs/c-easy-1' },
						{ label: 'C-EASY-2: 指针', slug: 'cs/c-easy-2' },
						{ label: 'C-EASY-3: 二叉树与递归', slug: 'cs/c-easy-3' },
						{ label: 'MEDIUM-1: 位级操作', slug: 'cs/medium-1' },
						{ label: 'MEDIUM-2: 计算机中的整数与浮点数', slug: 'cs/medium-2' },
						{ label: '〇MEDIUM-3: Read From Memory', slug: 'cs/medium-3' },
						{ label: '〇MEDIUM-4: 计算机网络常识与实验', slug: 'cs/medium-4' },
						{ label: '〇HARD-1: cache', slug: 'cs/hard-1' }
					],
				},{
					label: '前端',
					collapsed: true,
					items: [{ label: '前端简介', slug: 'frontend/introduction' },
						{ label: '1: 初识HTML', slug: 'frontend/1' },
						{ label: '2: 了解网页F12开发者工具', slug: 'frontend/2' },
						{ label: '3: CSS初识', slug: 'frontend/3' },
						{ label: '4: Javascript入门与进阶', slug: 'frontend/4' },
						{ label: '5: 制作blog', slug: 'frontend/5' },
						{ label: '6: 第三方API&&排序', slug: 'frontend/6' },
						{ label: '7: Node.js初体验', slug: 'frontend/7' },
						{ label: '8: VitePress', slug: 'frontend/8' },
						{ label: '9: Vue的学习', slug: 'frontend/9' }
					],
				},{
					label: '后端',
					collapsed: true,
					items: [{ label: '后端简介', slug: 'backend/introduction' },
						{ label: '〇1: 环境搭建', slug: 'backend/1' },
						{ label: '〇2: 程序运行', slug: 'backend/2' },
						{ label: '〇3: 数据类型与数据结构', slug: 'backend/3' },
						{ label: '4: 集合、泛型与Stream流', slug: 'backend/4' },
						{ label: '5: IO流与项目挑战', slug: 'backend/5' },
						{ label: '〇6: 封装继承与多态', slug: 'backend/6' },
						{ label: '7: Linux的使用', slug: 'backend/7' },
						{ label: '〇8: 异常处理与Stream流', slug: 'backend/8' },
						{ label: '9: 网络编程基础', slug: 'backend/9' },
						{ label: '10: 初窥后端世界', slug: 'backend/10' }
					],
				},{
					label: '机器学习',
					collapsed: true,
					items: [{ label: '机器学习简介', slug: 'ml/introduction' },
						{ label: '0: 迈出机器学习的第一步', slug: 'ml/0' },
						{ label: '1: 基础的线性回归', slug: 'ml/1' },
						{ label: '2: 多层感知机理论', slug: 'ml/2' },
						{ label: '3: 多层感知机实战', slug: 'ml/3' },
						{ label: '4: 卷积神经网络理论', slug: 'ml/4' },
						{ label: '5: 卷积神经网络实战', slug: 'ml/5' },
						{ label: '〇6: 循环神经网络理论', slug: 'ml/6' },
						{ label: '〇7: 循环神经网络实战', slug: 'ml/7' },
						{ label: '〇8: Transformer', slug: 'ml/8' },
						{ label: '〇9: BERT', slug: 'ml/9' }
					],
				}
			],
		}),
	],
});
