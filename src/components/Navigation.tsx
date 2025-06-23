
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
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center font-bold text-white text-xl">
              X
            </div>
            <span className="text-black text-2xl font-bold">
              CrossDEX
            </span>
          </div>

          <div className="flex items-center space-x-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-3 font-medium ${
                  activeTab === tab.id
                    ? 'bg-black text-white shadow-lg'
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="hidden sm:inline text-sm">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3 px-4 py-2 rounded-full bg-gray-100 border border-gray-200">
              <div className="w-3 h-3 bg-black rounded-full"></div>
              <span className="text-sm text-gray-600 font-medium">Sepolia & Amoy</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
