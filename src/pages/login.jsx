import './login.css'
import Footer from '../components/footer'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

export default function Login() {
    
    async function handleSubmit (event) {
        window.alert("EVENT HANDLER FIRED")
        const form = event.target
        const formData = new FormData(form)

        const payload = {
            email: formData.get("email"),
            password: formData.get("password")
        }

        await fetch("/api/login", {
            method: "POST",
            headers: {"Content-type": "applications/json"},
            body: payload
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }
    
    return (
        <>
            <div className="login-form-max">

                <form className='login-form' onClick={handleSubmit}>
                    <h1>Welcome back</h1>
                    <p className='subhead'>Sign in to your 1DE account</p>

                    <label htmlFor="emailBox">Email</label>
                    <input type="text" id="emailBox" placeholder='johndoe@ualberta.ca' name='email' aria-label='email'/>

                    <br />

                    <label htmlFor="passwordBox">Password</label>
                    <input type="password" id="emailBox" placeholder='Enter your password' name='password' aria-label='password'/>

                    <br />

                    <button className='login-option-button' type="submit">Login</button>

                    <h3>Or</h3>

                    {/* Oauth Login */}

                    <button className='login-option-button' type="submit">Login it with Google</button>
                
                </form>


                <p>Don't have an account? <Link to="/sign-up">Sign up </Link></p>

            </div>

            <Footer />
        </>
    )
}