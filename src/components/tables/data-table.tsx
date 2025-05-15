'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface DataTableProps<T> {
  data: T[];
  columns: {
    key: string;
    title: string;
    render?: (value: any, record: T) => React.ReactNode;
  }[];
  onRowClick?: (record: T) => void;
  className?: string;
  emptyMessage?: string;
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  onRowClick,
  className,
  emptyMessage = 'No data available',
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortKey) return 0;
    
    const aValue = a[sortKey];
    const bValue = b[sortKey];
    
    if (aValue === undefined || bValue === undefined) return 0;
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    
    if (sortDirection === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {columns.map((column) => (
              <th 
                key={column.key}
                onClick={() => handleSort(column.key)}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer"
              >
                <div className="flex items-center space-x-1">
                  <span>{column.title}</span>
                  {sortKey === column.key && (
                    <span className="ml-1">
                      {sortDirection === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {sortedData.length > 0 ? (
            sortedData.map((record, index) => (
              <tr 
                key={index}
                className={cn(
                  onRowClick && 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800'
                )}
                onClick={() => onRowClick && onRowClick(record)}
              >
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                    {column.render 
                      ? column.render(record[column.key], record)
                      : record[column.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td 
                colSpan={columns.length} 
                className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400"
              >
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
