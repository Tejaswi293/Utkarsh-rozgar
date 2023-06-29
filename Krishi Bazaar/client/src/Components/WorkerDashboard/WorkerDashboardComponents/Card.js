import React from 'react'
import './Card.css'
import maxresdefault from '../WorkerDashboardImages/maxresdefault.jpg';
import iisc from '../WorkerDashboardImages/iisc.jpg';
import pmkk from '../WorkerDashboardImages/pmkk.png';
import rozgar from '../WorkerDashboardImages/rozgar.jpg'
export default function card(props) {
    return (
        <div class="card-deck">
            <div class="card">
                <img class="card-img-top" src={iisc} alt="iisc" />
                <div class="card-body">
                    <h5 class="card-title"><strong>India International Skill Centres/भारतीय अंतरराष्ट्रीय कौशल केंद्र</strong></h5>
                    <p class="card-text">Government of India is keen to bridge the global shortage
                        of labour force in the coming years by reaping the demographic dividend of young Indian
                        labour force. To meet this objective, Ministry of Skill Development & Entrepreneurship under
                        the “Skill India” Mission has set up India International Skill Centre (IISC) to provide
                        skill trainings and certification benchmarked to International Standards...</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card">
                <img class="card-img-top" src={pmkk} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title"><strong>Pradhan Mantri Kaushal Kendra
                        (PMKK)/प्रधानमंत्री कौशल केंद्र</strong></h5>
                    <p class="card-text">under Skill India Mission, Ministry of Skill Development and
                        Entrepreneurship (MSDE) has initiated the establishment of state-of-the-art, visible and
                        aspirational model training centers in every district of India, ensuring coverage of all the
                        parliamentary constituencies. These model training centers are referred to as “Pradhan
                        Mantri Kaushal Kendra” (PMKK)..</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="card">
                <img class="card-img-top" src={rozgar} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title"> <strong>Rozgar Mela/रोजगार मेला</strong> </h5>
                    <p class="card-text">To give impetus to the employment initiatives in the
                            country, National Skill Development Corporation under the aegis of Ministry of Skill
                            Development & Entrepreneurship, Govt. of India has been organizing Rozgar Melas across the
                            nation for providing suitable job opportunities to the unemployed youth.    </p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="h-1 bg-gray-200 rounded overflow-hidden">
            <div class="w-24 h-full bg-red-500"></div>
        </div>
        </div>
    )
}
