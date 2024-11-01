const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const app = express();
const port = 3002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname))

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ELITELEARNING', { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log('Connected to MongoDB')
})
.catch((err)=>{
    console.error('Error connecting to MongoDB');
})

// Homepage route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/_1page.html');
});
// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', '_1page.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'loginpage.html'));
});

app.get('/books', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'books.html'));
});

app.get('/quizes', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'quizes.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'contact.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


    
    // Login route

    // Define User schema and model
const UserSchema = new mongoose.Schema({
    Username: String,
    class:Number,
    email: String,
    password: String
},
{
    timestamps:true
});

const User = mongoose.model('User', UserSchema);
    
    app.post('/login', async(req, res)=>{
    
    const{Username, Password } = req.body;
    
    try{ const user = await User.findOne({ Username});
    
    if (user && bcrypt.compareSync (Password, user.Password)) {
    
    req.session.user = user;
    
    res.redirect('/_2page.html'+ user.Username);
    
    } else { res.send('Invalid Usernane or Password');
    
    }
    
    } catch(err){
    
    console.error(err);
    
    res.status(500).send("Internal Server Error");
    
    }
    
    });

    //register route

app.post('/register',async (req, res)=>{

    const { Username, class, email, password } = req.body;
    
    try{
    const user = await User.findOne({email});
    if (!user) {
    
    const hashedPassword = bcrypt.hashSync (password, 8);
    
    const newUser = new User({Username,class,  email, password:hashedPassword});
    
    await newUser.save();
    
    res.redirect('/loginpage.html');
    
    }
    
    else{
    
    res.send("User exist!!");
    
    }
 } catch(error) {
    
    console.error(error);
    
    res.status(500).send('Internal server Error');
    
    }
    
    });
   