import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormdesignerModule } from '../formdesigner/formdesigner.module';

import { FormService } from './service/form.service';
@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormdesignerModule
	],
	providers: [
		FormService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
