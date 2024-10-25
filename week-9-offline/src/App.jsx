import React from "react";

function App() {

  return <div>
    <ErrorBoundary>
      <Card1></Card1>
    </ErrorBoundary>
    <Card2></Card2>
  </div>
}

function Card1() {
  throw new Error

  return <div>
    Card 1 says hello!
  </div>
}

function Card2() {
  return <div>
    Card 2 says hello!
  </div>
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
export default App