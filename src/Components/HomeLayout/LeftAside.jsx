import { Suspense } from "react";
import Categories from "../Categories";

export default function LeftAside() {
  return (
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
         <Categories></Categories>
    </Suspense>
  )
}
