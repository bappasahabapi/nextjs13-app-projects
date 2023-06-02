"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface IUser {
  id?: string;
  name?: string;
  website?: string;
}

const Kappa: React.FC = () => {
  const [kUsers, setkUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<IUser[]>(
          "https://jsonplaceholder.typicode.com/users?_limit=3"
        );
        setkUsers(data);
      } catch (error) {
        console.log("Error from user page", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen p-24">
      {kUsers.map((kUser) => (
       
        <div className="w-full" key={kUser.id}>
          <h1>{kUser.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Kappa;
