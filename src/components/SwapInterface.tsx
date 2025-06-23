
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
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Swap Tokens
        </h2>
        <div className="flex items-center space-x-3">
          <Settings className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/10">
            <span className="text-sm text-gray-300">Slippage:</span>
            <select 
              value={slippage}
              onChange={(e) => setSlippage(e.target.value)}
              className="bg-transparent text-white text-sm outline-none cursor-pointer"
            >
              <option value="0.1" className="bg-gray-800">0.1%</option>
              <option value="0.5" className="bg-gray-800">0.5%</option>
              <option value="1.0" className="bg-gray-800">1.0%</option>
              <option value="3.0" className="bg-gray-800">3.0%</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* From Token */}
        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-400 font-medium">From</span>
            <span className="text-sm text-gray-400">Balance: <span className="text-white font-semibold">12.45 ETH</span></span>
          </div>
          <div className="flex items-center space-x-6">
            <input
              type="text"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              placeholder="0.0"
              className="bg-transparent text-white text-3xl font-bold flex-1 outline-none placeholder-gray-500"
            />
            <TokenSelector token={fromToken} onTokenSelect={setFromToken} />
          </div>
          <div className="mt-4 text-sm text-gray-400">≈ <span className="text-gray-300 font-semibold">$2,847.30</span></div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center relative">
          <button
            onClick={handleFlipTokens}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-4 border-slate-900 rounded-2xl p-4 transition-all duration-300 shadow-xl hover:shadow-purple-500/50 transform hover:scale-110"
          >
            <ArrowDown className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* To Token */}
        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-400 font-medium">To</span>
            <span className="text-sm text-gray-400">Balance: <span className="text-white font-semibold">1,247.89 USDC</span></span>
          </div>
          <div className="flex items-center space-x-6">
            <input
              type="text"
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
              placeholder="0.0"
              className="bg-transparent text-white text-3xl font-bold flex-1 outline-none placeholder-gray-500"
            />
            <TokenSelector token={toToken} onTokenSelect={setToToken} />
          </div>
          <div className="mt-4 text-sm text-gray-400">≈ <span className="text-gray-300 font-semibold">$2,831.45</span></div>
        </div>
      </div>

      {/* Swap Details */}
      <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
        <div className="flex justify-between items-center p-3 rounded-xl hover:bg-white/5 transition-all duration-200">
          <span className="text-gray-400 text-sm">Exchange Rate</span>
          <span className="text-white font-semibold">1 ETH = 2,847.30 USDC</span>
        </div>
        <div className="flex justify-between items-center p-3 rounded-xl hover:bg-white/5 transition-all duration-200">
          <span className="text-gray-400 text-sm">Network Fee</span>
          <span className="text-white font-semibold">~$2.45</span>
        </div>
        <div className="flex justify-between items-center p-3 rounded-xl hover:bg-white/5 transition-all duration-200">
          <span className="text-gray-400 text-sm">Price Impact</span>
          <span className="text-green-400 font-semibold">0.12%</span>
        </div>
      </div>

      <button
        onClick={handleSwap}
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-6 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-purple-500/50 transform hover:scale-[1.02] text-lg"
      >
        Swap Tokens
      </button>
    </div>
  );
};

export default SwapInterface;
