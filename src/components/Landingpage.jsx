import React from "react"
import Accordion from "./Accordion";
import BoatImage from "../images/boat.png"
import fordaek from "../images/fordaek-bog.png"
import sectionimage from "../images/section-image.png"


export default function Landingpage() {
    return (
        <>
        <section className="landingpage">
            <section className="crewprofiles">
            <img className="boat-image" src={BoatImage}></img>
            <div><h2>Create a free profile, and put together the perfect crew for your seafare</h2>
            <p className="land-paragraph">With a free captain profile at SailMore, you'll gain access to our crew exchange, where you get
                an easy and clear overview, letting you find both new and experienced crew members, that match your
                personality and experience requirements for your seafares.
            </p>
            <ul className="land-ul">
                <li>Skip the struggle of going through an abudance of crew applications for each cruise.</li>
                <li>Explore the crew profiles, and make your own choice of exactly who fits your wishes and requirements for the cruises.</li>
                <li>Give the crew a serious overview of scopes and activities on your cruises.</li>
            </ul>
            <a className="button-link" href="/signup"><button className="crew-profiles-button" type="button">Sign up now</button></a></div>
            </section>
           <section className="captainprofiles">
            <img className="fordaek-image" src={fordaek}></img>
            <div><h2>Set the sail for far-away coasts with experienced captains!</h2>
            <p>Are you dreaming about crossing the Atlantic Sea, stepping upon deserted islands in Polynesia, or maybe just enjoy a quiet sunset at Kattegat?
                Do you want to experience the world in a social, shared-economy and ecological way of travel? Become a crew through SailMore!
            </p>
            <ul className="captain-ul-landingpage">
                <li>Get in contact with experienced captains, that are organizing cruises in Denmark and internationally.</li>
                <li>Find cruises, that match your dreams of adventure and activities.</li>
                <li>Get sailing experience and personal development experiences, that you'll never forget.</li>
                <li>There's room for everyone - Whether you are an experienced sailor, or a complete land-dweller.</li>
            </ul>
            <a href="/seafares"><button className="captain-button" type="button">Browse Seafares</button></a></div>
            </section>
            </section>
            <div className="section-image">
            <img className="section-landingpage" src={sectionimage}></img>
            <div className="content-container">
            <h2 className="h2-in-image">Guide to long-distance sailing and other seafares!</h2>
            <p className="paragraph-in-image">Before you set of on a cruise, it's a good idea to long-distance sailing. Whether you are used to acting as a guest or a captain on a sailboat or not, it is good
                to know which rules and conditions apply before and during long-distance sailing and sailing trips in general.
            </p>
            <a className="button-link" href="/about.html"><button className="long-distance-button" type="button">SailMores guide to long-distance sailing</button></a>
            </div>
            
            
            </div>
            

            <Accordion title="An active form of holiday..." description={
                <div><p>Guests and captains on long-distance sailings and other cruises are always busy. Sailing involves both navigation and helmsmen, as well as maintenance of the boat. During a sailing trip, there is fishing, diving, paddling and exploring. And even if the boat is stationary, you don't necessarily.</p>
                <p>Take a sailing trip if you want an active holiday where you get to see more than just the hotel's swimming pool. </p></div>}/>
        
        </>
        
    )

}
