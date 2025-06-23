
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
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center font-bold text-white text-sm">
              X
            </div>
            <span className="text-gray-900 text-xl font-bold">CrossDEX</span>
          </div>

          <div className="flex items-center space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md transition-all duration-200 flex items-center space-x-2 font-medium ${
                  activeTab === tab.id
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-500">Sepolia & Amoy</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
