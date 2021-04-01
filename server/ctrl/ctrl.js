module.exports = {
  successfulStringMessage: (req, res, next) => {
    console.log("Good job, that was a string");
    res.sendStatus(200);
  },
};
