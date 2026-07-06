import { Link } from "react-router-dom";
import { getHotelImage, getHotelLocation, getHotelName, getHotelPrice, getHotelRating } from "../utils/hotelHelpers.js";

function HotelCard({ hotel }) {
  const name = getHotelName(hotel);
  const location = getHotelLocation(hotel);
  const price = getHotelPrice(hotel);
  const rating = getHotelRating(hotel);
  const image = getHotelImage(hotel);

  return (
    <article className="hotel-card">
      <img src={image} alt={name} />
      <div className="hotel-card-body">
        <div>
          <p className="hotel-location">{location}</p>
          <h2>{name}</h2>
        </div>
        <p className="hotel-description">
          Comfortable rooms, easy booking, and a calm place to rest during your trip.
        </p>
        <div className="hotel-meta">
          <span>{rating} stars</span>
          <strong>${price}</strong>
        </div>
        <Link className="button" to={`/hotels/${hotel.id}`}>
          View details
        </Link>
      </div>
    </article>
  );
}

export default HotelCard;
