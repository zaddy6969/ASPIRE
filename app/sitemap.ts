import type {MetadataRoute} from 'next';
import {products,siteUrl} from '@/lib/aspire';
export default function sitemap():MetadataRoute.Sitemap{return ['', '/products','/about','/our-presence','/contact','/custom-packaging','/privacy',...products.map(p=>`/products/${p.slug}`)].map(path=>({url:`${siteUrl}${path}`,changeFrequency:'monthly',priority:path===''?1:path==='/products'?.9:.7}))}
