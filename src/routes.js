import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import AboutUs from './pages/AboutUs'
import Header from './components/Header'
import ProductsInfo from './pages/ProductInfo'
import Footer from './components/Footer'

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>} /> 
                <Route path='/produtos' element={<Products/>} /> 
                <Route path='/produtos/:id' element={<ProductsInfo/>} />
                <Route path='/sobrenos' element={<AboutUs/>} />               
            </Routes>        
            <Footer/>
        </BrowserRouter>
    )
}

export default RoutesApp