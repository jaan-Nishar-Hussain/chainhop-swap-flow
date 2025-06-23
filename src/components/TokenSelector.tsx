
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
        className="bg-white border border-gray-300 rounded-lg px-4 py-2 flex items-center space-x-2 hover:bg-gray-50 transition-all duration-200"
      >
        <span className="text-gray-900 font-medium">{token.symbol}</span>
        <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${showTokens ? 'rotate-180' : ''}`} />
      </button>

      {showTokens && (
        <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg overflow-hidden z-50 min-w-48 shadow-lg">
          {tokens.map((tokenOption) => (
            <button
              key={tokenOption.symbol}
              onClick={() => handleTokenSelect(tokenOption)}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-all duration-200"
            >
              <div className="text-gray-900 font-medium">{tokenOption.symbol}</div>
              <div className="text-gray-500 text-sm">{tokenOption.name}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TokenSelector;
