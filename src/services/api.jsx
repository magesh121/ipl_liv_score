import axios from "axios";

const API_URL="https://cricket-live-line1.p.rapidapi.com";
const HEADERS={
    "x-rapidapi-host": "cricket-live-line1.p.rapidapi.com",
    "x-rapidapi-key": "7f19f12bc1msh78abeeebd4ca182p160ed1jsnb3bde86cae5b"
};

const getPointsTable = async () => {
    const options = {
        method: "GET",
        url: `${API_URL}/series/336/pointsTable`,
        headers: HEADERS,
    };
    try {
        const response = await axios.request(options)
        console.log("response data ", response.data);

        return response.data.data.A.map(team => ({
            team: team.teams,
            played: team.P,
            won: team.W,
            lost: team.L,
            points: team.pts,
            nrr: team.NRR,
            flag: team.flag
        }))

    } catch (error) {
        console.log("there was error in fetching the data");
        throw error;
    }
}

export { getPointsTable };