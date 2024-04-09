import { useState } from "react";
import swal from "sweetalert";

const Mylogin = () => {
    let[email,setEmail] = useState("");
    let[password,setPassword] = useState("");

    const goLogin = () => {
        if( email === " " || password === " " ){
            swal("Invalid Input", "Empty e-Mail Or Password", "warning");
        }
        else{
            fetch("http://localhost:1234/account?email="+email+"&password="+password)
            .then((res) => res.json())
            .then((data) => { 
                if((data.length) > 0 ){
                    localStorage.setItem("sellerid", data[0].id);
                    localStorage.setItem("sellername", data[0].fullname);
                    window.location.reload();
                }
                else{
                    swal("Invalid", "Invalid or Not Exists", "warning");
                }
            })
        }
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-primary text-white">
                            <h4>Login</h4>
                        </div>  
                        <div className="card-body">
                            <div className="mb-3">
                                <label>Email ID</label>
                                <input type="email" className="form-control" onChange={obj => setEmail(obj.target.value)} />
                            </div>
                            <div className="mb-3">  
                                <label>Password</label>
                                <input type="password" className="form-control" onChange={obj => setPassword(obj.target.value)} />
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-danger" onClick={goLogin}>Login
                                <i className="fa fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    )
}

export default Mylogin;