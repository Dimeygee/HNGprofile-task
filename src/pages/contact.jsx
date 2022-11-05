import { Input, Textarea } from "../components/forms"
import { Footer } from "../components/footer"


export const Contact = () => {

    return (
        <div id="contact_outer_container">
             <div id='contact_container'>
                <div className="contact_header">
                    <h3>Contact Me</h3>
                    <p>Hi there, contact me to ask me about anything you have in mind.</p>
                </div>
                <form>
                    <div className="form_control_1">
                        <Input id="first_name" placeholder="Enter your first name" type="text" label="First name" />
                        <Input id="last_name" placeholder="Enter your last name" type="text" label="Last name" />
                    </div>
                    <div className="form_control_2">
                        <Input id="email" placeholder="yourname@email.com" type="email" label="Email" />
                    </div>
                    <div className="form_control_3">
                        <Textarea id="message" placeholder="Send me a message and I'll reply you as soon as possible..."  label="Message" />
                    </div>
                    <div className="agreement">
                        <input type="checkbox" />
                        <span>You agree to providing your data to D_normal_1 who may contact you.</span>
                    </div>
                    <button id="btn__submit">Send message</button>
                </form>
            </div>
            <Footer />
        </div>
    )

}