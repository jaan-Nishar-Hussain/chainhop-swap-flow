
import { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import TokenSelector from './TokenSelector';

const SwapInterface = () => {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [fromToken, setFromToken] = useState({ symbol: 'ETH', name: 'Ethereum', address: '0x...' });
  const [toToken, setToToken] = useState({ symbol: 'USDC', name: 'USD Coin', address: '0x...' });
  const [slippage, setSlippage] = useState('0.5');

  const handleSwap = () => {
    console.log('Executing swap...', { fromAmount, toAmount, fromToken, toToken });
  };

  const handleFlipTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Swap Tokens</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">Slippage:</span>
          <select 
            value={slippage}
            onChange={(e) => setSlippage(e.target.value)}
            className="border border-gray-600 rounded-md px-3 py-1 text-white text-sm bg-gray-700"
          >
            <option value="0.1">0.1%</option>
            <option value="0.5">0.5%</option>
            <option value="1.0">1.0%</option>
            <option value="3.0">3.0%</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {/* From Token */}
        <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">From</span>
            <span className="text-sm text-gray-400">Balance: 12.45 ETH</span>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              placeholder="0.0"
              className="bg-transparent text-white text-2xl font-semibold flex-1 outline-none"
            />
            <TokenSelector token={fromToken} onTokenSelect={setFromToken} />
          </div>
          <div className="mt-2 text-sm text-gray-400">≈ $2,847.30</div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <button
            onClick={handleFlipTokens}
            className="bg-gray-600 hover:bg-gray-500 border border-gray-500 rounded-full p-3 transition-all duration-200"
          >
            <ArrowDown className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* To Token */}
        <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">To</span>
            <span className="text-sm text-gray-400">Balance: 1,247.89 USDC</span>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
              placeholder="0.0"
              className="bg-transparent text-white text-2xl font-semibold flex-1 outline-none"
            />
            <TokenSelector token={toToken} onTokenSelect={setToToken} />
          </div>
          <div className="mt-2 text-sm text-gray-400">≈ $2,831.45</div>
        </div>
      </div>

      {/* Swap Details */}
      <div className="bg-gray-700 border border-gray-600 rounded-lg p-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Rate</span>
          <span className="text-white">1 ETH = 2,847.30 USDC</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Network Fee</span>
          <span className="text-white">~$2.45</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Price Impact</span>
          <span className="text-green-400">0.12%</span>
        </div>
      </div>

      <button
        onClick={handleSwap}
        className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-4 rounded-lg transition-all duration-200"
      >
        Swap Asset
      </button>
    </div>
  );
};

export default SwapInterface;
