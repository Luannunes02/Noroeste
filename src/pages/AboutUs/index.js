import './aboutUs.css'
import ProductOfQuality from '../../components/ProductOfQuality'
import AboutNutrari from './AboutNutrari'
import Localization from './Localization'

const AboutUs = () => {
    return (
        <section id='aboutUs'>
            <AboutNutrari/>
            <ProductOfQuality/>   
            <Localization/>         
        </section>
    )
}

export default AboutUs