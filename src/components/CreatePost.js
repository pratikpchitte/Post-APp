import React from 'react'

function CreatePost() {
  return (
    <div className="container my-3">
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Post</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Comment (Optional)</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Create Post</button>
</form>
    </div>
  )
}

export default CreatePost
