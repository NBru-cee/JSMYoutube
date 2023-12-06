import axios from "axios";

const baseUrl = "https://youtube-v31.p.rapidapi.com";

const options = {
      params: {
            maxResults: "50",
      },
      headers: {
            "X-RapidAPI-Key":
                  "82ea0c19b6msh6d4f27cf6dda772p14e53djsn4366cf1fcf56",
            "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
};

export const fetchFromAPI = async (url) => {
      const { data } = await axios.get(`${baseUrl}/${url}`, options);
      return data;
};
