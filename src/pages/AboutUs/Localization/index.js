import './localization.css'
import Iframe from 'react-iframe'


export default function Localization() {
    return (
        <section className="localizationCompanySection container">
            <div className='row'>
                <h1 className='text-center col mt-5'>Onde ficamos</h1>
            </div>
            <div className='row mt-5  localizationInfo'>
                <div className='col col-lg-5'>
                    <Iframe
                        url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12912.78663221345!2d-48.03117524306468!3d-15.804247482885534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a334063fb8b11%3A0x9668ea2ad6e789b6!2sNoroeste%20Nutri%C3%A7%C3%A3o%20Animal%20-%20Distribuidora%20de%20Ra%C3%A7%C3%B5es!5e0!3m2!1spt-BR!2sbr!4v1666699550042!5m2!1spt-BR!2sbr'
                        id=""
                        className="maps"
                        display="block"
                        position="relative"
                    />                    
                </div>
                <div className='col col-lg-4 localizationText'>                        
                        <p>Noroeste Nutrição Animal LTDA ME</p>
                        <p>SHVP - Rua 10 ch 147 lt 19</p>
                        <p>Brasília-DF</p>
                        <p>CEP: 72110-800</p>
                        <p>Telefone: (61) 3597-6322</p>
                    </div>
            </div>
        </section>
    )
}