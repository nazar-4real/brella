import Section from "./Section"
import Button from "./Button"

const Confirm = () => {
  return (
    <Section className="confirmed" style={{ textAlign: 'center' }}>
      <div style={{ marginBottom: '20px' }}>You request has been confirmed. Thank you!</div>
      <Button text='Back to homepage' reference='/' />
    </Section>
  )
}

export default Confirm