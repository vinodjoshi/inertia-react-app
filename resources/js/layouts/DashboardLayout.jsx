import { Link, router } from "@inertiajs/react";
import { Button } from "../Components/ui/button";

export default function DashboardLayout({ children, user }) {
  const handleLogout = () => {
    router.post("/logout");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-sm">
        <div className="p-6 font-bold text-xl border-b">Ticketgol</div>
        <nav className="flex flex-col mt-4 space-y-2">
          <Link href="/dashboard" className="px-6 py-2 hover:bg-gray-100">
            Dashboard
          </Link>
          <Link href="/profile" className="px-6 py-2 hover:bg-gray-100">
            Profile
          </Link>
          <Link href="/settings" className="px-6 py-2 hover:bg-gray-100">
            Settings
          </Link>

          <Link href="/settings" className="px-6 py-2 hover:bg-gray-100">
            Settings
          </Link>
        </nav>
      </aside>
<aside className="w-64 bg-white border-r shadow-sm">
        <div className="p-6 font-bold text-xl border-b">Ticketgol</div>
        <nav className="flex flex-col mt-4 space-y-2">
          <Link href="/dashboard" className="px-6 py-2 hover:bg-gray-100">
            Dashboard
          </Link>
          <Link href="/profile" className="px-6 py-2 hover:bg-gray-100">
            Profile
          </Link>
          <Link href="/settings" className="px-6 py-2 hover:bg-gray-100">
            Settings
          </Link>
        </nav>
      </aside>



      {/* Main content */}
      <main className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="flex justify-between items-center p-4 bg-white shadow-sm border-b">
          <span className="font-medium">Welcome, {user?.name}</span>
          <Button variant="destructive" onClick={handleLogout}>
            Logout
          </Button>
        </header>

        {/* Page content */}
        <div className="flex-1 p-6">{children}</div>
      </main>
    </div>
  );
}
