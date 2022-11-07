import MainNavigation from "./MainNavigation";

export default function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className="py-[3rem] flex justify-center items-center bg-slate-100">
        {props.children}
      </main>
    </div>
  );
}
