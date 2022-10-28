import React from "react";

import Spinner from "../src/components/Spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <Spinner />
    </div>
  );
}
