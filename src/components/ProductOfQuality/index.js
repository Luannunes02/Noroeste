import './productOfQuality.css'
import Bird from '../../img/ProductOfQuality/bird.jpg'

const ProductOfQuality = () => {
    return (
        <div className="container" id='ProductOfQualityDiv'>
            <h2>Produtos de altissima qualidade</h2>
            <div className='row mt-5' id='ProductOfQualityTextPart'>
                <div className='col col-lg-4'>
                    <img src={Bird}/>
                </div>
                <div className='col col-lg-7'>
                    <p>Estamos a mais de 20 anos no mercado, sabemos o que sua avé precisa no decorrer da vida e também na sua alimentanção, pensando justamente nisso criamos nossas misturas de alta qualidade para fornecer para o seu pet o melhor que a natureza tem a oferecer.</p>
                    <p>Temos misturas completas para os mais váriados tipos de passáros, como por exemplo calopsita, periquito, papagaio, canário, dentre muitos outros pássaros.</p>
                </div>
            </div>
        </div>
    )
}

export default ProductOfQuality