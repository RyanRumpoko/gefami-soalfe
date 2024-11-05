const express = require("express");
const router = require("./routes/userRouter");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.listen(port, () => console.log(`Server running on port ${port}`));
