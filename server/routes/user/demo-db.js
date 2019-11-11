const id = 45;

const demoUsers = [
  { id: 1, name: "av", email: "a@gmail", password: "a" },
  { id: 2, name: "bv", email: "b@gmail", password: "b" },
  { id: 3, name: "cv", email: "c@gmail", password: "c" },
  { id: 4, name: "dv", email: "d@gmail", password: "d" }
];

const getUserById = async userId => {
  const user = demoUsers.find(function(user) {
    return user.id === userId;
  });
  return user;
};

const getUserByEmail = async email => {
  const user = demoUsers.find(function(user) {
    return user.email === email;
  });
  return user;
};

const createNewUser = async user => {
  demoUsers.push({
    id,
    name: user.name,
    email: user.email,
    pass: user.password
  });
  id++;
};

export { getUserById, getUserByEmail, createNewUser };
