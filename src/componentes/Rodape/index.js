import './rodape.css'

const Rodape = ()=>{
    return(
       <footer className='footer'>
        <ul className='sociais'>
            <li>
                <a href='https://www.instagram.com' target='_blank'>
                <img src='imagens/ig.png'/>
                </a>
                </li>

            <li>
                <a href='https://www.facebook.com' target='_blank'>
                <img src='imagens/fb.png'/>
                </a>
                </li>

            <li>
                <a href='https://www.twitter.com' target='_blank'>
                <img src='imagens/tw.png'/>
                </a>
                </li>

        </ul>
        <img src='imagens/logo.png'/>
        <p>Desenvolvido por ilovchai.</p>
       </footer>
    )
}
export default Rodape