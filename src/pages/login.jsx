import {supabase} from '../../supabaseClient.js'
import './login.css'
import Footer from '../components/footer'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

export default function Login() {
    
    async function handleSumbit (formData) {
        // const email = formData.get("email")
        // const password = formData.get("password")

        const {data, error} = await supabase.auth.signInWithPassword({
            email: formData.get("email"),
            password: formData.get("password")
        })

        if (error) {
            console.error(error)
            return <h1>Error!</h1>
        }

        return(
            <h1>Welcome back</h1>
        )
    }

    
    return (
        <>
            <div className="login-form-max">

                <form className='login-form' action={handleSumbit}>
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