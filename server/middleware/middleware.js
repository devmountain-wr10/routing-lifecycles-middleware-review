module.exports = {
  //data validation
  checkValidString: (req, res, next) => {
    const { string } = req.body;
    if (typeof string === "string") {
      next();
    } else {
      res.status(400).send({ error: "the datatype was not a string" });
    }
  },

  //security NOTE: THIS CODE WONT WORK BECAUSE WE DIDNT SETUP SESSIONS IN OUR SERVER
  checkLoggedin: (req, res, next) => {
    if (req.session.user) {
      next();
    } else {
      res.status(400).send({ error: "Not logged in" });
    }
  },
};
