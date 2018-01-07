(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global['empty-text'] = {}),global.core));
}(this, (function (exports,core) { 'use strict';

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}

var EmptyTextService = /** @class */ (function () {
    function EmptyTextService() {
        this.emptyTextDisplay = "empty";
    }
    EmptyTextService.prototype.get = function () {
        return this.emptyTextDisplay;
    };
    EmptyTextService.prototype.set = function (emptyTextDisplay) {
        this.emptyTextDisplay = emptyTextDisplay;
    };
    EmptyTextService = __decorate([
        core.Injectable(),
        __metadata("design:paramtypes", [])
    ], EmptyTextService);
    return EmptyTextService;
}());

var EmptyTextDirective = /** @class */ (function () {
    function EmptyTextDirective(el, empservice) {
        this.el = el;
        this.empservice = empservice;
    }
    EmptyTextDirective.prototype.ngAfterViewInit = function () {
        var content = this.el.nativeElement.innerHTML;
        if (!content) {
            this.el.nativeElement.innerHTML = this.empservice.get();
        }
    };
    EmptyTextDirective = __decorate([
        core.Directive({ selector: '[emptytext]' }),
        __metadata("design:paramtypes", [typeof (_a = typeof core.ElementRef !== "undefined" && core.ElementRef) === "function" && _a || Object, typeof (_b = typeof EmptyTextService !== "undefined" && EmptyTextService) === "function" && _b || Object])
    ], EmptyTextDirective);
    return EmptyTextDirective;
    var _a, _b;
}());

var EmptyTextModule = /** @class */ (function () {
    function EmptyTextModule() {
    }
    EmptyTextModule = __decorate([
        core.NgModule({
            imports: [],
            exports: [EmptyTextDirective],
            declarations: [EmptyTextDirective],
            providers: [EmptyTextService],
        })
    ], EmptyTextModule);
    return EmptyTextModule;
}());

exports.EmptyTextModule = EmptyTextModule;
exports.EmptyTextDirective = EmptyTextDirective;
exports.EmptyTextService = EmptyTextService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=empty-text.umd.js.map
