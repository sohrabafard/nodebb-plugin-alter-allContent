"use strict";

var User = module.parent.require('./user');
var Topic = module.parent.require('./topics');
var ThreadTools = module.parent.require('./threadTools');
var Post = module.parent.require('./posts');
var SocketAdmins = module.parent.require('./socket.io/admin');
var db = module.parent.require('./database');

var Utils = module.parent.require('../public/src/utils')

var plugin = {};


plugin.alterPost = function (data, callback) {

	//configure your thread limit
    var limit = 45;

    //console.log(data);
    // ThreadTools.lock(topicObj.tid, 0, next);
    Post.getPidIndex(data.pid, data.uid, function(err, index){
        //console.log(index);
        if( !err && index >= limit )
        {   // if no error and the index >= limit -> LOCK
            console.log(data);
            console.log(err);
        }
    });
};

module.exports = plugin;










