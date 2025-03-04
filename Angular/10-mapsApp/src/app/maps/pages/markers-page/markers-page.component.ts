import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import maplibregl,{LngLat, Map} from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent {
  
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}
  
  @ViewChild('map') divMap?: ElementRef;
 
 public zoom:number = 0;
 public map?: Map;
 public currentLngLat: LngLat = new LngLat(-74.5, 40);
 
   ngAfterViewInit(): void {
     if(!this.divMap) throw 'Elemento no encontrado';
     if (isPlatformBrowser(this.platformId)) {
       this.map = new maplibregl.Map({
         container: this.divMap.nativeElement, // container id
         style: 'https://demotiles.maplibre.org/style.json', // style URL
         center: this.currentLngLat,
         zoom: this.zoom // starting zoom
       });
 
     }
 
     
   }
}