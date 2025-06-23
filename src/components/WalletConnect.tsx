
import { useState } from 'react';
import { Wallet, ChevronDown, Copy, ExternalLink } from 'lucide-react';

interface WalletConnectProps {
  isConnected: boolean;
  onConnectionChange: (connected: boolean) => void;
}

const WalletConnect = ({ isConnected, onConnectionChange }: WalletConnectProps) => {
  const [showWallets, setShowWallets] = useState(false);

  const wallets = [
    { name: 'MetaMask', icon: '🦊', popular: true },
    { name: 'WalletConnect', icon: '🔗', popular: true },
    { name: 'Coinbase Wallet', icon: '🔵', popular: false },
  ];

  const handleConnect = (walletName: string) => {
    console.log(`Connecting to ${walletName}...`);
    onConnectionChange(true);
    setShowWallets(false);
  };

  const handleDisconnect = () => {
    onConnectionChange(false);
  };

  if (isConnected) {
    return (
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl hover:shadow-green-500/20 transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white font-bold text-lg bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Wallet Connected
          </h3>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 text-sm font-medium">Active</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 group">
            <span className="text-gray-300 text-sm">Address</span>
            <div className="flex items-center space-x-2">
              <span className="text-white font-mono text-sm">0x1234...5678</span>
              <Copy className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200">
            <span className="text-gray-300 text-sm">Network</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-white font-semibold text-sm">Sepolia</span>
            </div>
          </div>
          <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200">
            <span className="text-gray-300 text-sm">Balance</span>
            <span className="text-white font-semibold text-sm">12.45 ETH</span>
          </div>
          <button
            onClick={handleDisconnect}
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-red-500/50 transform hover:scale-[1.02]"
          >
            Disconnect Wallet
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
      <h3 className="text-white font-bold text-lg mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Connect Wallet
      </h3>
      <div className="relative">
        <button
          onClick={() => setShowWallets(!showWallets)}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl hover:shadow-purple-500/50 transform hover:scale-[1.02]"
        >
          <Wallet className="w-6 h-6" />
          <span className="text-lg">Connect Wallet</span>
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showWallets ? 'rotate-180' : ''}`} />
        </button>

        {showWallets && (
          <div className="absolute top-full left-0 right-0 mt-3 backdrop-blur-xl bg-slate-800/90 border border-white/20 rounded-2xl overflow-hidden z-50 shadow-2xl">
            {wallets.map((wallet) => (
              <button
                key={wallet.name}
                onClick={() => handleConnect(wallet.name)}
                className="w-full px-6 py-4 text-left hover:bg-white/10 transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{wallet.icon}</span>
                  <div>
                    <span className="text-white font-semibold text-lg group-hover:text-purple-300 transition-colors">
                      {wallet.name}
                    </span>
                    {wallet.popular && (
                      <div className="text-xs text-purple-400 font-medium">Popular</div>
                    )}
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletConnect;
