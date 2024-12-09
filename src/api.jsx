import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID ahDF4GQxIAg2u2TA9u6qYeSmhKShl96syF2HwNkQRx4",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
