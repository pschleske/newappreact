// Import your packages
import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";
import session from 'express-session'
// Set up app instance 
const app = express();
// Set up middleware 
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.json());
app.use(session({
    secret: 'helloworld',
    saveUninitialized: false,
    resave: false
}))
// Set up routes/endpoints here 

// Open up door to server
ViteExpress.listen(app, 4545, () => console.log("Listening on port 4545. Go to http://localhost:4545"))
