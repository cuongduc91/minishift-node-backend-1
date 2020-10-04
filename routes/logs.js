const express = require('express');
const router = express.Router();
// const { database } = require('./../config/helpers')
/* GET home page. */
router.get('/', function(req, res) {
    res.status(200).json(
        [
            {'id':0,'start':'00:00:00', 'end':'00:00:10','status':'success'},
            {'id':1,'start':'00:00:30', 'end':'00:00:40','status':'success'},
            {'id':2,'start':'00:00:40', 'end':'00:00:50','status':'success'}
        ]
    )
 
});

module.exports = router;