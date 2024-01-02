import React from "react";
import gastImage from '../images/gastimage.jpg'
import ratingStars from '../images/rating-stars.png'

function GastProfile() {
    return (
        <>
        <div className="gastProfile">
            <div className="gastProfileHeader">
                <p className="gastName">Pernille Pernillesen</p>
                <p className="profileType">&#40;gast&#41;</p>
                <p className="gastRating">Rating:</p> <img src={ratingStars} className="ratingStars"/>
                <a href="#" className="seeReviews">&#40;see reviews&#41;</a>
            </div>

            <div className="gastProfileInfo">
                <img src={gastImage} className="gast-img"></img>
                <div className="gastProfileText">
                    <p className="gastAge">Age</p>
                    <p className="gastAge2">45 years</p>
                    <p className="gastArea">Area</p>
                    <p className="gastArea2">Aarhus</p>
                </div>
            </div>
            <div className="gastProfileButton">
                <button className="sendChat"> send chat</button>
                <button className="requestNo"> request no.</button>
            </div>
        </div>

        <div className="gastAboutMe">
            <h2>About me</h2>
            <p className="gastAboutMeText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien ac nisl ultrices ultricies. </p>
        </div>

        <div className="gastSkills">
            <h2>Skills</h2>
            <div className="gastSkillsText">
                <p className="kategorie1">cooking</p>
                <p className="kategorie2">guitar</p>
                <p className="kategorie3">meditation</p>
                <p className="kategorie4">yoga</p>
                <p className="kategorie5">scuba diving</p>
                <p className="kategorie6">fishing</p>
            </div>
        </div>

        <div className="gastReviews">
            <h2>Reviews</h2>
            <div className="gastReviewsText">
                <p className="review1">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien ac nisl ultrices ultricies." </p>
                <p className="name">- Skipper blabla </p>
                <p className="review2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien ac nisl ultrices ultricies." </p>
                <p className="name">- Skipper blabla</p>
                <a href="#" className="seeAll">see all reviews</a>
            </div>
        </div>
        
        </>
    );
}
export default GastProfile