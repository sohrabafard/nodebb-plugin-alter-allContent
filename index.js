(function() {
    "use strict";
    var parser,
        runScript = {
            parsePost: function(data, callback) {
                if (data && data.postData && data.postData.content) {
                    //data.postData.content = parser.render(data.postData.content);
                    console.log(data.postData);
                }
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
            }
    };
    module.exports = runScript;
})();