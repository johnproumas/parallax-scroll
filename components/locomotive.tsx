"use client";

import { useGSAP } from "@gsap/react";

interface Props {
  children: React.ReactNode;
}

const Locomotive = ({ children }: Props) => {
  useGSAP(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return <>{children}</>;
};

export default Locomotive;
