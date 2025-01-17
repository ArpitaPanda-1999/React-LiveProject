import { useState , useEffect } from "react";
import swal from "sweetalert";

const Mycart = ()=>{
     let [allproduct , updateproduct] = useState([]);
    const getproduct = ()=>{
        let url ="http://localhost:1234/cart"
        fetch(url)
        .then(response=>response.json())
        .then(productArray=>{
            updateproduct(productArray.reverse());
        })
}

    useEffect(()=>{
        getproduct();
    },[]);


const deleteCart = (pid)=>{
    let url = "http://localhost:1234/cart/"+pid
    let postData = {method:"delete"};
    fetch(url,postData)
    .then(response=>response.json())
    .then(pinfo=>{
        getproduct(); //Reaload the list aster delete
    })
}

const updateqty = (product,status)=>{
    if(status == "A"){
        product["qty"]= product.qty +1;
    }else{
        product["qty"] = product.qty -1;
    }

    if(product.qty==0){
        deleteCart(product.id);
    }else{
        let url = "http://localhost:1234/cart/"+product.id
        let postData ={
            headers:{'Content-Type':'application/json'},
            method:"put",
            body:JSON.stringify(product)
        }
             fetch(url,postData)
            .then(response=>response.json())
            .then(pinfo=>{
                 getproduct(); //Reload the list after delete
            })

    }
}

let [fullname ,pickName] = useState("");
let [mobileno , pickMobile] = useState("");
let [emailid ,pickEmail] = useState("");
let [address ,pickAddress] = useState("");

const save = ()=>{
    let orderData ={fullname:fullname, email:emailid , mobile:mobileno , itemlist:allproduct };
    let url = "http://localhost:1234/order";
    let postData ={
        headers:{'Content-Type':'application/json'},
        method:"post",
        body:JSON.stringify(orderData)
    }
    fetch(url,postData)
    .then(response=>response.json())
    .then(pinfo=>{
        swal("Order Recieved ","We have Received Your Order" , "Success")
    })

}
return(
    <div className="container mt-4">
        <div className="row">
            <div className="col-lg-3">
                <div className="card">
                    <div className="crad-header bg-info text-white"> Customer Details </div>
                    <div className="card-body">
                        <div className="mb-4">
                            <label> Customer Name </label>
                            <input type="text" className="form-control" onChange={obj=>pickName(obj.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <label> Customer Mobile No</label>
                            <input type="number" className="form-control"onChange={obj=>pickMobile(obj.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <label> Customer e-mail id </label>
                            <input type="text" className="form-control" onChange={obj=>pickEmail(obj.target.value)}/>
                        </div>
                        <div className="mb-4">
                            <label> Customer Adress </label>
                            <textarea className="form-control" onChange={obj=>pickAddress(obj.target.value)}></textarea>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary" onClick={save}> Save </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-9">
                <h3 className="text-center mb-3"> {allproduct.length} : Item In Cart </h3>
                <table className="table table-borderd">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th> Photo</th>
                            <th> Price</th>
                            <th> Quantity</th>
                            <th> Total</th>
                            <th> Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allproduct.map((product,index)=>{
                                return(
                                    <tr key={index}>
                                        <td> {product.name}</td>
                                        <td> <img src={product.photo} height ="50" width="60%"/></td>
                                        <td> {product.price}</td>
                                        <td>
                                            <button className="btn btn-warning btn-sm me-2" onClick={updateqty.bind(this,product, "B")}> - </button>
                                            {product.qty}
                                            <button className="btn btn-Success btn-sm me-2" onClick={updateqty.bind(this,product, "A")}> + </button>
                                        </td>
                                        <td> {product.price * product.qty}</td>
                                        <td>
                                            <i className="fa fa-trash text-danger" onClick={deleteCart.bind(this,product.id)}></i>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}


export default Mycart;