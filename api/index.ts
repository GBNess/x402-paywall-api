import { VercelRequest, VercelResponse } from '@vercel/node';

export default (req: VercelRequest, res: VercelResponse) => {
  // 1. Check for the x402 payment signature header
  const paymentHeader = req.headers['x-payment'];

  // 2. If no payment is attached, reject with 402 Payment Required
  if (!paymentHeader) {
    return res.status(402).json({
      error: "Payment Required",
      maxAmountRequired: "0.10", // Charging $0.10 per scan
      payTo: "0x0c401d3e57e1aada9071dba75f286b48fa95c46c", // Replace with your actual wallet address!
      asset: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", // Official USDC token on Base
      network: "eip155:8453", // Base Mainnet Network ID
      description: "Premium Base Arbitrage Market Scan"
    });
  }

  // 3. If the payment header exists, return the premium data!
  return res.status(200).json({
    success: true,
    message: "Payment verified! Base network arbitrage opportunities found",
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
