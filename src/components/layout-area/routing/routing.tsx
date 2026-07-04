import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../../pages-area/home/home";
import { About } from "../../pages-area/about/about";
import { PageNotFound } from "../../pages-area/page-not-found/page-not-found";

export function Routing() {
    return (
        <div className="Routing">

            <Routes>
                <Route path="/" element={<Navigate to="/home" /> } />
                <Route path="/home" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="*" element={<PageNotFound />} />


            </Routes>

        </div>
    );
}
