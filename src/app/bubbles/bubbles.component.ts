import { Component, OnChanges, AfterViewInit, Input, ViewChild } from '@angular/core';


@Component({
    selector: 'app-bubbles',
    templateUrl: './bubbles.component.html',
    styleUrls: ['./bubbles.component.css']
})
export class BubblesComponent implements AfterViewInit {

    values: number[] = [1000, 10000, 250000, 15000];

    constructor() { }

    ngAfterViewInit() {
    }

}
