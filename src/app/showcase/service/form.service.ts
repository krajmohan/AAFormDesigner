import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FormService {

	constructor(private http: HttpClient) { }

	getSummaryForm() {
		return this.http.get<any>('mock-api/record-summary.json')
			.toPromise()
			.then(res => <any[]>res.data)
			.then(data => data);
	}
}
