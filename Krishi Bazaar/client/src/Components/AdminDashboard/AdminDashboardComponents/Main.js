import React from 'react'
import './Main.css'
import Worker1 from '../AdminDashboardImages/Worker1.png'
import Worker2 from '../AdminDashboardImages/Worker2.png'
import Worker3 from '../AdminDashboardImages/Worker3.png'


export default function Main() {
  return (
    <>
    <div class="profile-section">
        <h2>List of Workers</h2>
        <ul class="cards">
            <li class="card">
                <div>
                    <div class="identity">
                        <img src={Worker1} className="profile-pic" />
                        <h3 class="card-title">Electrician</h3>
                    </div>
                    <div class="card-content">
                        <ul class="details">
                            <li>
                                <strong>Shyamlal Yadav</strong>
                                <ul>
                                    <li>Experience: 5 years</li>
                                    <li>Rating: 4.5</li>
                                    <li>Charges: Rs. 500 per hour</li>
                                    <li>Languages: Hindi</li>
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
                        <img src={Worker2} class="profile-pic" />
                        <h3 class="card-title">Plumber</h3>
                    </div>
                    <div class="card-content">
                        <ul class="details">
                            <li>
                                <strong>Rajesh Kumar</strong>
                                <ul>
                                    <li>Experience: 3 years</li>
                                    <li>Rating: 4.2</li>
                                    <li>Charges: Rs. 400 per hour</li>
                                    <li>Languages: Tamil</li>
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
                        <img src={Worker3} class="profile-pic" />
                        <h3 class="card-title">Waste Collector</h3>
                    </div>
                    <div class="card-content">
                        <ul class="details">
                            <li>
                                <strong>Prince Tiwari</strong>
                                <ul>
                                    <li>Experience: 4 years</li>
                                    <li>Rating: 4.2</li>
                                    <li>Charges: Rs. 450 per hour</li>
                                    <li>Languages: Odia</li>
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
                        <img src={Worker1} class="profile-pic" />
                        <h3 class="card-title">Gardener</h3>
                    </div>
                    <div class="card-content">
                        <ul class="details">
                            <li>
                                <strong>Mohan Singh</strong>
                                <ul>
                                    <li>Experience: 7 years</li>
                                    <li>Rating: 4.8</li>
                                    <li>Charges: Rs. 600 per hour</li>
                                    <li>Languages: Punjabi</li>
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
                        <img src={Worker2} class="profile-pic" />
                        <h3 class="card-title">Street Sweeper</h3>
                    </div>
                    <div class="card-content">
                        <ul class="details">
                            <li>
                                <strong>Rajendra Prasad</strong>
                                <ul>
                                    <li>Experience: 6 years</li>
                                    <li>Rating: 4.6</li>
                                    <li>Charges: Rs. 550 per hour</li>
                                    <li>Languages: Telugu</li>
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
                        <img src={Worker3} class="profile-pic" />
                        <h3 class="card-title">Security Guard</h3>
                    </div>
                    <div class="card-content">
                        <ul class="details">
                            <li>
                                <strong>Kiran Sharma</strong>
                                <ul>
                                    <li>Experience: 4 years</li>
                                    <li>Rating: 4.3</li>
                                    <li>Charges: Rs. 450 per hour</li>
                                    <li>Languages: Gujarati</li>
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
                        <img src={Worker1} class="profile-pic" />
                        <h3 class="card-title">Street Sweeper</h3>
                    </div>
                    <div class="card-content">
                        <ul class="details">
                            <li>
                                <strong>Anita Devi</strong>
                                <ul>
                                    <li>Experience: 2 years</li>
                                    <li>Rating: 4.0</li>
                                    <li>Charges: Rs. 350 per hour</li>
                                    <li>Languages: Bengali</li>
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
                        <img src={Worker2} class="profile-pic" />
                        <h3 class="card-title">Delivery Personnel</h3>
                    </div>
                    <div class="card-content">
                        <ul class="details">
                            <li>
                                <strong>Sanjay Verma</strong>
                                <ul>
                                    <li>Experience: 8 years</li>
                                    <li>Rating: 4.9</li>
                                    <li>Charges: Rs. 650 per hour</li>
                                    <li>Languages: Marathi</li>
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
                        <img src={Worker3} class="profile-pic" />
                        <h3 class="card-title">Domestic Helper</h3>
                    </div>
                    <div class="card-content">
                        <ul class="details">
                            <li>
                                <strong>Deepika Patel</strong>
                                <ul>
                                    <li>Experience: 5 years</li>
                                    <li>Rating: 4.4</li>
                                    <li>Charges: Rs. 500 per hour</li>
                                    <li>Languages: Kannada</li>
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
                        <img src={Worker1} class="profile-pic" />
                        <h3 class="card-title">Street Vendor</h3>
                    </div>
                    <div class="card-content">
                        <ul class="details">
                            <li>
                                <strong>Rajeshwari Das</strong>
                                <ul>
                                    <li>Experience: 3 years</li>
                                    <li>Rating: 4.1</li>
                                    <li>Charges: Rs. 400 per hour</li>
                                    <li>Languages: Malayalam</li>
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
                        <img src={Worker1} class="profile-pic" />
                        <h3 class="card-title">Construction Worker</h3>
                    </div>
                    <div class="card-content">
                        <ul class="details">
                            <li>
                                <strong>Niranjan Singh</strong>
                                <ul>
                                    <li>Experience: 6 years</li>
                                    <li>Rating: 4.7</li>
                                    <li>Charges: Rs. 550 per hour</li>
                                    <li>Languages: Assamese</li>
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

</>
  )
}
