import './footer.css';
import LogoNoroeste from '../../img/logoNoroeste.png';

const Footer = () => {
    return (
        <footer className='container-fluid mt-5'>
            <div className='row justify-content-center' id='footerDiv'>

                <div className='col justify-content-center text-center pt-2' id='adressFooter'>
                    <img src={LogoNoroeste} alt='logoNoroeste' className='col col-lg-4' id='footerImg' />
                    <p>Noroeste Nutrição Animal LTDA ME</p>
                    <p>SHVP - Rua 10 ch 147 lt 19</p>
                    <p>Brasília-DF</p>
                    <p>CEP: 72110-800</p>
                    <p>Telefax: +55 61 3597-6322</p>
                </div>
            </div>
            <p className='text-center mt-3' id='copyright'>Copyright @ 2022 Luan Nunes</p>
        </footer>
    )
}

export default Footer;