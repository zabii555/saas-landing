import React from 'react'
import { useSelector } from 'react-redux'
import { Users, DollarSign, TrendingUp, Activity, Clock, User } from 'lucide-react'

const Dashboard = () => {
  const { formData } = useSelector(state => state.onboarding)

  const stats = [
    { title: 'Total Users', value: '12,847', icon: Users, change: '+12.5%' },
    { title: 'Revenue', value: '$84,293', icon: DollarSign, change: '+23.1%' },
    { title: 'Growth', value: '34.7%', icon: TrendingUp, change: '+8.2%' },
    { title: 'Active Sessions', value: '2,341', icon: Activity, change: '+5.3%' },
  ]

  const recentActivity = [
    { user: 'Ahmed Raza', action: 'Signed up', time: '2 min ago' },
    { user: 'Sara Khan', action: 'Upgraded plan', time: '15 min ago' },
    { user: 'Usman Malik', action: 'Completed onboarding', time: '1 hour ago' },
    { user: 'Fatima Noor', action: 'Invited team member', time: '2 hours ago' },
  ]

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-500">Welcome back, {formData.name || 'Guest'}!</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
            <User size={24} className="text-indigo-600" />
          </div>
          <div>
            <p className="font-bold">{formData.name || 'Guest'}</p>
            <p className="text-sm text-gray-500">{formData.email || 'No email'}</p>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="card hover:shadow-xl transition">
            <div className="flex justify-between">
              <div>
                <p className="text-gray-500 text-sm">{s.title}</p>
                <p className="text-2xl font-bold">{s.value}</p>
                <p className="text-green-500 text-sm">{s.change}</p>
              </div>
              <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full">
                <s.icon className="text-indigo-600" size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Clock size={20} /> Recent Activity</h3>
        <div className="space-y-3">
          {recentActivity.map((a, i) => (
            <div key={i} className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-3 last:border-0">
              <div>
                <p className="font-medium">{a.user}</p>
                <p className="text-sm text-gray-500">{a.action}</p>
              </div>
              <span className="text-sm text-gray-400">{a.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard;