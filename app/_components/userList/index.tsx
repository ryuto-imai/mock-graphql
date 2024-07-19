'use client'

import { UsersContext } from "@/app/_contexts/users"
import { useContext } from "react"

export const UserList = () => {
    const { users } = useContext(UsersContext)
    const thClassName = "py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider"
    const tdClassName = "py-2 px-4 border-b border-gray-200"
    return (
        <div className="container mx-auto p-4 text-">
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <table className="min-w-full bg-white">
                <thead>
                <tr>
                    <th className={thClassName}>ID</th>
                    <th className={thClassName}>名前</th>
                    <th className={thClassName}>年齢</th>
                    <th className={thClassName}>作成日時</th>
                    <th className={thClassName}>更新日時</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                    <td className={tdClassName}>{user.id}</td>
                    <td className={tdClassName}>{user.name || 'N/A'}</td>
                    <td className={tdClassName}>{user.age || 'N/A'}</td>
                    <td className={tdClassName}>{new Date(user.createdAt).toLocaleString()}</td>
                    <td className={tdClassName}>{new Date(user.updatedAt).toLocaleString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}