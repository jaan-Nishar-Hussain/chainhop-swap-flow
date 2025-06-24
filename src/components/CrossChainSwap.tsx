
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import TokenSelector from './TokenSelector';
import ChainSelector from './ChainSelector';

const CrossChainSwap = () => {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [fromChain, setFromChain] = useState({ name: 'Ethereum Sepolia', id: 11155111, color: 'from-blue-500 to-blue-600' });
  const [toChain, setToChain] = useState({ name: 'Polygon Amoy', id: 80002, color: 'from-purple-500 to-purple-600' });
  const [fromToken, setFromToken] = useState({ symbol: 'ETH', name: 'Ethereum', address: '0x...' });
  const [toToken, setToToken] = useState({ symbol: 'MATIC', name: 'Polygon', address: '0x...' });

  const handleCrossChainSwap = () => {
    console.log('Executing cross-chain swap...', { fromAmount, toAmount, fromChain, toChain, fromToken, toToken });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-black">
          Cross-Chain Swap
        </h2>
        <div className="flex items-center space-x-3 bg-gray-100 border border-gray-300 rounded-xl px-4 py-2">
          <div className="w-3 h-3 bg-black rounded-full animate-pulse"></div>
          <span className="text-sm text-black font-medium">Bridge Active</span>
        </div>
      </div>

      <div className="space-y-6">
        {/* From Chain & Token */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600 font-medium">From</span>
            <ChainSelector chain={fromChain} onChainSelect={setFromChain} />
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs text-gray-500">Balance: 5.24 ETH</span>
            <span className="text-xs text-gray-500">Network: Sepolia</span>
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
          <div className="mt-4 text-sm text-gray-600">≈ <span className="text-gray-800 font-semibold">$1,247.30</span></div>
        </div>

        {/* Bridge Arrow */}
        <div className="flex justify-center">
          <button className="bg-black hover:bg-gray-800 border-4 border-white rounded-xl p-4 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* To Chain & Token */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600 font-medium">To</span>
            <ChainSelector chain={toChain} onChainSelect={setToChain} />
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs text-gray-500">Balance: 847.23 MATIC</span>
            <span className="text-xs text-gray-500">Network: Amoy</span>
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
          <div className="mt-4 text-sm text-gray-600">≈ <span className="text-gray-800 font-semibold">$1,231.45</span></div>
        </div>
      </div>

      {/* Bridge Details */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4">
        <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
          <span className="text-gray-600 text-sm">Bridge Time</span>
          <span className="text-black font-semibold">~3-5 minutes</span>
        </div>
        <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
          <span className="text-gray-600 text-sm">Bridge Fee</span>
          <span className="text-black font-semibold">0.1% + Gas</span>
        </div>
        <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
          <span className="text-gray-600 text-sm">Gas (Sepolia)</span>
          <span className="text-black font-semibold">~$2.45</span>
        </div>
        <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
          <span className="text-gray-600 text-sm">Gas (Amoy)</span>
          <span className="text-black font-semibold">~$0.01</span>
        </div>
        <div className="border-t border-gray-300 pt-4">
          <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
            <span className="text-gray-600 text-sm font-medium">Total Cost</span>
            <span className="text-black font-bold">~$3.70</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 border border-gray-300 rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mt-1">
            <span className="text-xs text-white font-bold">!</span>
          </div>
          <div>
            <p className="text-black text-sm font-bold mb-2">Cross-Chain Bridge Notice</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Cross-chain transactions may take 3-5 minutes to complete. Your funds will be securely bridged between networks.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={handleCrossChainSwap}
        className="w-full bg-black hover:bg-gray-800 text-white font-bold py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-lg"
      >
        Start Cross-Chain Swap
      </button>
    </div>
  );
};

export default CrossChainSwap;
