import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/front-end-knowledge-base/',
  head: [["link", { rel: "icon", href: "/logo.svg" }]], // 
  title: "Json Yu前端知识库",
  description: "个人知识库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'Json Yu 前端知识库', // 左上角标题
    logo: '/logo.svg',  // 左上角logo
    outlineTitle: "目录", // 右侧导航栏顶部显示内容
    outline: [2, 6], // 右侧导航栏默认是md的文件一二级标题，加上这个可以显示最多显示6级标题
    lastUpdated: {
      text: '最近更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      },
    },
    docFooter: {
      prev: '⏪ 上一页',
      next: '下一页 ⏩'
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    // 导航栏
    nav: [
      {
        text: '知识库',
        items: [
          { text: 'HTML CSS', link: '/knowledge/htmlcss/html' },
          { text: 'JavaScript', link: '/knowledge/javascript/index' },
          { text: 'TypeScript', link: '/knowledge/typescript/index' },
          { text: 'Vue', link: '/knowledge/vue/index' },
          { text: 'React', link: '/knowledge/react/api-examples' },
          { text: 'Node', link: '/knowledge/node/index' },
        ]
      },
      { text: '面试八股文', link: '/interview/html5.md' },
      { text: '面经', link: '/experience/qulian' },
    ],

    // 侧边栏
    sidebar: {
      '/knowledge/htmlcss': [
        {
          text: 'HTML',
          collapsed: false,
          items: [
            { text: 'html', link: '/knowledge/htmlcss/html' },
            { text: 'html5', link: '/knowledge/htmlcss/html5' },

          ]
        },
        {
          text: 'CSS',
          items: [
            { text: 'css', link: '/knowledge/htmlcss/css' },
            { text: 'css3', link: '/knowledge/htmlcss/css3' }
          ]
        }
      ],
      '/knowledge/javascript': [
        {
          text: 'JavaScript',
          items: [
            { text: 'JS基础', link: '/interview/javascript/index' },
            // { text: 'JS高级', link: '/interview/javascript/advanced' },
          ]
        }
      ],
      '/knowledge/vue': [
        {
          text: 'Vue',
          items: [
            { text: 'vue基础', link: '/knowledge/vue/index' },
            { text: 'Vue-Router基础知识', link: '/knowledge/vue/vue-router' },
          ]
        },
      ],
      '/knowledge/react': [
        {
          text: 'React',
          items: [
            { text: 'api', link: '/knowledge/react/api-examples' },
            { text: 'markdown', link: '/knowledge/react/markdown-examples' },
          ]
        },
      ],
      '/knowledge/typescript': [
        {
          text: 'TypeScript',
          items: [
            { text: 'TS数据基础类型', link: '/knowledge/typescript/index' },
          ]
        },
      ],
      '/knowledge/node': [
        {
          text: 'Node',
          items: [
            { text: 'node基础', link: '/knowledge/node/index' },
            { text: 'node进阶', link: '/knowledge/node/index' },
          ]
        },
      ],
      '/knowledge/network': [
        {
          text: '计算机网络',
          items: [
            { text: '网络基础', link: '/knowledge/network/index' },
          ]
        },
      ],
      '/interview': [
        {
          text: '前端八股文',
          items: [
            { text: 'HTML5', link: '/interview/html5' },
            { text: 'CSS3', link: '/interview/css3' },
            { text: 'Javascript', link: '/interview/javascript' },
            { text: 'Vue', link: '/interview/vue' },
            { text: 'Node', link: '/interview/node' },
          ]
        }
      ],
      // 面经
      '/experience/': [
        {
          text: '面经',
          items: [
            { text: '4.2 趣链科技', link: '/experience/qulian' },
            { text: '4.18 木仓科技', link: '/experience/mucang' },
          ]
        }
      ],
    },

    // 第三方网站链接
    socialLinks: [
      // 博客
      {
        icon: {
          svg: '<svg t="1715010095326" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8572" width="200" height="200"><path d="M857.1 689.8c8.3-36.4-14.4-81.8-41.2-105.5l-6.8 2-5.4-17.5c-29.2-90.8-72-154.8-130.6-195.2-24.7-17-52-29.6-80.9-37.4-7.4-2.1-15-3.9-22.5-5.4l-15.6-3-28.4-4.8-18.9-4.3 7.5-6 3-17.6 7.5-34.6 0.6-6.1c1-12.9-2-23.9-8.5-30.9-5.6-6-13.7-9.1-24-9.1l-6 0.4c-19 2.8-40.4 19-58.9 44.5-18.9 26-31.5 57.4-34.8 86.4l-0.5 6.8-22 11.7C279.4 414.4 215.9 480 176.6 564.6c-14.9 32.2-16 70.2-2.5 92.3 7.5 12.3 18.6 18.9 33.2 19.5 7.1 0.3 12-0.1 16.9-1.3l16.2-4.5 11.5-2.3L267 666l39.6-5.1c32.7-4.9 61.7-12 86-21.2l16.6-6.9 14.9 2.8c95.9 16.9 156.7 2 185.8-45.6l7.5-12.2-5.8-12.8-3.8-7-8.3-11.2h11.1c15 0.5 27.4 8.2 39.2 24l0.1 0.1 3.8 5.5-5.9 6.4c-30.5 33.9-54.4 76.5-54.4 97v39.3l36.7-14c21.3-8.2 51.7-12.7 84.9-12.7 4.8 0 9.7 0.1 14.6 0.3 37.3 1.4 69.6 8.2 86.2 18.1l27.8 16.6 11.3-30.1 2.2-7.5z m-85.4-47.2c-25.2-3.6-50.9-4.8-76.5-3.6l-24.8 1.6 11.5-14.2c9.3-11 16.7-18.7 22.7-23.6l16.7-13.6-9.7-19.4c-5.1-10.9-11.3-21.3-18.3-31-41.1-55.7-102.3-60.5-172.1-13.4l-51 34.4 80.3 19-26.8 6.8c-28 5.6-67.9 2.5-118.6-9l-19.9-4.6-3.1 5.7 2.8 6.6c-4.4 2-9.1 3.8-14 5.6l-8.8 3.5 0.3-0.6c-18.5 6-40.1 10.9-64.4 14.4l-29.3 3.8c-7 0.9-13.2 1.8-19 2.7l-15.3 2.7-16.2 3.6 1.8-15.4c1.1-6.1 2.9-12 5.5-17.6 18.5-39.7 42.5-73.9 73.6-104.5 35.3-34.7 78.5-63.8 132.1-88.9l17.4-8.2-2.1-19.2c-0.9-10.1-0.1-20.1 2.6-29.8v-0.1l2.3-7.7-0.6-4.7h12.4l-1.7 5.6 0.1 0.8c3.1 16.8 11.7 28.5 27.1 36.9 6.4 3.5 13.1 5.7 23.9 7.9l34.6 6.3c8.4 1.6 15.3 3 21.2 4.3h0.1l17.4 4.4c20.4 5.9 34.6 12.8 56.2 27.6 48.2 33.2 83.9 87.4 109.3 165.6l7.5 24.6 5.2 5.1c2.9 2.9 6.2 5.4 9.9 7.3l0.5 0.3 4.8 3.2c3 2.6 6.2 6.1 9.3 10.3l0.1 0.2 8.4 12.3-25.4-4z" fill="#008AFF" p-id="8573"></path><path d="M955 224c0-85.5-69.5-155-155-155H224c-85.5 0-155 69.5-155 155v576c0 85.5 69.5 155 155 155h576c85.5 0 155-69.5 155-155V224z m-54 576c0 55.7-45.3 101-101 101H224c-55.7 0-101-45.3-101-101V224c0-55.7 45.3-101 101-101h576c55.7 0 101 45.3 101 101v576z" fill="#008AFF" p-id="8574"></path></svg>'
        }, link: "http://jsonblog.top"
      },
      // 掘金
      {
        icon: {
          svg: '<svg t="1714816995223" class="icon" viewBox="0 0 1316 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1923" width="200" height="200"><path d="M643.181714 247.698286l154.916572-123.172572L643.181714 0.256 643.072 0l-154.660571 124.269714 154.660571 123.245715 0.109714 0.182857z m0 388.461714h0.109715l399.579428-315.245714-108.361143-87.04-291.218285 229.888h-0.146286l-0.109714 0.146285L351.817143 234.093714l-108.251429 87.04 399.433143 315.136 0.146286-0.146285z m-0.146285 215.552l0.146285-0.146286 534.893715-422.034285 108.397714 87.04-243.309714 192L643.145143 1024 10.422857 525.056 0 516.754286l108.251429-86.893715L643.035429 851.748571z" fill="#1E80FF" p-id="1924"></path></svg>'
        }, link: "https://juejin.cn/user/1825642192581454/posts"
      },
      // CSDN
      {
        icon: {
          svg: '<svg t="1714818672776" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5658" width="200" height="200"><path d="M512.010445 0.000585A512.281535 512.281535 0 0 0 1.016196 479.339287c-19.250785 305.964609 237.679908 562.895302 543.644517 543.644517A511.98897 511.98897 0 0 0 512.010445 0.000585z" fill="#ED5F48" p-id="5659"></path><path d="M520.787399 600.870841q4.037399-37.389823 8.074797-73.726412 5.03212-49.502019 9.069519-98.009317a30.602312 30.602312 0 0 1 2.047956-5.851303c0.643643-1.3458 2.691599-2.047956 5.851303-2.047956 17.553908-1.3458 35.107815-1.989443 52.661722-1.989442a259.56378 259.56378 0 0 1 51.491462 5.03212 145.463381 145.463381 0 0 1 35.107816 12.112196 74.136003 74.136003 0 0 1 26.272348 24.224392 86.189686 86.189686 0 0 1 11.117475 64.364328 94.440023 94.440023 0 0 1-35.107816 57.576817 123.40397 123.40397 0 0 1-31.304468 15.154873 230.131728 230.131728 0 0 1-32.357703 5.851303 484.019744 484.019744 0 0 1-102.924411-2.691599z m53.539418-32.357703c9.420597 0 18.139038 0 26.213835-0.994722a94.205971 94.205971 0 0 0 33.352424-5.851302 63.194067 63.194067 0 0 0 26.272349-19.192272 51.84254 51.84254 0 0 0 11.117475-48.507298 49.092428 49.092428 0 0 0-34.347146-33.352425 130.015942 130.015942 0 0 0-23.40521-1.989443 269.393968 269.393968 0 0 0-23.40521-0.994721 8.016284 8.016284 0 0 0-5.090634 0.994721 11.702605 11.702605 0 0 0-0.994721 5.032121l-4.037399 47.454063c-0.643643 9.47911-1.696878 18.548629-3.042677 27.325583s-1.404313 19.309298-2.750112 30.075695zM504.520778 426.092434l-5.090633 38.384545-24.224393-4.037399-22.234949-1.989443a464.417881 464.417881 0 0 0-53.539418 0.994722 10.883423 10.883423 0 0 0-8.074798 3.042677l-8.074797 4.037399a10.590858 10.590858 0 0 0-5.032121 10.122753q0.994721 5.03212 8.074798 8.074798a133.292671 133.292671 0 0 0 17.436881 5.03212q8.074797 2.047956 17.20283 4.037399a239.903403 239.903403 0 0 0 23.40521 7.080076c7.372641 2.691599 14.452717 5.383198 21.181715 8.074797 20.88915 10.122753 30.660825 22.527515 29.256513 37.389823a50.847819 50.847819 0 0 1-24.224393 38.384545 109.536383 109.536383 0 0 1-27.676661 12.112196 206.492466 206.492466 0 0 1-29.256512 5.851302 287.181928 287.181928 0 0 1-101.988203-4.037398c-3.393755-1.3458-7.080076-2.691599-11.117475-4.037399q2.984164-20.186994 5.03212-36.336589c12.112196 1.3458 23.931827 3.042677 35.107815 5.032121l36.395102 4.037398a120.653858 120.653858 0 0 0 16.149595-0.994721c5.851303-1.3458 11.702605-2.340521 17.144316-3.042677a25.277627 25.277627 0 0 0 12.112197-5.851303A17.144316 17.144316 0 0 0 429.741132 544.171719c-0.643643-4.037399-4.388477-7.080076-11.117475-9.069519l-22.176437-5.090633c-5.851303-1.3458-12.814353-2.984164-20.245506-5.03212l-22.176437-7.957771a121.941144 121.941144 0 0 1-21.240228-10.122754 37.857927 37.857927 0 0 1-19.192272-29.256512q-0.994721-16.149595 16.149595-32.357703a72.205073 72.205073 0 0 1 26.272348-15.096361A124.047613 124.047613 0 0 1 386.207441 422.055036a337.035025 337.035025 0 0 1 113.105678 3.042677 17.904986 17.904986 0 0 1 5.207659 0.994721z m255.526381 2.047956a568.45404 568.45404 0 0 1 59.566259-9.069519 316.43844 316.43844 0 0 1 61.614216 2.223495q34.288633 5.090633 50.496741 25.277627t13.16543 54.53414q-1.989443 27.26707-4.037398 52.661722l-5.851303 51.549976h-54.534139l1.989442-29.256513q4.037399-36.336589 9.128032-72.73169 1.989443-25.219114-9.128032-33.293912a48.799863 48.799863 0 0 0-30.251234-9.128032h-16.208108a148.681597 148.681597 0 0 1-17.144316 1.053235 7.899258 7.899258 0 0 0-7.080076 2.984164 32.006625 32.006625 0 0 0-1.989443 5.851303l-14.160152 134.579958h-53.539418z m-480.801528 134.579958q-1.989443 18.197551-4.037399 35.107815a28.43733 28.43733 0 0 1-4.037399 3.042678 11.702605 11.702605 0 0 1-5.03212 0.994721 329.077254 329.077254 0 0 1-36.395101 2.047956q-19.133759 0.994721-36.336589 0.994721a161.964054 161.964054 0 0 1-59.56626-11.117474q-31.304468-13.165431-44.469899-35.107815a65.18351 65.18351 0 0 1-8.074797-50.496741 77.93935 77.93935 0 0 1 21.181715-40.432501 131.829846 131.829846 0 0 1 37.389823-27.267069 215.152394 215.152394 0 0 1 57.576817-18.197551 249.089948 249.089948 0 0 1 59.566259-2.984164 1023.977941 1023.977941 0 0 1 43.475178 5.03212l-5.090633 40.373987q-17.085803-0.936208-33.293911-2.984164-17.202829-1.053234-34.347146-1.053235a146.575128 146.575128 0 0 0-30.309747 3.042678 104.679802 104.679802 0 0 0-28.261791 12.112196 55.353322 55.353322 0 0 0-20.245507 27.26707 53.539418 53.539418 0 0 0 0 32.357703 36.863206 36.863206 0 0 0 12.170709 16.149594 49.209454 49.209454 0 0 0 18.139038 10.122754A124.047613 124.047613 0 0 0 216.519668 567.576929q19.192272 0 39.379266-1.989443c6.846024-0.760669 14.628256-1.755391 23.346697-3.10119z" fill="#FFFFFF" p-id="5660"></path></svg>'
        }, link: "https://blog.csdn.net/qq_67821832?spm=1000.2115.3001.5343"
      },
      // GitEe
      {
        icon: {
          svg: '<svg t="1714008129091" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1852" width="256" height="256"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="1853"></path></svg>'
        }, link: "https://gitee.com/yu021214"
      },
      // GitHub
      { icon: 'github', link: 'https://github.com/JsonFish/front-end-knowledge-base' },
    ],

    footer: {
      message: "Json Yu前端知识库",
      copyright: "Copyright © 豫IP备2024057248号"
    },
  }

})
