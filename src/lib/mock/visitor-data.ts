// Generate visitor data for the past 30 days
const generateVisitorData = () => {
  const data = [];
  const today = new Date();
  
  // Generate data for the past 30 days
  for (let i = 29; i >= 0; i--) {
    const date = new Date();
    date.setDate(today.getDate() - i);
    
    // Format date as MM/DD
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`;
    
    // Generate random visitor counts with a realistic pattern
    // Weekends (Sat, Sun) typically have lower traffic
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    
    const visitors = isWeekend 
      ? Math.floor(Math.random() * 300) + 400 // 400-700 for weekends
      : Math.floor(Math.random() * 500) + 600; // 600-1100 for weekdays
    
    const newUsers = Math.floor(visitors * (Math.random() * 0.2 + 0.3)); // 30-50% are new users
    const returningUsers = visitors - newUsers;
    
    data.push({
      date: formattedDate,
      visitors,
      newUsers,
      returningUsers
    });
  }
  
  return data;
};

// Visitor data for the past 30 days
export const dailyVisitorData = generateVisitorData();

// Visitor data by hour of day (24-hour format)
export const hourlyVisitorData = [
  { hour: '00:00', visitors: 120 },
  { hour: '01:00', visitors: 85 },
  { hour: '02:00', visitors: 60 },
  { hour: '03:00', visitors: 45 },
  { hour: '04:00', visitors: 35 },
  { hour: '05:00', visitors: 40 },
  { hour: '06:00', visitors: 80 },
  { hour: '07:00', visitors: 150 },
  { hour: '08:00', visitors: 320 },
  { hour: '09:00', visitors: 480 },
  { hour: '10:00', visitors: 580 },
  { hour: '11:00', visitors: 620 },
  { hour: '12:00', visitors: 670 },
  { hour: '13:00', visitors: 650 },
  { hour: '14:00', visitors: 580 },
  { hour: '15:00', visitors: 540 },
  { hour: '16:00', visitors: 520 },
  { hour: '17:00', visitors: 480 },
  { hour: '18:00', visitors: 430 },
  { hour: '19:00', visitors: 390 },
  { hour: '20:00', visitors: 350 },
  { hour: '21:00', visitors: 290 },
  { hour: '22:00', visitors: 220 },
  { hour: '23:00', visitors: 170 },
];

// Weekly visitor data for the past 12 weeks
export const weeklyVisitorData = [
  { week: 'Week 1', visitors: 4250, newUsers: 1820, returningUsers: 2430 },
  { week: 'Week 2', visitors: 4580, newUsers: 2100, returningUsers: 2480 },
  { week: 'Week 3', visitors: 5120, newUsers: 2340, returningUsers: 2780 },
  { week: 'Week 4', visitors: 4890, newUsers: 2150, returningUsers: 2740 },
  { week: 'Week 5', visitors: 5340, newUsers: 2450, returningUsers: 2890 },
  { week: 'Week 6', visitors: 5780, newUsers: 2680, returningUsers: 3100 },
  { week: 'Week 7', visitors: 6120, newUsers: 2950, returningUsers: 3170 },
  { week: 'Week 8', visitors: 5980, newUsers: 2780, returningUsers: 3200 },
  { week: 'Week 9', visitors: 6450, newUsers: 3120, returningUsers: 3330 },
  { week: 'Week 10', visitors: 6820, newUsers: 3350, returningUsers: 3470 },
  { week: 'Week 11', visitors: 7240, newUsers: 3580, returningUsers: 3660 },
  { week: 'Week 12', visitors: 7580, newUsers: 3790, returningUsers: 3790 },
];

// Monthly visitor data for the past 12 months
export const monthlyVisitorData = [
  { month: 'Jun', visitors: 18500, newUsers: 8200, returningUsers: 10300 },
  { month: 'Jul', visitors: 19800, newUsers: 9100, returningUsers: 10700 },
  { month: 'Aug', visitors: 22400, newUsers: 10500, returningUsers: 11900 },
  { month: 'Sep', visitors: 21200, newUsers: 9800, returningUsers: 11400 },
  { month: 'Oct', visitors: 23500, newUsers: 11200, returningUsers: 12300 },
  { month: 'Nov', visitors: 25800, newUsers: 12400, returningUsers: 13400 },
  { month: 'Dec', visitors: 27200, newUsers: 13100, returningUsers: 14100 },
  { month: 'Jan', visitors: 24800, newUsers: 11500, returningUsers: 13300 },
  { month: 'Feb', visitors: 26500, newUsers: 12800, returningUsers: 13700 },
  { month: 'Mar', visitors: 28900, newUsers: 14200, returningUsers: 14700 },
  { month: 'Apr', visitors: 30500, newUsers: 15300, returningUsers: 15200 },
  { month: 'May', visitors: 32100, newUsers: 16400, returningUsers: 15700 },
];

export default {
  dailyVisitorData,
  hourlyVisitorData,
  weeklyVisitorData,
  monthlyVisitorData
};
