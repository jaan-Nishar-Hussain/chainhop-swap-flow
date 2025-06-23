
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative z-10">
        <Navigation 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          isWalletConnected={isWalletConnected}
        />

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
                {renderActiveComponent()}
              </div>
            </div>

            <div className="lg:w-80 space-y-6">
              <WalletConnect 
                isConnected={isWalletConnected}
                onConnectionChange={setIsWalletConnected}
              />
              
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4">Market Overview</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">24h Volume</span>
                    <span className="text-white">$2.4M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Total Liquidity</span>
                    <span className="text-white">$12.8M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Active Pairs</span>
                    <span className="text-white">156</span>
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
