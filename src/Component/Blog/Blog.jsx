import React from 'react'
import './Blog.css';

const Blog = () => {
  return (
    <section className="blog container section" id='blog'>
      <h2 className="section __title">My Recent Article</h2>
      <a target="_blank"  href="https://github-readme-medium-recent-article.vercel.app/medium/@jielim36/0"><img className='article' src="https://github-readme-medium-recent-article.vercel.app/medium/@jielim36/0" alt="Recent Article 0"/></a>
      <a target="_blank"  href="https://github-readme-medium-recent-article.vercel.app/medium/@jielim36/1"><img className='article' src="https://github-readme-medium-recent-article.vercel.app/medium/@jielim36/1" alt="Recent Article 1"/></a>
      <a target="_blank"  href="https://github-readme-medium-recent-article.vercel.app/medium/@jielim36/2"><img className='article' src="https://github-readme-medium-recent-article.vercel.app/medium/@jielim36/2" alt="Recent Article 2"/></a>

    </section>
  )
}

export default Blog