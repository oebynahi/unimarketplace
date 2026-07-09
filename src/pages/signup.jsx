import './signup.css'
import Footer from '../components/footer'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'


export default function Signup() {
    
    
    return (
        <>
            <div className="signup-form-max">

                <form className='signup-form' action={handleSumbit}>
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

                    <button className='signup-option-button' type="submit">Continue with Google</button>
                
                </form>


                <p>Already have an account? <Link to="/login-page">Login</Link></p>

            </div>

            <Footer />
        </>
    )
}