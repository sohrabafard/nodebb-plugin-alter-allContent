var pkg = require('../package.json'),
    fs = require('fs-extra'),
    _ = require('underscore'),
    path = require('path'),

    winston = module.parent.require('winston'),
    nconf = module.parent.require('nconf'),
    async = module.parent.require('async'),
    meta = module.parent.require('./meta'),
    sockets = module.parent.require('./socket.io'),
    utils = require(path.join(__dirname, '/../public/js/utils.js'));
(function (Plugin) {
    'use strict';
    console.log("Alter Plugin");
    //NodeBB list of Hooks: https://github.com/NodeBB/NodeBB/wiki/Hooks
    Plugin.hooks = {
        filters: {
            /**
             * Hook to render topic thread
             * @param payload {object} Fields: {posts: posts, uid: uid}
             * @param callback {function}
             */
            getPosts : function (payload, callback) {
                console.log("get data:");
            }
        }

    };
})(module.exports);