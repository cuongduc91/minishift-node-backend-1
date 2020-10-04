const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.status(200).json(
        [
            
            {'name':'Lokal','server':'fida.local.de', 'user':'Admin1','port':22, 'lastChanged':'17.07.2020 15:25'},
            {'name':'HUK','server':'huk.corburg.de', 'user':'Admin2','port':8080, 'lastChanged':'18.07.2020 11:37'},
            {'name':'Alianz','server':'alianz.de', 'user':'Superuser','port':80, 'lastChanged':'13.07.2020 17:25'},
            {'name':'local','server':'somewhere.de', 'user':'Admin','port':3000, 'lastChanged':'17.06.2020 19:25'}
        ]
    )
  
});

module.exports = router;