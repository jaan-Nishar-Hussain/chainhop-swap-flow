
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
    <nav className="backdrop-blur-xl bg-black/20 border-b border-white/10 shadow-2xl">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center font-bold text-white text-xl shadow-lg">
              X
            </div>
            <span className="text-white text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              CrossDEX
            </span>
          </div>

          <div className="flex items-center space-x-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-2xl transition-all duration-300 flex items-center space-x-3 font-medium relative overflow-hidden group ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                    : 'text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="hidden sm:inline text-sm">{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-300 font-medium">Sepolia & Amoy</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
