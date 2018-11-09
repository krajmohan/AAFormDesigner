import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class FormdesignerComponent implements OnInit {
    formid: string;
    name: string;
    disabled: boolean;
    visible: boolean;
    data: any[];
    submit: EventEmitter<any>;
    form: FormGroup;
    constructor();
    ngOnInit(): void;
    readonly changes: import("rxjs/internal/Observable").Observable<any>;
    readonly valid: boolean;
    readonly value: any;
    handleSubmit(event: Event): void;
}
