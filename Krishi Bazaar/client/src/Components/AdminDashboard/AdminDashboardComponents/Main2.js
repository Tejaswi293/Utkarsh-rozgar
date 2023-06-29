import './Main.css'
import Employer1 from '../AdminDashboardImages/Employer1'
import Employer2 from '../AdminDashboardImages/Employer2'
import Employer3 from '../AdminDashboardImages/Employer3'
import Employer4 from '../AdminDashboardImages/Employer4'
import Employer5 from '../AdminDashboardImages/Employer5'

import React from 'react'

export default function Main2() {
    return (
        <div className='profile-section'>
            <br />
            <br />
            <h2>Employers</h2>
            <ul className='cards'>
                <li className='card'>
                    <div>
                        <div className='identity'>
                            <img src={Employer1} alt="" className='profile-pic' />
                            <h3 className="card-title">Rajendra Pandey</h3>
                        </div>
                        <div className="card-content">
                            <ul className="details">
                                <li>
                                    <ul>
                                        <li>Require: Electrician</li>
                                        <li>Duration: 5 days</li>
                                        <li>Charges: Rs. 450 per hour</li>
                                        <li>Address: Rampur, Greater Noida</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-link-wrapper">
                        <a href="" class="card-link">View Profile</a>
                    </div>
                </li>

                <li class="card">
                    <div>
                        <div class="identity">
                            <img src={Employer2} class="profile-pic" />
                            <h3 class="card-title">Mukesh Verma</h3>
                        </div>
                        <div class="card-content">
                            <ul class="details">
                                <li>
                                    <ul>
                                        <li>Require: Carpenter</li>
                                        <li>Duration: 3 days</li>
                                        <li>Charges: Rs. 400 per hour</li>
                                        <li>Address: Indiranagar, Bangalore</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-link-wrapper">
                        <a href="" class="card-link">View Profile</a>
                    </div>
                </li>

                <li class="card">
                    <div>
                        <div class="identity">
                            <img src={Employer3} class="profile-pic" />
                            <h3 class="card-title">Suman Singh</h3>
                        </div>
                        <div class="card-content">
                            <ul class="details">
                                <li>
                                    <ul>
                                        <li>Require: Plumber</li>
                                        <li>Duration: 2 days</li>
                                        <li>Charges: Rs. 350 per hour</li>
                                        <li>Address: Hadapsar, Pune</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-link-wrapper">
                        <a href="" class="card-link">View Profile</a>
                    </div>
                </li>
                <li class="card">
                <div>
                    <div class="identity">
                        <img src={Employer4} class="profile-pic" />
                        <h3 class="card-title">Rajiv Das</h3>
                    </div>
                    <div class="card-content">
                        <ul class="details">
                            <li>
                                <ul>
                                    <li>Require: Painter</li>
                                    <li>Duration: 4 days</li>
                                    <li>Charges: Rs. 400 per hour</li>
                                    <li>Address: Salt Lake, Kolkata</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card-link-wrapper">
                    <a href="" class="card-link">View Profile</a>
                </div>
            </li>
            <li class="card">
                <div>
                    <div class="identity">
                        <img src={Employer5} class="profile-pic" />
                        <h3 class="card-title">Anita Devi</h3>
                    </div>
                    <div class="card-content">
                        <ul class="details">
                            <li>
                                <ul>
                                    <li>Require: House Cleaner</li>
                                    <li>Duration: 1 day</li>
                                    <li>Charges: Rs. 300 per hour</li>
                                    <li>Address: HSR Layout, Bangalore</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card-link-wrapper">
                    <a href="" class="card-link">View Profile</a>
                </div>
            </li>

            </ul>
        </div>
    )
}
