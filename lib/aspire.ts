export const company={name:'ASPIRE ENTERPRISES',email:'aspirepacs@gmail.com',phone:'+91 88675 78959',phone2:'+91 99006 60768',headquarters:'Kamath Layout, Vivekanandanagar, Bengaluru, Karnataka 560091',delhi:'G33, Ground Floor, Vikas Mall, Shahdara, Delhi 110032',warehouse:'No. 27, Raheem Saheb Layout, Magadi Main Road, Kachohalli, Bengaluru 560091'};
export const siteUrl=(process.env.NEXT_PUBLIC_SITE_URL||(process.env.VERCEL_PROJECT_PRODUCTION_URL?`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`:'https://aspire-enterprises.zubair428kg.chatgpt.site')).replace(/\/$/,'');
export type Product={slug:string;name:string;category:string;image:string;description:string;uses:string[]};
export const products:Product[]=[
{slug:'corrugated-box',name:'Corrugated Boxes',category:'Boxes',image:'corrugated-box',description:'Everyday shipping and storage boxes, made around your product dimensions and packing requirements.',uses:['E-commerce dispatch','Storage and transport','Custom printed packaging']},
{slug:'rigid-box',name:'Rigid Boxes',category:'Boxes',image:'rigid-box',description:'Structured presentation boxes for gifting, premium retail and products that deserve a considered unboxing experience.',uses:['Corporate gifting','Luxury retail','Presentation packaging']},
{slug:'printed-box',name:'Printed Boxes',category:'Boxes',image:'printed-box',description:'Bring your identity to every delivery with printed boxes tailored to your artwork, format and product.',uses:['Branded deliveries','Subscription boxes','Retail packaging']},
{slug:'printed-paper-bags',name:'Printed Paper Bags',category:'Bags & Pouches',image:'printed-paper-bags',description:'Paper carry bags that keep your branding in hand, with size and print options to suit your business.',uses:['Retail stores','Events and gifting','Takeaway orders']},
{slug:'paper-pouches',name:'V & Square Paper Pouches',category:'Bags & Pouches',image:'paper-pouches',description:'Practical paper pouch formats for everyday packing. Discuss your size, material and application with our team.',uses:['Retail packing','Bakery applications','Counter service']},
{slug:'barcode-sticker',name:'Barcode Stickers',category:'Labels & Rolls',image:'barcode-sticker',description:'Barcode labels for clear product identification, organised inventory and streamlined dispatch.',uses:['Shipping labels','Inventory identification','Product labelling']},
{slug:'fbb-box',name:'FBB Packaging',category:'Boxes',image:'fbb-box',description:'Folding box board packaging for product presentation, branded cartons and retail displays.',uses:['Retail cartons','Gift packaging','Product presentation']},
{slug:'thermal-roll',name:'Thermal Rolls',category:'Labels & Rolls',image:'thermal-roll',description:'Thermal paper rolls for everyday billing and receipt printing. Share your printer and roll specifications for a quote.',uses:['Point of sale','Billing counters','Receipt printing']},
{slug:'stretch-wrap',name:'Cling & Stretch Wrap',category:'Protective Packaging',image:'stretch-wrap',description:'Wrapping solutions for your packing workflow, from securing cartons to bundling products for transport.',uses:['Pallet wrapping','Carton bundling','Packing operations']},
{slug:'ldpe-pouches',name:'LDPE Pouches',category:'Bags & Pouches',image:'ldpe-pouches',description:'Flexible LDPE pouches for product containment and everyday packing, available to discuss in your required size.',uses:['Product packing','Inner packaging','Component storage']},
{slug:'kraft-pouches',name:'Kraft Stand-up Pouches',category:'Bags & Pouches',image:'kraft-pouches',description:'A natural kraft presentation with a stand-up format for shelf-ready products. Specify your barrier and closure requirements.',uses:['Dry goods','Speciality products','Retail display']},
{slug:'zipper-pouches',name:'Stand-up Zipper Pouches',category:'Bags & Pouches',image:'zipper-pouches',description:'Resealable stand-up pouches that combine convenient closures with space for your brand and product information.',uses:['Resealable packaging','Retail products','Custom printed pouches']},
{slug:'tea-flask-pouch',name:'Tea Flask Inner Pouches',category:'Food Service',image:'tea-flask-pouch',description:'Inner pouches for tea flask packaging. Confirm capacity, application and compatibility with our team before ordering.',uses:['Tea flask liners','Beverage service','Takeaway beverage packing']},
{slug:'garbage-bags',name:'Garbage Bags',category:'Bags & Pouches',image:'garbage-bags',description:'Waste collection bags for daily business operations. Ask for the size and thickness suited to your bins and use.',uses:['Office housekeeping','Hospitality operations','Commercial waste collection']},
{slug:'coffee-cups',name:'Paper Coffee Cups',category:'Food Service',image:'coffee-cups',description:'Paper cups for café and takeaway service, with branding and format requirements discussed as part of your order.',uses:['Cafés and coffee counters','Takeaway drinks','Events and hospitality']},
{slug:'paper-glass',name:'Paper Glasses',category:'Food Service',image:'paper-glass',description:'Paper drinkware for everyday service and events. Share the required volume, finish and quantity for an accurate quote.',uses:['Beverage counters','Office pantries','Events and catering']},
{slug:'bopp-tape',name:'BOPP Tapes',category:'Protective Packaging',image:'bopp-tape',description:'Carton sealing tapes for dispatch and warehouse operations, including printed branding requirements.',uses:['Carton sealing','Warehouse packing','Branded packing tape']},
{slug:'bubble-roll',name:'Bubble Rolls',category:'Protective Packaging',image:'bubble-roll',description:'Cushioning material for wrapping products and protecting surfaces during packing, handling and transit.',uses:['Fragile products','Surface protection','Protective wrapping']}
];
export const categories=['All Products','Boxes','Bags & Pouches','Labels & Rolls','Protective Packaging','Food Service'];
export const clients=[['cultfit','cult.fit'],['mamaearth','Mamaearth'],['saint-gobain','Saint-Gobain'],['himalaya','Himalaya'],['acer','Acer']];
export const locations=[
{name:'Bangalore',region:'Karnataka · Head office',lat:12.9716,lng:77.5946,type:'city'},
{name:'Nelamangala',region:'Karnataka',lat:13.099,lng:77.395,type:'city'},
{name:'Krishnagiri',region:'Tamil Nadu',lat:12.5186,lng:78.2137,type:'city'},
{name:'Chennai',region:'Tamil Nadu',lat:13.0827,lng:80.2707,type:'city'},
{name:'Mumbai',region:'Maharashtra',lat:19.076,lng:72.8777,type:'city'},
{name:'Pune',region:'Maharashtra',lat:18.5204,lng:73.8567,type:'city'},
{name:'Hyderabad',region:'Telangana',lat:17.385,lng:78.4867,type:'city'},
{name:'Kolkata',region:'West Bengal',lat:22.5726,lng:88.3639,type:'city'},
{name:'Delhi',region:'Delhi · Regional office',lat:28.6139,lng:77.209,type:'city'},
{name:'Kochi',region:'Kerala',lat:9.9312,lng:76.2673,type:'city'},
{name:'Gujarat',region:'State coverage',lat:22.3,lng:71.19,type:'state'},
{name:'Rajasthan',region:'State coverage',lat:27.02,lng:74.22,type:'state'},
{name:'Kerala',region:'State coverage · including Kochi',lat:10.85,lng:76.27,type:'state'},
{name:'Tamil Nadu',region:'State coverage',lat:11.12,lng:78.66,type:'state'},
{name:'Andhra Pradesh',region:'State coverage',lat:16.1,lng:80.2,type:'state'},
{name:'Gulf countries',region:'Regional coverage · enquire for your destination',lat:25.3,lng:51.4,type:'gulf'}];
export const faqs=[
['Can I customise packaging with my brand?','Yes. Aspire offers made-to-order products, custom printing and white labelling. Share your artwork, dimensions, material preference and quantity so our team can advise on the right format.'],
['How do I get pricing and minimum order quantities?','Pricing and minimum quantities depend on the product, material, dimensions, printing and order volume. Request a quote with your specifications for confirmed pricing.'],
['Where do you supply packaging?','Our coverage includes the listed cities and regions across India, as well as Gulf countries. Contact us with your delivery location to confirm availability, freight and lead time for your order.'],
['Can I discuss a sample before a bulk order?','Contact our team with the product and finish you need. We will confirm sample availability, applicable charges and timelines before proceeding.'],
['Do you provide GST invoices?','Yes. GST invoicing is part of our procurement service. Share your billing details when confirming your order.']];
