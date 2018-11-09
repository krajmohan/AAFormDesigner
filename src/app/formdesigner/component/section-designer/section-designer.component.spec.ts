import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDesignerComponent } from './section-designer.component';

describe('SectionDesignerComponent', () => {
	let component: SectionDesignerComponent;
	let fixture: ComponentFixture<SectionDesignerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SectionDesignerComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SectionDesignerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
