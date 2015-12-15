(function (Plugin) {
    'use strict';
    console.warn("Alter Plugin");
    //NodeBB list of Hooks: https://github.com/NodeBB/NodeBB/wiki/Hooks
    Plugin.hooks = {
        filters: {
            /**
             * Hook to render topic thread
             * @param payload {object} Fields: {posts: posts, uid: uid}
             * @param callback {function}
             */
            getPosts : function (payload, callback) {
                console.warn("filters.getPosts");
            }
        },
        statics: {
            load: function(params, callback) {
                console.warn("statics.load");
            }
        },
        actions: {}

    };
})(module.exports);