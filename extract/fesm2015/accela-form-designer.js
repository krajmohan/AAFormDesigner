import { Component, EventEmitter, Input, Output, NgModule } from '@angular/core';
import { moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class SectionDesignerComponent {
    constructor() {
        this.timePeriods = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.timePeriods = [
            'Bronze age',
            'Iron age',
            'Middle ages',
            'Early modern period',
            'Long nineteenth century'
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
    }
}
SectionDesignerComponent.decorators = [
    { type: Component, args: [{
                selector: 'accela-section-designer',
                template: "<p>\n\tsection-designer works!\n</p>\n\n<div cdkDropList cdkDropListOrientation=\"horizontal\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n\t<div class=\"example-box\" *ngFor=\"let timePeriod of timePeriods\" cdkDrag>{{timePeriod}}</div>\n</div>",
                styles: [".example-list{width:1000px;max-width:100%;border:1px solid #ccc;min-height:60px;display:flex;flex-direction:row;background:#fff;border-radius:4px;overflow:hidden}.example-box{padding:20px 10px;margin-left:5px;margin-right:5px;border-right:1px solid #ccc;color:rgba(0,0,0,.87);display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:#fff;font-size:14px;flex-grow:1;flex-basis:0}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.example-box:last-child{border:none}.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}"]
            }] }
];
/** @nocollapse */
SectionDesignerComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class SectionPropertyComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SectionPropertyComponent.decorators = [
    { type: Component, args: [{
                selector: 'accela-section-property',
                template: "<p>\n  section-property works!\n</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
SectionPropertyComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class SectionFormdetailComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SectionFormdetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'accela-section-formdetail',
                template: "<p>\n  section-formdetail works!\n</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
SectionFormdetailComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class SectionControlComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SectionControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'accela-section-control',
                template: "<p>\n  section-control works!\n</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
SectionControlComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class FormdesignerComponent {
    constructor() {
        this.submit = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get changes() { return this.form.valueChanges; }
    /**
     * @return {?}
     */
    get valid() { return this.form.valid; }
    /**
     * @return {?}
     */
    get value() { return this.form.value; }
    /**
     * @param {?} event
     * @return {?}
     */
    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.submit.emit(this.value);
    }
}
FormdesignerComponent.decorators = [
    { type: Component, args: [{
                selector: 'accela-formdesigner',
                template: "<form class=\"dynamic-form\" (submit)=\"handleSubmit($event)\">\n\t<div class=\"container-fd\">\n\t\t<div class=\"sec-menubar\">\n\t\t\t<accela-section-menu></accela-section-menu>\n\t\t</div>\n\t\t<div class=\"sec-formdetail\">\n\t\t\t<accela-section-formdetail></accela-section-formdetail>\n\t\t</div>\n\t\t<div class=\"sec-formdesigner\">\n\t\t\t<div class=\"sec-control\">\n\t\t\t\t<accela-section-control></accela-section-control>\n\t\t\t\t<accela-section-property></accela-section-property>\n\t\t\t</div>\n\t\t\t<div class=\"sec-designer\">\n\t\t\t\t<accela-section-designer></accela-section-designer>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>",
                styles: [".container-fd{padding:10px;background-color:#00f}.sec-menubar{padding:5px;background-color:#deb887}.sec-formdetail{padding:5px;background-color:#d2691e}.sec-formdesigner{-ms-box-orient:horizontal;display:-moz-flex;display:flex}.sec-control{flex:none;width:260px;background-color:red}.sec-designer{flex:none;min-width:665px;width:calc(100% - 260px);background-color:#0ff}"]
            }] }
];
/** @nocollapse */
FormdesignerComponent.ctorParameters = () => [];
FormdesignerComponent.propDecorators = {
    formid: [{ type: Input }],
    submit: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class SectionMenuComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SectionMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'accela-section-menu',
                template: "\n<p>\n  section-menu works!\n</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
SectionMenuComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class FormdesignerModule {
}
FormdesignerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    BrowserModule,
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    BrowserAnimationsModule,
                    DragDropModule
                ],
                declarations: [
                    FormdesignerComponent,
                    SectionDesignerComponent,
                    SectionPropertyComponent,
                    SectionFormdetailComponent,
                    SectionControlComponent,
                    SectionMenuComponent
                ],
                exports: [
                    FormdesignerComponent,
                    SectionDesignerComponent,
                    SectionPropertyComponent,
                    SectionFormdetailComponent,
                    SectionControlComponent,
                    SectionMenuComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { FormdesignerModule, FormdesignerComponent as ɵa, SectionControlComponent as ɵe, SectionDesignerComponent as ɵb, SectionFormdetailComponent as ɵd, SectionMenuComponent as ɵf, SectionPropertyComponent as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZWxhLWZvcm0tZGVzaWduZXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL2FjY2VsYS1mb3JtLWRlc2lnbmVyL2FwcC9mb3JtZGVzaWduZXIvY29tcG9uZW50L3NlY3Rpb24tZGVzaWduZXIvc2VjdGlvbi1kZXNpZ25lci5jb21wb25lbnQudHMiLCJuZzovL2FjY2VsYS1mb3JtLWRlc2lnbmVyL2FwcC9mb3JtZGVzaWduZXIvY29tcG9uZW50L3NlY3Rpb24tcHJvcGVydHkvc2VjdGlvbi1wcm9wZXJ0eS5jb21wb25lbnQudHMiLCJuZzovL2FjY2VsYS1mb3JtLWRlc2lnbmVyL2FwcC9mb3JtZGVzaWduZXIvY29tcG9uZW50L3NlY3Rpb24tZm9ybWRldGFpbC9zZWN0aW9uLWZvcm1kZXRhaWwuY29tcG9uZW50LnRzIiwibmc6Ly9hY2NlbGEtZm9ybS1kZXNpZ25lci9hcHAvZm9ybWRlc2lnbmVyL2NvbXBvbmVudC9zZWN0aW9uLWNvbnRyb2wvc2VjdGlvbi1jb250cm9sLmNvbXBvbmVudC50cyIsIm5nOi8vYWNjZWxhLWZvcm0tZGVzaWduZXIvYXBwL2Zvcm1kZXNpZ25lci9jb21wb25lbnQvZm9ybWRlc2lnbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vYWNjZWxhLWZvcm0tZGVzaWduZXIvYXBwL2Zvcm1kZXNpZ25lci9jb21wb25lbnQvc2VjdGlvbi1tZW51L3NlY3Rpb24tbWVudS5jb21wb25lbnQudHMiLCJuZzovL2FjY2VsYS1mb3JtLWRlc2lnbmVyL2FwcC9mb3JtZGVzaWduZXIvZm9ybWRlc2lnbmVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhY2NlbGEtc2VjdGlvbi1kZXNpZ25lcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zZWN0aW9uLWRlc2lnbmVyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc2VjdGlvbi1kZXNpZ25lci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlY3Rpb25EZXNpZ25lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0dGltZVBlcmlvZHMgPSBbXTtcblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnRpbWVQZXJpb2RzID0gW1xuXHRcdFx0J0Jyb256ZSBhZ2UnLFxuXHRcdFx0J0lyb24gYWdlJyxcblx0XHRcdCdNaWRkbGUgYWdlcycsXG5cdFx0XHQnRWFybHkgbW9kZXJuIHBlcmlvZCcsXG5cdFx0XHQnTG9uZyBuaW5ldGVlbnRoIGNlbnR1cnknXG5cdFx0XTtcblx0fVxuXG5cdGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xuXHRcdG1vdmVJdGVtSW5BcnJheSh0aGlzLnRpbWVQZXJpb2RzLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhY2NlbGEtc2VjdGlvbi1wcm9wZXJ0eScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zZWN0aW9uLXByb3BlcnR5LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc2VjdGlvbi1wcm9wZXJ0eS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlY3Rpb25Qcm9wZXJ0eUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhY2NlbGEtc2VjdGlvbi1mb3JtZGV0YWlsJyxcblx0dGVtcGxhdGVVcmw6ICcuL3NlY3Rpb24tZm9ybWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3NlY3Rpb24tZm9ybWRldGFpbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlY3Rpb25Gb3JtZGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjb25zdHJ1Y3RvcigpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2FjY2VsYS1zZWN0aW9uLWNvbnRyb2wnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc2VjdGlvbi1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc2VjdGlvbi1jb250cm9sLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VjdGlvbkNvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYWNjZWxhLWZvcm1kZXNpZ25lcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9mb3JtZGVzaWduZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9mb3JtZGVzaWduZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtZGVzaWduZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoKVxuXHRmb3JtaWQ6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xuXHRkaXNhYmxlZDogYm9vbGVhbjtcblx0dmlzaWJsZTogYm9vbGVhbjtcblx0ZGF0YTogYW55W107XG5cblx0QE91dHB1dCgpXG5cdHN1Ym1pdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXHRmb3JtOiBGb3JtR3JvdXA7XG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxuXHRnZXQgY2hhbmdlcygpIHsgcmV0dXJuIHRoaXMuZm9ybS52YWx1ZUNoYW5nZXM7IH1cblx0Z2V0IHZhbGlkKCkgeyByZXR1cm4gdGhpcy5mb3JtLnZhbGlkOyB9XG5cdGdldCB2YWx1ZSgpIHsgcmV0dXJuIHRoaXMuZm9ybS52YWx1ZTsgfVxuXG5cdGhhbmRsZVN1Ym1pdChldmVudDogRXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMuc3VibWl0LmVtaXQodGhpcy52YWx1ZSk7XG5cdH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYWNjZWxhLXNlY3Rpb24tbWVudScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zZWN0aW9uLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9zZWN0aW9uLW1lbnUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWN0aW9uTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBEcmFnRHJvcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG5pbXBvcnQgeyBTZWN0aW9uRGVzaWduZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9zZWN0aW9uLWRlc2lnbmVyL3NlY3Rpb24tZGVzaWduZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNlY3Rpb25Qcm9wZXJ0eUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L3NlY3Rpb24tcHJvcGVydHkvc2VjdGlvbi1wcm9wZXJ0eS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VjdGlvbkZvcm1kZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9zZWN0aW9uLWZvcm1kZXRhaWwvc2VjdGlvbi1mb3JtZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWN0aW9uQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L3NlY3Rpb24tY29udHJvbC9zZWN0aW9uLWNvbnRyb2wuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRm9ybWRlc2lnbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvZm9ybWRlc2lnbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWN0aW9uTWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L3NlY3Rpb24tbWVudS9zZWN0aW9uLW1lbnUuY29tcG9uZW50JztcblxuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRCcm93c2VyTW9kdWxlLFxuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGb3Jtc01vZHVsZSxcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXHRcdEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuXHRcdERyYWdEcm9wTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEZvcm1kZXNpZ25lckNvbXBvbmVudCxcblx0XHRTZWN0aW9uRGVzaWduZXJDb21wb25lbnQsXG5cdFx0U2VjdGlvblByb3BlcnR5Q29tcG9uZW50LFxuXHRcdFNlY3Rpb25Gb3JtZGV0YWlsQ29tcG9uZW50LFxuXHRcdFNlY3Rpb25Db250cm9sQ29tcG9uZW50LFxuXHRcdFNlY3Rpb25NZW51Q29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRGb3JtZGVzaWduZXJDb21wb25lbnQsXG5cdFx0U2VjdGlvbkRlc2lnbmVyQ29tcG9uZW50LFxuXHRcdFNlY3Rpb25Qcm9wZXJ0eUNvbXBvbmVudCxcblx0XHRTZWN0aW9uRm9ybWRldGFpbENvbXBvbmVudCxcblx0XHRTZWN0aW9uQ29udHJvbENvbXBvbmVudCxcblx0XHRTZWN0aW9uTWVudUNvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1kZXNpZ25lck1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLE1BUWEsd0JBQXdCO0lBR3BDO1FBREEsZ0JBQVcsR0FBRyxFQUFFLENBQUM7S0FDQTs7OztJQUVqQixRQUFRO1FBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNsQixZQUFZO1lBQ1osVUFBVTtZQUNWLGFBQWE7WUFDYixxQkFBcUI7WUFDckIseUJBQXlCO1NBQ3pCLENBQUM7S0FDRjs7Ozs7SUFFRCxJQUFJLENBQUMsS0FB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