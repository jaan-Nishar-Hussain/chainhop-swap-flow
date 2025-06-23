
import { useState } from 'react';
import { Wallet, ChevronDown } from 'lucide-react';

interface WalletConnectProps {
  isConnected: boolean;
  onConnectionChange: (connected: boolean) => void;
}

const WalletConnect = ({ isConnected, onConnectionChange }: WalletConnectProps) => {
  const [showWallets, setShowWallets] = useState(false);

  const wallets = [
    { name: 'MetaMask', icon: '🦊' },
    { name: 'WalletConnect', icon: '🔗' },
    { name: 'Coinbase Wallet', icon: '🔵' },
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
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold">Wallet Connected</h3>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Address</span>
            <span className="text-white">0x1234...5678</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Network</span>
            <span className="text-white">Sepolia</span>
          </div>
          <button
            onClick={handleDisconnect}
            className="w-full bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 py-2 rounded-lg transition-all duration-200"
          >
            Disconnect
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="text-white font-semibold mb-4">Connect Wallet</h3>
      <div className="relative">
        <button
          onClick={() => setShowWallets(!showWallets)}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <Wallet className="w-5 h-5" />
          <span>Connect Wallet</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${showWallets ? 'rotate-180' : ''}`} />
        </button>

        {showWallets && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden z-50">
            {wallets.map((wallet) => (
              <button
                key={wallet.name}
                onClick={() => handleConnect(wallet.name)}
                className="w-full px-4 py-3 text-left hover:bg-white/10 transition-all duration-200 flex items-center space-x-3"
              >
                <span className="text-2xl">{wallet.icon}</span>
                <span className="text-white">{wallet.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletConnect;
