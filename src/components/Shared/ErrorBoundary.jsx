import { Component } from "react";

import Error from '../Shared/Error';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }

  render() {
    if (this.state.hasError) {
      return <Error />
    }

    return this.props.children;
  }
}

export default ErrorBoundary