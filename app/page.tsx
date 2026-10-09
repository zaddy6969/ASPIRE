import type {Metadata} from 'next';
import {HomePage} from '@/components/aspire/pages';
export const metadata:Metadata={alternates:{canonical:'/'}};
export default function Page(){return <HomePage/>}
