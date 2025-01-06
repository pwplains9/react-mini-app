import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import './i18n.js'
import React, {Suspense} from 'react';
import Navigation from './components/Navigation/Navigation.jsx';
import Categories from './pages/Categories/index.jsx';
function App() {
    return (
        <>
            <Suspense fallback="loading">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navigation/>}>
                            <Route index element={<Home/>}/>
                        </Route>
                        <Route path="/categories" element={<Navigation/>}>
                            <Route index element={<Categories/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    )
}

export default App
