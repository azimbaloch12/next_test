import Header from '@/components/Header';
import List from '@/components/List';
import React from 'react';

export default function Crud() {
    let data = ['AZIM', 'IMDAD', 'SABNIR']
    return (
        <>
            <Header/>
            <List data={data}/>
        </>
    )
}
