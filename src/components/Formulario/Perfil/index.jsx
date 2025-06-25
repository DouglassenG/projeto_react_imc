import './perfil.css';

const Perfil = ({logo, titulo}) => {

    return (
        <header>
            <img className="logo" src={logo}/>
            <h1 className="titulo" >{titulo}</h1>
        </header>
    )
}

export default Perfil;