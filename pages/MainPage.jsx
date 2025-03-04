import {useState} from 'react';
import Header from '../collections/Header';
import Banner from '../collections/Banner';
import Collections from '../collections/Collections';
import Footer from '../collections/Footer';
import {Men} from '../data';
import {Women} from '../data';
import {Kids} from '../data';
import Womencollection from '../collections/Womencollection';
import Kidscollection from '../collections/Kidscollection';

const MainPage=()=>{

    const [menFashion,setMensFashion]=useState(Men);
    const [womenfashion,setWomenfashion]=useState(Women);
    const [kidsfashion,setKidsfashion]=useState(Kids);
    return (
        <div>

        <Header/>
        <Banner/>
        <Collections mf={menFashion}/>
        <Womencollection wf={womenfashion}/>
        <Kidscollection kf={kidsfashion}/>
        <Footer/>
        </div>
        )
    }
export default MainPage;