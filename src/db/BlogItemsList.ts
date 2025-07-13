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
        category: 'Productivity',
        duration: '5 min read',
        title: "Mastering Productivity: Tips from Cowork's High Achievers"
    },

    {
        id: 2,
        image: '/images/blog/2.png',
        category: 'Talk',
        duration: '10 min read',
        title: "Tech Talk: The Backbone of Cowork's Seamless Experience"
    },

    {
        id: 3,
        image: '/images/blog/3.png',
        category: 'Productivity',
        duration: '5 min read',
        title: "Productivity Hacks for Coworking Professionals"
    },

    {
        id: 4,
        image: '/images/blog/4.png',
        category: 'Career',
        duration: '8 min read',
        title: "The Rise of Freelancing and the Gig Economy"
    },

     {
        id: 5,
        image: '/images/blog/5.png',
        category: 'Talk',
        duration: '11 min read',
        title: "Networking Success Stories from Our Community"
    },

    {
        id: 6,
        image: '/images/blog/6.png',
        category: 'Trending',
        duration: '6 min read',
        title: "Hot New Startups to Watch from Our Space"
    },

    {
        id: 7,
        image: '/images/blog/7.png',
        category: 'Lifestyle',
        duration: '5 min read',
        title: "Enhancing Wellness for Remote Workers"
    },

    {
        id: 8,
        image: '/images/blog/8.png',
        category: 'Productivity',
        duration: '7 min read',
        title: "7 Team Collaboration Tools for Remote Teams"
    },

    {
        id: 9,
        image: '/images/blog/9.png',
        category: 'Trending',
        duration: '4 min read',
        title: "Coworking Space Design Trends for 2024"
    }
]

export default BlogItemsList