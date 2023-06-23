import { motion } from "framer-motion";
import { fadeAnimation, projectCardAnimation } from "@/data/animations";
import { createRef, useEffect, useState } from "react";
import { pubg, apkmod, magisk } from "@/data/pubg_conf";
import { useRouter } from "next/router";
import {
  AdsterraScript468,
  AdsterraScriptPopunder,
  AdsterraScriptSocial,
} from "pages/Adsterra";

const DownloadPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const ref = createRef<HTMLDivElement>();
  useEffect(() => {
    const scroll = () => {
      if (ref.current && ref.current.style.transform !== undefined)
        ref.current.style.transform = `translateX(${-window.scrollY}px)`;
    };
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, [ref]);

  const [redirectCount, setRedirectCount] = useState(0);

  let selectedMap;
  switch (slug) {
    case "apkmod":
      selectedMap = apkmod;
      break;
    case "magiskmodule":
      selectedMap = magisk;
      break;
    // Add more cases for other slugs here
    
    default:
      selectedMap = pubg;
  }

  const handleDownloadClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    if (redirectCount < 5) {
      window.open(
        "https://tacticschangebabysitting.com/zaq2ii8q?key=bc32c2be49f4a2af5df09a4d73a7a988",
        "_blank"
      );
      setRedirectCount(redirectCount + 1);
    } else {
      const downloadUrl = event.currentTarget.getAttribute("data-download-url");
      if (downloadUrl) {
        window.location.href = downloadUrl;
      }
    }
  };

  return (
    <main className="relative flex h-[450vh] items-center justify-center">
      <motion.span
        {...fadeAnimation}
        className="fixed left-0 -bottom-32 origin-top-left -rotate-90 text-9xl font-extrabold text-secondary-dark md:bottom-0 md:rotate-0"
      >
        DOWNLOAD
      </motion.span>

      <div className="fixed left-1/2 top-[30%] flex md:left-1/4" ref={ref}>
        {selectedMap.map((project, id) => (
          <div key={id}>
            <motion.div
              {...projectCardAnimation}
              className="mx-12 flex w-72 flex-col items-center justify-center rounded-md border-4 border-primary-light bg-primary-light p-[2px]"
            >
              <div className="py-2 text-xl font-medium text-primary-dark">
                {project.title}
              </div>
              <div className="text-m font-meduium py-2 text-primary-dark">
                version: {project.version}
              </div>
              <div className="flex w-full justify-center px-3 pt-1 pb-4">
                <a
                  href="#"
                  data-download-url={project.download}
                  onClick={handleDownloadClick}
                  rel="noreferrer noopener nofollow"
                >
                  <span className="rounded-md border-2 border-primary-dark px-3 py-2 font-semibold text-primary-dark transition-all duration-500 hover:bg-primary-dark hover:text-primary-light">
                    Download
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="fixed top-0 -right-1 h-screen w-1/12 bg-primary-dark" />
      <div className="fixed top-0 -left-1 hidden h-3/4 w-1/12 bg-primary-dark md:block" />

      <div className="fixed bottom-40 flex flex-col items-center">
        <span className="text-primary-light">Scroll</span>
        <div className="absolute top-6 h-4 w-4 rotate-45 rounded border-b-4 border-r-4 border-secondary-light" />
        <div className="absolute top-6 h-7 w-7 rotate-45 rounded border-b-4 border-r-4 border-primary-light" />
      </div>
    </main>
  );
};

export default DownloadPage;
