import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Posts from './routes/Posts.jsx'
import './index.css'
import NewPost from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";

const router = createBrowserRouter([
    {
        path: '/', element: <RootLayout/>, children: [
            {
                path: '/', element: <Posts/>, children: [
                    {path: '/new-post', element: <NewPost/>},
                ]
            },
        ]
    },

]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
