import { Directive, ElementRef, Injectable, NgModule } from '@angular/core';

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
        Injectable(),
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
        Directive({ selector: '[emptytext]' }),
        __metadata("design:paramtypes", [typeof (_a = typeof ElementRef !== "undefined" && ElementRef) === "function" && _a || Object, typeof (_b = typeof EmptyTextService !== "undefined" && EmptyTextService) === "function" && _b || Object])
    ], EmptyTextDirective);
    return EmptyTextDirective;
    var _a, _b;
}());

var EmptyTextModule = /** @class */ (function () {
    function EmptyTextModule() {
    }
    EmptyTextModule = __decorate([
        NgModule({
            imports: [],
            exports: [EmptyTextDirective],
            declarations: [EmptyTextDirective],
            providers: [EmptyTextService],
        })
    ], EmptyTextModule);
    return EmptyTextModule;
}());

export { EmptyTextModule, EmptyTextDirective, EmptyTextService };
//# sourceMappingURL=empty-text.esm.js.map
