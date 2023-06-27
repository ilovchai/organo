import './Formulario.css'
import CampoTexto from '../Banner/CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import Botao from '../Botao/Botao'
import {useState} from 'react'

const Formulario = (props) => {
  
    const [nome, setNome] = useState('') 
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('') 
    const [time, setTime] = useState('') 

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
        <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto 
            valor={nome} 
            aoAlterado={valor=>setNome(valor)} 
            obrigatorio={true} 
            label='Nome' 
            placeholder='digite seu nome'/>

            <CampoTexto 
            valor={cargo} 
            aoAlterado={valor=>setCargo(valor)} 
            obrigatorio={true} 
            label='Cargo' 
            placeholder='digite seu cargo'/>

            <CampoTexto
            valor={imagem} 
            aoAlterado={valor=>setImagem(valor)}  
            label='Imagem' 
            placeholder='digite o endereço da imagem'/>

            <ListaSuspensa 
            obrigatorio={true} 
            label='Time' 
            itens={props.times}
            valor = {time}
            aoAlterado={valor=>setTime(valor)}
            />

            <Botao>Criar Card</Botao>
        </form>
        </section>
    )
}

export default Formulario