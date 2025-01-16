import { environment } from "../environments/environment";
import { Basemap } from "../models/basemap";

const maptilerKey:(string)="12z1DUufFp494sL7fgKU"


export const basemapList:Basemap[]=[
{
    url:`https://api.maptiler.com/maps/basic-v2/style.json?key=${maptilerKey}`,
    image:"/assets/img/basic-v2.png",
},
{
    url:`https://api.maptiler.com/maps/satellite/style.json?key=${maptilerKey}`,
    image:"assets/img/satelitte.png",
},
{
    url:`https://api.maptiler.com/maps/topo-v2/style.json?key=${maptilerKey}`,
    image:"assets/img/topo-v2.png",
}
]