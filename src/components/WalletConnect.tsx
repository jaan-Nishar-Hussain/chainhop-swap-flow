
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
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-black font-bold text-lg">
            Wallet Connected
          </h3>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <span className="text-gray-600 text-sm font-medium">Active</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200 group">
            <span className="text-gray-600 text-sm">Address</span>
            <div className="flex items-center space-x-2">
              <span className="text-black font-mono text-sm">0x1234...5678</span>
              <Copy className="w-4 h-4 text-gray-500 hover:text-black cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="flex justify-between items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200">
            <span className="text-gray-600 text-sm">Network</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-black font-semibold text-sm">Sepolia</span>
            </div>
          </div>
          <div className="flex justify-between items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200">
            <span className="text-gray-600 text-sm">Balance</span>
            <span className="text-black font-semibold text-sm">12.45 ETH</span>
          </div>
          <button
            onClick={handleDisconnect}
            className="w-full bg-black hover:bg-gray-800 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            Disconnect Wallet
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
      <h3 className="text-black font-bold text-lg mb-6">
        Connect Wallet
      </h3>
      <div className="relative">
        <button
          onClick={() => setShowWallets(!showWallets)}
          className="w-full bg-black hover:bg-gray-800 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
        >
          <Wallet className="w-6 h-6" />
          <span className="text-lg">Connect Wallet</span>
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showWallets ? 'rotate-180' : ''}`} />
        </button>

        {showWallets && (
          <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-gray-200 rounded-xl overflow-hidden z-50 shadow-xl">
            {wallets.map((wallet) => (
              <button
                key={wallet.name}
                onClick={() => handleConnect(wallet.name)}
                className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{wallet.icon}</span>
                  <div>
                    <span className="text-black font-semibold text-lg group-hover:text-gray-700 transition-colors">
                      {wallet.name}
                    </span>
                    {wallet.popular && (
                      <div className="text-xs text-gray-500 font-medium">Popular</div>
                    )}
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-black transition-colors" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletConnect;
