import './signup.css'
import Footer from '../components/footer'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useEffect } from 'react'



export default function Signup() {
    
    async function handleSubmit(event) {
        event.preventDefault();
        window.alert("EVENT HANDLER FIRED")
        const form = event.target;

        const formData = new FormData(form)

        await fetch("/api/signup", {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                firstName: formData.get("first_name"),
                lastName: formData.get("last_name"),
                email: formData.get("email"),
                password: formData.get("password")
                })
            })
            .then(response => response.json())
            .then(data => console.log(data))
    }



    return (
        <>
            <div className="signup-form-max">

                <form className='signup-form' onSubmit={handleSubmit}>
                    <h1>Welcome!</h1>
                    <p className='subhead'>Create a 1DE account</p>

                    <label htmlFor="firstNameBox">Name</label>
                    <input type="text" id="firstNameBox" placeholder='First name' name='first_name' aria-label='First Name'/>
                    <input type="text" id="lastNameBox" placeholder='Last name' name='last_name' aria-label='Last Name'/>

                    <br />
                    
                    <label htmlFor="emailBox">Email</label>
                    <input type="text" id="emailBox" placeholder='Your @ualberta email here' name='email' aria-label='email'/>

                    <br />

                    <label htmlFor="passwordBox">Password</label>
                    <input type="password" id="passwordBox" placeholder='Create a password' name='password' aria-label='password'/>

                    <br />


                    <button className='signup-option-button' type="submit">Continue</button>

                    <h3>Or</h3>

                    {/* Oauth signup */}

                    <button className='signup-option-button' >Continue with Google</button> 
                
                </form>


                <p>Already have an account? <Link to="/login-page">Login</Link></p>

            </div>

            <Footer />
        </>
    )
}