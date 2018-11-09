/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var FormdesignerComponent = /** @class */ (function () {
    function FormdesignerComponent() {
        this.submit = new EventEmitter();
    }
    /**
     * @return {?}
     */
    FormdesignerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(FormdesignerComponent.prototype, "changes", {
        get: /**
         * @return {?}
         */
        function () { return this.form.valueChanges; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormdesignerComponent.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () { return this.form.valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormdesignerComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () { return this.form.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    FormdesignerComponent.prototype.handleSubmit = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.submit.emit(this.value);
    };
    FormdesignerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'accela-formdesigner',
                    template: "<form class=\"dynamic-form\" (submit)=\"handleSubmit($event)\">\n\t<div class=\"container-fd\">\n\t\t<div class=\"sec-menubar\">\n\t\t\t<accela-section-menu></accela-section-menu>\n\t\t</div>\n\t\t<div class=\"sec-formdetail\">\n\t\t\t<accela-section-formdetail></accela-section-formdetail>\n\t\t</div>\n\t\t<div class=\"sec-formdesigner\">\n\t\t\t<div class=\"sec-control\">\n\t\t\t\t<accela-section-control></accela-section-control>\n\t\t\t\t<accela-section-property></accela-section-property>\n\t\t\t</div>\n\t\t\t<div class=\"sec-designer\">\n\t\t\t\t<accela-section-designer></accela-section-designer>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>",
                    styles: [".container-fd{padding:10px;background-color:#00f}.sec-menubar{padding:5px;background-color:#deb887}.sec-formdetail{padding:5px;background-color:#d2691e}.sec-formdesigner{-ms-box-orient:horizontal;display:-moz-flex;display:flex}.sec-control{flex:none;width:260px;background-color:red}.sec-designer{flex:none;min-width:665px;width:calc(100% - 260px);background-color:#0ff}"]
                }] }
    ];
    /** @nocollapse */
    FormdesignerComponent.ctorParameters = function () { return []; };
    FormdesignerComponent.propDecorators = {
        formid: [{ type: Input }],
        submit: [{ type: Output }]
    };
    return FormdesignerComponent;
}());
export { FormdesignerComponent };
if (false) {
    /** @type {?} */
    FormdesignerComponent.prototype.formid;
    /** @type {?} */
    FormdesignerComponent.prototype.name;
    /** @type {?} */
    FormdesignerComponent.prototype.disabled;
    /** @type {?} */
    FormdesignerComponent.prototype.visible;
    /** @type {?} */
    FormdesignerComponent.prototype.data;
    /** @type {?} */
    FormdesignerComponent.prototype.submit;
    /** @type {?} */
    FormdesignerComponent.prototype.form;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWRlc2lnbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FjY2VsYS1mb3JtLWRlc2lnbmVyLyIsInNvdXJjZXMiOlsiYXBwL2Zvcm1kZXNpZ25lci9jb21wb25lbnQvZm9ybWRlc2lnbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcvRTtJQWlCQztRQUhBLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUdwQyxDQUFDOzs7O0lBRWpCLHdDQUFROzs7SUFBUjtJQUNBLENBQUM7SUFFRCxzQkFBSSwwQ0FBTzs7OztRQUFYLGNBQWdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUNoRCxzQkFBSSx3Q0FBSzs7OztRQUFULGNBQWMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ3ZDLHNCQUFJLHdDQUFLOzs7O1FBQVQsY0FBYyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7Ozs7O0lBRXZDLDRDQUFZOzs7O0lBQVosVUFBYSxLQUFZO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQTlCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsdXBCQUE0Qzs7aUJBRTVDOzs7Ozt5QkFFQyxLQUFLO3lCQU9MLE1BQU07O0lBbUJSLDRCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0EzQlkscUJBQXFCOzs7SUFDakMsdUNBQ2U7O0lBQ2YscUNBQWE7O0lBQ2IseUNBQWtCOztJQUNsQix3Q0FBaUI7O0lBQ2pCLHFDQUFZOztJQUVaLHVDQUNvRDs7SUFFcEQscUNBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYWNjZWxhLWZvcm1kZXNpZ25lcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9mb3JtZGVzaWduZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9mb3JtZGVzaWduZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtZGVzaWduZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoKVxuXHRmb3JtaWQ6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xuXHRkaXNhYmxlZDogYm9vbGVhbjtcblx0dmlzaWJsZTogYm9vbGVhbjtcblx0ZGF0YTogYW55W107XG5cblx0QE91dHB1dCgpXG5cdHN1Ym1pdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXHRmb3JtOiBGb3JtR3JvdXA7XG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxuXHRnZXQgY2hhbmdlcygpIHsgcmV0dXJuIHRoaXMuZm9ybS52YWx1ZUNoYW5nZXM7IH1cblx0Z2V0IHZhbGlkKCkgeyByZXR1cm4gdGhpcy5mb3JtLnZhbGlkOyB9XG5cdGdldCB2YWx1ZSgpIHsgcmV0dXJuIHRoaXMuZm9ybS52YWx1ZTsgfVxuXG5cdGhhbmRsZVN1Ym1pdChldmVudDogRXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMuc3VibWl0LmVtaXQodGhpcy52YWx1ZSk7XG5cdH1cblxufVxuIl19