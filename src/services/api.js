import axios from "axios";

const API_URL = "https://demohotelsapi.pythonanywhere.com/";
const DOCUMENTED_HOTELS_PATH = "api/hotels/";
const FALLBACK_HOTELS_PATH = "hotels/";

const api = axios.create({
  baseURL: API_URL,
  timeout: 12000,
});

function normalizeHotelList(payload) {
  const hotels = Array.isArray(payload) ? payload : payload.data || payload.results || [];

  return {
    hotels,
    count: payload.count || hotels.length,
    returned: payload.returned || hotels.length,
  };
}

async function getWithDocumentedPath(path, config = {}) {
  try {
    return await api.get(`${DOCUMENTED_HOTELS_PATH}${path}`, config);
  } catch (error) {
    return api.get(`${FALLBACK_HOTELS_PATH}${path}`, config);
  }
}

export async function getHotels(params = {}) {
  const response = await getWithDocumentedPath("", { params });
  return normalizeHotelList(response.data);
}

export async function getHotelById(id) {
  const response = await getWithDocumentedPath(`${id}/`);
  return response.data.data || response.data;
}

export default api;
