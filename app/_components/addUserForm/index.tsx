'use client'

import { UsersContext } from "@/app/_contexts/users"
import { AddUserDocument, AddUserMutation, User, UsersDocument, UsersQuery } from "@/graphql/generated/schema"
import { graphqlRequest } from "@/lib/graphqlRequest"
import { useContext, useEffect, useState } from "react"

export const AddUserForm = () => {
    const {users, setUsers} = useContext(UsersContext)
    const [name, setName] = useState<string>('')
    const [age, setAge] = useState<string>('')

    const handleAddUser = async (e: React.FormEvent) => {
        e.preventDefault()
        const newUser = {
          name: name || 'N/A',
          age: age ? parseInt(age) : undefined,
        }
        
        const data = await graphqlRequest<AddUserMutation>(AddUserDocument, { input: newUser })
        if (data?.addUser?.user) setUsers([...users, data.addUser.user])
        setName('')
        setAge('')
    }

    return (
        <form onSubmit={handleAddUser} className="mb-4">
            <div className="mb-2">
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mb-2">
                <label htmlFor="age" className="block text-sm font-medium">Age</label>
                <input
                    type="number"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Add User
            </button>
        </form>
    )
}