import React from "react";
import { useEffect } from "react"
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import Tela3b from "./Tela3b";

export default function Tela3(props){
    const {setDados} = props
    const [cadeiras , setCadeiras] = React.useState([])
    const [sessao1,setSessao1] = React.useState([])
    const [sessao2,setSessao2] = React.useState([])
    const [sessao3,setSessao3] = React.useState([])
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`)
        console.log(promise,'assunteos')
    promise.then(resposta =>{
        setCadeiras(resposta.data.seats)
        setSessao1(resposta.data.movie)
        setSessao2(resposta.data.day)
        setSessao3(resposta.data)
    })
    },[params.idSessao])

    const[nome,setNome] = React.useState('')
    const[assentos_Reserv, setAssentos_Reserv]= React.useState([])
    const[registro, setRegistro] = React.useState('')
    const[num_assentos_Reserv, setNum_assentos_Reserv] = React.useState([])

    function Reservar(element){
        element.preventDefault();
        setDados({
            movie:`${sessao1.title}`,
            date:`${sessao2.date} - ${sessao3.name}`,
            seats:`${num_assentos_Reserv}`,
            comprador:`${nome}`,
            CPFcomprador:`${registro}`
        })
    
        let postar = {
            ids:`${assentos_Reserv}`,
            name:`${nome}`,
            cpf:registro
        }
    
        const promise2 = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many',postar)
        promise2.then(()=>{
            setNome('')
            setRegistro('')
            postar={
                ids:"",
                name:"",
                cpf:""
            };
            if(assentos_Reserv.length > 0){
                navigate('/sucesso')
            }
            else{
                alert('Você precisa escolher ao menos um assento para continuar')
            }
            promise2.catch(() => alert('Erro'))})
    }
    return(
        <>  
            <div className="container"> 
          <div className="topo2">Selecione o(s) assento(s)</div>
          <div className="assentos">
            {cadeiras.map(itens => <Tela3b

            key={itens.id} id={itens.id} isAvailable={itens.isAvailable} 
            name={itens.name} assentos_Reserv={assentos_Reserv} 
            setAssentos_Reserv={setAssentos_Reserv} num_assentos_Reserv={num_assentos_Reserv} 
            setNum_assentos_Reserv={setNum_assentos_Reserv}/>)}

          </div>

          <div className="opcoes">
            <div className="opcao">
                <div className="selecionado"></div>
                Selecionado
            </div>
            <div className="opcao">
                <div className="disponivel"></div>
                Disponível
            </div>
            <div className="opcao">
                <div className="indisponivel"></div>
                Indisponível
            </div>
          </div>
          <form onSubmit={i => Reservar(i)}>
          <div className="inserir">
                    <p>Nome do comprador:</p>
                    <input type="text" placeholder="   Digite seu nome..." onChange={i => setNome(i.target.value)} value={nome} required></input>
                </div>
                <div className="inserir">
                    <p>CPF do comprador:</p>
                    <input type="text" placeholder="   Digite seu CPF..." onChange={i => setRegistro(i.target.value)} value={registro} required></input>
                </div>
                <button type="submit" className="botao">Reservar assentos</button>
          </form>
          <div className="barrainf">
                    <img src={sessao1.posterURL} alt="coverpage" />
                <div>
                    <p>{sessao1.title}</p>
                    <p>{sessao2.weekday} - {sessao3.name}</p>
                </div>
          </div>
          </div>
        </>
    )
}
