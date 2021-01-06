const express = require("express");
const app = express();
const users1 = require('./Users')
const Path = require('path')
const bodyParser = require('body-parser')
const PORT = 4000
app.use(bodyParser.urlencoded({ extended: true }))

// app.get("/",(req,res)=> {
//     res.send("home")
// })

let users = [{ name: 'ramsha', id: 1, email: 'ram@g.com', password: '123' }]

app.get('/api/users1', (req, res) => {
    res.json(users1)
})
app.get('/api/users1/:id', (req, res) => {
    let id = parseInt(req.params.id)
    console.log(id)
    let result = users1.filter((item) => item.id == id)
    res.json(result[0])
})
/* 
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
                res.redirect('/signin')

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
 */
app.listen(process.env.PORT || 3000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
