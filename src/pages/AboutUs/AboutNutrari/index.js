import './aboutNutrari.css'
import LogoNutrari from '../../../img/logo_nutrari-removebg-preview.png'
import LogoNoroeste from '../../../img/logoNoroeste.png'

const AboutNutrari = () => {
    return (
        <section className='container-fluid' id='aboutNutrari'>
            <div className='row'>
                <div className='col text-center mt-5'>
                    <img src={LogoNoroeste} alt='logoNoroeste' />
                </div>
            </div>            
            <div className='row nutrariImg mt-5'>
                <div className='col text-center py-4'>
                    <img src={LogoNutrari} alt='logoNutrari' />
                </div>
            </div>
            <div className='container'>
            <div className='row my-4'>
                <div className='col'>
                    <p className='fs-4'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            </div>
            
        </section>
    )
}

export default AboutNutrari