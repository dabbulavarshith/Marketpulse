export interface MarketDataPoint {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number | null;
  marketCap: number | null;
  sector: string | null;
  lastUpdated: Date;
}

export interface PineScript {
  id: string;
  name: string;
  description: string | null;
  code: string;
  category: string;
  views: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  genZExplanation?: string;
}
