const { check, validationResult } = require("express-validator");

exports.registervlidztion=()=>[
    check("username","usernamerequired!!").notEmpty(),
    check("email","email required!!").isEmail(),
    check("password","pass required min 5!!").isLength({min:5})
]
exports.vaalidator=(req,res,next)=>{

    const errors=validationResult(req)
    errors.isEmpty()?next():res.status(400).send(errors.array())
}