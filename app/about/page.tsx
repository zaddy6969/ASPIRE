import type {Metadata} from 'next';
import {AboutPage} from '@/components/aspire/pages';
export const metadata:Metadata={"title": "About Us", "description": "Meet Aspire Enterprises, your manufacturing and procurement partner for custom packaging and PAN India delivery.", "alternates": {"canonical": "/about"}, "openGraph": {"title": "About Us", "description": "Meet Aspire Enterprises, your manufacturing and procurement partner for custom packaging and PAN India delivery."}, "twitter": {"card": "summary", "title": "About Us", "description": "Meet Aspire Enterprises, your manufacturing and procurement partner for custom packaging and PAN India delivery."}};
export default function Page(){return <AboutPage/>}
