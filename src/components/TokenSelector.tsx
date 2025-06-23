
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Token {
  symbol: string;
  name: string;
  address: string;
}

interface TokenSelectorProps {
  token: Token;
  onTokenSelect: (token: Token) => void;
}

const TokenSelector = ({ token, onTokenSelect }: TokenSelectorProps) => {
  const [showTokens, setShowTokens] = useState(false);

  const tokens = [
    { symbol: 'ETH', name: 'Ethereum', address: '0x...' },
    { symbol: 'USDC', name: 'USD Coin', address: '0x...' },
    { symbol: 'USDT', name: 'Tether USD', address: '0x...' },
    { symbol: 'MATIC', name: 'Polygon', address: '0x...' },
    { symbol: 'WBTC', name: 'Wrapped Bitcoin', address: '0x...' },
  ];

  const handleTokenSelect = (selectedToken: Token) => {
    onTokenSelect(selectedToken);
    setShowTokens(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowTokens(!showTokens)}
        className="bg-white hover:bg-gray-50 border border-gray-300 rounded-xl px-6 py-4 flex items-center space-x-3 transition-all duration-300 shadow-sm hover:shadow-md"
      >
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm">
          {token.symbol.charAt(0)}
        </div>
        <span className="text-black font-bold text-lg">{token.symbol}</span>
        <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${showTokens ? 'rotate-180' : ''}`} />
      </button>

      {showTokens && (
        <div className="absolute top-full right-0 mt-3 bg-white border border-gray-200 rounded-xl overflow-hidden z-50 min-w-64 shadow-xl">
          {tokens.map((tokenOption) => (
            <button
              key={tokenOption.symbol}
              onClick={() => handleTokenSelect(tokenOption)}
              className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-all duration-300 flex items-center space-x-4 group"
            >
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold">
                {tokenOption.symbol.charAt(0)}
              </div>
              <div>
                <div className="text-black font-bold text-lg group-hover:text-gray-700 transition-colors">
                  {tokenOption.symbol}
                </div>
                <div className="text-gray-500 text-sm">{tokenOption.name}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TokenSelector;
