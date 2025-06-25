import { useState } from 'react';
import './formulario.css';

const Formulario = () => {
    let [peso, setPeso] = useState('');
    let [altura, setAltura] = useState(''); 

    const calculaImc = () => {
        if (!peso || !altura)
            return null;

        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);

        const imc = pesoNum / (alturaNum * alturaNum);

        if (imc < 18.5) {
            return <p>Você está abaixo do peso.</p>;
        } else if (imc < 24.9) {
            return <p>Seu peso está dentro do padrão.</p>;
        } else if (imc < 29.9) {
            return <p>Você está com sobrepeso.</p>;
        } else {
            return <p>Você está com obesidade.</p>;
        }
    };

    return (
        <form>
            <div className='container'>
                <input type="number" placeholder="Digite seu peso" onChange={evento => setPeso(evento.target.value)}/>
                <input type="number" placeholder="Digite sua altura" onChange={evento => setAltura(evento.target.value)}/>
                <h3>{calculaImc()}</h3>
            </div>
        </form>
    )
}

export default Formulario;