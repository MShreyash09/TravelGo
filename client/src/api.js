const API_BASE_URL = "https://travelgo-backend-bfhu.onrender.com/";

export const getDestinations = async () => {
  const response = await fetch(`${API_BASE_URL}/api/destinations`);
  return response.json();
};

// tranlslation api
export const translateContent = async (text, targetLanguage) => {
  const response = await fetch(`${API_BASE_URL}/api/translate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, targetLanguage }),
  });

  if (!response.ok) {
    throw new Error("Translation failed");
  }

  return response.json();
};
