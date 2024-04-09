import { HashRouter, Routes, Route, Link } from "react-router-dom";
import MyDashboard from "./dashboard";
import NewProduct from "./newproduct";
import ProductList from "./productlist";
import Myorder from "./Orderlist";


const AdminApp = () => {
    return (
        <HashRouter>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
                <div className="container">
                    <a className="navbar-brand">
                        <i className="fa fa-shopping-bag"></i> Seller CRM
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-3">
                                <Link className="nav-link active" to="/"><i className="fa fa-dashboard p-2"></i>Dashboard </Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link className="nav-link active" to="/newproduct"><i className="fa fa-plus p-2"></i>New Product </Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link className="nav-link active" to="/productlist"><i className="fa fa-suitcase p-2"></i>Product List </Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link className="nav-link active" to="/orderlist"><i className="fa fa-headphones p-2"></i>Order List </Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link className="nav-link text-warning" onClick={Logout}>
                                    Welcome {localStorage.getItem("sellername")} <i className="fa fa-power-off p-2"></i>
                                    Logout 
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route exact path="/" element={<MyDashboard/>} />
                <Route exact path="/newproduct" element={<NewProduct/>} />
                <Route exact path="/productlist" element={<ProductList/>}></Route>
                <Route exact path="/orderlist" element={<Myorder/>}></Route>
            </Routes>
        </HashRouter>
    );
};

export default AdminApp;

const Logout = () => {
    window.localStorage.clear();
    window.location.reload();
}