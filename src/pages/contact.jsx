import { Input, Textarea } from "../components/forms"
import { Footer } from "../components/footer"
import { useState } from "react"


export const Contact = () => {

    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isChecked, setChecked] = useState(false)

    const [first_name_err, setFirstNameErr] = useState("")
    const [last_name_err, setLastNameErr] = useState("")
    const [email_err, setEmailErr] = useState("")
    const [message_err, setMessageErr] = useState("")


    const handleSubmit = e => {
        e.preventDefault()

        if(first_name === ""){
            setFirstNameErr("Firstname should not be blank")
            
        }

        if(last_name === ""){
            setLastNameErr("Lastname should not be blank")
        }

        if(email === ""){
            setEmailErr("Email should not be blank")
        }
        if(message === ""){
            setMessageErr("Message should not be blank")
        }


        if(first_name !== "" && last_name !== "" && email !== "" && message !== "" && isChecked !== true){
            console.log("fine!!")
            return
        }


    }

    

    return (
        <div id="contact_outer_container">
             <div id='contact_container'>
                <div className="contact_header">
                    <h3>Contact Me</h3>
                    <p>Hi there, contact me to ask me about anything you have in mind.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form_control_1">
                        <Input id="first_name" placeholder="Enter your first name" value={first_name}  type="text" label="First name"  error={first_name_err} change={setFirstName} setError={setFirstNameErr}  />
                          <Input id="last_name" placeholder="Enter your last name" value={last_name} type="text" label="Last name" error={last_name_err}  change={setLastName}   setError={setLastNameErr}  />
                    </div>
                    <div className="form_control_2">
                        <Input id="email" placeholder="yourname@email.com" value={email} type="email" label="Email" error={email_err} change={setEmail} setError={setEmailErr}    />
                    </div>
                    <div className="form_control_3">
                        <Textarea id="message" placeholder="Send me a message and I'll reply you as soon as possible..."  value={message} error={message_err} change={setMessage} setError={setMessageErr}  label="Message" />
                    </div>
                    <div className="agreement">
                        <input type="checkbox"/>
                        <span>You agree to providing your data to D_normal_1 who may contact you.</span>
                    </div>
                    <button id="btn__submit" >Send message</button>
                </form>
            </div>
            <Footer />
        </div>
    )

}