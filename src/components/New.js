import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function New() {
    const [prod, setProd] = useState({
        result: [],
        loading: true
    })
    useEffect(() => {

        const fetchData = async () => {
            try {
                fetch('https://fakestoreapi.com/products?limit=4&sort=desc')
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
  return (
    <div className='container px-4 py-5'>
        <div className="row d-flex align-items-center">
            <div className="col-auto me-auto">
            <h2 className='fw-bold'>New Arrivals</h2>
            </div>
            <div className="col-auto">
            <Link className="lead fw-bold text-success" to='/product'>See all</Link>
            </div>
        </div>
      

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}viewport={{ once: true }} className="row row-cols-2 row-cols-lg-4 align-items-stretch g-4 pt-3 pb-5 border-bottom">
                    {prod.result.map((prod) => {
                        return (
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }} className="col" key={prod.id}>
                                <div className="card card-cover h-100 overflow-hidden rounded-4">
                                    <div className="d-flex flex-column h-100 text-shadow-1 pt-5">
                                        <div className="">
                                            <div className="row d-flex align-items-center justify-content-center">
                                                <Link className="col-auto" to={'/id='+prod.id}>
                                                    <img className='img-fluid px-2 px-md-5' src={prod.image} alt="" style={{ height: '150px' }} />
                                                </Link>
                                            </div>
                                            <div className="row px-2 mt-3 text-center text-md-left">
                                                <h6 className="fw-bold">{prod.title.slice(0, 24)}..</h6>
                                                <p className="text-success lead fw-bold">$ {prod.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}

                </motion.div>
    </div>
  )
}
