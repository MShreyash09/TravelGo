const API_BASE_URL = "http://localhost:5000";

export const getDestinations = async () => {
  const response = await fetch(`${API_BASE_URL}/api/destinations`);
  return response.json();
};
