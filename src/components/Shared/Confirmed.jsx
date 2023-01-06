import styled from "styled-components"

import Section from "./Section"
import Button from "./Button"

const Div = styled.div`
  margin-bottom: 20px;
`;

const Confirm = () => {
  return (
    <Section className="confirmed" style={{ textAlign: 'center' }}>
      <Div>You request has been confirmed. Thank you!</Div>
      <Button text='Back to homepage' reference='/' />
    </Section>
  )
}

export default Confirm