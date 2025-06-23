
import { useState } from 'react';

const Portfolio = () => {
  const [portfolioData] = useState([
    { token: 'ETH', balance: '12.45', value: '$28,473', change: '+5.2%' },
    { token: 'USDC', balance: '1,247.89', value: '$1,248', change: '+0.1%' },
    { token: 'MATIC', balance: '847.23', value: '$678', change: '-2.3%' },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Portfolio</h2>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">$30,399</div>
          <div className="text-sm text-green-400">+$1,247 (4.3%)</div>
        </div>
      </div>

      <div className="space-y-4">
        {portfolioData.map((asset) => (
          <div key={asset.token} className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{asset.token}</span>
                </div>
                <div>
                  <div className="text-white font-semibold">{asset.token}</div>
                  <div className="text-gray-400 text-sm">{asset.balance} {asset.token}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white font-semibold">{asset.value}</div>
                <div className={`text-sm ${asset.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {asset.change}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h3 className="text-white font-semibold mb-4">Recent Transactions</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-white text-sm">Swap ETH → USDC</div>
              <div className="text-gray-400 text-xs">2 hours ago</div>
            </div>
            <div className="text-green-400 text-sm">+1,247 USDC</div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-white text-sm">Add Liquidity ETH/USDC</div>
              <div className="text-gray-400 text-xs">1 day ago</div>
            </div>
            <div className="text-blue-400 text-sm">+24.78 LP</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
