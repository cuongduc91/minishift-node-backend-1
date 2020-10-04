const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.status(200).json(
        [
            {'imageNo':'0','imageName':'fida-dwh-cron'},
            {'imageNo':'1','imageName':'fida-npm-registry'},
            {'imageNo':'2','imageName':'fida-dwh-frontend'},
            {'imageNo':'3','imageName':'fida-dwh-postgres'},
            {'imageNo':'4','imageName':'fida-dwh-postgres-dev'},
            {'imageNo':'5','imageName':'fida-covid19-simulator'},
            {'imageNo':'6','imageName':'fidadwh_etl_starter_all'},
            {'imageNo':'7','imageName':'filebeat-elk_filebeat_1'},
            {'imageNo':'8','imageName':' filebeat-elk_logstash_1'},
            {'imageNo':'9','imageName':'filebeat-elk_kibana_1'},
            {'imageNo':'9','imageName':'filebeat-elk_elasticsearch_1'},
            {'imageNo':'9','imageName':'huk-ma-web-login-stub'}
        ]
    )
  
});

module.exports = router;