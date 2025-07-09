import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Package, TrendingUp, Filter, Eye } from 'lucide-react';

const categoryData = [
  {
    category: 'Formal Wear',
    brands: [
      { brand: 'Raymond Suits', units: 89, revenue: 1690000, trend: 'Corporate Professional' },
      { brand: 'Raymond Shirts', units: 234, revenue: 585000, trend: 'Business Formal' },
      { brand: 'Raymond Trousers', units: 145, revenue: 435000, trend: 'Office Wear' }
    ]
  },
  {
    category: 'Ethnic Wear',
    brands: [
      { brand: 'Sherwanis', units: 67, revenue: 1675000, trend: 'Wedding Season Premium' },
      { brand: 'Bandhgalas', units: 34, revenue: 442000, trend: 'Indo-Western' },
      { brand: 'Kurtas', units: 89, revenue: 267000, trend: 'Festive Collection' }
    ]
  },
  {
    category: 'Casual Wear',
    brands: [
      { brand: 'Chinos', units: 89, revenue: 356000, trend: 'Premium Casual' },
      { brand: 'Polo Shirts', units: 123, revenue: 307500, trend: 'Weekend Wear' },
      { brand: 'Casual Shirts', units: 156, revenue: 390000, trend: 'Smart Casual' }
    ]
  },
  {
    category: 'Accessories',
    brands: [
      { brand: 'Ties & Cufflinks', units: 145, revenue: 145000, trend: 'Professional' },
      { brand: 'Belts & Wallets', units: 123, revenue: 184500, trend: 'Premium Leather' },
      { brand: 'Pocket Squares', units: 98, revenue: 49000, trend: 'Formal Accessories' }
    ]
  }
];

const trendColors = {
  'Corporate Professional': '#3B82F6',
  'Business Formal': '#8B5CF6',
  'Office Wear': '#10B981',
  'Wedding Season Premium': '#F59E0B',
  'Indo-Western': '#EF4444',
  'Festive Collection': '#06B6D4',
  'Premium Casual': '#84CC16',
  'Weekend Wear': '#F97316',
  'Smart Casual': '#EC4899',
  'Professional': '#6366F1',
  'Premium Leather': '#14B8A6',
  'Formal Accessories': '#A855F7'
};

export const CategoryPerformanceChart: React.FC = () => {
  const [viewMode, setViewMode] = useState<'units' | 'revenue'>('units');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const flattenedData = categoryData.flatMap(cat => 
    cat.brands.map(brand => ({
      ...brand,
      category: cat.category,
      fullName: `${brand.brand} (${cat.category})`
    }))
  );

  const categoryTotals = categoryData.map(cat => ({
    category: cat.category,
    totalUnits: cat.brands.reduce((sum, brand) => sum + brand.units, 0),
    totalRevenue: cat.brands.reduce((sum, brand) => sum + brand.revenue, 0),
    topBrand: cat.brands.sort((a, b) => b.units - a.units)[0]
  }));

  const pieData = categoryTotals.map(cat => ({
    name: cat.category,
    value: viewMode === 'units' ? cat.totalUnits : cat.totalRevenue,
    color: trendColors[cat.topBrand.trend as keyof typeof trendColors] || '#6B7280'
  }));

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white bg-opacity-20 rounded-lg">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-white font-bold text-lg">Category & Brand Performance</h2>
              <p className="text-purple-100 text-sm">Analyze sales by category, brand & trend</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('units')}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                viewMode === 'units' 
                  ? 'bg-white text-purple-600' 
                  : 'bg-purple-500 text-white hover:bg-purple-400'
              }`}
            >
              Units
            </button>
            <button
              onClick={() => setViewMode('revenue')}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                viewMode === 'revenue' 
                  ? 'bg-white text-purple-600' 
                  : 'bg-purple-500 text-white hover:bg-purple-400'
              }`}
            >
              Revenue
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Bar Chart */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Brand Performance by {viewMode === 'units' ? 'Units Sold' : 'Revenue'}
              </h3>
              <div className="flex gap-2">
                <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <Filter className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <Eye className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={flattenedData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="fullName" 
                  stroke="#6b7280" 
                  fontSize={10}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb', 
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                  }}
                  formatter={(value: number, name: string) => [
                    viewMode === 'units' ? `${value} units` : `₹${value.toLocaleString()}`,
                    viewMode === 'units' ? 'Units Sold' : 'Revenue'
                  ]}
                />
                <Bar 
                  dataKey={viewMode} 
                  fill={(entry: any) => trendColors[entry.trend as keyof typeof trendColors] || '#6B7280'}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Category Distribution */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Category Distribution</h3>
            
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => [
                    viewMode === 'units' ? `${value} units` : `₹${value.toLocaleString()}`,
                    viewMode === 'units' ? 'Total Units' : 'Total Revenue'
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>

            <div className="space-y-2 mt-4">
              {categoryTotals.map((cat, index) => (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => setSelectedCategory(selectedCategory === cat.category ? null : cat.category)}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: trendColors[cat.topBrand.trend as keyof typeof trendColors] }}
                    ></div>
                    <div>
                      <div className="font-medium text-gray-900">{cat.category}</div>
                      <div className="text-xs text-gray-600">Top: {cat.topBrand.brand}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">
                      {viewMode === 'units' 
                        ? `${cat.totalUnits} units` 
                        : `₹${cat.totalRevenue.toLocaleString()}`
                      }
                    </div>
                    <div className="text-xs text-gray-600">{cat.topBrand.trend}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Trend Analysis */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <h4 className="font-semibold text-blue-900">Top Performer</h4>
            </div>
            <p className="text-sm text-blue-800">
              Levi's Denim leads with 245 units sold, driven by Classic trend revival
            </p>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Package className="w-4 h-4 text-purple-600" />
              <h4 className="font-semibold text-purple-900">Trend Alert</h4>
            </div>
            <p className="text-sm text-purple-800">
              Y2K Revival trend showing 34% growth across Denim category
            </p>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <h4 className="font-semibold text-emerald-900">Opportunity</h4>
            </div>
            <p className="text-sm text-emerald-800">
              Sustainable trend in Denim shows potential for 25% growth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};