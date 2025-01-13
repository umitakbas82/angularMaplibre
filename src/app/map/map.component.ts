import { Component,OnInit, AfterViewInit } from '@angular/core';
import maplibregl from 'maplibre-gl';

import { environment } from '../../environments/environment';
import { Basemap } from '../../models/basemap';
import { basemapList } from '../../utilities/mapCommon';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit,AfterViewInit{
  maptilerKey:(string)="12z1DUufFp494sL7fgKU"
  map: maplibregl.Map | undefined;
  currentZoom: string = '0.00';


  basemapList:Basemap[]=basemapList;
  selectedBasemapIndex =0;
  
  ngAfterViewInit(): void {
   this.initializeMap();
   console.log('map',this.map)
  }
 
  ngOnInit(): void {
   
  }


   initializeMap() {
    this.map = new maplibregl.Map({
      container: 'map',
      style:this.basemapList[this.selectedBasemapIndex].url,
      center: [35.243322, 38.963745],
      zoom: 5
    });
  
    // Zoom değişimini dinle
    // this.map.on('zoom', () => {
    //   this.currentZoom = this.map!.getZoom().toFixed(2);
    // });

    // this.map.addControl(new maplibregl.NavigationControl(), 'top-right');
    //  this.map.addControl(new maplibregl.FullscreenControl(), 'bottom-right');
     


    // new maplibregl.Marker()
    //   .setLngLat([32.866287, 39.925533])
    //   .setPopup(new maplibregl.Popup())
    //   .addTo(this.map);


    //   this.map.addControl(new maplibregl.NavigationControl(),'top-right');
    //   // this.map.addControl(new maplibregl.ScaleControl(),"bottom-right");
  
    //   new maplibregl.Marker()
    //   .setLngLat([32.866287, 39.925533])
    //   .setPopup(new maplibregl.Popup().setHTML("<h6>Ankara</h6>"))
    //   .addTo(this.map);
    //   new maplibregl.Marker()
    //   .setLngLat([40.730610, -73.935242])
    //   .setPopup(new maplibregl.Popup().setHTML("<h6>nweYork</h6>"))
    //   .addTo(this.map);
  }

  
  handleBasemapChange(basemap:Basemap, i:number){
    console.log(basemap,i)
  }
  
//  onZoomChance(event:Event){
//   if(!this.map)return;
//     const target=event.target as HTMLInputElement;
//     const newZoom=parseFloat(target.value)


//     if(isNaN(newZoom))return;
//     const clampedZoom = Math.min(Math.max(newZoom, 0), 20);
//     this.map.setZoom(clampedZoom);

//  }


//  flyToTurkey(){
//   this.map?.flyTo({
//     center: [35.243322, 38.963745],
//       zoom: 4,
//       essential: true
//   })

  
//  }


}


