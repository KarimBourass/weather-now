import { Weather } from './weather';

export interface Coord {
    coord: Coord,
    weather: Weather,
    lon:number;
    lat:number;
}
