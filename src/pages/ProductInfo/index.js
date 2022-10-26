import './productsInfo.css'
import API from '../../api/products.json'
import { Link } from 'react-router-dom'
import { useParams, useState } from 'react-router-dom'
import ProductOfQuality from '../../components/ProductOfQuality'

const ProductsInfo = () => {

    const { id } = useParams();
    const product = API.Products[id];


    return (
        <section className='container'>
            <div className='row' id='apresentationProduct'>
                <div className='col col-lg-5'>
                    <img className='' src={product.capa} />
                </div>
                <div className='col col-lg-7'>
                    <h2>{product.nome}</h2>
                    <span>Embalagens de {product.embalagens_tamanho}</span>
                    <p>INFORMAÇÂO NUTRICIONAL: {product.info_nutricional}</p>
                </div>
            </div>
            <div className='row justify-content-center mt-5' id='mixDiv'>
                <div className='row'>
                    <h2>Mistura completa para sua avé</h2>
                </div>                
                <div className='col col-lg-5 mt-5'>
                    <p>A {product.nome}, como é possivel ver, contém uma variedade de grãos que a avé consome, toda a sua formula foi pensada estrategicamente para que o seu pássaro tenha todos os nutrientes e vitaminas necessarios para o seu desenvolvimento de forma saúdavel e segura, sendo assim a mistura fornece um equilibro dos grãos que seu passáro precisa para fornecer energia e uma vida saúdavel.  </p>
                </div>
                <div className='col col-lg-4 mt-5'>
                    <img src={product.mistura} alt={product.nome} id='mixImg' />
                </div>
            </div>
            <div className='row'>
                <div className='col mt-5'>
                    <ProductOfQuality />
                </div>
            </div>
        </section>
    )
}

export default ProductsInfo