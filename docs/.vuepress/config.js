module.exports = {
    title: '凌览的知识库',
    description: '凌览，微信搜索「程序员凌览」关注我，长期交流学习。不知名前端，Node.js爱好者',
    themeConfig: {
        logo: 'https://www.linglan01.cn/favicon.JPG',
        //顶部导航栏
        nav: [
            { text: '博客', link: 'https://linglan01.cn/' },
            { text: '掘金', link: 'https://juejin.cn/user/3350967174565198' },
            { text: 'Github', link: 'https://github.com/CatsAndMice' }
        ],
        sidebar: [
            {
                title: '侧边栏分组1',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/introduce/',//自动获取README.md
                   [ '/introduce/haha',"HAHA"],
                    ['/introduce/', "vue2特点介绍"],
                ]
            },
        ],
    },

    lastUpdated: 'Last Updated'
}