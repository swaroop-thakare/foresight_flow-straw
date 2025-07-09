import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Store, Brain, BarChart3, Users, TrendingUp, Package, DollarSign, RotateCcw, Bell, Database, Network, Layers, Activity, Zap, Upload } from 'lucide-react';
import { EnhancedPromptConsultant } from './components/EnhancedPromptConsultant';
import { SalesTrendChart } from './components/SalesTrendChart';
import { CategoryPerformanceChart } from './components/CategoryPerformanceChart';
import { InventoryAgingHeatmap } from './components/InventoryAgingHeatmap';
import { FinanceCostDashboard } from './components/FinanceCostDashboard';
import { ReturnAnalysisChart } from './components/ReturnAnalysisChart';
import { AIRecommendationsWidget } from './components/AIRecommendationsWidget';
import { InteractiveTrendAnalysis } from './components/InteractiveTrendAnalysis';
import { AdvancedKPIDashboard } from './components/AdvancedKPIDashboard';
import { AnimatedActionPlan } from './components/AnimatedActionPlan';
import { GenerationAnalysis } from './components/GenerationAnalysis';
import { DataIngestionPipeline } from './components/DataIngestionPipeline';
import { CompetitiveIntelligence } from './components/CompetitiveIntelligence';
import { SystemMapping } from './components/SystemMapping';
import { RealTimeInsightsDashboard } from './components/RealTimeInsightsDashboard';
import { MarketIntelligenceEngine } from './components/MarketIntelligenceEngine';
import { DataPipelineTab } from './components/DataPipelineTab';
import { ConsultantResponse } from './types';

