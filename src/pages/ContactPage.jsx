import CustomHelmet from 'src/components/shared/CustomHelmet'

import Section from 'src/components/shared/Section'
import SectionSubtitle from 'src/components/shared/SectionSubtitle'
import FormField from 'src/components/shared/FormField'

const ContactPage = () => {
  return (
    <>
      <CustomHelmet title="Contact" />

      <Section className="contact">
        <mark style={{ padding: '30px', display: 'block', width: 'fit-content', margin: '0 auto 20px' }}>Under development...</mark>

        {/* <SectionSubtitle subtitleText="Contact" />
        <p className="main-text">
          Give us your contact details and we will contact you as soon as possible
        </p>
        <form className="contact__form">
          <FormField
            name="text"
            placeholder="Enter your name"
          />
          <FormField
            type="email"
            placeholder="Enter your email"
          />
          <label className="form-label">
            <textarea
              className="contact__form-textarea"
              placeholder="Enter your comment"
            ></textarea>
          </label>
          <button className="main-link contact__form-submit">
            Submit form
          </button>
        </form> */}
      </Section>
    </>
  )
}

export default ContactPage