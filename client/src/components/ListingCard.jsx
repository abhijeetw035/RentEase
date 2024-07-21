import React, { useState } from "react";
import "../styles/ListingCard.scss";
import { ArrowForwardIos, ArrowBackIosNew } from "@mui/icons-material";

const ListingCard = ({
  listingId,
  creator,
  listingPhotoPaths,
  city,
  province,
  country,
  category,
  type,
  price,
  startDate,
  endDate,
  totalPrice,
  booking,
}) => {
  // Slider for images
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = (e) => {
    setCurrentIndex(
      (prevIdx) =>
        (prevIdx - 1 + listingPhotoPaths.length) % listingPhotoPaths.length
    );
  };

  const goToNextSlide = (e) => {
    setCurrentIndex((prevIdx) => (prevIdx + 1) % listingPhotoPaths.length);
  };

  return (
    <div className="listing-card">
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {listingPhotoPaths.map((photo, index) => (
            <div key={index} className="slide">
              <img
                src={`http://localhost:3001/${photo?.replace("public", "")}`}
                alt={`photo ${index + 1}`}
              />
              <div onClick={(e) => goToPrevSlide(e)} className="prev-button">
                <ArrowBackIosNew sx={{ fontSize: "15px" }} />
              </div>
              <div onClick={(e) => goToNextSlide(e)} className="next-button">
                <ArrowForwardIos sx={{ fontSize: "15px" }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3>
        {city}, {province}, {country}
      </h3>
      <p>{category}</p>
      <p>{type}</p>
      <p><span>₹{price}</span> per night</p>
    </div>
  );
};

export default ListingCard;
