
import ContentMap from './contactComponents/ContentMap'
import ContentForm from './contactComponents/ContentForm'
import ContactDetails from './contactComponents/ContactDetails'

const ContactContent = () => {
  return (
    <>
                <div className='contact-content'>
                    <ContentMap />
                    <div className='contact-wrabber row justify-content-between'>
                        <ContentForm />
                        <ContactDetails />
                    </div>
                </div>
    </>
  )
}

export default ContactContent