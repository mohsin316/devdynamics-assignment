import { useEffect, useState } from "react";
import { fetchedData } from "../vite-env";
import { employeeData } from "../vite-env";

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<null | employeeData[]>(null);

  useEffect(() => {
    const controller = new AbortController();

    const getData = async () => {
      try {
        setIsLoading(true);
        // uncomment below code to enter development code.
        // const res = await fetch("/api/employeeData", {
        //   signal: controller.signal,
        // });

        // comment the below fetch while in development mode.
        const res = await fetch("https://mohsinsapp.xyz/app3/employeeData", {
          signal: controller.signal,
        });
        const json = (await res.json()) as fetchedData;

        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        setIsLoading(false);
        setData(json.data.AuthorWorklog.rows);
      } catch (err: any) {
        setIsLoading(false);
        setError(err.message);
      }
    };
    getData();

    return () => {
      controller.abort();
    };
  }, []);

  return { isLoading, error, data };
};
