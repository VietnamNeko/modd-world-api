const Express = require("express");
require("dotenv").config();

const app = Express();
let responsesGiven = 0;
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

app.post("/check", function (req, res, next) {
  console.log(req.body);
  //let data = JSON.parse(req.body.content);
  //console.log(data.a);
  responsesGiven++;
  res.send({"response":"n°"+responsesGiven});
});

app.listen(process.env.PORT || 2000, function () {
  console.log("listening on port" + process.env.PORT || 2000);
});
