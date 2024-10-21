import { useState } from "react"
import { PostComponent } from "./Post"

function App() {

  const [posts, setPosts] = useState([])

  //[<PostComponent>]
  const postComponent = posts.map(post => <PostComponent 
    name={post.name}
    subTitle={post.subTitle}
    time={post.time}
    image={post.image}
    description={post.description}
  />)

  const appComponentSyle = {
    backgroundColor: "#dfe6e9",
    height: "100vh"
  }

  function addPost(){
    setPosts([...posts,    {
      name : "harkirat",
      subTitle : "10000 followers",
      time : "2m ago",
      image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description: "What to know how to win big ? Check out how these folks won $6000 in bounties."
    }])
  }

  return (
    <div style={appComponentSyle}>
      <button onClick={addPost}>Add Post</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            {postComponent}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App