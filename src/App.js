import React from 'react'
import Tela1 from './Tela1'
import Topo from './Topo'
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App(){

    return(

        <BrowserRouter>
          <Topo/>
            <Routes>
                <Route path="/" element={<Tela1 />} />
                <Route path="/sessoes/:idFilme" element={<Tela1 />} />
            </Routes>
        </BrowserRouter>
    )
}