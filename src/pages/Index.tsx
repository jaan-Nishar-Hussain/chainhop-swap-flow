
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
    <div className="min-h-screen bg-black">
      {/* Simple geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/5 rounded-full"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 border border-white/5 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 border border-white/5 rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10">
        <Navigation 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          isWalletConnected={isWalletConnected}
        />

        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
                {renderActiveComponent()}
              </div>
            </div>

            <div className="lg:w-80 space-y-6">
              <WalletConnect 
                isConnected={isWalletConnected}
                onConnectionChange={setIsWalletConnected}
              />
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                <h3 className="text-black font-bold text-lg mb-6">
                  Market Overview
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200">
                    <span className="text-gray-600 text-sm">24h Volume</span>
                    <span className="text-black font-semibold">$2.4M</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200">
                    <span className="text-gray-600 text-sm">Total Liquidity</span>
                    <span className="text-black font-semibold">$12.8M</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200">
                    <span className="text-gray-600 text-sm">Active Pairs</span>
                    <span className="text-black font-semibold">156</span>
                  </div>
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
