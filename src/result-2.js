// fetchWithdrawalGateways.d.ts

export interface FetchWithdrawalGatewaysInput {
  type: string;
}

export interface SelectionOnGateways {
  id: string;
  name: string;
  trafficPercentage: number;
  clientType: string | null;
}

export interface SelectionOnFetchWithdrawalGateways {
  gateways: Array<SelectionOnGateways | null> | null;
}

export interface FetchWithdrawalGateways {
  fetchWithdrawalGateways: SelectionOnFetchWithdrawalGateways;
}