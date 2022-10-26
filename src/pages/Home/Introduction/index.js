import './introduction.css';
import logoNutrari from '../../../img/logo_nutrari-removebg-preview.png';
import { Link } from 'react-router-dom';

const introduction = () => {
    return (
        <div className='container-fluid' id='introductionContainer'>
            <section className='container' >
                <div className='row'>
                    <div className='text col' id='IntroductionTextDiv'>
                        <div>
                            <h2 className=''>
                                Conheça a Nutrari, naturalmente saúdavel
                            </h2>
                            <p className=''>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                            </p>
                            <Link to='/produtos' className='btnProductsIntroduction'>Saiba mais</Link>
                        </div>
                    </div>
                    <div className='col-6' id='imgIntroductionDiv'>
                        <img src={logoNutrari}></img>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default introduction