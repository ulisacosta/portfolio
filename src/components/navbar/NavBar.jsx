import { dataNavbar, dataNavbarSM } from "./Navbar.data";

export default function Navbar({}) {
  return (
    <nav className="fixed z-20 flex flex-col items-center justify-between mt-auto h-2/5 top-1/4 left-10 w-16 border-2 border-white rounded-xl xl:left-auto xl:w-3/6 xl:mt-8 xl:h-16 xl:fixed xl:top-0 xl:z-20 xl:flex xl:flex-row xl:items-center ">
      <div className="flex flex-col justify-start gap-3 mt-3 xl:mt-0 xl:w-full xl:flex xl:flex-row xl:justify-start xl:gap-4 xl:ml-2">
        {dataNavbar.map(({ name, path, icon }) => (
          <a href={path} target="__blank">
            {icon}
          </a>
        ))}
      </div>
      <div className="md:hidden xl:w-full xl:flex xl:justify-center xl:gap-1 text-white ">
        <p className="text-2xl font-semibold ">Acosta</p>
        <p className="text-2xl font-semibold ">Ulises</p>
      </div>
      <div className="flex flex-col justify-center gap-3 mb-3 xl:mb-0 xl:w-full xl:flex xl:flex-row xl:justify-end xl:gap-4 xl:mr-2">
        {dataNavbarSM.map(({ name, link, icon }) => (
          <a href={link} target="__blank">
            {icon}
          </a>
        ))}
      </div>
    </nav>
  );
}
