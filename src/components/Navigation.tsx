
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isWalletConnected: boolean;
}

const Navigation = ({ activeTab, setActiveTab, isWalletConnected }: NavigationProps) => {
  const tabs = [
    { id: 'swap', label: 'Swap', icon: ArrowLeft },
    { id: 'crosschain', label: 'Cross-Chain', icon: ArrowRight },
    { id: 'liquidity', label: 'Liquidity', icon: ArrowLeft },
    { id: 'portfolio', label: 'Portfolio', icon: ArrowLeft },
  ];

  return (
    <nav className="backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center font-bold text-white">
              X
            </div>
            <span className="text-white text-xl font-bold">CrossDEX</span>
          </div>

          <div className="flex items-center space-x-1 bg-white/5 rounded-xl p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">Sepolia & Amoy</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
