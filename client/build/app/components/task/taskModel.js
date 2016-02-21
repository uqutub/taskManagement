System.register([], function(exports_1) {
    var TaskModel;
    return {
        setters:[],
        execute: function() {
            TaskModel = (function () {
                function TaskModel(task) {
                    if (task) {
                        this._id = task._id;
                        this.name = task.name;
                        this.description = (task.description) ? task.description : '';
                        this.status = task.status;
                        this.dated = Date.now();
                        this.owner = task.owner;
                        //this.members = (task.members) ? task.members: [];
                        this.active = task.active;
                        this.comments = (task.comments) ? task.comments : [];
                    }
                } //constructor
                return TaskModel;
            })();
            exports_1("TaskModel", TaskModel); //Task class
        }
    }
});
