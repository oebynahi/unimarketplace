import {supabase} from '../../supabaseClient.js'
import './signup.css'
import Footer from '../components/footer'


export default function Signup() {
    
    async function handleSumbit (formData) {
        // const email = formData.get("email")
        // const password = formData.get("password")

        const {data, error} = await supabase.auth.signUp({
            email: formData.get("email"),
            password: formData.get("password"),
            options : {
                display_name: `${formData.get("first_name")} ${formData.get("last_name")}`
            }
        })

        if (error) {
            console.error(error)
            return <h1>Error!</h1>
        }

        const {error2} = await supabase.from('users').insert({
            first_name: formData.get("first_name"),
            last_name: formData.get("last_name"),
            email : formData.get("email")
        })

        if (error2) {
            console.error(error2)
            return <h1>Error!</h1>
        }

        return(
            <h1>Welcome back</h1>
        )
    }

    
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


                <p>Already have an account? <a href="">login</a></p>

            </div>

            <Footer />
        </>
    )
}