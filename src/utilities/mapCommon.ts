import { environment } from "../environments/environment";
import { Basemap } from "../models/basemap";

const maptilerKey=environment.maptilerKey


export const basemapList:Basemap[]=[
{
    url:`https://api.maptiler.com/maps/basic-v2/style.json?key=${maptilerKey}`,
    image:"app/assets/img/basic-v2.png",
},
{
    url:`https://api.maptiler.com/maps/satellite/style.json?key=${maptilerKey}`,
    image:"./../assets/maps/satelitte.png",
},
{
    url:`https://api.maptiler.com/maps/topo-v2/style.json?key=${maptilerKey}`,
    image:"..\src\assets",
}
]