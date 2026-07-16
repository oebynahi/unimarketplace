import express from "express"
import {Client} from "pg"
import 'dotenv/config'

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


//1.) BROWSE LISTINGS GET ROUTE
app.get("/api/browse-listings", async (req, res) => {
    try {
        let result = await db.query("SELECT * FROM listings;")
        console.log(result.rows)
        res.json(result.rows)
    } catch (error) {
        console.log("############ERROR############", error)
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