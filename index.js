import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const apiURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(apiURL);
        res.render("index.ejs", {drink: result.data.drinks[0]});
    } catch (error) {
        console.log(error.response.data);
    }
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});