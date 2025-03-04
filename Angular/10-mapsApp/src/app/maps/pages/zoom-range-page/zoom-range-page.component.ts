import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, PLATFORM_ID, ViewChild } from '@angular/core';
import maplibregl,{LngLat, Map} from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';


@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css'
})
export class ZoomRangePageComponent  implements AfterViewInit, OnDestroy{
    
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
      this.mapListeners();

    }

    
  }
  ngOnDestroy(): void {
    this.map?.remove();
    this.map = undefined;
    this.mapListeners();
  }
  mapListeners(){
    if(!this.map) throw 'Elemento no encontrado';

    this.map.on('zoom', () => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomed', () => {
      if(this.map!.getZoom()< 18 )return;
      this.map?.zoomTo(18);
    });

    this.map.on('move', () => {
      this.currentLngLat=this.map!.getCenter();
    });


  }
  zoomIn(){
    this.map?.zoomIn();
  }
  zoomOut(){
    this.map?.zoomOut();
  }
  zoomChanged(value:string){
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom);
  }
}
