const user = {
  _id: "1",
  name: "Reed",
  email: "paul@gmail.com",
  picture: "bla.jpg"
};

module.exports = {
  Query: {
    me: () => user
  }
};
