import React from 'react';

const fromCreate = () => {
    return (
        <div className="bg-white p-8 pt-1 rounded-lg max-w-lg text-black">
            <h2 className="text-2xl font-semibold mb-6">Please enter your billing information</h2>
            <form className="space-y-1">
                <div className="grid grid-cols-2 gap-x-2">
                    <label htmlFor="first-name" className="block text-lg font-medium ml-auto">First Name</label>
                    <input type="text" id="first-name" name="first-name" className="block w-full ml-4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="grid grid-cols-2 gap-x-2">
                    <label htmlFor="last-name" className="block text-lg font-medium ml-auto">Last Name</label>
                    <input type="text" id="last-name" name="last-name" className="block w-full ml-4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="grid grid-cols-2 gap-x-2">
                    <label htmlFor="address" className="block text-lg font-medium ml-auto">Address</label>
                    <input type="text" id="address" name="address" className="block w-full ml-4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="grid grid-cols-2 gap-x-2">
                    <label htmlFor="address2" className="block text-lg font-medium ml-auto">Address Line 2</label>
                    <input type="text" id="address2" name="address2" className="block w-full ml-4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="grid grid-cols-2 gap-x-2">
                    <label htmlFor="city" className="block text-lg font-medium ml-auto">City</label>
                    <input type="text" id="city" name="city" className="block w-full ml-4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="grid grid-cols-2 gap-x-2">
                    <label htmlFor="state" className="block text-lg font-medium ml-auto">State</label>
                    <input type="text" id="state" name="state" className="block w-full ml-4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="grid grid-cols-2 gap-x-2">
                    <label htmlFor="zip-code" className="block text-lg font-medium ml-auto">Zip Code</label>
                    <input type="text" id="zip-code" name="zip-code" className="block w-full ml-4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="grid grid-cols-2 gap-x-2">
                    <label htmlFor="country" className="block text-lg font-medium ml-auto">Country</label>
                    <input type="text" id="country" name="country" className="block w-full ml-4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="grid grid-cols-2 gap-x-2">
                    <label htmlFor="phone" className="block text-lg font-medium ml-auto">Phone</label>
                    <input type="tel" id="phone" name="phone" className="block w-full ml-4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="grid grid-cols-2 gap-x-2">
                    <label htmlFor="email" className="block text-lg font-medium ml-auto">Email</label>
                    <input type="email" id="email" name="email" className="block w-full ml-4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="grid grid-cols-2 gap-x-2">
                    <label htmlFor="card-type" className="block text-lg font-medium ml-auto">Card Type</label>
                    <select id="card-type" name="card-type" className="block w-full ml-4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                        <option>Visa</option>
                        <option>MasterCard</option>
                        <option>American Express</option>
                        <option>Discover</option>
                    </select>
                </div>
                <div className="grid grid-cols-2 gap-x-2">
                    <label htmlFor="card-number" className="block text-lg font-medium ml-auto">Card Number</label>
                    <input type="text" id="card-number" name="card-number" className="block w-full ml-4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="grid grid-cols-2 gap-x-2">
                    <label htmlFor="ccv-number" className="block text-lg font-medium ml-auto">CCV Number</label>
                    <input type="text" id="ccv-number" name="ccv-number" className="block w-full ml-4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="grid grid-cols-2 gap-x-2">
                    <label htmlFor="exp-date" className="block text-lg font-medium ml-auto">Exp. Date</label>
                    <div className="flex space-x-2">
                        <select id="exp-month" name="exp-month" className="block w-full ml-4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                            <option value="01">1</option>
                            <option value="02">2</option>
                        </select>
                        <select id="exp-year" name="exp-year" className="block w-full ml-4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                            <option value="2024">2011</option>
                            <option value="2025">2010</option>
                            <option value="2026">2009</option>
                            <option value="2027">2008</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-2">
                    <label htmlFor="card-name" className="block text-lg font-medium ml-auto">Name on Credit Card</label>
                    <input type="text" id="card-name" name="card-name" className="block w-full ml-4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
            </form>
        </div>
    );
};

export default fromCreate;
