
import { useState } from 'react';
import TokenSelector from './TokenSelector';

const LiquidityInterface = () => {
  const [activeTab, setActiveTab] = useState('add');
  const [tokenA, setTokenA] = useState({ symbol: 'ETH', name: 'Ethereum', address: '0x...' });
  const [tokenB, setTokenB] = useState({ symbol: 'USDC', name: 'USD Coin', address: '0x...' });
  const [amountA, setAmountA] = useState('');
  const [amountB, setAmountB] = useState('');
  const [lpTokenAmount, setLpTokenAmount] = useState('');

  const handleAddLiquidity = () => {
    console.log('Adding liquidity...', { tokenA, tokenB, amountA, amountB });
  };

  const handleRemoveLiquidity = () => {
    console.log('Removing liquidity...', { lpTokenAmount });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Liquidity</h2>
        <div className="flex bg-white/5 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('add')}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              activeTab === 'add'
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Add Liquidity
          </button>
          <button
            onClick={() => setActiveTab('remove')}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              activeTab === 'remove'
                ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Remove Liquidity
          </button>
        </div>
      </div>

      {activeTab === 'add' ? (
        <div className="space-y-4">
          {/* Token A Input */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Token A</span>
              <span className="text-sm text-gray-400">Balance: 12.45 ETH</span>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                value={amountA}
                onChange={(e) => setAmountA(e.target.value)}
                placeholder="0.0"
                className="bg-transparent text-white text-2xl font-semibold flex-1 outline-none"
              />
              <TokenSelector token={tokenA} onTokenSelect={setTokenA} />
            </div>
          </div>

          {/* Plus Symbol */}
          <div className="flex justify-center">
            <div className="bg-white/10 border border-white/20 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-white text-xl">+</span>
            </div>
          </div>

          {/* Token B Input */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Token B</span>
              <span className="text-sm text-gray-400">Balance: 1,247.89 USDC</span>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                value={amountB}
                onChange={(e) => setAmountB(e.target.value)}
                placeholder="0.0"
                className="bg-transparent text-white text-2xl font-semibold flex-1 outline-none"
              />
              <TokenSelector token={tokenB} onTokenSelect={setTokenB} />
            </div>
          </div>

          {/* Pool Details */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Pool Share</span>
              <span className="text-white">0.045%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">LP Tokens</span>
              <span className="text-white">24.789 ETH-USDC</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Pool APY</span>
              <span className="text-green-400">12.45%</span>
            </div>
          </div>

          <button
            onClick={handleAddLiquidity}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Add Liquidity
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {/* LP Token Input */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">LP Tokens to Remove</span>
              <span className="text-sm text-gray-400">Balance: 24.789 ETH-USDC</span>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                value={lpTokenAmount}
                onChange={(e) => setLpTokenAmount(e.target.value)}
                placeholder="0.0"
                className="bg-transparent text-white text-2xl font-semibold flex-1 outline-none"
              />
              <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-2">
                <span className="text-white font-medium">ETH-USDC</span>
              </div>
            </div>
          </div>

          {/* Percentage Buttons */}
          <div className="flex space-x-2">
            {['25%', '50%', '75%', '100%'].map((percentage) => (
              <button
                key={percentage}
                className="flex-1 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg py-2 text-white text-sm transition-all duration-200"
              >
                {percentage}
              </button>
            ))}
          </div>

          {/* Output Preview */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
            <h4 className="text-white font-medium">You will receive:</h4>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">ETH</span>
              <span className="text-white">2.45 ETH</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">USDC</span>
              <span className="text-white">6,847.30 USDC</span>
            </div>
          </div>

          <button
            onClick={handleRemoveLiquidity}
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Remove Liquidity
          </button>
        </div>
      )}
    </div>
  );
};

export default LiquidityInterface;
