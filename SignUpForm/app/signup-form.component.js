System.register(['angular2/core', 'angular2/common', './usernameValidators'], function(exports_1, context_1) {
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
    var core_1, common_1, usernameValidators_1;
    var SignUpFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (usernameValidators_1_1) {
                usernameValidators_1 = usernameValidators_1_1;
            }],
        execute: function() {
            SignUpFormComponent = (function () {
                function SignUpFormComponent(fb) {
                    this.form = fb.group({
                        username: [
                            '',
                            common_1.Validators.compose([
                                common_1.Validators.required,
                                usernameValidators_1.UsernameValidators.cannotContainSpace
                            ]),
                            usernameValidators_1.UsernameValidators.shouldBeUnique
                        ],
                        password: ['', common_1.Validators.required]
                    });
                }
                SignUpFormComponent.prototype.signup = function () {
                    this.form.find('username').setErrors({
                        invalidLogin: true
                    });
                    console.log(this.form.value);
                };
                SignUpFormComponent = __decorate([
                    core_1.Component({
                        selector: 'signup-form',
                        templateUrl: 'app/signup-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], SignUpFormComponent);
                return SignUpFormComponent;
            }());
            exports_1("SignUpFormComponent", SignUpFormComponent);
        }
    }
});
//# sourceMappingURL=signup-form.component.js.map