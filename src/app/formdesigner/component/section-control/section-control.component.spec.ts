import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionControlComponent } from './section-control.component';

describe('SectionControlComponent', () => {
	let component: SectionControlComponent;
	let fixture: ComponentFixture<SectionControlComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SectionControlComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SectionControlComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
