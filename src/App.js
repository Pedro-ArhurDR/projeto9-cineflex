import React from 'react'
import Tela1 from './Tela1'
import Tela2 from './Tela2';
import Tela3 from './Tela3';
import Topo from './Topo'
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App(){
    const[element, setElement]=React.useState([])
    return(

        <BrowserRouter>
          <Topo/>
            <Routes>
                <Route path="/" element={<Tela1 />} />
                <Route path="/sessoes/:idFilme" element={<Tela2 />} />
                <Route path="/assentos/:idSessao" element={<Tela3 setElement={setElement}/>} />
            </Routes>
        </BrowserRouter>
    )
}