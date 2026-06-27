import './login.css'
import Footer from '../components/footer'
export default function Login() {
    return (
        <>
            <div className="login-form-max">

                <form action="login">
                    <h1>Welcome back</h1>
                    <p className='subhead'>Sign in to your 1DE account</p>

                    <label htmlFor="emailBox">Email</label>
                    <input type="text" id="emailBox" placeholder='johndoe@ualberta.ca' name='email' aria-label='email'/>

                    <br />

                    <label htmlFor="passwordBox">Password</label>
                    <input type="text" id="emailBox" placeholder='Enter your password' name='password' aria-label='password'/>

                    <br />

                    <button type="submit">Login</button>

                    <h3>Or</h3>

                    {/* Oauth Login */}

                    <button type="submit">Login it with Google</button>
                </form>

                <p>Don't have an account? <a href="">Sign up</a></p>

            </div>

            <Footer />
        </>
    )
}