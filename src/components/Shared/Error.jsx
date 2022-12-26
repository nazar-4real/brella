import errorImg from '../../assets/images/error.gif';

const styles = {
  display: 'block',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
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