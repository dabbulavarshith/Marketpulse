import { useState, useEffect } from 'react';
import { Navigation } from './navigation';
import { GlassCard } from './ui/glass-card';
import { Button } from './ui/button';
import { TrendingUp, TrendingDown, Volume, BarChart3, Code, Filter, Database, Sparkles, Zap, Target } from 'lucide-react';
import { Link } from 'wouter';

// Mock data for demonstration
const mockMarketData = [
  { symbol: 'RELIANCE', price: 2450.30, change: 23.45, changePercent: 0.97, volume: 15234567 },
  { symbol: 'TCS', price: 3890.15, change: -12.30, changePercent: -0.32, volume: 8934521 },
  { symbol: 'INFY', price: 1567.80, change: 45.60, changePercent: 2.99, volume: 12456789 },
  { symbol: 'HDFC', price: 2890.45, change: -8.90, changePercent: -0.31, volume: 6789012 },
  { symbol: 'ICICI', price: 1234.67, change: 18.23, changePercent: 1.50, volume: 9876543 },
];

const features = [
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Advanced Charts",
    description: "Interactive TradingView-style charts with technical indicators",
    href: "/charts",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Pine Scripts",
    description: "Gen-Z friendly Pine Script tutorials and examples",
    href: "/pine-scripts",
    gradient: "from-green-500 to-teal-600"
  },
  {
    icon: <Filter className="w-8 h-8" />,
    title: "Market Screeners",
    description: "Find stocks that match your criteria with smart filters",
    href: "/screeners",
    gradient: "from-pink-500 to-rose-600"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "NSE Data",
    description: "Real-time NSE market data and analytics",
    href: "/market-data",
    gradient: "from-orange-500 to-red-600"
  }
];

export default function SimpleDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-darker to-dark">
      <Navigation />
      
      <main className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
              <span className="gradient-text">Market</span>
              <span className="text-white">Pulse</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your Gen-Z stock market companion. Real-time data, AI insights, and Pine Scripts made simple.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 mr-2" />
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white">
                <Zap className="w-5 h-5 mr-2" />
                Learn Trading
              </Button>
            </div>
          </div>

          {/* Market Overview */}
          <GlassCard className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-white flex items-center">
                <Target className="w-6 h-6 mr-3 text-accent" />
                Market Overview
              </h2>
              <div className="text-sm text-gray-400">
                {currentTime.toLocaleTimeString()}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {mockMarketData.map((stock, index) => (
                <div key={stock.symbol} className="bg-darker/50 rounded-xl p-4 hover:bg-darker/70 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold text-white">{stock.symbol}</span>
                    {stock.changePercent > 0 ? (
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-400" />
                    )}
                  </div>
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-white">₹{stock.price.toLocaleString()}</div>
                    <div className={`text-sm ${stock.changePercent > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {stock.changePercent > 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                    </div>
                    <div className="text-xs text-gray-400 flex items-center">
                      <Volume className="w-3 h-3 mr-1" />
                      {(stock.volume / 1000000).toFixed(1)}M
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <Link key={index} href={feature.href}>
                <GlassCard hover className="h-full cursor-pointer group">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </GlassCard>
              </Link>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">500K+</div>
              <div className="text-gray-300">Active Traders</div>
            </GlassCard>
            <GlassCard className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">1M+</div>
              <div className="text-gray-300">Pine Scripts</div>
            </GlassCard>
            <GlassCard className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-gray-300">Market Data</div>
            </GlassCard>
          </div>
        </div>
      </main>
    </div>
  );
}
