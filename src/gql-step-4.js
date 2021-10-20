// fetchWithdrawalGateways.graphql

query fetchWithdrawalGateways($type: String!){
  fetchWithdrawalGateways(type: $type){
    gateways {
      id
      name
      trafficPercentage
    }
  }
}