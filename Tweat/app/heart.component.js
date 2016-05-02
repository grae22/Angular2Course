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
    var HeartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeartComponent = (function () {
                function HeartComponent() {
                    this.isHearted = false;
                    this.heartCount = 0;
                }
                HeartComponent.prototype.onClick = function () {
                    this.isHearted = !this.isHearted;
                    this.heartCount += (this.isHearted ? 1 : -1);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], HeartComponent.prototype, "isHearted", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], HeartComponent.prototype, "heartCount", void 0);
                HeartComponent = __decorate([
                    core_1.Component({
                        selector: 'heart',
                        template: "\n    <i\n      class=\"glyphicon glyphicon-heart\"\n      [class.hearted]=\"isHearted\"\n      (click)=\"onClick()\">\n    </i>\n    <span class='heart-count'>{{ heartCount }}</span>\n  ",
                        styles: ["\n    .glyphicon-heart\n    {\n      color: #ccc;\n      cursor: pointer;\n      font-size: 1.1em;\n    }\n    \n    .hearted\n    {\n      color: deeppink;\n    }\n    \n    .heart-count\n    {\n      font-size: 1.3em;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeartComponent);
                return HeartComponent;
            }());
            exports_1("HeartComponent", HeartComponent);
        }
    }
});
//# sourceMappingURL=heart.component.js.map