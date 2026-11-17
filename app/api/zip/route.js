import {zipRows} from '../../../lib/zip';
export const runtime='nodejs';
export function GET(request){const u=new URL(request.url);const q=(u.searchParams.get('q')||'').trim().toLowerCase().slice(0,80);const state=(u.searchParams.get('state')||'').toUpperCase();const raw=Number(u.searchParams.get('page')||1);const page=Number.isInteger(raw)&&raw>0?raw:1;const rows=zipRows.filter(z=>(!state||z.state===state)&&(!q||z.zip.startsWith(q)||z.city.toLowerCase().includes(q)));return Response.json({total:rows.length,page,results:rows.slice((page-1)*24,page*24)})}
