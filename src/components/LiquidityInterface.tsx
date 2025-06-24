
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
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-black">Liquidity</h2>
        <div className="flex bg-gray-100 border border-gray-300 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('add')}
            className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
              activeTab === 'add'
                ? 'bg-black text-white shadow-lg'
                : 'text-gray-600 hover:text-black hover:bg-gray-50'
            }`}
          >
            Add Liquidity
          </button>
          <button
            onClick={() => setActiveTab('remove')}
            className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
              activeTab === 'remove'
                ? 'bg-black text-white shadow-lg'
                : 'text-gray-600 hover:text-black hover:bg-gray-50'
            }`}
          >
            Remove Liquidity
          </button>
        </div>
      </div>

      {activeTab === 'add' ? (
        <div className="space-y-6">
          {/* Token A Input */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600 font-medium">Token A</span>
              <span className="text-sm text-gray-600">Balance: <span className="text-black font-semibold">12.45 ETH</span></span>
            </div>
            <div className="flex items-center space-x-6">
              <input
                type="text"
                value={amountA}
                onChange={(e) => setAmountA(e.target.value)}
                placeholder="0.0"
                className="bg-transparent text-black text-3xl font-bold flex-1 outline-none placeholder-gray-400"
              />
              <TokenSelector token={tokenA} onTokenSelect={setTokenA} />
            </div>
          </div>

          {/* Plus Symbol */}
          <div className="flex justify-center">
            <div className="bg-gray-200 border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center">
              <span className="text-black text-xl font-bold">+</span>
            </div>
          </div>

          {/* Token B Input */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600 font-medium">Token B</span>
              <span className="text-sm text-gray-600">Balance: <span className="text-black font-semibold">1,247.89 USDC</span></span>
            </div>
            <div className="flex items-center space-x-6">
              <input
                type="text"
                value={amountB}
                onChange={(e) => setAmountB(e.target.value)}
                placeholder="0.0"
                className="bg-transparent text-black text-3xl font-bold flex-1 outline-none placeholder-gray-400"
              />
              <TokenSelector token={tokenB} onTokenSelect={setTokenB} />
            </div>
          </div>

          {/* Pool Details */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4">
            <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
              <span className="text-gray-600 text-sm">Pool Share</span>
              <span className="text-black font-semibold">0.045%</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
              <span className="text-gray-600 text-sm">LP Tokens</span>
              <span className="text-black font-semibold">24.789 ETH-USDC</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
              <span className="text-gray-600 text-sm">Pool APY</span>
              <span className="text-black font-semibold">12.45%</span>
            </div>
          </div>

          <button
            onClick={handleAddLiquidity}
            className="w-full bg-black hover:bg-gray-800 text-white font-bold py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-lg"
          >
            Add Liquidity
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* LP Token Input */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600 font-medium">LP Tokens to Remove</span>
              <span className="text-sm text-gray-600">Balance: <span className="text-black font-semibold">24.789 ETH-USDC</span></span>
            </div>
            <div className="flex items-center space-x-6">
              <input
                type="text"
                value={lpTokenAmount}
                onChange={(e) => setLpTokenAmount(e.target.value)}
                placeholder="0.0"
                className="bg-transparent text-black text-3xl font-bold flex-1 outline-none placeholder-gray-400"
              />
              <div className="bg-gray-200 border border-gray-300 rounded-xl px-6 py-4">
                <span className="text-black font-bold text-lg">ETH-USDC</span>
              </div>
            </div>
          </div>

          {/* Percentage Buttons */}
          <div className="flex space-x-3">
            {['25%', '50%', '75%', '100%'].map((percentage) => (
              <button
                key={percentage}
                className="flex-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-xl py-3 text-black font-medium transition-all duration-300 hover:shadow-md"
              >
                {percentage}
              </button>
            ))}
          </div>

          {/* Output Preview */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4">
            <h4 className="text-black font-bold text-lg">You will receive:</h4>
            <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
              <span className="text-gray-600 text-sm">ETH</span>
              <span className="text-black font-semibold">2.45 ETH</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
              <span className="text-gray-600 text-sm">USDC</span>
              <span className="text-black font-semibold">6,847.30 USDC</span>
            </div>
          </div>

          <button
            onClick={handleRemoveLiquidity}
            className="w-full bg-black hover:bg-gray-800 text-white font-bold py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-lg"
          >
            Remove Liquidity
          </button>
        </div>
      )}
    </div>
  );
};

export default LiquidityInterface;
