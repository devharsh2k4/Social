const userServices = require('../services/userService')
const validationHelpers = requireq ('../helpers/validationHelpers')

exports.userSignup =async  (req,res)=>{
try {
    const requiredFields = ['username','email','password',]
    const validation = validationHelpers.validation(requiredFields,req.body)

    if(Object.keys(validation).length){
        return res.json({
            success: false,
            status:400,
            message: validation,
            result:{}
        })
    }
    const add_user = await userServices.userSignup(req.body)
    .userSignup(req.body)

    return res.json(add_user);
} catch (err) {
    console.log(err)
    return res.status(500).json({
        message: error.message
    })
    
}
}


    
