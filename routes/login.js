const express = require('express');
const router = express.Router();

const users = [
    {'id':0,'username':'kormann', 'password':'1234'},
    {'id':1,'username':'luther', 'password':'1234'},
    {'id':2,'username':'panzer', 'password':'1234'}
]
router.get('/', function(req, res) {
    res.status(200).json(
        [
            {'id':0,'username':'kormann', 'dept':'DWH', 'password':'1234', 'visit':786, 'online': true},
            {'id':1,'username':'luther','dept':'DWH', 'password':'1234', 'visit':579, 'online': false},
            {'id':2,'username':'panzer','dept':'Dev',  'password':'1234', 'visit':421, 'online': true}
        ]
    ) 
  
});
router.get('/:username',(req,res) => {
    let username = req.params.username;
    let found = false;
    users.forEach(usr => {
        if (usr.username === username) {
            res.status(200).json(usr);
            found = true;
        }
    })
    if (!found){
        res.json({message: `NOT FOUND`});
    }
    
})
module.exports = router;