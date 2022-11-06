import MainNavigation from "./MainNavigation";

export default function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className="my-[3rem] flex justify-center items-center">
        {props.children}
      </main>
    </div>
  );
}
