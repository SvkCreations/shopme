import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import { Link } from 'react-router-dom';

export default function Products() {
    const [prod, setProd] = useState({
        result: [],
        loading: true
    })
    const [cat, setCat] = useState('All')
    const [btnTxt, setBtnTxt] = useState('Add to cart')

    useEffect(() => {

        const fetchData = () => {
            try {
                fetch('https://fakestoreapi.com/products')
                    .then(res => res.json())
                    .then(json => setProd({
                        result: json,
                        loading: false
                    }))
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    let handleCatChange = (e) => {
        setCat(e.target.value)
        if (e.target.value === 'All') {
            try {
                fetch(`https://fakestoreapi.com/products/`)
                    .then(res => res.json())
                    .then(json => setProd({
                        result: json,
                        loading: false
                    }))
            } catch (error) {
                console.log("error", error);
            }
        }
        else {
            try {
                fetch(`https://fakestoreapi.com/products/category/${e.target.value.toLowerCase()}`)
                    .then(res => res.json())
                    .then(json => setProd({
                        result: json,
                        loading: false
                    }))
            } catch (error) {
                console.log("error", error);
            }
        }

    }

    

    return (
        <div>
            <div className="container px-4 px-md-0 mt-4">
                <div className="row">
                    <div className="col-auto me-auto">
                        <h2 className='fw-bold'>Products: {cat}</h2>
                    </div>

                    <div className="col-auto">
                        <select className="form-select" value={cat} aria-label="Default select example" onChange={handleCatChange}>
                            <option value="All">All</option>
                            <option value="Men's Clothing">Men's Clothing</option>
                            <option value="Women's Clothing">Women's Clothing</option>
                            <option value="Jewelery">Jewelery</option>
                            <option value="Electronics">Electronics</option>
                        </select>
                    </div>
                </div>
                {prod.loading && <Loading />}
                <div className="row row-cols-2 row-cols-lg-3 align-items-stretch g-4 py-3">
                    {prod.result.map((prod) => {
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
                                                <Link className="col-auto" to={'/id='+prod.id}>
                                                    <img className='img-fluid px-2 px-md-5' src={prod.image} alt="" style={{ height: '150px' }} />
                                                </Link>
                                            </div>
                                            <div className="row px-2 mt-3 text-center text-md-left">
                                                <h6 className="fw-bold text-dark">{prod.title.slice(0, 24)}..</h6>
                                                <p className="text-success lead fw-bold"><del className='mx-2 d-block text-secondary'>$ {(parseInt(prod.price) * 2).toString()}</del>$ {prod.price}</p>
                                            </div>
                                            {/* <div className="row d-flex gap-2 gap-md-0">
                                                <div className="col-md-6">
                                                    <button className='btn btn-success col-12 d-flex align-items-center justify-content-center gap-2' onClick={()=>addtoCart(prod.id)}><iconify-icon icon="material-symbols:add-shopping-cart-sharp" style={{ fontSize: '20px' }}></iconify-icon>{btnTxt}</button>
                                                </div>
                                                <div className="col-md-6">
                                                    <button className='btn btn-outline-success col-12 d-flex align-items-center justify-content-center gap-2'><iconify-icon icon="icon-park-outline:buy" style={{ fontSize: '20px' }}></iconify-icon>Buy now</button>
                                                </div>
                                            </div> */}
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
