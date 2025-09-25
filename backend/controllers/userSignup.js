const User = require("../models/Users");

const handleSignUp = async (req, res) => {
    try {
        const {email, name} = req.body;
        const user = await User.findOne({email});
        if(user) return res.status(403).json({success:false, msg:"User exists"});
        await User.create({
            name,
            email
        })
        return res.status(200).json({success:true, msg:"User added successfully"});
    }
    catch(err) {
        console.log(err.message);
        return res.status(500).json({success:false, })
    }
}

module.exports = handleSignUp;