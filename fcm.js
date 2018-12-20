var FCM = require("fcm-push");

var f = new FCM('AAAAX45u88o:APA91bFv81016HatPElwBnenxRLwwxMp7-3Y-ksxUE-avEra79SYwrvlZ9aMVRLmLTT7C-RoHzXYxFOEBpFXKJsm1SUwiWJKRwHSQXYuBjS-nLZuw_X36QGIimDw2uN1RFH1Q0B73e-a');

var mess = {
    to:'dV-s0JWmA.....',
    collapse_key:'openWEB',
    notification:{
        icon:'https://yt3.ggpht.com/-zfMJtuNbQMM/AAAAAAAAAAI/AAAAAAAAAAA/p_fKn_o7STk/s176-c-k-no-mo-rj-c0xffffff/photo.jpg',
        title:"openWeb",
        body:'whaspApp MEN'
    }
    };
    
f.send(mess,function(err,res){
    if(err)
        console.log('err'+err);
    else
        console.log(res);
    });