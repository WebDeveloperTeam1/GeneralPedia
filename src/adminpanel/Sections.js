import React from 'react';
import '../component/App.css';

import '../bootstrap/dist/css/bootstrap.min.css';

class Sections extends React.Component{
    render(){
        return( 
            <div className="main col-11">
                <div className="row first-row">
                    <div className = "col-2"></div>
                    <div className="col-4">
                        <section id="recently-posted">
                            <div className="card">
                                <div className="card-header">
                                    Recently Published Posts 
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="row g-0">
                                            <div className="col-md-3">
                                                <img src="./assets/post1.jpeg"  alt="Post One Photo" className="img-fluid rounded-lg"/>
                                            </div>
                                        
                                            <div className="col-md-9">
                                                <div className="card-body">
                                                    <h6 className="card-title">Lorem ipsum dolor sit amet...</h6>
                                                    <p className="card-text">This is a wider card with supporting text below as a 
                                                    natural lead-in to additional content.</p>
                                                    <p className="card-text"><small className="text-muted">Added 3 days ago</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="row g-0">
                                            <div className="col-md-3">
                                                <img src="./assets/post1.jpeg"  alt="Post One Photo" className="img-fluid rounded-lg"/>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="card-body">
                                                    <h6 className="card-title">Lorem ipsum dolor sit amet...</h6>
                                                    <p className="card-text">This is a wider card with supporting text below as a 
                                                    natural lead-in to additional content.</p>
                                                    <p className="card-text"><small className="text-muted">Added 3 days ago</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="row g-0">
                                            <div className="col-md-3">
                                                <img src="./assets/post1.jpeg"  alt="Post One Photo" className="img-fluid rounded-lg"/>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="card-body">
                                                    <h6 className="card-title">Lorem ipsum dolor sit amet...</h6>
                                                    <p className="card-text">This is a wider card with supporting text below as a 
                                                    natural lead-in to additional content.</p>
                                                    <p className="card-text"><small className="text-muted">Added 3 days ago</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div className="col-6">
                        <section id="statistics">
                            <div className="card">
                                <div className="card-header">
                                    Statisctics
                                </div>
                                <div className="stats py-3 px-4">
                                    <div className="py-4">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped" role="progressbar"  aria-valuenow="57" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p className="card-text">Visited the blog</p>
                                    </div>
                                    <div className="py-4">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p className="card-text">Read posts</p>
                                    </div>
                                    <div className="py-4">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p className="card-text">Subscribed to the newsletter</p>
                                        </div>
                                    <div className="py-4">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p className="card-text">Subscribed to the newsletter</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="row second-row">
                    <div classNameName = "col-2"></div>
                    <div className="col-3">
                        <section id="recently-commented">
                            <div className="card">
                                <div className="card-header">
                                    Latest comments
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="row g-0">
                                            <div className="col">
                                                <div className="card-body">
                                                    <h6 className="card-title">Username</h6>
                                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. <small className="text-muted">Added 3 days ago</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="row g-0">
                                            <div className="col">
                                                <div className="card-body">
                                                    <h6 className="card-title">Username</h6>
                                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. <small className="text-muted">Added 3 days ago</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="row g-0">
                                            <div className="col">
                                                <div className="card-body">
                                                    <h6 className="card-title">Username</h6>
                                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. <small className="text-muted">Added 3 days ago</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div className="col-4">
                        <section id="notes-form">
                            <div className="card">
                                <div className="card-header">
                                    Write a note    
                                </div>
                                <div className="card-body px-4">
                                    <form>
                                        <div className="mb-3">
                                            <label for="exampleInputPassword1" className="form-label">Your Note</label>
                                            <textarea rows="7" className="form-control"></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Save</button>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col">
                        <section id="active-user">
                            <div className="card mt-2">
                                <div className="card-header">
                                    Most Active User
                                </div>
                                <div className="card-body text-center">
                                    <div className="img-container mb-4">
                                        <img src="./assets/user.jpeg" className="card-img-top" alt="User"/>
                                    </div>
                                    <h6 className="card-title mb-4">John Doe</h6>
                                    <p className="card-text">Commented <span className="badge bg-light text-dark">198</span> times</p>
                                    <p className="card-text">Posted <span className="badge bg-light text-dark">12</span> articles</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}
export default Sections;