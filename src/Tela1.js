
import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router-dom";


export default function Tela1(){
    let [filmes,setFilmes] = useState([])

    useEffect(() => {    const requisicao = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies')
    requisicao.then(resposta =>{setFilmes(resposta.data)})
    console.log(requisicao)},[])


    return(
        <>
          <div className="container"> 
          <div className="topo2">Selecione o filme</div>
          <div className="Filmes">
          {filmes.map(element => <Filme key={element.id} ID={element.id} URL={element.posterURL}/>)}
          </div>
          </div>

        </>
    )
}


function Filme(props){
    const{ID,URL} = props
    return(
        <Link to={`/sessoes/${ID}`}>
            <div className="basefilme">
                <img src={URL} alt="coverpage" />
            </div>
        </Link>
    )
}