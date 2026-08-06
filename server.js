import express from "express"
import {Client} from "pg"
import 'dotenv/config'
import passport from "passport"
import bcrypt from "bcrypt"
import session from "express-session"


const sessionOptions = {
    secret : process.env.SECRET,
    resave : true,
    saveUninitialized : true,
    cookie: {
        expires:3600000 * 24
    }
}

const app = express()
const db = new Client({
    user:"postgres",
    password:process.env.DB_PASSWORD,
    host:"localhost",
    port:5433,
    database:"1de"
})

await db.connect()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(session(sessionOptions));



//AUTH ROUTES
app.post("/api/login", async (req, res) => {
    console.log("logging in!")
})



app.post("/api/signup", async (req, res) => {
    const saltRounds = 12

    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        if(err) {
            console.error(err)
            return;
        }
        console.log(hash)
        
        try {
            const response = db.query("INSERT INTO users (firstname, lastname, email, password_hash) VALUES ($1, $2, $3, $4)", [req.body.firstName, req.body.lastName, req.body.email, hash])
            res.json(response.rows)

            req.session.save(() => {
                req.session.loggedIn = true
            })

            console.log(req.session)
        } catch (error) {
            console.log("############ERROR############\n", error)
            return ;
        }
    })
})



//1.) BROWSE LISTINGS GET ROUTE
app.get("/api/browse-listings", async (req, res) => {
    try {
        let result = await db.query("SELECT * FROM listings;")
        console.log(result.rows)
        res.json(result.rows)
    } catch (error) {
        console.log("############ERROR############\n", error)
        return ;
    }

})


///2.) CREATE LISTING POST REQUEST
app.post("/api/create-listing", async (req,res) => {
    try {
        console.log(req.body)
        let result = await db.query(`INSERT into listings (title, price, description, listerid, pickup_location, imagelink) VALUES ($1, $2, $3, $4, $5, $6)`,[req.body.itemTitle, req.body.itemPrice, req.body.itemDescription, 2, req.body.pickupAddress, "image"])
        console.log(result.rows)
        res.json(result.rows)
    } catch (error) {
        console.log("############ERROR############", error)
        return ;
    }

})


app.get("/", (req, res) => {
    res.send("connection successful my friend")
})


app.listen(3000, (req,res) => {
    console.log("Backend is running on port 3000")
})