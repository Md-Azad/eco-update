import { Suspense } from "react";
import LocationDetector from "./components/LocationDetector";


export default function Home() {
  return (
    <Suspense fallback="fetching location...">
    <LocationDetector />
    </Suspense>
  );
}
