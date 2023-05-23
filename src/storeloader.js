export default {
    import(files, default_opts) {
        let self = this,

        _return = {
            state: {},
            getters: {},
            mutations: {},
            actions: {},
        }

        // Overide defaults if set.
        if (default_opts) _.extend(_return, default_opts);

        // Check the store isn't empty.
        if(!files || files.length == 0) return _return;

        // Loop through and extend each object when applicable.
        _.each(files, function(file) {
            let _loaded = require('./store/' + file).default;

            // State
            if (_loaded.state) {
                _.extend(_return.state, _loaded.state);
            }

            // Getters
            if (_loaded.getters) {
                _.extend(_return.getters, _loaded.getters);
            }

            // Mutations
            if (_loaded.mutations) {
                _.extend(_return.mutations, _loaded.mutations);
            }

            // Actions
            if (_loaded.actions) {
                _.extend(_return.actions, _loaded.actions);
            }
        });

        return _return;
    },
};