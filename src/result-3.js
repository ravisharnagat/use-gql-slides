// fetchWithdrawalGateways.gqlTypes.ts

export const FetchWithdrawalGatewaysInputSchema = t.type({type: t.string})

export const SelectionOnGatewaysSchema = t.type({
  id: t.string,
  name: t.string,
  trafficPercentage: t.number,
})

export const SelectionOnFetchWithdrawalGatewaysSchema = t.type({
  gateways: t.union([
    t.null,
    t.array(
      t.union([
        t.null,
        t.type({
          id: t.string,
          name: t.string,
          trafficPercentage: t.number,
        }),
      ])
    ),
  ]),
})

export const FetchWithdrawalGatewaysSchema = t.type({
  fetchWithdrawalGateways: t.type({
    gateways: t.union([
      t.null,
      t.array(
        t.union([
          t.null,
          t.type({
            id: t.string,
            name: t.string,
            trafficPercentage: t.number,
          }),
        ])
      ),
    ]),
  }),
})
