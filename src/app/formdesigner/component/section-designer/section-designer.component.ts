import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ResizeEvent } from '@accela/formdesigner/models';

@Component({
	selector: 'accela-section-designer',
	templateUrl: './section-designer.component.html',
	styleUrls: ['./section-designer.component.scss']
})
export class SectionDesignerComponent implements OnInit {

	todo = [
		{'key': 1, 'value': 'First Name'},
		{'key': 2, 'value': 'Last Name'},
		{'key': 3, 'value': 'Address 1#'},
		{'key': 4, 'value': 'Address 2#'},
	];

	done = [
		{'key': 5, 'value': 'City'},
		{'key': 6, 'value': 'State'},
		{'key': 7, 'value': 'Zip'},
		{'key': 8, 'value': 'Phont #'},
		{'key': 9, 'value': 'Mobile #'},
	];

	public style: object = {};

	constructor() { }

	ngOnInit() {}

	drop(event: CdkDragDrop<string[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex);
		}
	}


	validate(event: ResizeEvent): boolean {
		const MIN_DIMENSIONS_PX = 50;
		if (
			event.rectangle.width &&
			event.rectangle.height &&
			(event.rectangle.width < MIN_DIMENSIONS_PX ||
				event.rectangle.height < MIN_DIMENSIONS_PX)
		) {
			return false;
		}
		return true;
	}

	onResizeEnd(event: ResizeEvent): void {
		this.style = {
			position: 'relative',
			// left: `${event.rectangle.left}px`,
			// top: `${event.rectangle.top}px`,
			width: `${event.rectangle.width}px`,
			height: `${event.rectangle.height}px`
		};
	}
}
