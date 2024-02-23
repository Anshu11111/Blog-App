import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import "./Blogs.css"


const Blogs=()=> {
  const {posts,loading}=useContext(AppContext);
  return (
    <div>
     {
      loading?
      (<Spinner/>):
      (
        posts.length===0 ?
        (<div>
          <p>No post found</p>
        </div>):
        (posts.map((post)=>(
          <div >
            <p className='title'>{post.title}</p>
            <p>
              By <span>{post.author}</span> on <span>{post.category}</span>
            </p>
            <p>Posted on {post.date}</p>
            <p>{post.content}</p>
            <div className='tag'>
              {post.tags.map((tag,index)=>{
                return <span key={index}>{`#${tag}`}</span>
              })}
            </div>
          </div>
        )))
      )
     }
      </div>
  )
}

export default Blogs