import { useEffect, useState } from "react";
import { useLockBodyScroll } from "@uidotdev/usehooks";

const Scroll = () => {
  useLockBodyScroll();
  return <></>;
};
export const Modal = ({ show, onHide = () => {} }) => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState();

  useEffect(() => {
    if (isVisible) {
      if (show === false) {
        setTimeout(() => {
          setIsVisible(false);
        }, 150);
        setWidth(0);
      }
    } else {
      if (show) {
        setIsVisible(true);
      }
    }
  }, [show, isVisible]);

  useEffect(() => {
    if (isVisible) setWidth(70);
  }, [isVisible]);
  return (
    <div
      className="w-[100vw] h-[100vh] bg-[#c0c0c0c0] sm:hidden block z-[200] fixed top-0"
      onClick={() => {
        onHide();
      }}
      style={{
        display: isVisible ? "inherit" : "none",
      }}
    >
      <div
        className={`w-[${width}vw] h-[100vh] bg-white fixed top-0 right-0 transition-all shadow-lg p-[20px] animation-funding`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-[20px] text-[#070623] mt-[30px]">
          <div className="cursor-pointer hover:text-[#606060]">
            For Business
          </div>
          <hr />
          <div className="cursor-pointer hover:text-[#606060]">Media</div>
          <hr />
          <div className="cursor-pointer hover:text-[#606060]">Contact Us</div>
          <hr />
          <div className="cursor-pointer hover:text-[#606060]">About Us</div>
          <hr />
          <div className="px-[14px] py-[10px] w-full text-center rounded-full bg-gradient-to-tr from-[#1C1460] to-[#2E31B7] text-white cursor-pointer sm:z-[200] hover:translate-y-[-6px] transition ease-in-out duration-500 hover:shadow-[-1px_6px_10px_0_rgba(91,29,238,0.5)]">
            Get Now
          </div>
        </div>
      </div>
      {isVisible && <Scroll />}
    </div>
  );
};
