import React, { useState } from "react";
import "../styles/ListingCard.scss";
import {
  ArrowForwardIos,
  ArrowBackIosNew,
  Favorite,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setWishList } from "../redux/state";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  // add to wishlist
  const user = useSelector((state) => state.user);
  const wishList = user?.wishList || [];

  const isLiked = wishList?.find((item) => item?._id === listingId);

const patchWishList = async () => {
  if (user?._id !== creator?._id) {
    const response = await fetch(
      `http://localhost:3001/users/${user?._id}/${listingId}`,
      {
        method: "PATCH",
        header: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    dispatch(setWishList(data.wishList));
  } else {
    return;
  }
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
                onClick={() => {
                  navigate(`/properties/${listingId}`);
                }}
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
      <div
        onClick={() => {
          navigate(`/properties/${listingId}`);
        }}
      >
        <h3>
          {city}, {province}, {country}
        </h3>
        <p>{category}</p>

        {!booking ? (
          <>
            <p>{type}</p>
            <p>
              <span>${price}</span> per night
            </p>
          </>
        ) : (
          <>
            <p>
              {startDate} - {endDate}
            </p>
            <p>
              <span>₹{totalPrice}</span> total
            </p>
          </>
        )}
      </div>

      <button
        className="favorite"
        onClick={(e) => {
          e.stopPropagation;
          patchWishList();
          console.log(isLiked);
        }}
        disabled={!user}
      >
        {isLiked ? (
          <Favorite sx={{ color: "red" }} />
        ) : (
          <Favorite sx={{ color: "white" }} />
        )}
      </button>
    </div>
  );
};

export default ListingCard;
