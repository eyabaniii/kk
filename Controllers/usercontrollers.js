const  jwt = require("jsonwebtoken");
const user = require("../Models/usermodel");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;
    const finduser = await user.findOne({ username });
    if (!finduser) {
      const newuser = new user({ username, email, password, phone });
      const salt = 10;
      const hashedpass = await bcrypt.hash(password, salt);
      newuser.password = hashedpass;

      await newuser.save();
      const token=jwt.sign({id:newuser._id},process.env.SECRET_KEY)
      res.status(200).send({ msg: "register successfully!", newuser,token });
    } else {
      res.status(400).send({ msg: "uszrname already exists" });
    }
  } catch (error) {
    res.status(500).send({ msg: "cannot register ", error });
  }
};
exports.favoritesMovies = async (req, res) => {

    try {    const {userId }= req.params;
        const{_id,Title,Description,PosteUrl,Rate,Trailer}=req.body
    

        const userf = await user.findById(userId);
       
        userf.favoris.push({_id,Title,Description,PosteUrl,Rate,Trailer});

        await userf.save()
        res.status(200).send({msg:"Movie added successfully!",userf})
    } catch (error) {
        res.status(400).send({msg:"cannot add Movie",error})
    }
}
  
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const finduser = await user.findOne({ email });
    const checkpass = await bcrypt.compare(password, finduser.password);

    if (!finduser) {
      res.status(400).send({ msg: "uszrname not found " });
    } else if (!checkpass) {
      res.status(400).send({ msg: "password incoreect" });
    } else {
        const token=jwt.sign({id:finduser.id},process.env.SECRET_KEY)
      res.status(200).send({ msg: "logged successfully!", finduser,token });
    }
  } catch (error) {
    res.status(500).send({ msg: "error on login", error });
  }
};

exports.deleteuser = async (req, res) => {
  try {
    const { _id } = req.params;
    await user.findByIdAndDelete({ _id });
    res.status(200).send({ msg: "deleted successfully!" });
  } catch (error) {
    res.status(400).send({ msg: "error on delete user", error });
  }
};

exports.upuser = async (req, res) => {
  try {
    const { _id } = req.params;
    const newuser = req.body;
    const users = await user.updateOne({ _id }, { $set: newuser });
    //user.findByIdAndUpdate({_id},newuser)
    res.status(200).send({ msg: "user updated successfully!", users });
  } catch (error) {
    res.status(400).send({ msg: "error on updating user!", error });
  }
};
