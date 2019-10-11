/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */






declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  InputUserWhere: { // input type
    name?: string | null; // String
    status?: Array<NexusGenEnums['_UserStatus'] | null> | null; // [_UserStatus]
  }
}

export interface NexusGenEnums {
  _UserPosition: "ADMIN" | "APPROVER" | "MANAGER"
  _UserRoles: "Enity_Edit" | "Enity_Owner" | "Enity_View"
  _UserStatus: "ACTIVE" | "IN_EVALUATION" | "INACTIVE"
  _UserTypes: "ADMIN" | "CUSTOMER"
}

export interface NexusGenRootTypes {
  Mutation: {};
  Query: {};
  User: { // root type
    active?: boolean | null; // Boolean
    avatar?: string | null; // String
    email?: string | null; // String
    id: string; // ID!
    name: string; // String!
    parentUser?: NexusGenRootTypes['User'] | null; // User
    phone?: string | null; // String
    position?: NexusGenEnums['_UserPosition'] | null; // _UserPosition
    roles?: Array<NexusGenEnums['_UserRoles'] | null> | null; // [_UserRoles]
    status?: NexusGenEnums['_UserStatus'] | null; // _UserStatus
    type?: NexusGenEnums['_UserTypes'] | null; // _UserTypes
    verifyEmail?: boolean | null; // Boolean
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  InputUserWhere: NexusGenInputs['InputUserWhere'];
  _UserPosition: NexusGenEnums['_UserPosition'];
  _UserRoles: NexusGenEnums['_UserRoles'];
  _UserStatus: NexusGenEnums['_UserStatus'];
  _UserTypes: NexusGenEnums['_UserTypes'];
}

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createUser: NexusGenRootTypes['User'] | null; // User
    updateUser: NexusGenRootTypes['User'] | null; // User
  }
  Query: { // field return type
    getUser: NexusGenRootTypes['User'] | null; // User
    getUsers: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  User: { // field return type
    active: boolean | null; // Boolean
    avatar: string | null; // String
    email: string | null; // String
    id: string; // ID!
    name: string; // String!
    parentUser: NexusGenRootTypes['User'] | null; // User
    phone: string | null; // String
    position: NexusGenEnums['_UserPosition'] | null; // _UserPosition
    roles: Array<NexusGenEnums['_UserRoles'] | null> | null; // [_UserRoles]
    status: NexusGenEnums['_UserStatus'] | null; // _UserStatus
    type: NexusGenEnums['_UserTypes'] | null; // _UserTypes
    verifyEmail: boolean | null; // Boolean
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createUser: { // args
      email: string; // String!
      name: string; // String!
      parentUser?: string | null; // ID
      password: string; // String!
      phone: string; // String!
      roles: string[]; // [String!]!
      type?: string | null; // String
      verifyEmail?: boolean | null; // Boolean
    }
    updateUser: { // args
      active?: boolean | null; // Boolean
      avatar?: string | null; // String
      companies?: Array<string | null> | null; // [ID]
      email?: string | null; // String
      name?: string | null; // String
      phone?: string | null; // String
      position?: string | null; // String
      roles?: Array<NexusGenEnums['_UserRoles'] | null> | null; // [_UserRoles]
      userId: string; // ID!
    }
  }
  Query: {
    getUser: { // args
      userId: string; // ID!
    }
    getUsers: { // args
      where?: NexusGenInputs['InputUserWhere'] | null; // InputUserWhere
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Mutation" | "Query" | "User";

export type NexusGenInputNames = "InputUserWhere";

export type NexusGenEnumNames = "_UserPosition" | "_UserRoles" | "_UserStatus" | "_UserTypes";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}