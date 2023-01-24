import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  /*  componentDidCatch(error) {
    this.setState({
      error: error,
    });
  } */

  render() {
    const { error } = this.state;
    console.log(error);
    if (error) {
      return <this.props.FallbackComponent error={error} />;
    }

    return this.props.children;
  }
}

export function ErrorFallback({ error }) {
  console.log(error);
  return (
    <div>
      <p>Something went wrong</p>
      <pre>{error.message ? error.message : "sorry for the wrong"}</pre>
    </div>
  );
}
