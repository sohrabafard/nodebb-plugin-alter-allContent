"use strict";

var User = module.parent.require('./user'),
    Topic = module.parent.require('./topics'),
    Post = module.parent.require('./posts'),
    SocketAdmins = module.parent.require('./socket.io/admin'),
    db = module.parent.require('./database'),
    Utils = module.parent.require('../public/src/utils');


(function(Plugin) {

    Plugin.alter = function (data, callback) {
        var limit = 45;
        console.warn("alter");
        console.log(index);

        Post.getPidIndex(data.pid, data.uid, function(err, index) {

            console.log(index);
            console.warn("actions-alter");
            //if( !err && index >= limit )
            //{   // if no error and the index >= limit -> LOCK
            //    console.log(data);
            //    console.log(err);
            //}

        });

    };

})(module.exports);










