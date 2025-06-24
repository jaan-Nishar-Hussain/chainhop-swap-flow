
import { useState } from 'react';

const Portfolio = () => {
  const [portfolioData] = useState([
    { token: 'ETH', balance: '12.45', value: '$28,473', change: '+5.2%' },
    { token: 'USDC', balance: '1,247.89', value: '$1,248', change: '+0.1%' },
    { token: 'MATIC', balance: '847.23', value: '$678', change: '-2.3%' },
  ]);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-black">Portfolio</h2>
        <div className="text-right">
          <div className="text-3xl font-bold text-black">$30,399</div>
          <div className="text-sm text-gray-600">+$1,247 (4.3%)</div>
        </div>
      </div>

      <div className="space-y-4">
        {portfolioData.map((asset) => (
          <div key={asset.token} className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{asset.token.charAt(0)}</span>
                </div>
                <div>
                  <div className="text-black font-bold text-xl">{asset.token}</div>
                  <div className="text-gray-600 text-sm">{asset.balance} {asset.token}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-black font-bold text-xl">{asset.value}</div>
                <div className={`text-sm font-medium ${asset.change.startsWith('+') ? 'text-gray-700' : 'text-gray-500'}`}>
                  {asset.change}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h3 className="text-black font-bold text-xl mb-6">Recent Transactions</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 rounded-lg hover:bg-gray-100 transition-all duration-200">
            <div>
              <div className="text-black text-sm font-medium">Swap ETH → USDC</div>
              <div className="text-gray-600 text-xs">2 hours ago</div>
            </div>
            <div className="text-black text-sm font-semibold">+1,247 USDC</div>
          </div>
          <div className="flex justify-between items-center p-4 rounded-lg hover:bg-gray-100 transition-all duration-200">
            <div>
              <div className="text-black text-sm font-medium">Add Liquidity ETH/USDC</div>
              <div className="text-gray-600 text-xs">1 day ago</div>
            </div>
            <div className="text-black text-sm font-semibold">+24.78 LP</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
