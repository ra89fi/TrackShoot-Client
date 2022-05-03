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
                        <div style={{ margin: '60px' }}>
                            <h4>Not Found!</h4>
                        </div>
                    }
                />
            </Routes>
            <footer>Footer</footer>
        </div>
    );
}

export default App;
