// fetchWithdrawalGatewaysGql.js

exports.GQL = {
  query:
    'query fetchWithdrawalGateways($type: String!){ fetchWithdrawalGateways(type: $type){ gateways { id name trafficPercentage active clientType } }}',
  name: 'fetchWithdrawalGateways',
  operation: 'query',
}
