import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { LayoutHeader} from './Components/LayoutHeader';
import { Home } from './Components/pagesHeader/Home';
import { About } from './Components/pagesHeader/About';
import { ListVans } from './Components/Vans/ListVans';
import {VanDetail} from './Components/Vans/VanDetail';
import {LayoutHeaderOptionsVans} from './Components/Host/LayoutHeaderHost';

import DashBoard from './Components/DashBoard';
import Income from './Components/Income';
import HostVans from './Components/Host/HostVans';
import Rewies from './Components/Rewies';
import HostVanDetailPricing from './Components/Host/HostVanDetail/HostVanDetailPrincing';
import HostVanDetailDetails from './Components/Host/HostVanDetail/HostVanDetailDetails';
import HostVanDetailPhotos from './Components/Host/HostVanDetail/HostVanDeatailPhotos';
import HostVanDetail from './Components/Host/HostVanDetail/HostVanDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <BrowserRouter>
        <Routes >
            <Route element={<LayoutHeader/>}>
                <Route path='*' element={<h1>Page not found</h1>}/>
                <Route index element={<Home/>} />       
                <Route path='about' element={<About/>} />
                <Route path='vans' element={<ListVans/>}/>      
                <Route path="vans/vansDetail/:id" element={<VanDetail/>} />
                
                <Route path='host' element={<LayoutHeaderOptionsVans/>}>
                    <Route index element={<DashBoard/>}/>
                    <Route path='income' element={<Income/>}/>
                    <Route path='vans' element={<HostVans/>}/>

                    <Route path='vans/vansDetail/:id' element = {<HostVanDetail/>}>
                        <Route path='pricing' element={<HostVanDetailPricing/>}/>
                        <Route path='photos' element={<HostVanDetailPhotos/>}/> 
                        <Route index element={<HostVanDetailDetails/>}/> 
                    </Route>
                    <Route path='reviews' element={<Rewies/>}/>
                </Route>

            </Route>
        </Routes>
    </BrowserRouter> 
);


