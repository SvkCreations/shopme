import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Loading from './Loading';

export default function Cart() {
    const [prod, setProd] = useState({
        result: [],
        loading: true
    })
    const [similar, setSimilar] = useState({
        result: [],
        loading: true
    })
    useEffect(() => {
        const id = localStorage.getItem('id')
        const fetchData = () => {
            try {
                fetch(`https://fakestoreapi.com/products/${id}`)
                    .then(res => res.json())
                    .then((json) => {
                        setProd({
                            result: [json],
                            loading: false
                        })
                        try {
                            fetch(`https://fakestoreapi.com/products/category/${json.category}`)
                                .then(res2 => res2.json())
                                .then((json2) => {
                                    setSimilar({
                                        result: json2,
                                        loading: false
                                    })
                                })
                        } catch (error) {
                            console.log("error", error);
                        }
                    })
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='container py-4 px-4'>
            <h2 className="fw-bold">My Cart</h2>

            {prod.loading && <Loading />}
            <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-4 pt-3 pb-5 border-bottom">
                {prod.result.map((prod) => {
                    return (
                        <div className="col text-decoration-none" key={prod.id}>
                            <div className="card card-cover h-100 overflow-hidden rounded-4">
                                <div className="d-flex flex-column h-100 text-shadow-1 pt-4">
                                    <div className="">
                                        <div className="row d-flex align-items-center justify-content-center">
                                            <Link className="col-auto" to={'/id=' + prod.id}>
                                                <img className='img-fluid px-2 px-md-5' src={prod.image} alt="" style={{ height: '150px' }} />
                                            </Link>
                                        </div>
                                        <div className="row px-2 mt-3 text-center text-md-left">
                                            <h6 className="fw-bold text-dark">{prod.title}</h6>
                                            <p className="text-success lead fw-bold"><del className='mx-2 d-block text-secondary'>$ {(parseInt(prod.price) * 2).toString()}</del>$ {prod.price}</p>
                                        </div>
                                        <div className="col-md-12">
                                            <button className='btn btn-success col-12 d-flex align-items-center justify-content-center gap-2'>Proceed to Buy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

                

            </div>
            <div className='mt-5 pt-5'>
                <h2 className="fw-bold">Similar Products</h2>
                {similar.loading && <Loading />}
                <div className="row row-cols-2 row-cols-lg-3 align-items-stretch g-4 py-3">
                    {similar.result.map((prod) => {
                        return (
                            <div className="col text-decoration-none" key={prod.id}>
                                <div className="card card-cover h-100 overflow-hidden rounded-4">
                                    <div className="d-flex flex-column h-100 text-shadow-1 pt-2">
                                        <div className="">
                                            <div className="row d-flex align-items-center justify-content-center">
                                                <div className="row d-flex align-items-center mb-3 px-3">
                                                    <div className="col-auto px-2 me-auto">
                                                        <span className="badge bg-secondary">50% off</span>
                                                    </div>
                                                    <div className="col-auto px-2 m-0 text-success">
                                                        <iconify-icon icon="icon-park-outline:like" style={{ fontSize: '24px' }}></iconify-icon>
                                                    </div>
                                                </div>
                                                <a className="col-auto" href={'/id='+prod.id}>
                                                    <img className='img-fluid px-2 px-md-5' src={prod.image} alt="" style={{ height: '150px' }} />
                                                </a>
                                            </div>
                                            <div className="row px-2 mt-3 text-center text-md-left">
                                                <h6 className="fw-bold text-dark">{prod.title.slice(0, 24)}..</h6>
                                                <p className="text-success lead fw-bold"><del className='mx-2 d-block text-secondary'>$ {(parseInt(prod.price) * 2).toString()}</del>$ {prod.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
