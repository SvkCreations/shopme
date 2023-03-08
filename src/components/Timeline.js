import React from 'react'
import img1 from '../onze.jpeg'
import img2 from '../hyatt.jpg'
import { Link } from 'react-router-dom'

export default function Timeline() {
    return (
        <div className='px-3 px-md-5 mx-md-4  mt-2 mt-md-5 pt-3 pt-md-5'>
            <div className="row d-flex mx-1 align-items-center">
                <div className="col-3 col-md-4 me-auto" style={{ height: ".1px", backgroundColor: '#000', opacity: '.2' }}></div>
                <div className="col-auto me-auto">
                    <h2 className="fw-bold text-center" style={{ color: '#70795D' }}>TIMELINE</h2>
                </div>
                <div className="col-3 col-md-4" style={{ height: ".1px", backgroundColor: '#000', opacity: '.2' }}></div>
            </div>

            {/* SANGEET */}
            <div className="row flex-lg-row-reverse align-items-center g-5 py-3 py-md-5 mt-0 mt-md-3" >
                <div className="col-12 col-sm-8 col-lg-6">
                    <img src={img1} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" data-aos='fade-left'/>
                </div>
                <div className="col-lg-6 me-auto">
                    <h4 className="fw-bold lh-1 mb-3 d-flex align-items-center gap-2"><iconify-icon icon="ic:outline-date-range"></iconify-icon> 21st October, 2023</h4>
                    <h1 className="display-5 fw-bold lh-1 mb-3">SANGEET</h1>
                    <div className="col-lg-11">
                        <div className="row d-flex align-items center">
                            <div className="col-auto me-auto">
                                <p className="lead d-flex align-items-center gap-2"><iconify-icon icon="ri:hotel-line" style={{ fontSize: '26px' }}></iconify-icon> Onze, Dubai</p>
                            </div>
                            <div className="col-auto">
                                <Link className="lead" style={{ color: '#909C76' }}>See on map</Link>
                            </div>
                        </div>
                    </div>
                    <p className="lead col-lg-11"  data-aos='fade-right' style={{ textAlign: 'justify' }}>Among the many pre-wedding events that occur prior to the wedding ceremonies, the Sangeet is where the party begins. The word Sangeet translates to ‘sung together’ from Sanskrit. ‘Gaun’, another word used to describe the event, means ‘songs’ or ‘to sing’ in Hindi. Traditionally celebrated in India, this ceremony has been adopted by many other regions as a form of celebration for the wedding to come. The event is formally known to comprise of only female attendees from both sides of the family, however modern times allow for men to join in on the fun too. Unlike religious ceremonies such as the Haldi or portions of the wedding ceremony, the Sangeet is solely conducted to relish in the happiness and joy surrounding the couple.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4" data-aos='fade-right'>
                        <button type="button" className="btn primary-btn btn-lg px-4 me-md-2 col-12 col-md-3">EXPLORE MORE</button>
                    </div>
                </div>
            </div>
            <hr></hr>

            {/* RECEPTION */}
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-12 col-sm-8 col-lg-6">
                    <img src={img2} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" data-aos='fade-left' />
                </div>
                <div className="col-lg-6 me-auto">
                    <h4 className="fw-bold lh-1 mb-3 d-flex align-items-center gap-2"><iconify-icon icon="ic:outline-date-range"></iconify-icon> 22nd October, 2023</h4>
                    <h1 className="display-5 fw-bold lh-1 mb-3">RECEPTION</h1>
                    <div className="col-lg-11">
                        <div className="row d-flex align-items center">
                            <div className="col-auto me-auto">
                                <p className="lead d-flex align-items-center gap-2"><iconify-icon icon="ri:hotel-line" style={{ fontSize: '26px' }}></iconify-icon> The Park Hyatt, Dubai</p>
                            </div>
                            <div className="col-auto">
                                <Link className="lead" style={{ color: '#909C76' }}>See on map</Link>
                            </div>
                        </div>
                    </div>

                    <p className="lead col-lg-11" data-aos='fade-right' style={{ textAlign: 'justify' }}>A wedding reception is a party usually held after the completion of a marriage ceremony as hospitality for those who have attended the wedding, hence the name reception: the couple receive society, in the form of family and friends, for the first time as a married couple. Hosts provide their choice of food and drink, although a wedding cake is popular.<br></br>Entertaining guests after a wedding ceremony is traditional in most societies, and can last anywhere from half an hour to many hours or even days. Most wedding receptions are made in the evening for dinner; however, the couple may opt for a luncheon, brunch, or even afternoon tea. Ultimately the married couple chooses the details and location of the reception.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4" >
                        <button type="button" className="btn primary-btn btn-lg px-4 me-md-2 col-12 col-md-3">EXPLORE MORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
