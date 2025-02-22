import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit {
  
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}
  @ViewChild('map') divMap?: ElementRef;




  ngAfterViewInit(): void {
    if(!this.divMap) throw 'Elemento no encontrado';
    if (isPlatformBrowser(this.platformId)) {
      const map = new maplibregl.Map({
        container: this.divMap.nativeElement, // container id
        style: 'https://demotiles.maplibre.org/style.json', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
      });
    }
  }
}
