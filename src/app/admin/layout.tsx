import Link from 'next/link'
import { LayoutDashboard, FileText, Users, Settings, LogOut } from 'lucide-react'

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen bg-neutral-100 dark:bg-neutral-900">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-neutral-950 border-r border-neutral-200 dark:border-neutral-800 hidden md:block">
                <div className="p-6 border-b border-neutral-200 dark:border-neutral-800">
                    <h1 className="text-xl font-bold bg-gradient-to-r from-saffron to-india-green bg-clip-text text-transparent">
                        Wabsyin Admin
                    </h1>
                </div>
                <nav className="p-4 space-y-2">
                    <NavLink href="/admin" icon={<LayoutDashboard size={20} />} label="Dashboard" />
                    <NavLink href="/admin/applications" icon={<FileText size={20} />} label="Applications" />
                    <NavLink href="/admin/projects" icon={<Settings size={20} />} label="Projects" />
                    <NavLink href="/admin/users" icon={<Users size={20} />} label="Users" />
                </nav>
                <div className="absolute bottom-0 w-64 p-4 border-t border-neutral-200 dark:border-neutral-800">
                    <button className="flex items-center gap-3 px-4 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg w-full transition-colors">
                        <LogOut size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    )
}

function NavLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-3 px-4 py-3 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:text-saffron rounded-lg transition-colors"
        >
            {icon}
            <span className="font-medium">{label}</span>
        </Link>
    )
}
