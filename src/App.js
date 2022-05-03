import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

import app from './firebase.init';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Item from './components/Item';
import Inventory from './components/Inventory';
import MyItems from './components/MyItems';
import NewItem from './components/NewItem';
import Blog from './components/Blog';
const auth = getAuth(app);

const RequireAuth = ({ children }) => {
    let location = useLocation();
    const [user] = useAuthState(auth);
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/login" element={<Login></Login>} />
                <Route path="/register" element={<Register></Register>} />
                <Route path="/blog" element={<Blog></Blog>} />
                <Route
                    path="/myitems"
                    element={
                        <RequireAuth>
                            <MyItems></MyItems>
                        </RequireAuth>
                    }
                />
                <Route
                    path="/newitem"
                    element={
                        <RequireAuth>
                            <NewItem></NewItem>
                        </RequireAuth>
                    }
                />
                <Route
                    path="/inventory/:id"
                    element={
                        <RequireAuth>
                            <Item></Item>
                        </RequireAuth>
                    }
                />
                <Route
                    path="/inventory"
                    element={
                        <RequireAuth>
                            <Inventory></Inventory>
                        </RequireAuth>
                    }
                />
                <Route
                    path="*"
                    element={
                        <div>
                            <div style={{ margin: '60px' }}>
                                <h4>Not Found!</h4>
                            </div>
                            <footer
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: '40px 0',
                                    backgroundColor: '#1a1a1a',
                                    textAlign: 'center',
                                    color: '#eee',
                                }}
                            >
                                Copyright &copy;2022
                            </footer>
                        </div>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
