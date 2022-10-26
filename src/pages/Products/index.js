import './products.css'
import API from '../../api/products.json'
import { Link } from 'react-router-dom'

const Products = () => {

    const productsData = API.Products;

    return (
        <section className='container-fluid'>
            <div className='container mt-5'>
                <div className='row'>
                    <h1 className='col text-center'>Nossos produtos</h1>
                </div>
                <div className='row' id='productsDiv'>
                    {productsData.map((product)=>{
                        return (
                            <div id='productItem' data-aos="fade-right" data-aos-duration="1500">
                                <img src={product.capa} alt={product.nome}/>
                                <h4>{product.nome}</h4>
                                <p>{product.descricao}</p>
                                <button className=''><Link to={`/produtos/${product.id}`} className=''>Saiba mais</Link></button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Products