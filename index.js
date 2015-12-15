(function (Plugin) {
    'use strict';
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