import { FileText, Users, CheckCircle, AlertCircle } from 'lucide-react'

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Dashboard Overview</h2>
                <p className="text-neutral-500">Welcome back, Admin. Here's what's happening today.</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KpiCard title="Total Applications" value="124" icon={<FileText className="text-blue-500" />} change="+12% this month" />
                <KpiCard title="Pending Review" value="8" icon={<AlertCircle className="text-saffron" />} change="Requires attention" />
                <KpiCard title="Installations Done" value="45" icon={<CheckCircle className="text-india-green" />} change="+5 this week" />
                <KpiCard title="Total Users" value="1,203" icon={<Users className="text-purple-500" />} change="+24 new users" />
            </div>

            {/* Recent Activity Table (Placeholder) */}
            <div className="bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
                <div className="p-6 border-b border-neutral-200 dark:border-neutral-800">
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Recent Applications</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-neutral-50 dark:bg-neutral-900 text-neutral-500">
                            <tr>
                                <th className="px-6 py-4 font-medium">Applicant</th>
                                <th className="px-6 py-4 font-medium">System Size</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium">Date</th>
                                <th className="px-6 py-4 font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                            <TableRow name="Amit Roy" size="3 kW" status="Pending" date="Nov 29, 2025" />
                            <TableRow name="Sneha Gupta" size="5 kW" status="Approved" date="Nov 28, 2025" />
                            <TableRow name="John Doe" size="2 kW" status="Installed" date="Nov 25, 2025" />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function KpiCard({ title, value, icon, change }: any) {
    return (
        <div className="bg-white dark:bg-neutral-950 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-sm font-medium text-neutral-500">{title}</p>
                    <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mt-1">{value}</h3>
                </div>
                <div className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg">
                    {icon}
                </div>
            </div>
            <p className="text-xs text-neutral-500">{change}</p>
        </div>
    )
}

function TableRow({ name, size, status, date }: any) {
    const statusColors: any = {
        Pending: 'bg-yellow-100 text-yellow-800',
        Approved: 'bg-blue-100 text-blue-800',
        Installed: 'bg-green-100 text-green-800',
    }

    return (
        <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors">
            <td className="px-6 py-4 font-medium text-neutral-900 dark:text-white">{name}</td>
            <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{size}</td>
            <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status] || 'bg-gray-100 text-gray-800'}`}>
                    {status}
                </span>
            </td>
            <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{date}</td>
            <td className="px-6 py-4">
                <button className="text-saffron hover:underline font-medium">View</button>
            </td>
        </tr>
    )
}
