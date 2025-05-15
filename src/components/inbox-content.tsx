'use client';

import { useState } from 'react';

export function InboxContent() {
  // Sample data for messages
  const [messages] = useState([
    {
      id: 'msg-001',
      sender: 'John Smith',
      email: 'john.smith@example.com',
      subject: 'Order confirmation #ORD-7291',
      preview: 'Thank you for your recent order. We wanted to confirm that your order #ORD-7291 has been received and is being processed...',
      date: '2025-05-15 14:32',
      read: false,
      important: true,
      avatar: 'JS'
    },
    {
      id: 'msg-002',
      sender: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      subject: 'Question about my invoice',
      preview: 'I have a question regarding the invoice #INV-2025-002 that I received yesterday. There seems to be a discrepancy in the...',
      date: '2025-05-15 11:15',
      read: false,
      important: false,
      avatar: 'SJ'
    },
    {
      id: 'msg-003',
      sender: 'Pointsale Support',
      email: 'support@pointsale.com',
      subject: 'Your monthly report is ready',
      preview: 'Your monthly sales report for April 2025 is now available. You can view and download it from your dashboard...',
      date: '2025-05-14 16:45',
      read: true,
      important: true,
      avatar: 'PS'
    },
    {
      id: 'msg-004',
      sender: 'Michael Brown',
      email: 'mbrown@example.com',
      subject: 'Product inquiry - Wireless Headphones',
      preview: 'I\'m interested in purchasing the Wireless Headphones listed on your website, but I have a few questions before I make my decision...',
      date: '2025-05-14 09:22',
      read: true,
      important: false,
      avatar: 'MB'
    },
    {
      id: 'msg-005',
      sender: 'Emily Davis',
      email: 'emily.davis@example.com',
      subject: 'Return request for order #ORD-7288',
      preview: 'I would like to request a return for my recent order #ORD-7288. The product arrived damaged and I would like to...',
      date: '2025-05-13 15:30',
      read: true,
      important: true,
      avatar: 'ED'
    },
    {
      id: 'msg-006',
      sender: 'Robert Wilson',
      email: 'rwilson@example.com',
      subject: 'Partnership opportunity',
      preview: 'I represent a company that specializes in complementary products to what you offer. I believe there could be a mutually beneficial...',
      date: '2025-05-13 10:05',
      read: true,
      important: false,
      avatar: 'RW'
    },
    {
      id: 'msg-007',
      sender: 'Jennifer Taylor',
      email: 'jtaylor@example.com',
      subject: 'Feedback on recent purchase',
      preview: 'I recently purchased several items from your store and wanted to share my feedback on the shopping experience and the products...',
      date: '2025-05-12 14:18',
      read: true,
      important: false,
      avatar: 'JT'
    },
    {
      id: 'msg-008',
      sender: 'Pointsale Billing',
      email: 'billing@pointsale.com',
      subject: 'Your subscription renewal',
      preview: 'This is a reminder that your Pointsale Pro subscription will renew automatically on June 1, 2025. If you would like to make any changes...',
      date: '2025-05-12 09:00',
      read: true,
      important: true,
      avatar: 'PB'
    },
  ]);

  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter messages based on current filter and search term
  const filteredMessages = messages.filter(message => {
    const matchesSearch = 
      message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.preview.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'all') return matchesSearch;
    if (filter === 'unread') return !message.read && matchesSearch;
    if (filter === 'important') return message.important && matchesSearch;
    
    return matchesSearch;
  });

  // Get the selected message details
  const selectedMessageDetails = selectedMessage 
    ? messages.find(m => m.id === selectedMessage) 
    : null;

  // Mark message as read
  const markAsRead = (id: string) => {
    const updatedMessages = messages.map(message => 
      message.id === id ? { ...message, read: true } : message
    );
    // In a real app, you would update the state here
    // setMessages(updatedMessages);
  };

  // Toggle important flag
  const toggleImportant = (id: string) => {
    const updatedMessages = messages.map(message => 
      message.id === id ? { ...message, important: !message.important } : message
    );
    // In a real app, you would update the state here
    // setMessages(updatedMessages);
  };

  // Get avatar background color based on initials
  const getAvatarColor = (initials: string) => {
    const colors = [
      'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 
      'bg-red-500', 'bg-purple-500', 'bg-pink-500',
      'bg-indigo-500', 'bg-teal-500'
    ];
    
    // Simple hash function to get consistent color for same initials
    const hash = initials.charCodeAt(0) + (initials.length > 1 ? initials.charCodeAt(1) : 0);
    return colors[hash % colors.length];
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Inbox</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Compose
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-gray-900 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1 rounded-md text-sm ${
                  filter === 'all'
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('unread')}
                className={`px-3 py-1 rounded-md text-sm ${
                  filter === 'unread'
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                Unread
              </button>
              <button
                onClick={() => setFilter('important')}
                className={`px-3 py-1 rounded-md text-sm ${
                  filter === 'important'
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                Important
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row h-[calc(100vh-13rem)]">
          {/* Message List */}
          <div className={`w-full md:w-1/3 border-r border-gray-200 dark:border-gray-700 overflow-y-auto ${selectedMessage ? 'hidden md:block' : ''}`}>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredMessages.length > 0 ? (
                filteredMessages.map((message) => (
                  <li 
                    key={message.id}
                    className={`hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${
                      !message.read ? 'bg-blue-50 dark:bg-blue-900/10' : ''
                    } ${selectedMessage === message.id ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                    onClick={() => {
                      setSelectedMessage(message.id);
                      markAsRead(message.id);
                    }}
                  >
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`flex-shrink-0 h-10 w-10 rounded-full ${getAvatarColor(message.avatar)} flex items-center justify-center text-white font-medium`}>
                            {message.avatar}
                          </div>
                          <div className="ml-4 truncate">
                            <div className="flex items-center">
                              <p className={`text-sm font-medium ${!message.read ? 'text-gray-900 dark:text-gray-100' : 'text-gray-700 dark:text-gray-300'} truncate`}>
                                {message.sender}
                              </p>
                              {message.important && (
                                <svg className="ml-1 h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                              )}
                            </div>
                            <p className={`text-sm ${!message.read ? 'font-medium text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400'} truncate`}>
                              {message.subject}
                            </p>
                          </div>
                        </div>
                        <div className="ml-2 flex-shrink-0 flex flex-col items-end">
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {message.date.split(' ')[0]}
                          </p>
                          {!message.read && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                              New
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                          {message.preview}
                        </p>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <li className="px-4 py-6 text-center text-gray-500 dark:text-gray-400">
                  No messages found
                </li>
              )}
            </ul>
          </div>

          {/* Message Detail */}
          {selectedMessage ? (
            <div className="w-full md:w-2/3 flex flex-col overflow-hidden">
              {selectedMessageDetails && (
                <>
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <div className="flex items-center">
                      <button 
                        className="md:hidden mr-4 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setSelectedMessage(null)}
                      >
                        <svg className="h-5 w-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                      </button>
                      <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 truncate">
                        {selectedMessageDetails.subject}
                      </h2>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => toggleImportant(selectedMessageDetails.id)}
                      >
                        <svg 
                          className={`h-5 w-5 ${
                            selectedMessageDetails.important 
                              ? 'text-yellow-500' 
                              : 'text-gray-400 dark:text-gray-500'
                          }`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </button>
                      <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg className="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </button>
                      <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg className="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center">
                      <div className={`flex-shrink-0 h-10 w-10 rounded-full ${getAvatarColor(selectedMessageDetails.avatar)} flex items-center justify-center text-white font-medium`}>
                        {selectedMessageDetails.avatar}
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">{selectedMessageDetails.sender}</h3>
                          <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">&lt;{selectedMessageDetails.email}&gt;</span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          To: me - {selectedMessageDetails.date}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 p-6 overflow-y-auto">
                    <div className="prose dark:prose-invert max-w-none">
                      <p className="text-gray-700 dark:text-gray-300">
                        Dear Admin,
                      </p>
                      <br />
                      <p className="text-gray-700 dark:text-gray-300">
                        {selectedMessageDetails.preview}
                      </p>
                      <br />
                      <p className="text-gray-700 dark:text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.
                      </p>
                      <br />
                      <p className="text-gray-700 dark:text-gray-300">
                        Best regards,<br />
                        {selectedMessageDetails.sender}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Reply
                      </button>
                      <button className="ml-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Forward
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="w-full md:w-2/3 flex items-center justify-center p-6 text-gray-500 dark:text-gray-400">
              Select a message to view its contents
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
