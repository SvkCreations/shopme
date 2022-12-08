import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom';
import Loading from './Loading'

export default function ProductByCategory() {
    const [prod, setProd] = useState({
        result: [],
        loading: true
    })
    
    const {cat} = useParams()
    const category = cat.slice(4)

    useEffect(() => {

        const fetchData = async () => {
            try {
                fetch(`https://fakestoreapi.com/products/category/${category}`)
                    .then(res => res.json())
                    .then((json)=>{
                        console.log(json)
                        setProd({
                            result:json,
                            loading:false
                        })
                    })
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

  return (
    <div>
    <div className="container px-4 px-md-0 mt-4">
        <h2 className='fw-bold'>Products : {category.charAt(0).toUpperCase() + category.slice(1)}</h2>
        {prod.loading && <Loading />}
        <div className="row row-cols-2 row-cols-lg-3 align-items-stretch g-4 py-3">
            {prod.result.map((prod) => {
                return (
                    <div className="col" key={prod.id}>
                        <div className="card card-cover h-100 overflow-hidden rounded-4">
                            <div className="d-flex flex-column h-100 text-shadow-1 pt-5">
                                <div className="">
                                    <div className="row d-flex align-items-center justify-content-center">
                                        <div className="col-auto">
                                            <img className='img-fluid px-2 px-md-5' src={prod.image} alt="" style={{ height: '150px' }} />
                                        </div>
                                    </div>
                                    <div className="row px-2 mt-3 text-center text-md-left">
                                        <h6 className="fw-bold">{prod.title.slice(0, 24)}..</h6>
                                        <p className="text-success lead fw-bold">$ {prod.price}</p>
                                    </div>
                                    <div className="row d-flex gap-2 gap-md-0">
                                        <div className="col-md-6">
                                            <button className='btn btn-success col-12 d-flex align-items-center justify-content-center gap-2'><iconify-icon icon="material-symbols:add-shopping-cart-sharp" style={{ fontSize: '20px' }}></iconify-icon>Add to cart</button>
                                        </div>
                                        <div className="col-md-6">
                                            <button className='btn btn-outline-success col-12 d-flex align-items-center justify-content-center gap-2'><iconify-icon icon="icon-park-outline:like" style={{ fontSize: '20px' }}></iconify-icon>Add to wishlist</button>
                                        </div>
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
