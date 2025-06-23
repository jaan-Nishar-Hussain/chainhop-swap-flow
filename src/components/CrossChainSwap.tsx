
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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Cross-Chain Swap</h2>
        <div className="flex items-center space-x-2 bg-orange-500/20 border border-orange-500/30 rounded-lg px-3 py-1">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-orange-300">Bridge Active</span>
        </div>
      </div>

      <div className="space-y-4">
        {/* From Chain & Token */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-gray-400">From</span>
            <ChainSelector chain={fromChain} onChainSelect={setFromChain} />
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-500">Balance: 5.24 ETH</span>
            <span className="text-xs text-gray-500">Network: Sepolia</span>
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
          <div className="mt-2 text-sm text-gray-400">≈ $1,247.30</div>
        </div>

        {/* Bridge Arrow */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-full p-4 shadow-lg">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* To Chain & Token */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-gray-400">To</span>
            <ChainSelector chain={toChain} onChainSelect={setToChain} />
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-500">Balance: 847.23 MATIC</span>
            <span className="text-xs text-gray-500">Network: Amoy</span>
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
          <div className="mt-2 text-sm text-gray-400">≈ $1,231.45</div>
        </div>
      </div>

      {/* Bridge Details */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Bridge Time</span>
          <span className="text-white">~3-5 minutes</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Bridge Fee</span>
          <span className="text-white">0.1% + Gas</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Gas (Sepolia)</span>
          <span className="text-white">~$2.45</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Gas (Amoy)</span>
          <span className="text-white">~$0.01</span>
        </div>
        <div className="border-t border-white/10 pt-2">
          <div className="flex justify-between text-sm font-medium">
            <span className="text-gray-400">Total Cost</span>
            <span className="text-white">~$3.70</span>
          </div>
        </div>
      </div>

      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
        <div className="flex items-start space-x-3">
          <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mt-0.5">
            <span className="text-xs text-black font-bold">!</span>
          </div>
          <div>
            <p className="text-yellow-300 text-sm font-medium">Cross-Chain Bridge Notice</p>
            <p className="text-yellow-200 text-xs mt-1">
              Cross-chain transactions may take 3-5 minutes to complete. Your funds will be securely bridged between networks.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={handleCrossChainSwap}
        className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        Start Cross-Chain Swap
      </button>
    </div>
  );
};

export default CrossChainSwap;
