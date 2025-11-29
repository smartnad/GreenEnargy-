'use client'

import { useState } from 'react'
import { Search, Filter, Eye } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

// Mock data - replace with Supabase fetch
const MOCK_APPLICATIONS = [
    { id: '1', name: 'Amit Roy', location: 'Guwahati', size: 3.0, cost: 180000, subsidy: 72000, status: 'pending', date: '2025-11-29' },
    { id: '2', name: 'Sneha Gupta', location: 'Dispur', size: 5.0, cost: 300000, subsidy: 78000, status: 'approved', date: '2025-11-28' },
    { id: '3', name: 'Rahul Das', location: 'Jorhat', size: 2.0, cost: 120000, subsidy: 72000, status: 'documents_required', date: '2025-11-27' },
]

export default function ApplicationsPage() {
    const [filter, setFilter] = useState('all')
    const [search, setSearch] = useState('')

    const filteredApps = MOCK_APPLICATIONS.filter(app => {
        const matchesFilter = filter === 'all' || app.status === filter
        const matchesSearch = app.name.toLowerCase().includes(search.toLowerCase()) || app.location.toLowerCase().includes(search.toLowerCase())
        return matchesFilter && matchesSearch
    })

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Subsidy Applications</h1>
                    <p className="text-neutral-500">Manage and track customer applications.</p>
                </div>

                <div className="flex gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                        <input
                            type="text"
                            placeholder="Search by name or city..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 outline-none focus:ring-2 focus:ring-saffron"
                        />
                    </div>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 outline-none focus:ring-2 focus:ring-saffron"
                    >
                        <option value="all">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="documents_required">Docs Required</option>
                        <option value="installed">Installed</option>
                    </select>
                </div>
            </div>

            <div className="bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-neutral-50 dark:bg-neutral-900 text-neutral-500 border-b border-neutral-200 dark:border-neutral-800">
                            <tr>
                                <th className="px-6 py-4 font-medium">Applicant</th>
                                <th className="px-6 py-4 font-medium">System Size</th>
                                <th className="px-6 py-4 font-medium">Est. Cost / Subsidy</th>
                                <th className="px-6 py-4 font-medium">Date</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                            {filteredApps.map((app) => (
                                <tr key={app.id} className="hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-neutral-900 dark:text-white">{app.name}</div>
                                        <div className="text-xs text-neutral-500">{app.location}</div>
                                    </td>
                                    <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{app.size} kW</td>
                                    <td className="px-6 py-4">
                                        <div className="text-neutral-900 dark:text-white">{formatCurrency(app.cost)}</div>
                                        <div className="text-xs text-india-green">Sub: {formatCurrency(app.subsidy)}</div>
                                    </td>
                                    <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{app.date}</td>
                                    <td className="px-6 py-4">
                                        <StatusBadge status={app.status} />
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors text-neutral-600 dark:text-neutral-400">
                                            <Eye className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function StatusBadge({ status }: { status: string }) {
    const styles: any = {
        pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        approved: 'bg-blue-100 text-blue-800 border-blue-200',
        documents_required: 'bg-orange-100 text-orange-800 border-orange-200',
        installed: 'bg-green-100 text-green-800 border-green-200',
        rejected: 'bg-red-100 text-red-800 border-red-200',
    }

    const labels: any = {
        pending: 'Pending Review',
        approved: 'Approved',
        documents_required: 'Docs Needed',
        installed: 'Installed',
        rejected: 'Rejected',
    }

    return (
        <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${styles[status] || 'bg-gray-100 text-gray-800'}`}>
            {labels[status] || status}
        </span>
    )
}
