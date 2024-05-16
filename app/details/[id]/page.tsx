'use client'
import DetailsLayout from '@/app/detailLayout';
import MainLayout from '@/app/mainLayout';
import { GetServerSideProps } from 'next';
import { usePathname } from 'next/navigation';


export default function Details({ params }: { params: { id: number } }){
    const id:number = params.id;

    return (
        <DetailsLayout>
            <div>AI페이지입니다. ID: {id}</div>
        </DetailsLayout>
        
    );
}
