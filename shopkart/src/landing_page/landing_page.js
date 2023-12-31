import React from "react";
import './landing_page.css';
import person from "./images/person_with_jacket.png";
import half_person from "./images/person_with_jacket-half.png";
import big_star from "./images/big_star.png";
const Landing_Page = () => {
    return (
        <div className="landing">
            <div className="star_box_person_image">
                <svg width="365" height="372" viewBox="0 0 365 372" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M189.327 115.223L190.308 115.325L219.035 11.7603L203.664 118.204L204.603 118.506L253.977 23.2411L217.076 124.137L217.932 124.626L285.803 41.8221L228.976 132.762L229.712 133.418L313.122 66.6962L238.845 143.703L239.428 144.497L334.737 96.7803L246.251 156.482L246.656 157.38L349.699 130.761L250.872 170.539L251.08 171.503L357.348 167.152L252.506 185.262V186.248L357.348 204.358L251.08 200.007L250.872 200.971L349.699 240.749L246.656 214.13L246.251 215.028L334.737 274.73L239.428 227.012L238.845 227.807L313.122 304.814L229.712 238.092L228.976 238.748L285.803 329.688L217.932 246.884L217.076 247.373L253.977 348.269L204.603 253.004L203.664 253.306L219.035 359.75L190.308 256.185L189.327 256.287L182.5 363.633L175.673 256.287L174.692 256.185L145.965 359.75L161.336 253.306L160.397 253.004L111.023 348.269L147.924 247.373L147.068 246.884L79.1966 329.688L136.024 238.748L135.288 238.092L51.8776 304.814L126.155 227.807L125.572 227.012L30.2628 274.73L118.749 215.028L118.344 214.13L15.3013 240.749L114.128 200.971L113.92 200.007L7.65211 204.358L112.494 186.248V185.262L7.65211 167.152L113.92 171.503L114.128 170.539L15.3013 130.761L118.344 157.38L118.749 156.482L30.2628 96.7803L125.572 144.497L126.155 143.703L51.8777 66.6963L135.288 133.418L136.024 132.762L79.1966 41.8222L147.068 124.626L147.924 124.137L111.023 23.2412L160.397 118.506L161.336 118.204L145.965 11.7603L174.692 115.325L175.673 115.223L182.5 7.87722L189.327 115.223Z" stroke="white" />
                </svg>
                <img className="person_with_jacket" src={person} alt="Person" />
                <div className="orange_box">
                    <img className="person_with_jacket_half" src={half_person} alt="Person" />
                    <img className="big_star" src={big_star} alt="Star"/>
                </div>
                <div className="three_words">
                    <span className="fresh_word">Fresh</span>
                    <span className="year_2022">2022</span>
                    <span className="look_word">&nbsp;&nbsp;Look</span>
                    
                </div>
                <hr className="last_line"/>
            </div>
        </div>
    )
};
export default Landing_Page;