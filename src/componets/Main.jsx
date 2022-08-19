import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

const Main = () => {
    const [number, setNumber] = useState();
    const [category, setCategory] = useState();
    

    const KEY = {
        num: number,
        cat: category
    }

    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container ">
                    <Link className="navbar-brand" to="/main">FinalExam</Link>
                </div>
            </nav>
            <div className=' mt-3 d-flex justify-content-center align-items-center'>
                <div className='w-50'>
                    <select className='form-control  my-1' onChange={val => setNumber(val.target.value)}>
                        <option disabled selected>Number of question</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                    </select>
                    <select className='form-control  my-1' onChange={val => setCategory(val.target.value)}>
                        <option disabled selected>Select Category</option>
                        <option value="19">Mathematics</option>
                        <option value="23">History</option>
                        <option value="22">Geography</option>
                        <option value="24">Politics</option>
                    </select>
                    <Link to='/test' state={{KEY}}   className='btn btn-success w-100 my-1'>Start</Link>
                    <button  className='btn btn-info w-100 my-1'>Tests</button>
                </div>
            </div>
        </div>
    );
}

export default Main;
