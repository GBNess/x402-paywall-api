import { VercelRequest, VercelResponse } from '@vercel/node';

export default (req: VercelRequest, res: VercelResponse) => {
  res.status(200).json({
    success: true,
    message: "Base network arbitrage opportunities found",
    data: [
      {
        pair: "WETH/USDC",
        buy_dex: "Uniswap",
        buy_price: 2500.50,
        sell_dex: "Aerodrome",
        sell_price: 2515.25,
        profit_margin: "0.59%",
        gas_estimated: "0.00015 ETH"
      },
      {
        pair: "AERO/USDC",
        buy_dex: "BaseSwap",
        buy_price: 0.85,
        sell_dex: "Aerodrome",
        sell_price: 0.88,
        profit_margin: "3.52%",
        gas_estimated: "0.00012 ETH"
      }
    ]
  });
};
