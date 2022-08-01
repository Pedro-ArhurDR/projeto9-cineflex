import { Link } from "react-router-dom";

export default function Tela4(props) {
    const {element} = props;
    const seats_Buyed = element.seats.sort((a, b) => a - b);

    return(
        <>
            <div className="title">
                <p>Pedido feito<br/>com sucesso!</p>
            </div>
            <div className="sucess-Data">
                <div className="request-Sucess-Data">
                    <h2>Filme e sessão</h2>
                    <p>{element.movie}</p>
                    <p>{element.date}</p>
                </div>
                <div className="request-Sucess-Data">
                    <h2>Ingressos</h2>
                    {seats_Buyed.map(item => <p>Assento: {item}</p>)}
                </div>
                <div className="request-Sucess-Data">
                    <h2>Comprador</h2>
                    <p>Nome: {element.buyerName}</p>
                    <p>CPF: {element.buyerCPF}</p>
                </div>
            </div>
            <Link to="/">
                <div className="session-Button">Voltar para Home</div>
            </Link>
        </>
    );
}