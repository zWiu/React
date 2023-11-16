import { useState } from 'react'
import Style from './App.module.css'
import Post from './components/Post'
import PostForm from './components/Form'

function App() {
  const [post, setPost] = useState(() => {
    const storedPosts = localStorage.getItem('obc-post-lib')

    if (!storedPosts) return []

    return JSON.parse(storedPosts)
  })

  const addPost = ({ email, coment }) => {
    const id = Math.floor(Math.random() * 1000000)
    const createdAt = new Date()
    const post = { id, email, coment, createdAt }

    setPost(state => {
      const newState = [...state, post]

      localStorage.setItem('obc-post-lib', JSON.stringify(newState))

      return newState
    })
  }
  return (
    <div className={Style.page}>
      <div className={Style.container}>
        <div className={Style.title}>
          <h2>Seção de Comentários</h2>
        </div>
        <PostForm
          addPost={addPost}
        />
        
        {post.length > 0 ?
        <div className={Style.post}>
          {  
          (post.map((post) => (
          <Post
              key={post.id}
              email={post.email}
              coment={post.coment}
              date={post.createdAt}
            />
            
          )))}
          </div> : (
            <p>Seja o primeiro a comentar</p>
          )}
          
      </div>
    </div>
  )
}

export default App
