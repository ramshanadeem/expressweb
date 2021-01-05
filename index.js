const express = require("express");
const app = express();
const Path = require('path')
const bodyParser = require('body-parser')
const PORT = 4000
app.use(bodyParser.urlencoded({ extended: true }))

// app.get("/",(req,res)=> {
//     res.send("home")
// })

let users = [{ name: 'ramsha', id: 1, email: 'ram@g.com', password: '123' }]
app.get('/', (req, res) => {
    res.sendFile(Path.join(__dirname, 'public', 'Home.html'))
})
app.get('/aboutus', (req, res) => {
    res.sendFile(Path.join(__dirname, 'public', 'About.html'))
})

app.get('/contactus', (req, res) => {
    res.sendFile(Path.join(__dirname, 'public', 'Contact.html'))
})

//sb ka path get krny k liy static express
app.use(express.static(Path.join(__dirname, 'public')))



app.get("/signup", (req, res) => {
    res.sendFile(Path.join(__dirname, 'registration', 'signup.html'))
})
app.post("/signup", (req, res) => {
    // res.send(req.body)
    let { email, name, password } = res.send
    let found = users.some((item) => item.email == email)
    if (found) {
        res.send("user already exist")
    }
    else {
        users.push({ name, email, password, id: users.length + 1 })
        res.sendFile(Path.join(__dirname, 'registration', 'signin.html'))
    }

})

app.get("/signin", (req, res) => {
    res.sendFile(Path.join(__dirname, 'registration', 'signin.html'))
})
app.post("/signin", (req, res) => {
    //res.send(req.body)
    let { email, password } = res.send
    let found1 = users.some((item) => item.email == email && item.password == password)
    if (found1) {
        res.sendFile(Path.join(__dirname, 'registration', 'signin.html'))
    }
    else {
        users.push({ email, password })
        //  res.send("jhsdjkas")
        res.redirect('/Home.html')
    }
})
app.listen(PORT, (req, res) => {
    console.log('Running at', PORT)
})