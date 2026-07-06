const fallbackImages = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=80",
];

export function getHotelName(hotel) {
  return hotel.name || hotel.hotel_name || hotel.title || "Hotel";
}

export function getHotelLocation(hotel) {
  return hotel.location || hotel.city || hotel.address || "Unknown location";
}

export function getHotelPrice(hotel) {
  return Number(hotel.price || hotel.price_per_night || hotel.room_price || 0);
}

export function getHotelRating(hotel) {
  return Number(hotel.rating || hotel.stars || hotel.star_rating || 4);
}

export function getHotelImage(hotel) {
  if (hotel.image) return hotel.image;
  if (hotel.image_url) return hotel.image_url;
  if (hotel.photo) return hotel.photo;
  if (hotel.thumbnail) return hotel.thumbnail;
  if (Array.isArray(hotel.photos) && hotel.photos.length > 0) return hotel.photos[0];
  return fallbackImages[Number(hotel.id || 0) % fallbackImages.length];
}

export function getHotelDescription(hotel) {
  return (
    hotel.description ||
    hotel.about ||
    "Enjoy a clean room, friendly service, and convenient access to popular places nearby."
  );
}
