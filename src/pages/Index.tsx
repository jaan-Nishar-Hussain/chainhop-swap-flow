
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
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
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
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
                {renderActiveComponent()}
              </div>
            </div>

            <div className="lg:w-80 space-y-6">
              <WalletConnect 
                isConnected={isWalletConnected}
                onConnectionChange={setIsWalletConnected}
              />
              
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                <h3 className="text-white font-bold text-lg mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Market Overview
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200">
                    <span className="text-gray-300 text-sm">24h Volume</span>
                    <span className="text-white font-semibold">$2.4M</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200">
                    <span className="text-gray-300 text-sm">Total Liquidity</span>
                    <span className="text-white font-semibold">$12.8M</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200">
                    <span className="text-gray-300 text-sm">Active Pairs</span>
                    <span className="text-white font-semibold">156</span>
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
