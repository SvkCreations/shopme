import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function Products() {
    const [prod, setProd] = useState({
        result: [],
        loading: true
    })
    const [cat, setCat] = useState('All')
    const [btnTxt, setBtnTxt] = useState('Add to cart')
    const rowSkeletons = 20

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

    if (prod.loading) {

        let rows = []
        for (let index = 0; index < rowSkeletons; index++) {
            rows.push(
                <div className="col text-decoration-none">
                    <div className="card card-cover h-100 overflow-hidden rounded-4">
                        <div className="d-flex flex-column h-100 text-shadow-1 py-4">
                            <div className="">
                                <div className="row d-flex align-items-center justify-content-center">
                                    <Link className="col-auto px-2 px-md-0">
                                        <Skeleton width={250} height={150} />
                                    </Link>
                                </div>
                                <div className="row px-2 mt-3 text-center text-md-left">
                                    <Skeleton width={250} height={20} />
                                    <Skeleton className='mt-2' width={50} height={20} />
                                    <Skeleton className='mt-2' width={80} height={20} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <SkeletonTheme color='#F5F5F5' highlightColor='#ffffff'>
                <div className="container px-4 px-md-0 mt-4">
                    <div className="row">
                        <div className="col-auto me-auto">
                            <h2 className='fw-bold'>Loading Products...</h2>
                        </div>
                        <div className="row row-cols-2 row-cols-lg-3 align-items-stretch g-4">
                            {rows}
                        </div>
                    </div>
                </div>
            </SkeletonTheme>
        )

    }



    return (
        <div>
            <div className="container px-4 px-md-0 mt-4">
                <div className="row">
                    <div className="col-auto me-auto">
                        <h2 className='fw-bold'>Products: {cat}</h2>
                    </div>

                    <div className="col-auto">
                        <div className="row d-flex align-items-center justify-content-center">
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
                    </div>
                </div>
                {/* {prod.loading &&                } */}
                <div className="row row-cols-2 row-cols-lg-3 align-items-stretch g-4 py-3">
                    {prod.result.map((prod) => {
                        return (
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.8 }} className="col text-decoration-none" key={prod.id}>
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
                                                <Link className="col-auto" to={'/id=' + prod.id}>
                                                    <img className='img-fluid px-2 px-md-5' src={prod.image} alt="" style={{ height: '150px' }} />
                                                </Link>
                                            </div>
                                            <div className="row px-2 mt-3 text-center text-md-left">
                                                <h6 className="fw-bold text-dark">{prod.title.slice(0, 24)}..</h6>
                                                <p className="text-success lead fw-bold"><del className='mx-2 d-block text-secondary'>$ {(parseInt(prod.price) * 2).toString()}</del>$ {prod.price}</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
