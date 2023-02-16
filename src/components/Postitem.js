import React from 'react'

const Postitem = (props) => {
    const {post}=props;
  return (
    <div className="container my-3">
      <div className="card">
  <div className="card-header">
    Post
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>{post.posti}</p>
      
      {post.comment.map((comment)=>{
        return(
        <footer className="blockquote-footer">{comment}</footer>
        )
      })}
      <i className="fa-regular fa-pen-to-square mx-3"></i>
      <i className="fa-solid fa-trash-can mx-3"></i>
    </blockquote>
  </div>
</div>
    </div>
  )
}

export default Postitem
