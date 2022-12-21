import { Component } from 'react';
import Error from '../Shared/Error';

class ErrorBoundary extends Component {
  state = {
    error: null,
    errorInfo: null
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({
      error,
      errorInfo
    })
  }

  render() {
    if (this.state.error) {
      return (
        <section className="error">
          <strong style={{ textAlign: 'center', display: 'block' }}>
            There was an error in your application
          </strong>
          <Error />
        </section>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;