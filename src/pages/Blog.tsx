import React from 'react'
import { BlogItem, Cta } from '../components'
import BlogItemsList from '../db/BlogItemsList'
import './css/Blog.css'

const Blog = () => {
    const [category, setCategory] = React.useState("All")

    return (
        <>
            <main className='blog-main'>
                <h4 className="blog-main-above">Recent Post</h4>
                <h1 className="h1-title">Navigating the Future: Trends in Modern Coworking Spaces</h1>
                <div className="d-f jc-sb">
                    <div className="blog-main-details d-f">
                        <p className="blog-main-category">Trending</p>
                        <p className="subheading">7 Min Read</p>
                    </div>
                    <a href="" className="blog-main-read">Read The Articles</a>
                </div>
            </main>
            <div className="blog-control d-f">
                <div className="blog-tabs d-f">
                    <button
                        className={category === "All" ? 'tab-btn tab-btn__active' : 'tab-btn'}
                        onClick={() => setCategory("All")}
                    >
                        All Posts
                    </button>
                    <button
                        className={category === "Trending" ? 'tab-btn tab-btn__active' : 'tab-btn'}
                        onClick={() => setCategory("Trending")}
                    >
                        Trending
                    </button>
                    <button
                        className={category === "Productivity" ? 'tab-btn tab-btn__active' : 'tab-btn'}
                        onClick={() => setCategory("Productivity")}
                    >
                        Productivity
                    </button>
                    <button
                        className={category === "Lifestyle" ? 'tab-btn tab-btn__active' : 'tab-btn'}
                        onClick={() => setCategory("Lifestyle")}
                    >
                        Lifestyle
                    </button>
                    <button
                        className={category === "Talk" ? 'tab-btn tab-btn__active' : 'tab-btn'}
                        onClick={() => setCategory("Talk")}
                    >
                        Talk
                    </button>
                </div>
                <form action="" className="blog-search d-f jc-sb align-center">
                    <input type="text" name='searchQuery' placeholder='Search' />
                    <button type="button" className='btn-clear'>
                        <img src="/images/search.png" alt="search" />
                    </button>
                </form>
            </div>
            <div className="blog-content d-f jc-sb">
                {
                    BlogItemsList.filter((elem) => category === "All" || category === elem.category).map((post) => {
                        return (
                            <BlogItem
                                key={`post${post.id}`}
                                {...post}
                            />
                        )
                    })
                }
            </div>
            <div className="blog-pagination d-f">
                <button className='pagination-btn'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 19.5L7.5 12L15 4.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <button className='pagination-btn pagination-btn__active'>1</button>
                <button className='pagination-btn'>2</button>
                <button className='pagination-btn'>3</button>
                <button className='pagination-btn'>4</button>
                <button className='pagination-btn'>5</button>
                <button className='pagination-btn'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19.5L16.5 12L9 4.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
            <div className="blog-cta">
                <Cta />
            </div>

        </>
    )
}

export default Blog