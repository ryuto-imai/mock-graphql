'use client'

import { User } from "@/graphql/generated/schema";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

export const UsersContext = createContext(
    {} as {
        users: User[]
        setUsers: Dispatch<SetStateAction<User[]>>
    }
)

export const UsersProvider = ({
    children,
    initialValue,
}: {
    children: ReactNode,
    initialValue: User[]
}) => {
    const [users, setUsers] = useState<User[]>(initialValue)
    return (
        <UsersContext.Provider value={{ users, setUsers }}>
            {children}
        </UsersContext.Provider>
    )
}