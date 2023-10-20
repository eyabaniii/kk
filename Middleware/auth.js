const  jwt = require("jsonwebtoken");
const usermodel = require("../Models/usermodel");

const auth = async (req, res,next) => {
  try {
    const token = req.headers['authorization'];
if (!token) {
    res.status(400).send( "not authorzsed " );
}
const decodedtoken =  jwt.verify(token,process.env. SECRET_KEY)
const finduser = await usermodel.findOne({ id:decodedtoken.id });
if (!finduser) {
    res.status(400).send( "not authorzsed " );
}
req.user=finduser;


    
   
next();
}
    
     catch (error) {
    res.status(401).send({ error });
  }

}
module.exports =auth