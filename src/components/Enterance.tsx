import Welcome from "./Welcome";
import Button from "./Button";

export default function Enterance() {
  const para = "I build beautiful web experiences.";
  const paraArr = para.split("");
  return (
    <div
      className="flex items-center h-screen px-4 py-12 text-center md:px-6 md:py-24 lg:py-32 xl:min-h-[700px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="container flex flex-1 flex-col gap-4 items-center justify-center">
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl font-bold  md:text-8xl text-slate-300 uppercase">
            <Welcome text={["w", "e", "l", "c", "o", "m", "e"]} />
          </h1>

          <h2 className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            <Welcome text={paraArr} />
          </h2>
        </div>

        <Button />
      </div>
    </div>
  );
}
