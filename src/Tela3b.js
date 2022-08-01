import React from "react";
export default function Seats (props) {
    const {id, numero, isAvailable, num_assentos_Reserv, setNum_assentos_Reserv, assentos_Reserv, setAssentos_Reserv} = props;
    const [escolher, setEscolher] = React.useState('disponivel');
    const [selecionar, setSelecionar] = React.useState('true');

    function reservar(texto) {
        if (texto === 'false') {
            setEscolher('disponivel');
            setSelecionar('true');
            for (let i = 0; i < assentos_Reserv.length; i = i + 1) {
                if (assentos_Reserv[i] === id) {
                    assentos_Reserv.splice(i, 1);
                }
                if (num_assentos_Reserv[i] === numero) {
                    num_assentos_Reserv.splice(i, 1);
                }
            }
        } else if (texto === 'true') {
            setEscolher('selecionado');
            setSelecionar('false');
            setAssentos_Reserv([...assentos_Reserv, id]);
            setNum_assentos_Reserv([...num_assentos_Reserv, numero]);
        }
    }


    return (
    <>
        {isAvailable ? (
            <div className={escolher}>
                <div onClick={() => reservar(selecionar)}>.</div>
            </div>
        ) : (
            <div className="indisponivel">
                <div onClick={() => alert("Indisponível")}>.</div>
            </div>
        )}
    </>);
}