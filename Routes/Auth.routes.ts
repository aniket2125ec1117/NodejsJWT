const express1 = require('express');
const router = express1.Router(); 


router.post('/register' , async(req:any , res:any , next:any)=>{
    res.send("register route");
})

router.post('/login', async (req:any , res:any , next:any)=>{
    res.send('login route')
})

router.post('/refresh-token' , async (req:any,res:any,next:any)=>{
    res.send('Refresh token route')
})

router.delete('/logout', async(req:any,res:any,next:any)=>{
    res.send('logout route')
})

module.exports = router;