import { OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
export declare class SectionDesignerComponent implements OnInit {
    timePeriods: any[];
    constructor();
    ngOnInit(): void;
    drop(event: CdkDragDrop<string[]>): void;
}
