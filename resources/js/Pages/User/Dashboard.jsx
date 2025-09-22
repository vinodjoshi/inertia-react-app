import { usePage, router } from "@inertiajs/react";

export default function Dashboard() {
    console.log('Dashboard component rendered');

    const user = usePage().props.auth.user;

    const handleLogout = () => {
        router.post('/logout');
    }

    return (
        <div>
        <h1>Welcome, {user.name}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
