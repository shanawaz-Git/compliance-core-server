exports.cctest = (req, res) => {
  var a1 = req.body.bussinessProcessImpacted;
  var b1 = req.body.requiredAutomationCritical;
  var c1 = req.body.newControls;
  var tot = a1 + b1 + c1;
  var score = tot / 3;
  res
    .status(200)
    .send("Hello, Server is running good, have nice day. ->FROM GITHUB<-")
    .end();
  // res.json({ Score: score });
};

exports.ccget = (req, res) => {
  //   res.send("working");
  res
    .status(200)
    .send("Hello, Server is running good, have nice day. ->FROM GITHUB<-")
    .end();
  console.log("hello end point hitted", req.body);
};
