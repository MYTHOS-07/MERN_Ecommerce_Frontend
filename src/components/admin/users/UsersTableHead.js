import React from "react";
import { FaCog } from "react-icons/fa";

const UsersTableHead = () => {
  const headerColumns = [
    { label: "Name" },
    { label: "Email Address" },
    { label: "Phone Number" },
    { label: "Address" },
    { label: "Roles" },
  ];
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {headerColumns.map((item) => (
          <th key={item.label} scope="col" className="px-4 py-3">
            {item.label}
          </th>
        ))}

        <th className="px-4 py-3 ">
          <div className="flex justify-center">
            <FaCog />
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default UsersTableHead;
