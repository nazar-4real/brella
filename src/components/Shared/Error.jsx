import errorImg from '../../assets/images/error.gif';

const styles = {
  margin: '0 auto',
  display: 'block'
}

const Error = () => {
  return (
    <img
      className="error-img"
      src={errorImg}
      alt="Error"
      style={styles} />
  )
}

export default Error;