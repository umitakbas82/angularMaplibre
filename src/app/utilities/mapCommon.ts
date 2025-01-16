
import { Basemap } from "../models/basemap";

const maptilerKey:(string)="12z1DUufFp494sL7fgKU"


export const basemapList:Basemap[]=[
{
    url:`https://api.maptiler.com/maps/streets-v2/style.json?key=${maptilerKey}`,
    image:"/assets/img/basic-v2.png",
},
{
    url:`https://api.maptiler.com/maps/satellite/style.json?key=${maptilerKey}`,
    image:"assets/img/satelitte.png",
},
// {
//     url:`https://api.maptiler.com/tiles/terrain-quantized-mesh-v2/{z}/{x}/{y}.quantized-mesh-1.0?key=12z1DUufFp494sL7fgKU`,
//     image:"assets/img/topo-v2.png",
// },
{
    url:`https://api.maptiler.com/maps/topo-v2/style.json?key=${maptilerKey}`,
    image:"assets/img/topo-v2.png",
}
]