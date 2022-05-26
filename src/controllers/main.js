 const login= async(req,res)=>{
     res.send("Fake Login/Register/Sign up route")
 }

 const dashboard=async(req,res)=>{
     const luckyNumber=Math.floor(Math.random()*100);
     res.status(200).json({msg:`Hello,Lorna Akoth`,secret:`Here is your authorised information,your lucky number is ${luckyNumber}`})
 } 

 module.exports={login,dashboard}