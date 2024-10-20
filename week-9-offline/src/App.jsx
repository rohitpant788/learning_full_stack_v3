function App() {

  const appComponentSyle = {
    backgroundColor: "#dfe6e9",
    height: "100vh"
  }

  return (
    <div style={appComponentSyle}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            <br/>
            <PostComponent />
            <br/>
          </div>
          <div>
            <PostComponent />
            <br/>
          </div>
          <div>
            <PostComponent />
          </div>
        </div>
      </div>
    </div>
  )
}

//In React we create an object for styling and pass this in style {} 
const postComponentStyle = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  padding: 20
}

const imgStyle = {
  width: 30,
  height: 30,
  borderRadius: 200
}

const textHeaderStyle = {
  fontSize: 10,
  marginLeft: 10
}

const textPostStyle = {
  fontSize: 12
}

function PostComponent() {

  return (
    <div style={postComponentStyle}>

      <div style={{ display: "flex" }}>
        <img src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
          style={imgStyle}>
        </img>
        <div style={textHeaderStyle}>
          <b>100xdevs</b>
          <div>23,888 followers</div>
          <div>12m</div>
        </div>

      </div>

      <div style={textPostStyle}>
        What to know how to win big ? Check out how these folks won $6000 in bounties.
      </div>
    </div>
  )
}

export default App
