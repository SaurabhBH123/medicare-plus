const jwt = require("jsonwebtoken");

const authenticated = (req,res,next)=> {
    const token = req.headers.authorization.split(" ")[1];
    
    try {
        jwt.verify(token, 'subodh', (err, decoded) => {
           if(decoded){
             for(let i=0; i<req.body.length; i++){
                req.body[i].userID = decoded.userID;
             } 
             next();
           }else{
               res.status(400).send({"msg":"error occured"})
           }
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({"msg":"error occured"});
    }
}

module.exports = {authenticated};