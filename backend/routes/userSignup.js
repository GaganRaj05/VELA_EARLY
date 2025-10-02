const handleSignUp = require("../controllers/userSignup");
const express = require('express');
const rateLimit = require('express-rate-limit');
const router = express.Router();

const limiter = rateLimit({
    windowMs:10*60*10000,
    max:20,
    message: {
        status:429,
        success:false, msg:"Resource Rate Limited"
    },
    standardHeaders:true,
    legacyHeaders:false,
})


router.post('/early-signup',limiter, handleSignUp);

module.exports = router;