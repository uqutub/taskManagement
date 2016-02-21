System.register([], function(exports_1) {
    var TeamModel;
    return {
        setters:[],
        execute: function() {
            TeamModel = (function () {
                //constructor
                function TeamModel(teamObj) {
                    if (teamObj && teamObj.name) {
                        this._id = teamObj._id || '';
                        this.name = teamObj.name;
                        this.description = teamObj.description;
                        this.dated = teamObj.dated;
                        this.owner = teamObj.owner;
                        this.members = teamObj.members;
                        this.tasks = teamObj.tasks;
                        this.active = teamObj.active;
                    }
                } //constructor
                return TeamModel;
            })();
            exports_1("TeamModel", TeamModel); // TeamModel
        }
    }
});
