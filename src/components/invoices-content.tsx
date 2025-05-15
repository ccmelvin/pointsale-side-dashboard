'use client';

import { useState } from 'react';

export function InvoicesContent() {
  // Sample data for invoices
  const [invoices] = useState([
    { 
      id: 'INV-2025-001', 
      customer: 'John Smith', 
      email: 'john.smith@example.com',
      date: '2025-05-15', 
      dueDate: '2025-06-15',
      amount: 129.99, 
      status: 'Paid',
      orderRef: 'ORD-7291'
    },
    { 
      id: 'INV-2025-002', 
      customer: 'Sarah Johnson', 
      email: 'sarah.j@example.com',
      date: '2025-05-15', 
      dueDate: '2025-06-15',
      amount: 79.95, 
      status: 'Pending',
      orderRef: 'ORD-7290'
    },
    { 
      id: 'INV-2025-003', 
      customer: 'Michael Brown', 
      email: 'mbrown@example.com',
      date: '2025-05-14', 
      dueDate: '2025-06-14',
      amount: 249.50, 
      status: 'Paid',
      orderRef: 'ORD-7289'
    },
    { 
      id: 'INV-2025-004', 
      customer: 'Emily Davis', 
      email: 'emily.davis@example.com',
      date: '2025-05-14', 
      dueDate: '2025-06-14',
      amount: 59.99, 
      status: 'Pending',
      orderRef: 'ORD-7288'
    },
    { 
      id: 'INV-2025-005', 
      customer: 'Robert Wilson', 
      email: 'rwilson@example.com',
      date: '2025-05-13', 
      dueDate: '2025-06-13',
      amount: 199.00, 
      status: 'Paid',
      orderRef: 'ORD-7287'
    },
    { 
      id: 'INV-2025-006', 
      customer: 'Jennifer Taylor', 
      email: 'jtaylor@example.com',
      date: '2025-05-13', 
      dueDate: '2025-06-13',
      amount: 149.95, 
      status: 'Overdue',
      orderRef: 'ORD-7286'
    },
    { 
      id: 'INV-2025-007', 
      customer: 'David Miller', 
      email: 'dmiller@example.com',
      date: '2025-05-12', 
      dueDate: '2025-06-12',
      amount: 89.99, 
      status: 'Paid',
      orderRef: 'ORD-7285'
    },
    { 
      id: 'INV-2025-008', 
      customer: 'Lisa Anderson', 
      email: 'lisa.a@example.com',
      date: '2025-05-12', 
      dueDate: '2025-06-12',
      amount: 299.99, 
      status: 'Pending',
      orderRef: 'ORD-7284'
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Status color mapping
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Filter invoices based on search term and status
  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = 
      invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.orderRef.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || invoice.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Calculate totals
  const totalAmount = filteredInvoices.reduce((sum, invoice) => sum + invoice.amount, 0);
  const paidAmount = filteredInvoices
    .filter(invoice => invoice.status === 'Paid')
    .reduce((sum, invoice) => sum + invoice.amount, 0);
  const pendingAmount = filteredInvoices
    .filter(invoice => invoice.status === 'Pending')
    .reduce((sum, invoice) => sum + invoice.amount, 0);
  const overdueAmount = filteredInvoices
    .filter(invoice => invoice.status === 'Overdue')
    .reduce((sum, invoice) => sum + invoice.amount, 0);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Invoices</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Create Invoice
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Total</h2>
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">${totalAmount.toFixed(2)}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{filteredInvoices.length} invoices</div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Paid</h2>
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">${paidAmount.toFixed(2)}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {filteredInvoices.filter(invoice => invoice.status === 'Paid').length} invoices
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Pending</h2>
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">${pendingAmount.toFixed(2)}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {filteredInvoices.filter(invoice => invoice.status === 'Pending').length} invoices
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Overdue</h2>
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">${overdueAmount.toFixed(2)}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {filteredInvoices.filter(invoice => invoice.status === 'Overdue').length} invoices
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-gray-900 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search invoices..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <select
                className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option>All</option>
                <option>Paid</option>
                <option>Pending</option>
                <option>Overdue</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
            <div className="relative">
              <select
                className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option>Sort by Date</option>
                <option>Sort by Amount</option>
                <option>Sort by Status</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Invoice</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Customer</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Due Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredInvoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400">{invoice.id}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Ref: {invoice.orderRef}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{invoice.customer}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{invoice.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{invoice.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{invoice.dueDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">${invoice.amount.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 mr-3">View</button>
                    <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 mr-3">Edit</button>
                    <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredInvoices.length} invoices
          </div>
          <div className="flex space-x-2">
            <button
              className="px-3 py-1 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              Previous
            </button>
            <button
              className="px-3 py-1 rounded-md bg-blue-600 text-white"
            >
              1
            </button>
            <button
              className="px-3 py-1 rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
