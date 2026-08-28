import MenuStack from "../components/MenuStack";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-4 lh-lg">
      <header className="sticky-top">
        <MenuStack />
      </header>

      <main className="container col-12 col-md-11 col-lg-8 col-xl-4 px-lg-3 px-4">
        {children}
      </main>
    </div>
  );
}
