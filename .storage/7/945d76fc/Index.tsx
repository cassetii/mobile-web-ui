import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { 
  CreditCard, 
  DollarSign, 
  Users, 
  Activity, 
  TrendingUp, 
  AlertTriangle,
  MapPin,
  Settings,
  Moon,
  Sun,
  Wifi,
  WifiOff
} from 'lucide-react';

export default function ATMDashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  // Dancing animation trigger
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('animate-bounce');
      setTimeout(() => setAnimationClass(''), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const atmData = [
    { id: 1, location: 'Makassar City Center', status: 'online', cash: 85, users: 234 },
    { id: 2, location: 'Parepare Mall', status: 'online', cash: 92, users: 156 },
    { id: 3, location: 'Palopo Square', status: 'offline', cash: 45, users: 89 },
    { id: 4, location: 'Bone Central', status: 'maintenance', cash: 78, users: 123 },
  ];

  const stats = {
    totalATMs: 24,
    onlineATMs: 20,
    totalTransactions: 1847,
    totalRevenue: 2450000000
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
      {/* Floating Animation Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-16 w-16 h-16 bg-purple-400/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-pink-400/20 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-400/20 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <div className={`sticky top-0 z-50 backdrop-blur-lg border-b transition-all duration-300 ${isDarkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white/80 border-gray-200'}`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-xl ${animationClass} transition-all duration-300 ${isDarkMode ? 'bg-blue-600' : 'bg-gradient-to-r from-blue-500 to-purple-600'}`}>
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  ATM Manager
                </h1>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Bank Sulselbar
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="hover:scale-110 transition-transform duration-200"
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="sm" className="hover:scale-110 transition-transform duration-200">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card className={`transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/70 backdrop-blur-sm'}`}>
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Activity className="h-5 w-5 text-green-600 animate-pulse" />
                </div>
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Online</p>
                  <p className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    {stats.onlineATMs}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={`transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/70 backdrop-blur-sm'}`}>
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <CreditCard className="h-5 w-5 text-blue-600 animate-bounce" />
                </div>
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total ATM</p>
                  <p className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    {stats.totalATMs}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={`transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/70 backdrop-blur-sm'}`}>
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-purple-600 animate-pulse" />
                </div>
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Transaksi</p>
                  <p className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    {stats.totalTransactions.toLocaleString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={`transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/70 backdrop-blur-sm'}`}>
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <DollarSign className="h-5 w-5 text-orange-600 animate-bounce" />
                </div>
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Revenue</p>
                  <p className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    {(stats.totalRevenue / 1000000).toFixed(1)}M
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ATM Status */}
        <Card className={`transform hover:shadow-xl transition-all duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/70 backdrop-blur-sm'}`}>
          <CardHeader>
            <CardTitle className={`text-lg flex items-center space-x-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              <MapPin className="h-5 w-5 animate-pulse" />
              <span>Status ATM</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {atmData.map((atm, index) => (
              <div 
                key={atm.id} 
                className={`p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                  isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full animate-pulse ${
                      atm.status === 'online' ? 'bg-green-500' : 
                      atm.status === 'offline' ? 'bg-red-500' : 'bg-yellow-500'
                    }`}></div>
                    <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                      {atm.location}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {atm.status === 'online' ? (
                      <Wifi className="h-4 w-4 text-green-500 animate-pulse" />
                    ) : (
                      <WifiOff className="h-4 w-4 text-red-500" />
                    )}
                    <Badge 
                      variant={atm.status === 'online' ? 'default' : 'destructive'}
                      className="capitalize animate-pulse"
                    >
                      {atm.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Cash Level</span>
                    <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{atm.cash}%</span>
                  </div>
                  <Progress 
                    value={atm.cash} 
                    className="h-2 animate-pulse"
                  />
                  <div className="flex justify-between text-sm mt-2">
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Today's Users</span>
                    <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{atm.users}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button 
            className="h-16 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            size="lg"
          >
            <div className="flex flex-col items-center space-y-1">
              <Activity className="h-6 w-6 animate-bounce" />
              <span className="text-sm font-medium">Monitor</span>
            </div>
          </Button>
          <Button 
            className="h-16 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            size="lg"
          >
            <div className="flex flex-col items-center space-y-1">
              <Settings className="h-6 w-6 animate-spin" />
              <span className="text-sm font-medium">Settings</span>
            </div>
          </Button>
        </div>

        {/* Quick Stats */}
        <Card className={`transform hover:shadow-xl transition-all duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/70 backdrop-blur-sm'}`}>
          <CardHeader>
            <CardTitle className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Quick Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <div className={`text-2xl font-bold ${isDarkMode ? 'text-green-400' : 'text-green-600'} animate-pulse`}>
                  83%
                </div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Uptime
                </div>
              </div>
              <div className="space-y-2">
                <div className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} animate-bounce`}>
                  156
                </div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Avg Users
                </div>
              </div>
              <div className="space-y-2">
                <div className={`text-2xl font-bold ${isDarkMode ? 'text-purple-400' : 'text-purple-600'} animate-pulse`}>
                  2.4M
                </div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Daily Rev
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}