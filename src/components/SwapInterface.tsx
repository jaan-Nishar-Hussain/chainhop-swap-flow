
import { useState } from 'react';
import { ArrowDown, Settings } from 'lucide-react';
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
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-black">
          Swap Tokens
        </h2>
        <div className="flex items-center space-x-3">
          <Settings className="w-5 h-5 text-gray-600 hover:text-black transition-colors cursor-pointer" />
          <div className="flex items-center space-x-2 bg-gray-50 rounded-xl px-4 py-2 border border-gray-200">
            <span className="text-sm text-gray-600">Slippage:</span>
            <select 
              value={slippage}
              onChange={(e) => setSlippage(e.target.value)}
              className="bg-transparent text-black text-sm outline-none cursor-pointer"
            >
              <option value="0.1" className="bg-white">0.1%</option>
              <option value="0.5" className="bg-white">0.5%</option>
              <option value="1.0" className="bg-white">1.0%</option>
              <option value="3.0" className="bg-white">3.0%</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* From Token */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600 font-medium">From</span>
            <span className="text-sm text-gray-600">Balance: <span className="text-black font-semibold">12.45 ETH</span></span>
          </div>
          <div className="flex items-center space-x-6">
            <input
              type="text"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              placeholder="0.0"
              className="bg-transparent text-black text-3xl font-bold flex-1 outline-none placeholder-gray-400"
            />
            <TokenSelector token={fromToken} onTokenSelect={setFromToken} />
          </div>
          <div className="mt-4 text-sm text-gray-600">≈ <span className="text-gray-800 font-semibold">$2,847.30</span></div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center relative">
          <button
            onClick={handleFlipTokens}
            className="bg-black hover:bg-gray-800 border-4 border-white rounded-xl p-4 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
          >
            <ArrowDown className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* To Token */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600 font-medium">To</span>
            <span className="text-sm text-gray-600">Balance: <span className="text-black font-semibold">1,247.89 USDC</span></span>
          </div>
          <div className="flex items-center space-x-6">
            <input
              type="text"
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
              placeholder="0.0"
              className="bg-transparent text-black text-3xl font-bold flex-1 outline-none placeholder-gray-400"
            />
            <TokenSelector token={toToken} onTokenSelect={setToToken} />
          </div>
          <div className="mt-4 text-sm text-gray-600">≈ <span className="text-gray-800 font-semibold">$2,831.45</span></div>
        </div>
      </div>

      {/* Swap Details */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4">
        <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
          <span className="text-gray-600 text-sm">Exchange Rate</span>
          <span className="text-black font-semibold">1 ETH = 2,847.30 USDC</span>
        </div>
        <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
          <span className="text-gray-600 text-sm">Network Fee</span>
          <span className="text-black font-semibold">~$2.45</span>
        </div>
        <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
          <span className="text-gray-600 text-sm">Price Impact</span>
          <span className="text-black font-semibold">0.12%</span>
        </div>
      </div>

      <button
        onClick={handleSwap}
        className="w-full bg-black hover:bg-gray-800 text-white font-bold py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-lg"
      >
        Swap Tokens
      </button>
    </div>
  );
};

export default SwapInterface;
