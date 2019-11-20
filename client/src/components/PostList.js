import React from "react"
import { usePosts } from "../hooks"
import { Link } from "react-router-dom"
import "../styles/PostList.css"

const PostList = props => {
  const posts = usePosts(props.match.params.slug)

  return (
    <div>
      <h1>Posts</h1>
      <Link to={`/${props.match.params.slug}/post`}>Add Post</Link>
      {posts.map((post, i) => (
        <p key={i}>
          <Link to={`/post/${post.id}`}>{post.name}</Link>
        </p>
      ))}
    </div>
  )
}

export default PostList
