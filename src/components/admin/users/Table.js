import React from "react";
import Spinner from "@/components/Spinner";
import UsersTableHead from "./UsersTableHead";
import UserActionButton from "./UserAction";

const UsersTable = ({ users, loading }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <UsersTableHead />
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={6}>
                <div className="flex items-center justify-center py-10">
                  <Spinner className="h-12 w-12 fill-primary" />
                </div>
              </td>
            </tr>
          ) : (
            users.map((user) => (

            
              <tr
                key={user._id}
                className="border-b border-gray-300 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.name} 
                </th>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.phone}</td>
                <td className="px-4 py-3">
                  {user.address?.city}, {user.address?.province}
                </td>
                <td className="px-4 py-3">{user.roles.join(", ")}</td>
                <td className="px-4 py-3 flex items-center justify-center">
                  <UserActionButton id={user._id} roles={user.roles} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
