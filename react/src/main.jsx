import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Posts, {loader as postsLoader} from './routes/Posts.jsx'
import './index.css'
import NewPost, {action as newPostAction} from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import PostDetails, {loader as postDetailsLoader} from "./routes/PostDetails.jsx";

const router = createBrowserRouter([
    {
        path: '/', element: <RootLayout/>, children: [
            {
                path: '/', element: <Posts/>,
                loader: postsLoader,
                children: [
                    {path: '/new-post', element: <NewPost/>, action: newPostAction},
                    {path: '/:id', element: <PostDetails/>, loader: postDetailsLoader}
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
