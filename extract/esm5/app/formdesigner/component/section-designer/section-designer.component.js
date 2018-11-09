/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
var SectionDesignerComponent = /** @class */ (function () {
    function SectionDesignerComponent() {
        this.timePeriods = [];
    }
    /**
     * @return {?}
     */
    SectionDesignerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.timePeriods = [
            'Bronze age',
            'Iron age',
            'Middle ages',
            'Early modern period',
            'Long nineteenth century'
        ];
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SectionDesignerComponent.prototype.drop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
    };
    SectionDesignerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'accela-section-designer',
                    template: "<p>\n\tsection-designer works!\n</p>\n\n<div cdkDropList cdkDropListOrientation=\"horizontal\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n\t<div class=\"example-box\" *ngFor=\"let timePeriod of timePeriods\" cdkDrag>{{timePeriod}}</div>\n</div>",
                    styles: [".example-list{width:1000px;max-width:100%;border:1px solid #ccc;min-height:60px;display:flex;flex-direction:row;background:#fff;border-radius:4px;overflow:hidden}.example-box{padding:20px 10px;margin-left:5px;margin-right:5px;border-right:1px solid #ccc;color:rgba(0,0,0,.87);display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:#fff;font-size:14px;flex-grow:1;flex-basis:0}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.example-box:last-child{border:none}.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}"]
                }] }
    ];
    /** @nocollapse */
    SectionDesignerComponent.ctorParameters = function () { return []; };
    return SectionDesignerComponent;
}());
export { SectionDesignerComponent };
if (false) {
    /** @type {?} */
    SectionDesignerComponent.prototype.timePeriods;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi1kZXNpZ25lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY2NlbGEtZm9ybS1kZXNpZ25lci8iLCJzb3VyY2VzIjpbImFwcC9mb3JtZGVzaWduZXIvY29tcG9uZW50L3NlY3Rpb24tZGVzaWduZXIvc2VjdGlvbi1kZXNpZ25lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXRFO0lBUUM7UUFEQSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztJQUNELENBQUM7Ozs7SUFFakIsMkNBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNsQixZQUFZO1lBQ1osVUFBVTtZQUNWLGFBQWE7WUFDYixxQkFBcUI7WUFDckIseUJBQXlCO1NBQ3pCLENBQUM7SUFDSCxDQUFDOzs7OztJQUVELHVDQUFJOzs7O0lBQUosVUFBSyxLQUE0QjtRQUNoQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1RSxDQUFDOztnQkF0QkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLG9SQUFnRDs7aUJBRWhEOzs7O0lBbUJELCtCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FsQlksd0JBQXdCOzs7SUFFcEMsK0NBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYWNjZWxhLXNlY3Rpb24tZGVzaWduZXInLFxuXHR0ZW1wbGF0ZVVybDogJy4vc2VjdGlvbi1kZXNpZ25lci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3NlY3Rpb24tZGVzaWduZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWN0aW9uRGVzaWduZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHRpbWVQZXJpb2RzID0gW107XG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy50aW1lUGVyaW9kcyA9IFtcblx0XHRcdCdCcm9uemUgYWdlJyxcblx0XHRcdCdJcm9uIGFnZScsXG5cdFx0XHQnTWlkZGxlIGFnZXMnLFxuXHRcdFx0J0Vhcmx5IG1vZGVybiBwZXJpb2QnLFxuXHRcdFx0J0xvbmcgbmluZXRlZW50aCBjZW50dXJ5J1xuXHRcdF07XG5cdH1cblxuXHRkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcblx0XHRtb3ZlSXRlbUluQXJyYXkodGhpcy50aW1lUGVyaW9kcywgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcblx0fVxufVxuIl19