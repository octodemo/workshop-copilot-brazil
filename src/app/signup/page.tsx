"use client";
import React, { useState } from 'react';

interface SignupForm {
    email: string;
    password: string;
    confirmPassword: string;
}

const SignupPage: React.FC = () => {
    const [form, setForm] = useState<SignupForm>({ email: '', password: '', confirmPassword: '' });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (form.password !== form.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        // Handle signup logic here
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <label>
                    Email:
                    <input type="email" name="email" value={form.email} onChange={handleInputChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={form.password} onChange={handleInputChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </label>
                <label>
                    Confirm Password:
                    <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleInputChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </label>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupPage;