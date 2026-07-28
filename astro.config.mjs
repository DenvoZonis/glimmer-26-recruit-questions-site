import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import md3Theme from 'starlight-theme-md3';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
	site: 'https://www.glimmer.org.cn',
	base: '/recruit',
	// Markdown插件
  	markdown: {
    	remarkPlugins: [remarkMath],
    	rehypePlugins: [rehypeKatex],
  	},
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
            		href: '/recruit/favicon.png',
            		sizes: '32x32',
          		},
        		},{
          		tag: 'link',
          		attrs: {
            		rel: 'apple-touch-icon',
            		href: '/recruit/apple-touch-icon.png',
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
						{ label: '5: AI Agent的使用', slug: 'daily/5' },
						{ label: '6: loafer想打派(网络)', slug: 'daily/6' }
					],
				},{
					label: '计算机系统',
					collapsed: true,
					items: [{ label: '计算机系统简介', slug: 'cs/introduction' },
						{ label: "EASY-1: What's your name", slug: 'cs/easy-1' },
						{ label: 'EASY-2: 基础数据结构', slug: 'cs/easy-2' },
						{ label: 'EASY-3: 编译原理引入', slug: 'cs/easy-3' },
						{ label: 'MEDIUM-1: 位计算', slug: 'cs/medium-1' },
						{ label: 'MEDIUM-2: 浮点数', slug: 'cs/medium-2' },
						{ label: 'MEDIUM-3: Read From Memory', slug: 'cs/medium-3' },
						{ label: 'MEDIUM-4: 计算机网络常识与实验', slug: 'cs/medium-4' },
						{ label: 'HARD-1: cache', slug: 'cs/hard-1' }
					],
				},{
					label: '前端',
					collapsed: true,
					items: [{ label: '前端简介', slug: 'frontend/introduction' },
						{ label: '1: 初识HTML', slug: 'frontend/1' },
						{ label: '2: 了解网页F12开发者工具', slug: 'frontend/2' },
						{ label: '3: CSS初识', slug: 'frontend/3' },
						{ label: '4: Javascript入门和进阶', slug: 'frontend/4' },
						{ label: '5: 制作blog', slug: 'frontend/5' },
						{ label: '6: 第三方API&&排序', slug: 'frontend/6' },
						{ label: '7: Node.js', slug: 'frontend/7' },
						{ label: '8: VitePress', slug: 'frontend/8' },
						{ label: '9: Vue的学习', slug: 'frontend/9' }
					],
				},{
					label: '后端',
					collapsed: true,
					items: [{ label: '后端简介', slug: 'backend/introduction' },
						{ label: '1: 环境搭建', slug: 'backend/1' },
						{ label: '2: 程序运行', slug: 'backend/2' },
						{ label: '3: 数据类型与数据结构', slug: 'backend/3' },
						{ label: '4: 控制流', slug: 'backend/4' },
						{ label: '5: 面向对象', slug: 'backend/5' },
						{ label: '6: 封装继承与多态', slug: 'backend/6' },
						{ label: '7: 集合与泛型', slug: 'backend/7' },
						{ label: '8: 异常处理与Stream流', slug: 'backend/8' },
						{ label: '9: IO流', slug: 'backend/9' },
						{ label: '10: 快递取件码查询项目', slug: 'backend/10' },
						{ label: '附加题说明', slug: 'backend/plus-introduction' },
						{ label: 'plus-1', slug: 'backend/plus-1' },
						{ label: 'plus-2', slug: 'backend/plus-2' },
						{ label: 'plus-3', slug: 'backend/plus-3' },
						{ label: 'plus-4', slug: 'backend/plus-4' }
					],
				},{
					label: '机器学习',
					collapsed: true,
					items: [{ label: '机器学习简介', slug: 'ml/introduction' },
						{ label: '0: 跨出机器学习的第一步', slug: 'ml/0' },
						{ label: '1: 基础的线性回归', slug: 'ml/1' },
						{ label: '2: 多层感知机理论', slug: 'ml/2' },
						{ label: '3: 多层感知机实战', slug: 'ml/3' },
						{ label: '4: 卷积神经网络理论', slug: 'ml/4' },
						{ label: '5: 卷积神经网络实战', slug: 'ml/5' },
						{ label: '6: 循环神经网络理论', slug: 'ml/6' },
						{ label: '7: 循环神经网络实战', slug: 'ml/7' },
						{ label: '8: Transformer', slug: 'ml/8' },
						{ label: '9: BERT', slug: 'ml/9' }
					],
				}
			],
		}),
	],
});
