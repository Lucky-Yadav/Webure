const userModel = require("../Models/user")
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
    
    // const { username, email, password } = res.body;

    // try {
    //     const isuserexist = await userModel.findOne({ email: email })
    //     if (isuserexist) {
    //         return res.status(400).json
    //     }
    //     const result = await userModel.create({
    //         email: email,
    //         password: password,
    //         username:username
    //     })

    //     const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    //     res.status(201).json({user : result,})
    // } catch (error) {
        
    // }
    res.send("signup")
    
};
const signin = (req, res) => {
  res.send("signin");
};


module.exports = {signin,signup};