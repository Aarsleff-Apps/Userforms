import axios from "axios"

async function fetchData() {
    try {
      const result = await axios.get("/api/crud/list")
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  }

export { fetchData }