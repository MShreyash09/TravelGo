const API_BASE_URL = "https://travelgo-backend-bfhu.onrender.com/";

export const getDestinations = async () => {
  const response = await fetch(`${API_BASE_URL}/api/destinations`);
  return response.json();
};
