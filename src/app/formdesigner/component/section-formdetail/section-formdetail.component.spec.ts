import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFormdetailComponent } from './section-formdetail.component';

describe('SectionFormdetailComponent', () => {
	let component: SectionFormdetailComponent;
	let fixture: ComponentFixture<SectionFormdetailComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SectionFormdetailComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SectionFormdetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
