type TPost = {
    id: number
    image: string
    category: string
    duration: string
    title: string
}

const BlogItemsList:TPost[] = [
    {
        id: 1,
        image: '/images/blog/1.png',
        category: 'Trending',
        duration: '7 min read',
        title: 'Navigating the Future: Trends in Modern Coworking Spaces'
    },

    {
        id: 2,
        image: '/images/blog/2.png',
        category: 'Productivity',
        duration: '5 min read',
        title: "Mastering Productivity: Tips from Cowork's High Achievers"
    },

    {
        id: 3,
        image: '/images/blog/3.png',
        category: 'Talk',
        duration: '10 min read',
        title: "Tech Talk: The Backbone of Cowork's Seamless Experience"
    },
]

export default BlogItemsList