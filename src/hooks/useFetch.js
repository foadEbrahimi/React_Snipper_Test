import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          setData(data);
          setIsPending(false);
        }, 2000);
      });
  }, [data]);
  return [data, isPending];
}
