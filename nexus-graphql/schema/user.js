/* eslint-disable no-underscore-dangle */
const {
  objectType,
  stringArg,
  booleanArg,
  idArg,
  arg,
  inputObjectType,
  enumType,
} = require('nexus');
// ############ SCALAR, INPUT AND OBJECT TYPES ##############/
const _UserPosition = enumType({
  name: '_UserPosition',
  members: ['APPROVER', 'MANAGER', 'ADMIN'],
});
const _UserRoles = enumType({
  name: '_UserRoles',
  members: ['Enity_View', 'Enity_Edit', 'Enity_Owner'],
});
const _UserStatus = enumType({
  name: '_UserStatus',
  members: ['IN_EVALUATION', 'ACTIVE', 'INACTIVE'],
});
const _UserTypes = enumType({
  name: '_UserTypes',
  members: ['ADMIN', 'CUSTOMER'],
});

const User = objectType({
  name: 'User',
  definition(t) {
    t.id('id');
    t.string('name');
    t.string('email', { nullable: true });
    t.string('phone', { nullable: true });
    t.field('type', {
      type: _UserTypes,
      nullable: true,
    });
    t.field('roles', {
      type: _UserRoles,
      list: [false],
      nullable: true,
    });
    t.field('parentUser', {
      type: User,
      nullable: true,
    });
    t.field('status', {
      type: _UserStatus,
      nullable: true,
    });
    t.string('position', {
      type: _UserPosition,
      nullable: true,
    });
    t.string('avatar', { nullable: true });
    t.boolean('verifyEmail', { nullable: true });
    t.boolean('active', { nullable: true });
  },
});

const InputUserWhere = inputObjectType({
  name: 'InputUserWhere',
  definition(t) {
    t.string('name');
    t.field('status', {
      type: _UserStatus,
      list: [false],
    });
  },
});

// ############ QUERIES ##############/
const Query = objectType({
  name: 'Query',
  definition(t) {
    t.field('getUser', {
      type: User,
      nullable: true,
      args: {
        userId: idArg({ required: true }),
      },
    });
    t.field('getUsers', {
      type: User,
      list: [false],
      nullable: true,
      args: {
        where: arg({ type: InputUserWhere }),
      },
    });
  },
});

// ############ MUTATION ##############/
const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.field('createUser', {
      type: User,
      nullable: true,
      args: {
        name: stringArg({ required: true }),
        email: stringArg({ required: true }),
        password: stringArg({ required: true }),
        phone: stringArg({ required: true }),
        type: stringArg(),
        verifyEmail: booleanArg(),
        roles: stringArg({
          list: true,
          required: true,
        }),
        parentUser: idArg(),
      },
      resolve: (root, args) => {
        console.log('Usuário criado');
        return {
          id: Math.random(),
          ...args,
        };
      },
    });
    t.field('updateUser', {
      type: User,
      nullable: true,
      args: {
        userId: idArg({ required: true }),
        name: stringArg(),
        email: stringArg(),
        phone: stringArg(),
        roles: arg({
          type: _UserRoles,
          list: [false],
        }),
        avatar: stringArg(),
        position: stringArg(),
        companies: idArg({ list: [false] }),
        active: booleanArg(),
      },
      resolve: (root, args) => {
        console.log('Usuário alterado');
        return {
          ...args,
        };
      },
    });
  },
});

module.exports = {
  User,
  Query,
  Mutation,
};
