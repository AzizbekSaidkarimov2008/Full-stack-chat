const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// const r = await axios.put(
//   "https://api.chatengine.io/users/",
//   { username: username, secret: username, first_name: username },
//   { headers: { "private-key": "9fb60c58-75d8-4158-8b03-2edf106cbfa5" } }
// );
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-key": "9fb60c58-75d8-4158-8b03-2edf106cbfa5" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001, () => {
  console.log("server working");
});
