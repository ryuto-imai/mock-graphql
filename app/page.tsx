import { AddUserForm } from "@/app/_components/addUserForm";
import { MswWorker } from "@/app/_components/mswWorker";
import { UserList } from "@/app/_components/userList";
import { UsersProvider } from "@/app/_contexts/users";
import { UsersDocument, UsersQuery } from "@/graphql/generated/schema";
import { graphqlRequest } from "@/lib/graphqlRequest";
import { server } from "@/mocks/graphql/server";

process.env.NODE_ENV === 'development' && server.listen()

export default async function Home() {
  const data = await graphqlRequest<UsersQuery>(UsersDocument)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-gray-700">
      <MswWorker />
      <UsersProvider initialValue={data?.users ?? []}>
        <AddUserForm />
        <UserList/>
      </UsersProvider>
    </main>
  );
}
