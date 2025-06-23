
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Chain {
  name: string;
  id: number;
  color: string;
}

interface ChainSelectorProps {
  chain: Chain;
  onChainSelect: (chain: Chain) => void;
}

const ChainSelector = ({ chain, onChainSelect }: ChainSelectorProps) => {
  const [showChains, setShowChains] = useState(false);

  const chains = [
    { name: 'Ethereum Sepolia', id: 11155111, color: 'from-blue-500 to-blue-600' },
    { name: 'Polygon Amoy', id: 80002, color: 'from-purple-500 to-purple-600' },
  ];

  const handleChainSelect = (selectedChain: Chain) => {
    onChainSelect(selectedChain);
    setShowChains(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowChains(!showChains)}
        className={`bg-gradient-to-r ${chain.color} px-4 py-2 rounded-xl flex items-center space-x-2 hover:opacity-90 transition-all duration-200`}
      >
        <span className="text-white font-medium text-sm">{chain.name}</span>
        <ChevronDown className={`w-4 h-4 text-white transition-transform ${showChains ? 'rotate-180' : ''}`} />
      </button>

      {showChains && (
        <div className="absolute top-full right-0 mt-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden z-50 min-w-48">
          {chains.map((chainOption) => (
            <button
              key={chainOption.id}
              onClick={() => handleChainSelect(chainOption)}
              className="w-full px-4 py-3 text-left hover:bg-white/10 transition-all duration-200 flex items-center space-x-3"
            >
              <div className={`w-4 h-4 bg-gradient-to-r ${chainOption.color} rounded-full`}></div>
              <span className="text-white">{chainOption.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChainSelector;
