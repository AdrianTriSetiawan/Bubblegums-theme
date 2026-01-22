/**
 * Bubblegum Theme Preview
 * This file demonstrates all syntax highlighting colors
 * Created by Adrian Tri Setiawan
 */

// Import statements
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Type definitions
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

interface ThemeColors {
    primary: string;
    secondary: string;
    accent: string;
}

// Constants
const API_URL = 'https://api.example.com/users';
const MAX_RETRIES = 3;
const TIMEOUT = 5000;

// Class definition
class BubblegumApp {
    private users: User[] = [];
    private theme: ThemeColors;

    constructor() {
        this.theme = {
            primary: '#ff8ec4',
            secondary: '#ad5599',
            accent: '#ffd4e8'
        };
    }

    // Async function with error handling
    async fetchUsers(): Promise<User[]> {
        try {
            const response = await axios.get(API_URL, {
                timeout: TIMEOUT
            });

            this.users = response.data;
            return this.users;
        } catch (error) {
            console.error('Failed to fetch users:', error);
            throw new Error('Network error occurred');
        }
    }

    // Filter active users
    getActiveUsers(): User[] {
        return this.users.filter(user => user.isActive);
    }

    // Calculate statistics
    calculateStats() {
        const totalUsers = this.users.length;
        const activeUsers = this.getActiveUsers().length;
        const percentage = (activeUsers / totalUsers) * 100;

        return {
            total: totalUsers,
            active: activeUsers,
            percentage: percentage.toFixed(2)
        };
    }
}

// React component
export const UserDashboard: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const app = new BubblegumApp();

        app.fetchUsers()
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="dashboard">
            <h1>User Dashboard</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <span>{user.name}</span>
                        <span>{user.email}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Helper functions
function generateId(): number {
    return Math.floor(Math.random() * 10000);
}

function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
}

// Arrow function with destructuring
const processUser = ({ id, name, email }: User) => {
    console.log(`Processing user: ${name} (${email})`);
    return { id, name, email, processed: true };
};

// Regular expressions
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?[\d\s-()]+$/;

// Template literals
const welcomeMessage = `
  Welcome to Bubblegum Theme! 🍬
  This theme features beautiful pink and purple colors.
  Enjoy coding with style! ✨
`;

// Conditional logic
function validateUser(user: User): boolean {
    if (!user.name || user.name.trim() === '') {
        return false;
    }

    if (!emailRegex.test(user.email)) {
        return false;
    }

    return user.id > 0 && user.isActive;
}

// Export default
export default BubblegumApp;
