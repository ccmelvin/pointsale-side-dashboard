'use client';

import { useState } from 'react';
import { manufacturers, manufacturerProducts } from '@/lib/mock/manufacturers-data';
import { Search, Filter, Star, MapPin, Calendar, Users, Clock, ChevronDown, ChevronUp } from 'lucide-react';

export function ManufacturersContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCountry, setFilterCountry] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedManufacturer, setSelectedManufacturer] = useState<number | null>(null);
  
  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };
  
  // Get unique countries for filter dropdown
  const uniqueCountries = Array.from(new Set(manufacturers.map(m => m.country))).sort();
  
  // Filter manufacturers based on search term and country filter
  const filteredManufacturers = manufacturers.filter(manufacturer => {
    const matchesSearch = searchTerm === '' || 
      manufacturer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      manufacturer.country.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCountry = filterCountry === '' || manufacturer.country === filterCountry;
    
    return matchesSearch && matchesCountry;
  });
  
  // Sort manufacturers
  const sortedManufacturers = [...filteredManufacturers].sort((a, b) => {
    let comparison = 0;
    
    if (sortBy === 'name') {
      comparison = a.name.localeCompare(b.name);
    } else if (sortBy === 'country') {
      comparison = a.country.localeCompare(b.country);
    } else if (sortBy === 'rating') {
      comparison = a.rating - b.rating;
    } else if (sortBy === 'established') {
      comparison = a.established - b.established;
    } else if (sortBy === 'revenue') {
      comparison = a.annualRevenue - b.annualRevenue;
    }
    
    return sortOrder === 'asc' ? comparison : -comparison;
  });
  
  // Get products for selected manufacturer
  const selectedManufacturerProducts = selectedManufacturer 
    ? manufacturerProducts.filter(p => p.manufacturerId === selectedManufacturer)
    : [];
  
  // Handle sort click
  const handleSortClick = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };
  
  // Render sort icon
  const renderSortIcon = (column: string) => {
    if (sortBy !== column) return null;
    
    return sortOrder === 'asc' ? 
      <ChevronUp className="h-4 w-4 ml-1" /> : 
      <ChevronDown className="h-4 w-4 ml-1" />;
  };
  
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Manufacturers</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
          <span>Add Manufacturer</span>
          <span className="text-lg">+</span>
        </button>
      </div>
      
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search manufacturers..."
            className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="relative w-full md:w-64">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <select
            className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 appearance-none"
            value={filterCountry}
            onChange={(e) => setFilterCountry(e.target.value)}
          >
            <option value="">All Countries</option>
            {uniqueCountries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>
      
      {/* Manufacturers Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSortClick('name')}
                >
                  <div className="flex items-center">
                    <span>Name</span>
                    {renderSortIcon('name')}
                  </div>
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSortClick('country')}
                >
                  <div className="flex items-center">
                    <span>Country</span>
                    {renderSortIcon('country')}
                  </div>
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSortClick('established')}
                >
                  <div className="flex items-center">
                    <span>Established</span>
                    {renderSortIcon('established')}
                  </div>
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSortClick('rating')}
                >
                  <div className="flex items-center">
                    <span>Rating</span>
                    {renderSortIcon('rating')}
                  </div>
                </th>
                <th 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSortClick('revenue')}
                >
                  <div className="flex items-center">
                    <span>Annual Revenue</span>
                    {renderSortIcon('revenue')}
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Products
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {sortedManufacturers.map((manufacturer) => (
                <tr 
                  key={manufacturer.id} 
                  className={`hover:bg-gray-50 dark:hover:bg-gray-700 ${selectedManufacturer === manufacturer.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                  onClick={() => setSelectedManufacturer(selectedManufacturer === manufacturer.id ? null : manufacturer.id)}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                    {manufacturer.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                      {manufacturer.country}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                      {manufacturer.established}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-400" />
                      {manufacturer.rating}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {formatCurrency(manufacturer.annualRevenue)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {manufacturer.totalProducts}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mr-3">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Selected Manufacturer Details */}
      {selectedManufacturer && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            {manufacturers.find(m => m.id === selectedManufacturer)?.name} Details
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Contact Information</h3>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <p className="text-gray-900 dark:text-gray-100">
                  {manufacturers.find(m => m.id === selectedManufacturer)?.contactInfo.email}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                <p className="text-gray-900 dark:text-gray-100">
                  {manufacturers.find(m => m.id === selectedManufacturer)?.contactInfo.phone}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Website</p>
                <p className="text-gray-900 dark:text-gray-100">
                  {manufacturers.find(m => m.id === selectedManufacturer)?.contactInfo.website}
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Performance Metrics</h3>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">On-Time Delivery Rate</p>
                <p className="text-gray-900 dark:text-gray-100">
                  {manufacturers.find(m => m.id === selectedManufacturer)?.onTimeDeliveryRate}%
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Quality Score</p>
                <p className="text-gray-900 dark:text-gray-100">
                  {manufacturers.find(m => m.id === selectedManufacturer)?.qualityScore}/100
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Products</h3>
              <div className="max-h-60 overflow-y-auto">
                <ul className="space-y-2">
                  {selectedManufacturerProducts.map(product => (
                    <li key={product.id} className="border-b border-gray-200 dark:border-gray-700 pb-2">
                      <p className="text-gray-900 dark:text-gray-100">{product.name}</p>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">{product.category}</span>
                        <span className="text-gray-900 dark:text-gray-100">{formatCurrency(product.unitPrice)}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>Lead time: {product.leadTime} days</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
