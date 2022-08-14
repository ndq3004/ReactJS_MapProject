import axios from "axios";

const URL = "" //"https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
const options = {
    params: {
      bl_latitude: "11.847676",
      tr_latitude: "12.838442",
      bl_longitude: "109.095887",
      tr_longitude: "109.149359",
    },
    headers: {
      "X-RapidAPI-Key": "8f3281a0efmsh50c0ecb156a60b7p18968cjsnb3ba05158dad",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

export const getPlacesData = async (sw, ne) => {
  //request
  try {
        const {data: { data }} = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            "X-RapidAPI-Key": "8f3281a0efmsh50c0ecb156a60b7p18968cjsnb3ba05158dad",
            "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
          },
        })
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
    }
};
