import { Coord } from './coord';
import { Sys } from './sys';
import { Temp } from './temp';
import { Weather } from './weather';
import { Wind } from './wind';

export interface City {
    sys: Sys,
    main: Temp,
    weather: Array<Weather>,
    wind: Wind,
    coord: Coord,
    id: number
    timezone: number,
    name: string

}
