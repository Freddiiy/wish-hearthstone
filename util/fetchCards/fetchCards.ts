import axios from "axios";

const options = {
    headers: {
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
      'X-RapidAPI-Key': '598cc01df9msh92bc7ff8b91fbe8p1727a3jsn8f3313456929'
    }
  };

export async function getAll() {
    const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards';
    const response = await axios.get(url, options);
    const cards = await response.data;

    console.log(cards);
}

