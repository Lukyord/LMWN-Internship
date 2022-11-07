import MainNavigation from "./MainNavigation";

export default function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className="h-screen w-screen py-[3rem] flex justify-center bg-slate-100">
        {props.children}
      </main>
    </div>
  );
}
