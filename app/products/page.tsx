import type {Metadata} from 'next';
import {ProductsPage} from '@/components/aspire/pages';
export const metadata:Metadata={"title": "Packaging Products", "description": "Browse all 18 Aspire packaging products, including boxes, bags, pouches, thermal rolls, cups and protective packaging.", "alternates": {"canonical": "/products"}, "openGraph": {"title": "Packaging Products", "description": "Browse all 18 Aspire packaging products, including boxes, bags, pouches, thermal rolls, cups and protective packaging."}, "twitter": {"card": "summary", "title": "Packaging Products", "description": "Browse all 18 Aspire packaging products, including boxes, bags, pouches, thermal rolls, cups and protective packaging."}};
export default function Page(){return <ProductsPage/>}
