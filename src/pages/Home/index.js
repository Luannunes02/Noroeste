import './home.css'
import Introduction from './Introduction'
import Parallax from './Parallax'

const Home = () => {
    return (
        <section className='container-fluid gx-0' id='homeContainer'>
            <Introduction/>
            <h1 className='text-center display-1 mt-4'>Nutrari</h1>
            <Parallax/>
        </section>
    )
}

export default Home;