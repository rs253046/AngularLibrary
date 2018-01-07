import { ElementRef, AfterViewInit } from '@angular/core';
import { EmptyTextService } from './empty-text.service';
export declare class EmptyTextDirective implements AfterViewInit {
    private el;
    private empservice;
    constructor(el: ElementRef, empservice: EmptyTextService);
    ngAfterViewInit(): void;
}
