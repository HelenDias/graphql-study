const dependencies = {
  UserRepository: require('../../../../infrastructure/repository/UserRepository'),
  omit: require('lodash').omit,
};

const UpdateUser = (data, injection) => {
  const {
    UserRepository,
    Logger,
    omit,
  } = Object.assign({}, dependencies, injection);

  if (!data.userId) {
    Logger.error('UserId não enviado!!');
  }

  const params = {
    ...omit(data, 'userId'),
  };

  return new UserRepository(injection).updateUser(data.userId, params);
};

module.exports = UpdateUser;
