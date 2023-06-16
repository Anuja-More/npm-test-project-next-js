"use client";
import { useEffect } from "react";
import { Log } from "anuja-more-first-npm-package-console-cool-colors";

export default function Home() {
  useEffect(() => {
    Log.success("response is okay");
    Log.danger("Error code while fetching data");
    Log.info("aunthenticated user");
  }, []);
  return (
    <div>
      this is testing for anuja-more-first-npm-package-console-cool-colors npm
      package{" "}
    </div>
  );
}
