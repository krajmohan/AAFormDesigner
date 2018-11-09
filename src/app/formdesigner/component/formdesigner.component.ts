import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
	selector: 'accela-formdesigner',
	templateUrl: './formdesigner.component.html',
	styleUrls: ['./formdesigner.component.scss']
})
export class FormdesignerComponent implements OnInit {
	@Input()
	formid: string;
	name: string;
	disabled: boolean;
	visible: boolean;
	data: any[];

	@Output()
	submit: EventEmitter<any> = new EventEmitter<any>();

	form: FormGroup;
	constructor() { }

	ngOnInit() {
	}

	get changes() { return this.form.valueChanges; }
	get valid() { return this.form.valid; }
	get value() { return this.form.value; }

	handleSubmit(event: Event) {
		event.preventDefault();
		event.stopPropagation();
		this.submit.emit(this.value);
	}

}
