import styled from 'styled-components';

import errorImg from 'src/assets/images/error.gif';

const Img = styled.img`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 50vh;
  width: 100%;
  height: 50vh;
`;

const Error = () => (
  <Img
    className="error-img"
    src={errorImg}
    alt="Error" />
)

export default Error;