import ServicesList from "@/components/services-list";
import { Suspense } from "react";
import Loading from "./loading";

const AWSNotes = () => {
  return (
    <div>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">AWS Services</h1>

        <Suspense fallback={<Loading />}>
          <ServicesList />
        </Suspense>
      </div>
    </div>
  );
};

export default AWSNotes;
