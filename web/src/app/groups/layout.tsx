export default function GroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-row items-center justify-center mx-auto">
      {children}
    </section>
  );
}
