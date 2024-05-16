import { loadExternalStyles } from "alem";
import Spinner from "./components/Spinner";

const App = () => {
  // NOTE: You can configure this font with Tailwind, see tailwind.config.js file
  const fontsLoaded = loadExternalStyles(["https://fonts.cdnfonts.com/css/display"]);

  const Texts = () => (
    <>
      <p className="text-3xl">
        Edit <span>src/index.tsx</span> and save to reload.
      </p>
      <a className="text-[#61b6fb] text-2xl mt-2" href="https://alem.dev" target="_blank" rel="noopener noreferrer">
        Learn Além
      </a>
    </>
  );

  return (
    <div>
      <div className="text-center font-body mt-12">
        <div className="min-[80%] flex flex-col items-center justify-center text-2xl text-white">
          <img
            src="https://ipfs.near.social/ipfs/bafkreicjdgat5xsw7vxbosoyygermawhkfi2by3ovg7c6tumrayn4rimty"
            className="rounded-full h-28 pointer-events-none mb-5 animate-spin"
            alt="logo"
          />
          {fontsLoaded ? <Texts /> : <Spinner />}
        </div>
      </div>
      {/* Background */}
      <div className="bg-[#282c34] fixed -z-10 w-full h-full top-0 left-0" />
    </div>
  );
};

export default App;
