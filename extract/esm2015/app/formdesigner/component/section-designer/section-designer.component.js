/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
export class SectionDesignerComponent {
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
if (false) {
    /** @type {?} */
    SectionDesignerComponent.prototype.timePeriods;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi1kZXNpZ25lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY2NlbGEtZm9ybS1kZXNpZ25lci8iLCJzb3VyY2VzIjpbImFwcC9mb3JtZGVzaWduZXIvY29tcG9uZW50L3NlY3Rpb24tZGVzaWduZXIvc2VjdGlvbi1kZXNpZ25lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBT3RFLE1BQU0sT0FBTyx3QkFBd0I7SUFHcEM7UUFEQSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztJQUNELENBQUM7Ozs7SUFFakIsUUFBUTtRQUNQLElBQUksQ0FBQyxXQUFXLEdBQUc7WUFDbEIsWUFBWTtZQUNaLFVBQVU7WUFDVixhQUFhO1lBQ2IscUJBQXFCO1lBQ3JCLHlCQUF5QjtTQUN6QixDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsS0FBNEI7UUFDaEMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7O1lBdEJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxvUkFBZ0Q7O2FBRWhEOzs7Ozs7SUFHQSwrQ0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhY2NlbGEtc2VjdGlvbi1kZXNpZ25lcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zZWN0aW9uLWRlc2lnbmVyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc2VjdGlvbi1kZXNpZ25lci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlY3Rpb25EZXNpZ25lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0dGltZVBlcmlvZHMgPSBbXTtcblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnRpbWVQZXJpb2RzID0gW1xuXHRcdFx0J0Jyb256ZSBhZ2UnLFxuXHRcdFx0J0lyb24gYWdlJyxcblx0XHRcdCdNaWRkbGUgYWdlcycsXG5cdFx0XHQnRWFybHkgbW9kZXJuIHBlcmlvZCcsXG5cdFx0XHQnTG9uZyBuaW5ldGVlbnRoIGNlbnR1cnknXG5cdFx0XTtcblx0fVxuXG5cdGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xuXHRcdG1vdmVJdGVtSW5BcnJheSh0aGlzLnRpbWVQZXJpb2RzLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuXHR9XG59XG4iXX0=