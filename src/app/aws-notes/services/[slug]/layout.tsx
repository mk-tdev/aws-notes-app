import ServiceItemHeader from "@/components/service-item-header";

export default function AWSNotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <ServiceItemHeader></ServiceItemHeader>
      {children}
    </section>
  );
}
