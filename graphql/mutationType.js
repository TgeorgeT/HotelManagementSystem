

const {
  GraphQLObjectType,
} = require('graphql');

const createUser = require('./mutations/user/createUser');
const updateUser = require('./mutations/user/updateUser');
const deleteUser = require('./mutations/user/deleteUser');
const login = require('./mutations/user/login');

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
    login: login,
  }
})

module.exports = mutationType;