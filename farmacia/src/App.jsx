import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import DeletarCategorias from './components/categorias/deletarCategorias/DeletarCategorias';
<Route path="/deletarCategorias/:id" element={<DeletarCategorias />} />
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import FormularioCategorias from './components/categorias/formularioCategorias/FormularioCategorias';


function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <div className='min-h-[80vh]'>
                    <Routes>

                        <Route path="/home" element={<Home />} />
                        <Route path="/categorias" element={<ListaCategorias />} />
                        <Route path="/cadastroCategorias" element={<FormularioCategorias />} />
                        <Route path="/editarCategorias/:id" element={<FormularioCategorias />} />
                    </Routes>
                    <Route path="/deletarCategorias/:id" element={<DeletarCategorias />} />
                    
                </div>
                <Footer />
            </BrowserRouter>
        </ AuthProvider>
    );
}

export default App;