import './stylo.css'
import foto from './src/assets/jorge.jpg'
import jogo from './src/assets/jogo.jpeg'


function Home() {
    return (
        <div>
            <div class="principal">
                <nav>
                    <h2 class='portifolio'>Portfo<span>lio</span></h2>

                    <ul>
                        <li> <a>Home </a> </li>
                        <li> <a>Sobre </a></li>
                        <li> Projetos </li>
                        <li> Fale Comigo </li>
                    </ul>

                </nav>

                <div class="meu-nome">
                    <h1>Venilson<span>Rocha</span></h1>
                    <h3>Programador Back End</h3>
                </div>
            </div>


            <section>
                <img src={foto} alt="" />
                <div>
                    <h2>Sobre Mim</h2>
                    <p>Texto Sobre Min</p>
                    <button type='button'> Entre em Contato</button>
                </div>
            </section>

            <div>
                <h2>Principais Projetos </h2>
                <div className='card'>
                    <img src={jogo} alt="" />
                    <img src={jogo} alt="" />
                    <h5></h5>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, recusandae similique? Tenetur reiciendis quidem dicta repudiandae quam eum est magnam provident, fuga libero velit accusantium odio animi aut sunt pariatur!</p>
                    <a> Ver Projetos</a>
                </div>
            </div>



        </div>





    )
}
export default Home
