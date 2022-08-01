import React from "react";

export default function Tela3b (props) {
    const {id, numero, isAvailable, num_assentos_Reserv, setNum_assentos_Reserv, assentos_Reserv, setAssentos_Reserv} = props;
    const [definir, setDefinir] = React.useState('true');
    const [escolher, setEscolher] = React.useState('seats');

    function selectSeat (texto) {
        if (texto === 'false') {
            setEscolher('seats');
            setDefinir('true');
            for (let i = 0; i < assentos_Reserv.length; i = i + 1) {
                if (assentos_Reserv[i] === id) {
                    assentos_Reserv.splice(i, 1);
                }
                if (num_assentos_Reserv[i] === numero) {
                    num_assentos_Reserv.splice(i, 1);
                }
            }
        } else if (texto === 'true') {
            setEscolher('seats select');
            setDefinir('false');
            setAssentos_Reserv([...assentos_Reserv, id]);
            setNum_assentos_Reserv([...num_assentos_Reserv, numero]);
        }
    }

    return (
    <>
        {isAvailable ? (
            <div className={escolher}>
                <div onClick={() => selectSeat(definir)}>{numero}</div>
            </div>
        ) : (
            <div className="seats unavailable">
                <div onClick={() => alert("Esse assento não está disponível")}>{numero}</div>
            </div>
        )}
    </>);
}