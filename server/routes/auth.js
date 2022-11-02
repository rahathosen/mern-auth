const express = require("express")();
const router = express;

router.get("/signup", (req, res) => {
  res.json({
    data: "you hit signup endpoint",
  });
});

module.exports = router;
