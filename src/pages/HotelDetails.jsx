import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader.jsx";
import { getHotelById } from "../services/api.js";
import {
  getHotelDescription,
  getHotelImage,
  getHotelLocation,
  getHotelName,
  getHotelPrice,
  getHotelRating,
} from "../utils/hotelHelpers.js";

function HotelDetails() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadHotel() {
      try {
        setLoading(true);
        const data = await getHotelById(id);
        setHotel(data);
        setError("");
      } catch (err) {
        setError("Could not load hotel details.");
      } finally {
        setLoading(false);
      }
    }

    loadHotel();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <p className="message error">{error}</p>;
  if (!hotel) return <p className="message">Hotel not found.</p>;

  const name = getHotelName(hotel);

  return (
    <div className="details-page">
      <Link className="back-link" to="/">
        Back to hotels
      </Link>

      <section className="details-layout">
        <img className="details-image" src={getHotelImage(hotel)} alt={name} />
        <div className="details-content">
          <p className="hotel-location">{getHotelLocation(hotel)}</p>
          <h1>{name}</h1>
          <p>{getHotelDescription(hotel)}</p>

          <div className="details-stats">
            <div>
              <span>Rating</span>
              <strong>{getHotelRating(hotel)} stars</strong>
            </div>
            <div>
              <span>Price</span>
              <strong>${getHotelPrice(hotel)} / night</strong>
            </div>
          </div>

          <button className="button booking-button" type="button">
            Book now
          </button>
        </div>
      </section>
    </div>
  );
}

export default HotelDetails;
