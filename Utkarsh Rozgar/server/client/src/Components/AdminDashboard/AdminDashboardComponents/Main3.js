import './Main.css'
import React from 'react'

export default function Main3() {
    return (
        <div>
            <br />
            <br />
            <div id="userform">
                <form action="submit">
                    <label>Your Name</label>
                    <input type="text" placeholder="Your name" />
                </form><label>Your Address</label>
                <input type="text" placeholder="Your Address" />
                <label>Occupation</label>
                <select>
                    <option>Student</option>
                    <option>Businessman</option>
                    <option>Farmer</option>
                    <option>Teacher</option>
                    <option>Shopkeeper</option>
                    <option>Govermental job</option>
                    <option>Not prefer to say</option>
                </select>
            </div>
            Your Gender
            <select>
                <option>Male</option>
                <option>Female</option>
                <option>Not Prefer to Say</option>
            </select>
            <label>Your age</label>
            <input type="number"/>
            <input type="submit" className='submit' value="CLICK HERE TO REGISTER"/>
        </div>
    )
}
