import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from '../Home/Home';
import { Obra } from '../Obra/Obra';
import { Espectaculo } from '../Espectaculo/Espectaculo';
import { Autor } from '../Autor/Autor';



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/obra' element={<Obra/>}/>
                <Route path='/espectaculo' element={<Espectaculo/>}/>
                <Route path='/autor' element={<Autor/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export { Router };