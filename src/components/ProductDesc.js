import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from './Loading';

export default function ProductDesc() {
    const { id } = useParams()
    const [prod, setProd] = useState({
        result: [],
        loading: true
    })

    useEffect(() => {

        const fetchData = async () => {
            try {
                fetch(`https://fakestoreapi.com/products/${id.slice(3)}`)
                    .then(res => res.json())
                    .then((json) => {
                        setProd({
                            result: [json],
                            loading: false
                        })
                    })
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);
    const size = Array.from(document.querySelectorAll('.size'));
    size.forEach((element, index) => {
        element.addEventListener('click', ()=>{
            element.classList.remove('btn-outline-success')
            element.classList.add('btn-success')
            size.splice(index,1)
            console.log(size)
            size.forEach(element => {
                element.classList.remove('btn-success')
                element.classList.add('btn-outline-success')
            });
        })

        
    });
    return (

        <div className='container py-4 py-md-5 px-4'>
            {prod.loading && <Loading />}
            {prod.result.map((prod) => {
                return (
                    <div className="row featurette d-flex align-items-center gap-5 gap-md-0" key={prod.id}>
                        <div className="col-md-7 order-2 me-auto">
                            <small className='text-success fw-bold'>Category: {prod.category.charAt(0).toUpperCase() + prod.category.slice(1)}</small>
                            <h2 className="featurette-heading p-0 m-0 display-6 fw-bold">{prod.title}</h2>
                            <p className="lead text-success fw-bold mt-2">Rated: {prod.rating.rate}  <i className='text-muted fw-normal'> | {prod.rating.count} Votes</i></p>
                            <p className=" mt-2">{prod.description}.</p>
                            <p className="display-6 fw-bold text-success"><del className='me-3 text-muted'>$ {(parseInt(prod.price) * 2).toString()}</del>$ {prod.price}</p>
                            <p className="lead">Choose a size:</p>
                            <div className="row d-flex px-3 gap-2">
                                <button className="btn btn-outline-success col-2 col-md-1 size">S</button>
                                <button className="btn btn-outline-success col-2 col-md-1 size">M</button>
                                <button className="btn btn-outline-success col-2 col-md-1 size">L</button>
                                <button className="btn btn-outline-success col-2 col-md-1 size">XL</button>
                            </div>


                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
                                <button type="button" className="btn btn-success btn-lg px-4 me-md-2" to='/product'>Add to cart</button>
                                <button type="button" className="btn btn-outline-success btn-lg px-4">Buy now</button>
                            </div>

                        </div>
                        <div className="col-md-5 me-auto px-5 px-md-0">
                            <img src={prod.image} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400" height="400"></img>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
