const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.status(200).json(
        [
            {'jobName':'Job 1','version':'1.0.10', 'status':'OK', 'lastRunning':'17.05.2020 - 01:00', 'nextRunning':'18.05.2020 - 01:00', 'expand':false, 'running':true, 'runtime':'00:00:25', 'totalRun': '321'},
            {'jobName':'Job 2','version':'1.0.1', 'status':'Fehler', 'lastRunning':'19.05.2020 - 01:00', 'nextRunning':'28.05.2020 - 12:00','expand':false, 'running':false, 'runtime':'', 'totalRun': '176'},
            {'jobName':'ETL-Starter-Gesamt','version':'1.1.5', 'status':'OK', 'lastRunning':'25.05.2020 - 01:00', 'nextRunning':'31.05.2020 - 02:00','expand':false,'running':true,'runtime':'00:01:47', 'totalRun': '562' },
            {'jobName':'Job 3','version':'2.1.7', 'status':'OK', 'lastRunning':'23.05.2020 - 01:00', 'nextRunning':'02.06.2020 - 04:00','expand':false,'running':true,'runtime':'00:00:50', 'totalRun': '97'}
        ]
    )
  
});

module.exports = router; 