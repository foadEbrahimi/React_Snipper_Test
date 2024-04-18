import React from "react";
import useFetch from "./hooks/useFetch";
import { DNA, Rings } from "react-loader-spinner";
export default function App() {
  const [data, isPending] = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <div>
      <h1>hello</h1>
      <Rings
        visible={isPending  }
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      {data &&
        data.map(user => (
          <div>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
          </div>
        ))}
    </div>
  );
}
