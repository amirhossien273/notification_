const users = [];

const joinNotification = (_id) => {
  users.push(_id);
};

const disconnect = (_id) => {
  const index = users.indexOf(_id);
  if (index > -1) {
    users.splice(index, 1);
  }
};

module.exports = {
  users,
  joinNotification,
  disconnect,
};
