import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as d3 from 'd3';
import * as d3Funnel from './d3-funnel-charts.js';

const DEFAULT_WIDTH = 400;

@Component({selector: 'app-funnel-chart', templateUrl: './funnel-chart.component.html', styleUrls: ['./funnel-chart.component.scss']})
export class FunnelChartComponent implements OnInit {
    private hostWidth = DEFAULT_WIDTH;

    constructor(private elRef: ElementRef) {}

    ngOnInit(): void {
        if (this.elRef.nativeElement) {
            this.hostWidth = this.elRef.nativeElement.offsetWidth - 10; // 10 = padding
        }
        this._drawFunnelChart();
    }

    private _drawFunnelChart() {
        const DEFAULT_COLORS = [
            '#00BCD4',
            '#2196F3',
            '#3F51B5',
            '#673AB7',
            '#9C27B0',
            '#E91E63',
            '#FF5722',
            '#FF9800',
            '#FFC107',
            '#CDDC39',
            '#607D8B',
            '#4CAF50',
            '#AD1457',
            '#D500F9',
            '#7C4DFF',
            '#4FC3F7',
            '#69F0AE',
            '#1A237E',
            '#DD2C00',
            '#FFEB38'
        ];

        const funnelData = [
            [
                'Website visits', 800, 'http://i.imgur.com/Ej8Oyf8.gif', 'http://i.imgur.com/Ej8Oyf8.gif', '10 per day'
            ],
            [
                'Downloads', 700, 'http://38.media.tumblr.com/68a980299b26202540db083a6b69077b/tumblr_nxcbqqYXs61tf' +
                        'b9v2o1_500.gif',
                'http://38.media.tumblr.com/68a980299b26202540db083a6b69077b/tumblr_nxcbqqYXs61tf' +
                        'b9v2o1_500.gif',
                '4 per day'
            ],
            [
                'Request demo', 300, 'http://24.media.tumblr.com/130f821e0c1c0ba7490622aa870ffe96/tumblr_n4iuliOlHb1tz' +
                        'iei6o1_500.gif',
                'http://24.media.tumblr.com/130f821e0c1c0ba7490622aa870ffe96/tumblr_n4iuliOlHb1tz' +
                        'iei6o1_500.gif',
                '2 per day'
            ],
            [
                'Purchased', 150, 'http://25.media.tumblr.com/d4dd104b64e7b9f3b34abc5428d63bac/tumblr_mpn7u7ek351rm' +
                        'w6moo1_500.gif',
                'http://25.media.tumblr.com/d4dd104b64e7b9f3b34abc5428d63bac/tumblr_mpn7u7ek351rm' +
                        'w6moo1_500.gif',
                '.5 per day'
            ]
        ];

        const chart = new d3Funnel.FunnelChart(d3, {
            data: funnelData,
            width: this.hostWidth,
            height: 100,
            bottomPct: 1 / 4,
            fill: true,
            hoverEffects: true,
            colors: DEFAULT_COLORS,
            label: 'middle',
            icon: false,
            tooltip: true,
            click: true,
            redirect: true
        });
        const animation = true;
        chart.draw('#funnelContainer', animation);
        // var increse_height = height + 200; $('svg').css('height', increse_height +
        // 'px');
    }
}
