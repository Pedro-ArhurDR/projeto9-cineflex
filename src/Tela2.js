import React from "react";
import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios'
import { Link, useParams } from "react-router-dom";

export default function Tela2(){
    const params = useParams()
    const [horarios, setHorarios] = useState([])
    const [sessoes, setSessoes] = useState([])

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.idFilme}/showtimes`)

    console.log(promise)

    promise.then(resposta =>{
        setHorarios(resposta.data)
        setSessoes(resposta.data.days)
    } )},[params.idFilme])

    return(
        <>  
            <div className="container"> 
          <div className="topo2">Selecione o horário</div>
          <div className="horarios">

          {sessoes.map((element,index) => <Horario key={element.id} index={index} weekday={element.weekday} date={element.date} 
          hora1={element.showtimes[0].name} hora2={element.showtimes[1].name} sessoes={sessoes}/>)}

          </div>
          <div className="barrainf">
            <img src={horarios.posterURL} alt='coverpage'/>

            {horarios.title}
          </div>
          </div>
        </>
    )
}

function Horario(props){
 const{date, weekday, hora1, hora2, sessoes, index} = props

    return (
        <div className="horario">
            <div className="row">{weekday} - {date}</div>
            <div className="sessoes">

                <Link to={`/assentos/${sessoes[index].showtimes[0].id}`}>
                    <div className="sessao">
                        {hora1}
                    </div>
                </Link>

                <Link to={`/assentos/${sessoes[index].showtimes[1].id}`}>
                    <div className="sessao">
                        {hora2}
                    </div>
                </Link>
                
            </div>
        </div>
    )
}
