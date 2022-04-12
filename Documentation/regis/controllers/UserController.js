const bcrypt = require('bcrypt')
//(1) bcrypt//
const User = require('../models/User')
//(2) require()//
module.exports = {
    async store(req,res){
        //3)req,res//
        try{
            const{email,firstName,lastname,password} = req.body

            const existentUser = await User.findOne({email})
            //(4)await
            if(!existentUser){
                const hashPassword = await bcrypt.hash(password,10)
                //(5)hash //
                const user = await User.create({
                    email,
                    firstName,
                    lastname,
                    password:hashPassword,

                })
                return res.json(user)

            }
            return res.status(400).json({
                message:
            'email alrady exist! do you want to login instead?',
            })
        } catch(err){
            // throw Error(`Error while Registering new user: ${err}`)
            console.log(err)

        }
    },
}