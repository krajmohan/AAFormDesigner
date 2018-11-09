(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/drag-drop'), require('@angular/common'), require('@angular/forms'), require('@angular/platform-browser'), require('@angular/platform-browser/animations')) :
    typeof define === 'function' && define.amd ? define('accela-form-designer', ['exports', '@angular/core', '@angular/cdk/drag-drop', '@angular/common', '@angular/forms', '@angular/platform-browser', '@angular/platform-browser/animations'], factory) :
    (factory((global['accela-form-designer'] = {}),global.ng.core,global.ng.cdk['drag-drop'],global.ng.common,global.ng.forms,global.ng.platformBrowser,global.ng.platformBrowser.animations));
}(this, (function (exports,core,dragDrop,common,forms,platformBrowser,animations) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
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
                dragDrop.moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
            };
        SectionDesignerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'accela-section-designer',
                        template: "<p>\n\tsection-designer works!\n</p>\n\n<div cdkDropList cdkDropListOrientation=\"horizontal\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n\t<div class=\"example-box\" *ngFor=\"let timePeriod of timePeriods\" cdkDrag>{{timePeriod}}</div>\n</div>",
                        styles: [".example-list{width:1000px;max-width:100%;border:1px solid #ccc;min-height:60px;display:flex;flex-direction:row;background:#fff;border-radius:4px;overflow:hidden}.example-box{padding:20px 10px;margin-left:5px;margin-right:5px;border-right:1px solid #ccc;color:rgba(0,0,0,.87);display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:#fff;font-size:14px;flex-grow:1;flex-basis:0}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.example-box:last-child{border:none}.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}"]
                    }] }
        ];
        /** @nocollapse */
        SectionDesignerComponent.ctorParameters = function () { return []; };
        return SectionDesignerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var SectionPropertyComponent = /** @class */ (function () {
        function SectionPropertyComponent() {
        }
        /**
         * @return {?}
         */
        SectionPropertyComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SectionPropertyComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'accela-section-property',
                        template: "<p>\n  section-property works!\n</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SectionPropertyComponent.ctorParameters = function () { return []; };
        return SectionPropertyComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var SectionFormdetailComponent = /** @class */ (function () {
        function SectionFormdetailComponent() {
        }
        /**
         * @return {?}
         */
        SectionFormdetailComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SectionFormdetailComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'accela-section-formdetail',
                        template: "<p>\n  section-formdetail works!\n</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SectionFormdetailComponent.ctorParameters = function () { return []; };
        return SectionFormdetailComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var SectionControlComponent = /** @class */ (function () {
        function SectionControlComponent() {
        }
        /**
         * @return {?}
         */
        SectionControlComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SectionControlComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'accela-section-control',
                        template: "<p>\n  section-control works!\n</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SectionControlComponent.ctorParameters = function () { return []; };
        return SectionControlComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var FormdesignerComponent = /** @class */ (function () {
        function FormdesignerComponent() {
            this.submit = new core.EventEmitter();
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
             */ function () { return this.form.valueChanges; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormdesignerComponent.prototype, "valid", {
            get: /**
             * @return {?}
             */ function () { return this.form.valid; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormdesignerComponent.prototype, "value", {
            get: /**
             * @return {?}
             */ function () { return this.form.value; },
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
            { type: core.Component, args: [{
                        selector: 'accela-formdesigner',
                        template: "<form class=\"dynamic-form\" (submit)=\"handleSubmit($event)\">\n\t<div class=\"container-fd\">\n\t\t<div class=\"sec-menubar\">\n\t\t\t<accela-section-menu></accela-section-menu>\n\t\t</div>\n\t\t<div class=\"sec-formdetail\">\n\t\t\t<accela-section-formdetail></accela-section-formdetail>\n\t\t</div>\n\t\t<div class=\"sec-formdesigner\">\n\t\t\t<div class=\"sec-control\">\n\t\t\t\t<accela-section-control></accela-section-control>\n\t\t\t\t<accela-section-property></accela-section-property>\n\t\t\t</div>\n\t\t\t<div class=\"sec-designer\">\n\t\t\t\t<accela-section-designer></accela-section-designer>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>",
                        styles: [".container-fd{padding:10px;background-color:#00f}.sec-menubar{padding:5px;background-color:#deb887}.sec-formdetail{padding:5px;background-color:#d2691e}.sec-formdesigner{-ms-box-orient:horizontal;display:-moz-flex;display:flex}.sec-control{flex:none;width:260px;background-color:red}.sec-designer{flex:none;min-width:665px;width:calc(100% - 260px);background-color:#0ff}"]
                    }] }
        ];
        /** @nocollapse */
        FormdesignerComponent.ctorParameters = function () { return []; };
        FormdesignerComponent.propDecorators = {
            formid: [{ type: core.Input }],
            submit: [{ type: core.Output }]
        };
        return FormdesignerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var SectionMenuComponent = /** @class */ (function () {
        function SectionMenuComponent() {
        }
        /**
         * @return {?}
         */
        SectionMenuComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SectionMenuComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'accela-section-menu',
                        template: "\n<p>\n  section-menu works!\n</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SectionMenuComponent.ctorParameters = function () { return []; };
        return SectionMenuComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var FormdesignerModule = /** @class */ (function () {
        function FormdesignerModule() {
        }
        FormdesignerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            platformBrowser.BrowserModule,
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            animations.BrowserAnimationsModule,
                            dragDrop.DragDropModule
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
        return FormdesignerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.FormdesignerModule = FormdesignerModule;
    exports.ɵa = FormdesignerComponent;
    exports.ɵe = SectionControlComponent;
    exports.ɵb = SectionDesignerComponent;
    exports.ɵd = SectionFormdetailComponent;
    exports.ɵf = SectionMenuComponent;
    exports.ɵc = SectionPropertyComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZWxhLWZvcm0tZGVzaWduZXIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hY2NlbGEtZm9ybS1kZXNpZ25lci9hcHAvZm9ybWRlc2lnbmVyL2NvbXBvbmVudC9zZWN0aW9uLWRlc2lnbmVyL3NlY3Rpb24tZGVzaWduZXIuY29tcG9uZW50LnRzIiwibmc6Ly9hY2NlbGEtZm9ybS1kZXNpZ25lci9hcHAvZm9ybWRlc2lnbmVyL2NvbXBvbmVudC9zZWN0aW9uLXByb3BlcnR5L3NlY3Rpb24tcHJvcGVydHkuY29tcG9uZW50LnRzIiwibmc6Ly9hY2NlbGEtZm9ybS1kZXNpZ25lci9hcHAvZm9ybWRlc2lnbmVyL2NvbXBvbmVudC9zZWN0aW9uLWZvcm1kZXRhaWwvc2VjdGlvbi1mb3JtZGV0YWlsLmNvbXBvbmVudC50cyIsIm5nOi8vYWNjZWxhLWZvcm0tZGVzaWduZXIvYXBwL2Zvcm1kZXNpZ25lci9jb21wb25lbnQvc2VjdGlvbi1jb250cm9sL3NlY3Rpb24tY29udHJvbC5jb21wb25lbnQudHMiLCJuZzovL2FjY2VsYS1mb3JtLWRlc2lnbmVyL2FwcC9mb3JtZGVzaWduZXIvY29tcG9uZW50L2Zvcm1kZXNpZ25lci5jb21wb25lbnQudHMiLCJuZzovL2FjY2VsYS1mb3JtLWRlc2lnbmVyL2FwcC9mb3JtZGVzaWduZXIvY29tcG9uZW50L3NlY3Rpb24tbWVudS9zZWN0aW9uLW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9hY2NlbGEtZm9ybS1kZXNpZ25lci9hcHAvZm9ybWRlc2lnbmVyL2Zvcm1kZXNpZ25lci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYWNjZWxhLXNlY3Rpb24tZGVzaWduZXInLFxuXHR0ZW1wbGF0ZVVybDogJy4vc2VjdGlvbi1kZXNpZ25lci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3NlY3Rpb24tZGVzaWduZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWN0aW9uRGVzaWduZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHRpbWVQZXJpb2RzID0gW107XG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy50aW1lUGVyaW9kcyA9IFtcblx0XHRcdCdCcm9uemUgYWdlJyxcblx0XHRcdCdJcm9uIGFnZScsXG5cdFx0XHQnTWlkZGxlIGFnZXMnLFxuXHRcdFx0J0Vhcmx5IG1vZGVybiBwZXJpb2QnLFxuXHRcdFx0J0xvbmcgbmluZXRlZW50aCBjZW50dXJ5J1xuXHRcdF07XG5cdH1cblxuXHRkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcblx0XHRtb3ZlSXRlbUluQXJyYXkodGhpcy50aW1lUGVyaW9kcywgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYWNjZWxhLXNlY3Rpb24tcHJvcGVydHknLFxuXHR0ZW1wbGF0ZVVybDogJy4vc2VjdGlvbi1wcm9wZXJ0eS5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3NlY3Rpb24tcHJvcGVydHkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWN0aW9uUHJvcGVydHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYWNjZWxhLXNlY3Rpb24tZm9ybWRldGFpbCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9zZWN0aW9uLWZvcm1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9zZWN0aW9uLWZvcm1kZXRhaWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWN0aW9uRm9ybWRldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhY2NlbGEtc2VjdGlvbi1jb250cm9sJyxcblx0dGVtcGxhdGVVcmw6ICcuL3NlY3Rpb24tY29udHJvbC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3NlY3Rpb24tY29udHJvbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlY3Rpb25Db250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjb25zdHJ1Y3RvcigpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2FjY2VsYS1mb3JtZGVzaWduZXInLFxuXHR0ZW1wbGF0ZVVybDogJy4vZm9ybWRlc2lnbmVyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vZm9ybWRlc2lnbmVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm9ybWRlc2lnbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KClcblx0Zm9ybWlkOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcblx0ZGlzYWJsZWQ6IGJvb2xlYW47XG5cdHZpc2libGU6IGJvb2xlYW47XG5cdGRhdGE6IGFueVtdO1xuXG5cdEBPdXRwdXQoKVxuXHRzdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cblx0Zm9ybTogRm9ybUdyb3VwO1xuXHRjb25zdHJ1Y3RvcigpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG5cblx0Z2V0IGNoYW5nZXMoKSB7IHJldHVybiB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzOyB9XG5cdGdldCB2YWxpZCgpIHsgcmV0dXJuIHRoaXMuZm9ybS52YWxpZDsgfVxuXHRnZXQgdmFsdWUoKSB7IHJldHVybiB0aGlzLmZvcm0udmFsdWU7IH1cblxuXHRoYW5kbGVTdWJtaXQoZXZlbnQ6IEV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLnN1Ym1pdC5lbWl0KHRoaXMudmFsdWUpO1xuXHR9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2FjY2VsYS1zZWN0aW9uLW1lbnUnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc2VjdGlvbi1tZW51LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc2VjdGlvbi1tZW51LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VjdGlvbk1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRHJhZ0Ryb3BNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcblxuaW1wb3J0IHsgU2VjdGlvbkRlc2lnbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvc2VjdGlvbi1kZXNpZ25lci9zZWN0aW9uLWRlc2lnbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWN0aW9uUHJvcGVydHlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9zZWN0aW9uLXByb3BlcnR5L3NlY3Rpb24tcHJvcGVydHkuY29tcG9uZW50JztcbmltcG9ydCB7IFNlY3Rpb25Gb3JtZGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvc2VjdGlvbi1mb3JtZGV0YWlsL3NlY3Rpb24tZm9ybWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VjdGlvbkNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9zZWN0aW9uLWNvbnRyb2wvc2VjdGlvbi1jb250cm9sLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEZvcm1kZXNpZ25lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L2Zvcm1kZXNpZ25lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VjdGlvbk1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9zZWN0aW9uLW1lbnUvc2VjdGlvbi1tZW51LmNvbXBvbmVudCc7XG5cblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0QnJvd3Nlck1vZHVsZSxcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Rm9ybXNNb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcblx0XHREcmFnRHJvcE1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRGb3JtZGVzaWduZXJDb21wb25lbnQsXG5cdFx0U2VjdGlvbkRlc2lnbmVyQ29tcG9uZW50LFxuXHRcdFNlY3Rpb25Qcm9wZXJ0eUNvbXBvbmVudCxcblx0XHRTZWN0aW9uRm9ybWRldGFpbENvbXBvbmVudCxcblx0XHRTZWN0aW9uQ29udHJvbENvbXBvbmVudCxcblx0XHRTZWN0aW9uTWVudUNvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Rm9ybWRlc2lnbmVyQ29tcG9uZW50LFxuXHRcdFNlY3Rpb25EZXNpZ25lckNvbXBvbmVudCxcblx0XHRTZWN0aW9uUHJvcGVydHlDb21wb25lbnQsXG5cdFx0U2VjdGlvbkZvcm1kZXRhaWxDb21wb25lbnQsXG5cdFx0U2VjdGlvbkNvbnRyb2xDb21wb25lbnQsXG5cdFx0U2VjdGlvbk1lbnVDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtZGVzaWduZXJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsibW92ZUl0ZW1JbkFycmF5IiwiQ29tcG9uZW50IiwiRXZlbnRFbWl0dGVyIiwiSW5wdXQiLCJPdXRwdXQiLCJOZ01vZHVsZSIsIkJyb3dzZXJNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIlJlYWN0aXZlRm9ybXNNb2R1bGUiLCJCcm93c2VyQW5pbWF0aW9uc01vZHVsZSIsIkRyYWdEcm9wTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FB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