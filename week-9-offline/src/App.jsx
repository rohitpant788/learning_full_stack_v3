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
            <br />
            <PostComponent
              name={"Harkirat"}
              subTitle={"20 followers"}
              time={"2m ago"}
              image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
              description={"What to know how to win big ? Check out how these folks won $6000 in bounties."} />
            <br />
          </div>
          <div>
            <PostComponent
              name={"Raman"}
              subTitle={"Promoted"}
              image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
              description={"How to get hired in 2024? I lost my job in 2023 , this is the roadmap I followed to get a job"} />
            <br />
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

function PostComponent({ name, subTitle, time, image, description }) {

  return (
    <div style={postComponentStyle}>

      <div style={{ display: "flex" }}>
        <img src={image}
          style={imgStyle}>
        </img>
        <div style={textHeaderStyle}>
          <b>{name}</b>
          <div>{subTitle}</div>

          {/* Conditionally Rendering this part only if time is present.  */}
          {(time != undefined)? <div style={{ display: "flex" }}>
              <div>{time}</div>
              <img src={"data:image/png;base64,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"}
                style={{ width: 10, height: 10 }}></img>
            </div> : null
          }

        </div>

      </div>

      <div style={textPostStyle}>{description}
      </div>
    </div>
  )
}

export default App
