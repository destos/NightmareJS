try {
    var nightmareJS = require('nightmarejs').nightmare({test:true});
} catch(e) {
    var nightmareJS = require('../lib/nightmare').nightmare({test:true});
}

nightmareJS.notifyCasperMessage = function(msg) {
    if(msg.type == 'statement') {
        console.log(msg.msg);
        console.log("Nightmare Server says hello.");
    }
    else if(msg.type == 'dateQuestion') {
        console.log(msg.msg);
        var d = new Date();
        nightmareJS.sendCasperMessage({ time: d.toString(), timeNow: d.getTime()});
    }
}
