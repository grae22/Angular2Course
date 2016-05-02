System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                    this.voteEvent = new core_1.EventEmitter();
                }
                VoteComponent.prototype.onUpVote = function () {
                    if (this.myVote != 1) {
                        this.myVote++;
                        this.voteEvent.emit({ vote: 1 });
                    }
                };
                VoteComponent.prototype.onDownVote = function () {
                    if (this.myVote != -1) {
                        this.myVote--;
                        this.voteEvent.emit({ vote: -1 });
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], VoteComponent.prototype, "voteCount", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], VoteComponent.prototype, "myVote", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "voteEvent", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        template: "\n    <div class='vote'>\n      <i\n        class='glyphicon glyphicon-menu-up vote-button'\n        [class.highlighted]='myVote == 1'\n        (click)='onUpVote()'>\n      </i>\n      <span class='vote-count'><b>{{ voteCount }}</b></span>\n      <i\n        class='glyphicon glyphicon-menu-down vote-button'\n        [class.highlighted]='myVote == -1'\n        (click)='onDownVote()'>\n      </i>\n    </div>",
                        styles: ["\n    .vote\n    {\n      width: 20px;\n      text-align: center;\n      color: #999\n    }\n    \n    .vote-button\n    {\n      cursor: pointer;\n      font-size: 1.4em;\n    }\n    \n    .vote-count\n    {\n      font-size: 1.2em;\n    }\n    \n    .highlighted\n    {\n      color: orange;\n    }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=vote.component.js.map