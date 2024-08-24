import './App.css'
import PostsList from "./components/PostsList.jsx";
import NewPost from "./components/NewPost.jsx";
import MainHeader from "./components/MainHeader.jsx";
import {useState} from "react";

function App() {
    const [isModalVisible, setIsModalVisible] = useState(true);

    function showModalHandler() {
        setIsModalVisible(true);
    }
    function hideModalHandler() {
        setIsModalVisible(false);
    }

    return (
        <>
            <MainHeader onCreatePost={showModalHandler}/>
            <main>
                <PostsList isPosting={isModalVisible}
                    onStopPosting={hideModalHandler}
                />
            </main>
        </>
    )
}

export default App
