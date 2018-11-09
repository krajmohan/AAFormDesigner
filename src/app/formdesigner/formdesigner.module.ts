import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

// Directive
import { ResizableDirective } from './directives/resizable.directive';
import { ResizeHandleDirective } from './directives/resize-handle.directive';

// Component
import { SectionDesignerComponent } from './component/section-designer/section-designer.component';
import { SectionPropertyComponent } from './component/section-property/section-property.component';
import { SectionFormdetailComponent } from './component/section-formdetail/section-formdetail.component';
import { SectionControlComponent } from './component/section-control/section-control.component';
import { FormdesignerComponent } from './component/formdesigner.component';
import { SectionMenuComponent } from './component/section-menu/section-menu.component';

@NgModule({
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		DragDropModule
	],
	declarations: [
		ResizableDirective,
		ResizeHandleDirective,

		FormdesignerComponent,
		SectionDesignerComponent,
		SectionPropertyComponent,
		SectionFormdetailComponent,
		SectionControlComponent,
		SectionMenuComponent
	],
	exports: [
		ResizableDirective,
		ResizeHandleDirective,

		FormdesignerComponent,
		SectionDesignerComponent,
		SectionPropertyComponent,
		SectionFormdetailComponent,
		SectionControlComponent,
		SectionMenuComponent
	]
})
export class FormdesignerModule { }
