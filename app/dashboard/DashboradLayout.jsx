import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function DashboradLayout({ children }) {
  return (
    <main className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header />
        <div className=" w-full h-full">{children}</div>
      </div>
    </main>
  );
}
