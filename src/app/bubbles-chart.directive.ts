import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

// <script src="//d3js.org/d3.v2.js"></script>
declare var d3;


@Directive({
    selector: '[appBubblesChart]'
})
export class BubblesChartDirective implements AfterViewInit {

    @Input('appBubblesChart') values: number[];

    constructor(private el: ElementRef) {
        this.el = el;
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit');
        this.render();
    }

    private render() {
        console.log(this.values);
        d3.select(this.el.nativeElement)
            // Get the old circles
            .selectAll('circle')
            .data(this.values)
            .enter()
            // For each new data point, append a circle to the target SVG
            .append('circle')
            // Apply several style attributes to the circle
            .attr('r', d => Math.log(d))
            .attr('fill', '#5fc')
            .attr('stroke', '#333')
            .attr('transform', (d, i) => {
                // This moves the circle based on its value
                var offset = i * 20 + 2 * Math.log(d);
                return `translate(${offset}, ${offset})`;
            });
    }


}
