import AllMeetupsPage from "./pages/AllMeetups";
import {Route, Routes} from "react-router-dom";
import NewMeetupsPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";
import React from "react";
import MainNavigation from "./components/layouts/MainNavigation";
import Layout from "./components/layouts/Layout";

function App() {
    return (
        <Layout>

            <Routes>
                <Route path='/' element={<AllMeetupsPage />} />
                <Route path='/new-meetup' element={<NewMeetupsPage />} />
                <Route path='/favorites' element={<FavoritesPage />} />

            </Routes>
        </Layout>
    );
}

export default App;
