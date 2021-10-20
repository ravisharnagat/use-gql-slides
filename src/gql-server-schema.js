type IwBank {
  id: ID
  name: String!
  balance: Int
  isBalanceLow: Boolean
  accountNumber: String!
}

type IwGateway {
  id: ID!
  name: String!
  trafficPercentage: Int!
  balance: [IwBank]
}

type IwGateways {
  gateways: [IwGateway]
}

type Query {
  fetchAccountBalancesInfo(type: String!): IwGateways!
  fetchWithdrawalGateways(type: String!): IwGateways!
}