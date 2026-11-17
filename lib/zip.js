import zipcodes from 'zipcodes';
import {states} from './site';
const allowed=new Set(states.map(s=>s.code));
export const zipRows=Object.values(zipcodes.codes).filter(z=>allowed.has(z.state)).map(z=>({zip:z.zip,city:z.city,state:z.state})).sort((a,b)=>a.zip.localeCompare(b.zip));
export function findZip(zip){return zipcodes.lookup(zip)}
