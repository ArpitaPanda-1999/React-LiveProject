import { useState } from "react";
import swal from "sweetalert";

const NewProduct = () => {
    //create 4 state variable
    let[pname, setname] = useState("");
    let[price, setprice] = useState("");
    let[photo, setphoto] = useState("");
    let[details, setdetail] = useState("");

    const save = () => {
        let url = "http://localhost:1234/product";
        let newproduct = { pname:pname, price:price, photo:photo, details:details };
        let postdata ={
            headers:{'content-type':'application/json'},
            method:"POST",
            body:JSON.stringify(newproduct)
        }
       
        fetch(url ,postdata)
        .then(res => res.json())
        .then(data => {
            swal("Product added successfully");
            setname(" ");
            setprice(" ");
            setphoto(" ");
            setdetail(" ");
        })
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center mb-5">
                    <h3 className="text-primary">Enter Product Details</h3>
                </div>
                <div className="col-lg-4">
                    <p>Enter Product Name</p>
                    <input type="text" className="form-control" onChange={obj => setname(obj.target.value)} value={pname} />
                </div>
                <div className="col-lg-4">
                    <p>Enter Product Price</p>
                    <input type="text" className="form-control" onChange={obj => setprice(obj.target.value)} value={price} />
                </div>
                <div className="col-lg-4">
                    <p>Enter Product Photo URL</p>
                    <input type="text" className="form-control" onChange={obj => setphoto(obj.target.value)} value={photo} />
                </div>
                <div className="col-lg-4">
                    <p>Enter Product Description</p>
                    <input type="text" className="form-control" onChange={obj => setdetail(obj.target.value)} value={details} />
                </div>
                <div className="col-lg-4 text-center pt-4">
                    <button className="btn btn-primary" onClick={save}> Save Product </button>
                </div>
            </div>
        </div>
    ) 
}
export default NewProduct;