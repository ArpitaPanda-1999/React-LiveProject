import { useState, useEffect } from "react";

const MyDashboard = () => {

    let[allproduct, setallproduct] = useState([]);
    let[allorder, setallorder] = useState([]);

    const getProduct = () => {
        let url = "http://localhost:1234/product";
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setallproduct(data);
        })
    }

    const getOrder = () => {
        let url = "http://localhost:1234/order";
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setallorder(data);
        })
    }

    useEffect(() => {
        getProduct();
        getOrder();
    }, [])

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center mb-5">
                    <h1 className="text-primary">Seller Dashboard</h1>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-4 text-center">
                    <i className="fa fa-database fa-5x text-info"></i>
                    <h3> Item in stock : {allproduct.length} </h3>
                </div>
                <div className="col-lg-4 text-center">
                <i className="fa fa-headphones fa-5x text-warning"></i>
                    <h3> Order received : {allorder.length} </h3>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    )
}

export default MyDashboard;