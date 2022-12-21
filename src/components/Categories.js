import React from 'react';
import mens from '../mens.jpg';
import womens from '../womens.jpg'
import electronics from '../electronics.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Categories() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} >
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className='fw-bold'>Shop our best Categories</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-3">

          <Link className="col text-decoration-none" to="/categories/cat=men's clothing">
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.8 }} className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url('${mens}')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: "350px", border: 'none' }}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">

                <div className="d-flex mt-auto justify-content-center">
                  <h4 className="fw-bold">Men's Wear</h4>
                </div>
              </div>
            </motion.div>
          </Link>
          <Link className="col text-decoration-none" to="/categories/cat=women's clothing">
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.8 }} className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url('${womens}')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: "350px", border: 'none' }}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <div className="d-flex mt-auto justify-content-center">
                  <h4 className="fw-bold">Women's Wear</h4>
                </div>
              </div>
            </motion.div>
          </Link>

          <Link className="col text-decoration-none" to="/categories/cat=electronics">
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.8 }} className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url('${electronics}')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: "350px", border: 'none' }}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <div className="d-flex justify-content-center mt-auto">
                  <h4 className="fw-bold">Electronics</h4>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