function App() {
  const [activeTab, setActiveTab] = useState('realtime');
  const [consultantResponse, setConsultantResponse] = useState<ConsultantResponse | null>(null);

  const tabs = [
    { id: 'realtime', label: 'Live Intelligence', icon: Activity, gradient: 'from-green-500 to-emerald-500' },
    { id: 'strategy', label: 'Market Strategy', icon: Zap, gradient: 'from-purple-500 to-pink-500' },
    { id: 'data-pipeline-new', label: 'Data Pipeline', icon: Upload, gradient: 'from-blue-500 to-cyan-500' },
    { id: 'overview', label: 'Sales Overview', icon: BarChart3, gradient: 'from-blue-500 to-cyan-500' },
    { id: 'products', label: 'Product Analytics', icon: Package, gradient: 'from-purple-500 to-pink-500' },
    { id: 'inventory', label: 'Inventory Health', icon: Package, gradient: 'from-amber-500 to-orange-500' },
    { id: 'finance', label: 'Finance & Costs', icon: DollarSign, gradient: 'from-emerald-500 to-teal-500' },
    { id: 'returns', label: 'Returns Analysis', icon: RotateCcw, gradient: 'from-red-500 to-pink-500' },
    { id: 'ai-insights', label: 'AI Insights', icon: Brain, gradient: 'from-indigo-500 to-purple-500' },
    { id: 'trends', label: 'Trend Analysis', icon: TrendingUp, gradient: 'from-green-500 to-emerald-500' },
    { id: 'demographics', label: 'Demographics', icon: Users, gradient: 'from-pink-500 to-rose-500' },
    { id: 'data-pipeline', label: 'Data Sources', icon: Database, gradient: 'from-slate-500 to-gray-500' },
    { id: 'competitive', label: 'Competitive Intel', icon: Network, gradient: 'from-red-600 to-pink-600' },
    { id: 'system-map', label: 'System Mapping', icon: Layers, gradient: 'from-purple-600 to-indigo-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Enhanced Header */}
      <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-24">
            <motion.div 
              className="flex items-center gap-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-lg">
                <Store className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  ForesightFlow X Arealis
                </h1>
                <p className="text-gray-600 font-medium text-lg">AI-Powered Retail Intelligence & Strategic Business Analytics Platform</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="text-right">
                <div className="text-xl font-bold text-gray-900">Raymond Shivajinagar</div>
                <div className="text-sm text-gray-600 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Premium Menswear Store • Live Market Intelligence
                </div>
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">R</span>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Enhanced Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 overflow-x-auto">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-8 xl:px-12">
          <div className="flex space-x-2 min-w-max py-2">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-3 py-4 px-6 font-semibold text-sm transition-all whitespace-nowrap rounded-xl ${
                    activeTab === tab.id
                      ? 'text-white'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${tab.gradient} rounded-xl shadow-lg`}
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className="relative z-10 flex items-center gap-3">
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Enhanced Main Content */}
      <main className="max-w-[1920px] mx-auto px-6 lg:px-8 xl:px-12 py-8">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'realtime' && (
            <div className="space-y-8">
              <RealTimeInsightsDashboard />
            </div>
          )}

          {activeTab === 'strategy' && (
            <div className="space-y-8">
              <MarketIntelligenceEngine />
            </div>
          )}

          {activeTab === 'data-pipeline-new' && (
            <div className="space-y-8">
              <DataPipelineTab />
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="space-y-8">
              <SalesTrendChart />
              <div className="grid xl:grid-cols-3 gap-8">
                <div className="xl:col-span-2">
                  <AdvancedKPIDashboard />
                </div>
                <div>
                  <AIRecommendationsWidget />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="space-y-8">
              <CategoryPerformanceChart />
              <div className="grid xl:grid-cols-4 gap-8">
                <div className="xl:col-span-3">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Raymond Product Performance</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { name: 'Premium Business Suits', sales: 89, stock: 45, price: '₹18,999', trend: '+12%' },
                        { name: 'Silk Sherwanis', sales: 67, stock: 23, price: '₹24,999', trend: '+28%' },
                        { name: 'Cotton Formal Shirts', sales: 234, stock: 156, price: '₹2,499', trend: '+8%' },
                        { name: 'Premium Chinos', sales: 145, stock: 89, price: '₹3,999', trend: '+15%' },
                        { name: 'Bandhgala Jackets', sales: 56, stock: 34, price: '₹12,999', trend: '+22%' },
                        { name: 'Ethnic Kurtas', sales: 123, stock: 67, price: '₹4,999', trend: '+18%' }
                      ].map((product, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-2">{product.name}</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Sales:</span>
                              <span className="font-medium">{product.sales} units</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Stock:</span>
                              <span className="font-medium">{product.stock} units</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Price:</span>
                              <span className="font-medium">{product.price}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Trend:</span>
                              <span className="font-medium text-green-600">{product.trend}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <AIRecommendationsWidget />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'inventory' && (
            <div className="space-y-8">
              <InventoryAgingHeatmap />
              <div className="grid xl:grid-cols-4 gap-8">
                <div className="xl:col-span-3">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Raymond Inventory Health</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-3">Fast Moving Items</h4>
                        <div className="space-y-2">
                          {[
                            { item: 'Cotton Formal Shirts', velocity: 'High', stock: '156 units' },
                            { item: 'Premium Chinos', velocity: 'High', stock: '89 units' },
                            { item: 'Business Suits', velocity: 'Medium', stock: '45 units' }
                          ].map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                              <div>
                                <div className="font-medium text-gray-900">{item.item}</div>
                                <div className="text-sm text-gray-600">{item.stock}</div>
                              </div>
                              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                                {item.velocity}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-3">Slow Moving Items</h4>
                        <div className="space-y-2">
                          {[
                            { item: 'Silk Sherwanis', velocity: 'Low', stock: '23 units' },
                            { item: 'Bandhgala Jackets', velocity: 'Low', stock: '34 units' },
                            { item: 'Premium Accessories', velocity: 'Medium', stock: '67 units' }
                          ].map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                              <div>
                                <div className="font-medium text-gray-900">{item.item}</div>
                                <div className="text-sm text-gray-600">{item.stock}</div>
                              </div>
                              <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">
                                {item.velocity}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <AIRecommendationsWidget />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'finance' && (
            <div className="space-y-8">
              <FinanceCostDashboard />
              <div className="grid xl:grid-cols-4 gap-8">
                <div className="xl:col-span-3">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Raymond Financial Performance</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { category: 'Formal Wear', revenue: '₹14.5L', margin: '40%', growth: '+12%' },
                        { category: 'Ethnic Wear', revenue: '₹8.9L', margin: '40%', growth: '+28%' },
                        { category: 'Casual Wear', revenue: '₹6.5L', margin: '30%', growth: '+15%' },
                        { category: 'Accessories', revenue: '₹2.8L', margin: '40%', growth: '+18%' },
                        { category: 'Fabrics', revenue: '₹4.2L', margin: '40%', growth: '+22%' },
                        { category: 'Custom Tailoring', revenue: '₹3.6L', margin: '45%', growth: '+35%' }
                      ].map((item, index) => (
                        <div key={index} className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
                          <h4 className="font-semibold text-emerald-900 mb-2">{item.category}</h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span className="text-emerald-700">Revenue:</span>
                              <span className="font-medium text-emerald-900">{item.revenue}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-emerald-700">Margin:</span>
                              <span className="font-medium text-emerald-900">{item.margin}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-emerald-700">Growth:</span>
                              <span className="font-medium text-green-600">{item.growth}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <AIRecommendationsWidget />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'returns' && (
            <div className="space-y-8">
              <ReturnAnalysisChart />
              <div className="grid xl:grid-cols-4 gap-8">
                <div className="xl:col-span-3">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Raymond Returns Analysis</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-3">Return Reasons</h4>
                        <div className="space-y-2">
                          {[
                            { reason: 'Size/Fit Issue', percentage: '42%', color: 'bg-red-100 text-red-800' },
                            { reason: 'Fabric Quality', percentage: '26%', color: 'bg-amber-100 text-amber-800' },
                            { reason: 'Color Mismatch', percentage: '16%', color: 'bg-purple-100 text-purple-800' },
                            { reason: 'Tailoring Issue', percentage: '11%', color: 'bg-gray-100 text-gray-800' },
                            { reason: 'Others', percentage: '5%', color: 'bg-green-100 text-green-800' }
                          ].map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <span className="text-gray-900">{item.reason}</span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.color}`}>
                                {item.percentage}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-3">Category-wise Returns</h4>
                        <div className="space-y-2">
                          {[
                            { category: 'Formal Wear', returns: '89 items', rate: '4.2%' },
                            { category: 'Ethnic Wear', returns: '56 items', rate: '6.8%' },
                            { category: 'Casual Wear', returns: '34 items', rate: '3.1%' },
                            { category: 'Accessories', returns: '23 items', rate: '2.8%' }
                          ].map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div>
                                <div className="font-medium text-gray-900">{item.category}</div>
                                <div className="text-sm text-gray-600">{item.returns}</div>
                              </div>
                              <span className="font-medium text-gray-900">{item.rate}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <AIRecommendationsWidget />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ai-insights' && (
            <div className="grid xl:grid-cols-4 gap-8">
              <div className="xl:col-span-3">
                <EnhancedPromptConsultant onResponse={setConsultantResponse} />
              </div>
              <div className="space-y-6">
                <AIRecommendationsWidget />
                {consultantResponse && (
                  <AnimatedActionPlan actions={consultantResponse.actions} />
                )}
              </div>
            </div>
          )}

          {activeTab === 'trends' && (
            <div className="space-y-8">
              <InteractiveTrendAnalysis />
              <div className="grid xl:grid-cols-4 gap-8">
                <div className="xl:col-span-3">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Raymond Trend Analysis</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-3">Trending Raymond Products</h4>
                        <div className="space-y-3">
                          {[
                            { trend: 'Wedding Season Premium', products: 'Sherwanis, Bandhgalas', growth: '+185%' },
                            { trend: 'Corporate Professional', products: 'Business Suits, Formal Shirts', growth: '+145%' },
                            { trend: 'Premium Casual', products: 'Chinos, Polo Shirts', growth: '+167%' },
                            { trend: 'Festive Collection', products: 'Kurtas, Ethnic Jackets', growth: '+198%' }
                          ].map((item, index) => (
                            <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="font-semibold text-blue-900">{item.trend}</h5>
                                <span className="text-green-600 font-bold">{item.growth}</span>
                              </div>
                              <p className="text-sm text-blue-800">{item.products}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-3">Customer Preferences</h4>
                        <div className="space-y-3">
                          {[
                            { segment: 'Millennials (52%)', preference: 'Custom tailoring, Wedding wear', trend: 'Premium positioning' },
                            { segment: 'Gen X (35%)', preference: 'Formal suits, Classic styles', trend: 'Quality focus' },
                            { segment: 'Gen Z (13%)', preference: 'Smart casual, Festive wear', trend: 'Contemporary styles' }
                          ].map((item, index) => (
                            <div key={index} className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                              <h5 className="font-semibold text-purple-900 mb-1">{item.segment}</h5>
                              <p className="text-sm text-purple-800 mb-1">{item.preference}</p>
                              <p className="text-xs text-purple-600">{item.trend}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <AIRecommendationsWidget />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'demographics' && (
            <div className="grid xl:grid-cols-4 gap-8">
              <div className="xl:col-span-3">
                <GenerationAnalysis />
              </div>
              <div className="space-y-6">
                <AIRecommendationsWidget />
              </div>
            </div>
          )}

          {activeTab === 'data-pipeline' && (
            <div className="space-y-8">
              <DataIngestionPipeline />
            </div>
          )}

          {activeTab === 'competitive' && (
            <div className="space-y-8">
              <CompetitiveIntelligence />
            </div>
          )}

          {activeTab === 'system-map' && (
            <div className="space-y-8">
              <SystemMapping />
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}

export default App;