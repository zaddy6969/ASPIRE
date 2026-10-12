'use client';
import Link from 'next/link';
import {useId,useState} from 'react';
import {ArrowUpRight,Globe2,MapPin,PackageCheck,Warehouse} from 'lucide-react';
import {locations} from '@/lib/aspire';
import {indiaStates,projectIndia} from '@/lib/india-map';

const serviceRegions = [
 {name:'Karnataka',cities:['Bangalore','Nelamangala'],label:[20,450],point:[15.0,76.0]},
 {name:'Tamil Nadu',cities:['Chennai','Krishnagiri','Tamil Nadu'],label:[490,525],point:[10.9,78.4]},
 {name:'Maharashtra',cities:['Mumbai','Pune'],label:[20,373],point:[19.5,75.4]},
 {name:'Telangana',cities:['Hyderabad'],label:[490,419],point:[17.8,79.0]},
 {name:'Kerala',cities:['Kochi','Kerala'],label:[20,537],point:[10.5,76.4]},
 {name:'Delhi',cities:['Delhi'],label:[490,192],point:[28.6,77.2]},
 {name:'West Bengal',cities:['Kolkata'],label:[510,325],point:[23.0,87.7]},
 {name:'Gujarat',cities:['Gujarat'],label:[20,300],point:[22.6,71.7]},
 {name:'Rajasthan',cities:['Rajasthan'],label:[20,224],point:[26.8,73.8]},
] as const;

export function PresenceMap(){
 const [selectedRegion,setSelectedRegion]=useState('Karnataka');
 const [selectedLocation,setSelectedLocation]=useState('Bangalore');
 const [view,setView]=useState<'india'|'gulf'>('india');
 const panelId=useId();
 const region=serviceRegions.find(item=>item.name===selectedRegion)!;
 const place=locations.find(item=>item.name===selectedLocation)!;
 const regionCities=locations.filter(item=>region.cities.some(name=>name===item.name));
 function chooseRegion(name:string){const next=serviceRegions.find(item=>item.name===name);if(!next)return;setSelectedRegion(next.name);setSelectedLocation(next.cities[0]);}
 return <div className="coverage">
  <div className="coverage-toolbar"><div className="coverage-switch" aria-label="Choose coverage region"><button aria-pressed={view==='india'} aria-controls={panelId} onClick={()=>setView('india')}><MapPin size={17}/>Across India</button><button aria-pressed={view==='gulf'} aria-controls={panelId} onClick={()=>setView('gulf')}><Globe2 size={17}/>Gulf countries</button></div><div className="coverage-facts"><span><Warehouse size={18}/><strong>4</strong> India warehouses</span><span><PackageCheck size={18}/><strong>15+</strong> clients</span></div></div>
  <div id={panelId} className={view==='india'?'coverage-body':'coverage-body gulf-view'}>{view==='india'?<>
   <div className="coverage-map"><div className="coverage-map-title"><span>OUR SUPPLY NETWORK</span><span className="map-key"><i/>Service regions</span></div>
    <svg viewBox="0 0 700 600" className="coverage-svg" role="group" aria-label="India map. Select a labelled state or use the region buttons."><title>India states and Aspire service regions</title>
     <g transform="translate(105 0) scale(.92)">{indiaStates.map(state=>{const served=serviceRegions.some(item=>item.name===state.name);return <path key={state.name} d={state.path} fillRule="evenodd" className={`coverage-state ${served?'served':''} ${state.name===selectedRegion?'active':''}`}><title>{state.name}</title></path>})}
      {locations.filter(item=>item.type==='city'&&region.cities.some(name=>name===item.name)).map(city=>{const[x,y]=projectIndia(city.lat,city.lng);return <g key={city.name} className="coverage-city"><circle cx={x} cy={y} r={city.name===selectedLocation?9:5}/><circle className="city-core" cx={x} cy={y} r="2.5"/><title>{city.name}</title></g>})}</g>
     {serviceRegions.map(item=>{const[px,py]=projectIndia(item.point[0],item.point[1]);const x=105+px*.92,y=py*.92;const[lx,ly]=item.label;const left=lx<100,edge=left?lx+119:lx-10;return <g key={item.name} className={`coverage-label ${item.name===selectedRegion?'active':''}`} role="button" tabIndex={0} aria-label={`Show ${item.name} coverage`} aria-pressed={item.name===selectedRegion} onClick={()=>chooseRegion(item.name)} onKeyDown={event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();chooseRegion(item.name)}}}><path d={`M${x},${y} L${left?edge+12:edge-12},${ly-6} L${edge},${ly-6}`}/><circle cx={x} cy={y} r="3"/><rect x={lx-8} y={ly-23} width={item.name==='West Bengal'?149:134} height="37" rx="7"/><text x={lx} y={ly}>{item.name}</text></g>})}
     <text className="sea-label" x="50" y="590">ARABIAN SEA</text><text className="sea-label" x="485" y="590">BAY OF BENGAL</text>
    </svg><div className="map-active-caption"><MapPin size={16}/><strong>{selectedRegion}</strong><span>{regionCities.filter(item=>item.type==='city').map(item=>item.name).join(' · ')||'State-wide enquiries'}</span></div>
   </div>
   <div className="coverage-directory"><span className="eyebrow blue">FIND YOUR LOCATION</span><h3>Closer to your business.</h3><p>Select a state to explore our service locations.</p><div className="region-options" aria-label="Service states and union territories">{serviceRegions.map(item=><button key={item.name} onClick={()=>chooseRegion(item.name)} aria-pressed={selectedRegion===item.name}>{item.name}</button>)}</div>
    <div className="selected-region" aria-live="polite"><div className="selected-region-heading"><MapPin size={20}/><div><h4>{selectedRegion}</h4><span>{selectedRegion==='Delhi'?'Union territory':'State'} coverage</span></div></div><div className="city-options" aria-label={`Locations in ${selectedRegion}`}>{regionCities.map(city=><button key={city.name} onClick={()=>setSelectedLocation(city.name)} aria-pressed={selectedLocation===city.name}><span>{city.type==='state'?`Across ${city.name}`:city.name}</span><span className="city-choice-dot"/></button>)}</div><p className="coverage-place-note">{place.region.includes('office')?place.region:'Packaging enquiries and delivery support'}</p><Link className="button" href={`/contact?location=${encodeURIComponent(selectedLocation)}`}>Enquire for {selectedLocation}<ArrowUpRight size={17}/></Link></div>
   </div>
  </>:<><div className="gulf-visual"><Globe2 size={140} strokeWidth={.8}/><span className="eyebrow">BEYOND BORDERS</span><h3>From India.<br/>To the Gulf.</h3><p>Your packaging partner, wherever business takes you.</p></div><div className="gulf-information"><span className="eyebrow blue">GULF COUNTRIES</span><h3>Let’s plan your<br/>next shipment.</h3><p>We support packaging requirements for Gulf destinations. Share your delivery city, product specifications and quantities to confirm supply and shipping options.</p><ul><li>Custom and standard packaging</li><li>Product sourcing and order coordination</li><li>Destination-specific delivery enquiries</li></ul><Link className="button" href="/contact?location=Gulf%20countries">Enquire for Gulf delivery<ArrowUpRight size={18}/></Link></div></>}</div>
  <div className="map-footnote"><p>Service coverage shown. Contact us to confirm availability and delivery to your destination.</p><span>Map: <a href="https://github.com/datameet/maps/tree/master/States" target="_blank" rel="noopener noreferrer">DataMeet</a> · <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a></span></div>
 </div>
}
