import { Component } from "react";

import Error from '../Shared/Error';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState((state) => ({
      ...state,
      error,
      errorInfo: errorInfo.componentStack
    }))
  }

  render() {
    if (this.state.hasError) {
      return <Error />
    }

    return this.props.children;
  }
}

export default ErrorBoundary