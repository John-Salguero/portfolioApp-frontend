import React, { useState, useEffect, useCallback, useRef } from 'react'
import authService from '../services/auth.service';
import userService from '../services/user.service';

export const LoginComponent = ({ setUser, setCount }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {

        await authService.login(username, password);
        await setUser(localStorage.getItem("username"));
    }


    return (
        <>
            <section className="vh-100" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                                <div className="card-body p-5 text-center">
                                    <h3 className="mb-5">Sign in</h3>
                                    <div className="form-outline mb-4">
                                        <input type="text" placeholder="username" id="typeEmailX-2" className="form-control form-control-lg" onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="password" placeholder="password" id="typePasswordX-2" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <button className="btn btn-primary btn-lg btn-block" onClick={handleSubmit} >Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>



    )
}
