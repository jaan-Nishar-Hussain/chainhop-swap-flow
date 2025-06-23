
import { useState } from 'react';
import Navigation from '../components/Navigation';
import SwapInterface from '../components/SwapInterface';
import CrossChainSwap from '../components/CrossChainSwap';
import LiquidityInterface from '../components/LiquidityInterface';
import Portfolio from '../components/Portfolio';
import WalletConnect from '../components/WalletConnect';

const Index = () => {
  const [activeTab, setActiveTab] = useState('swap');
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'swap':
        return <SwapInterface />;
      case 'crosschain':
        return <CrossChainSwap />;
      case 'liquidity':
        return <LiquidityInterface />;
      case 'portfolio':
        return <Portfolio />;
      default:
        return <SwapInterface />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isWalletConnected={isWalletConnected}
      />

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              {renderActiveComponent()}
            </div>
          </div>

          <div className="lg:w-80 space-y-6">
            <WalletConnect 
              isConnected={isWalletConnected}
              onConnectionChange={setIsWalletConnected}
            />
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-gray-900 font-semibold mb-4">Market Overview</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">24h Volume</span>
                  <span className="text-gray-900 font-medium">$2.4M</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Total Liquidity</span>
                  <span className="text-gray-900 font-medium">$12.8M</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Active Pairs</span>
                  <span className="text-gray-900 font-medium">156</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
