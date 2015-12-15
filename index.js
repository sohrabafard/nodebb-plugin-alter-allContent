(function() {
    "use strict";
    var User = module.parent.require('./user'),
        Topic = module.parent.require('./topics'),
        Post = module.parent.require('./posts'),
        SocketAdmins = module.parent.require('./socket.io/admin'),
        db = module.parent.require('./database'),
        Utils = module.parent.require('../public/src/utils');

    var parser,
        runScript = {
            parsePost: function(data, callback) {
                //if (data && data.postData && data.postData.content) {
                //    //data.postData.content = parser.render(data.postData.content);
                //    console.log(data.postData.pid);
                //}
                callback(null, data);
                //Post.getPidIndex(data.pid, data.uid, function(err, index) {
                //
                //    console.log(index);
                //    console.warn("actions-alter");
                //    //if( !err && index >= limit )
                //    //{   // if no error and the index >= limit -> LOCK
                //    //    console.log(data);
                //    //    console.log(err);
                //    //}
                //
                //});
            },
            savePost :  function (data, callback) {
                var limit = 45;
                console.log("savePost");

                Post.getPidIndex(data.pid, data.uid, function(err, index) {

                    console.log(index);
                    console.warn("actions-alter");
                    //if( !err && index >= limit )
                    //{   // if no error and the index >= limit -> LOCK
                    //    console.log(data);
                    //    console.log(err);
                    //}

                });

                callback(null, data);
            }
    };
    module.exports = runScript;
})();