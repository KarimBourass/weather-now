import { Coord } from './coord';
import { Temp } from './temp';
import { Weather } from './weather';
import { Wind } from './wind';

export interface City {
    main: Temp,
    weather: Array<Weather>,
    wind: Wind,
    coord: Coord,
    id: number
    timezone: number,
    name: string

}
