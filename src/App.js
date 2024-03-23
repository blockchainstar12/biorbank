import "./App.css";
import logo from "./assets/Biorbank.svg";
import polygon2 from "./assets/Polygon 2.svg";
import polygon3 from "./assets/Polygon 3.svg";
import facebookIcon from "./assets/facebook-big.svg";
import discordIcon from "./assets/discord-big.svg";
import twitterIcon from "./assets/Twitter.svg";
import telegramIcon from "./assets/Telegram.svg";
import image from "./assets/image1.svg";
import video from "./assets/video.svg";
import cardsIcon from "./assets/Group 1000005715.svg";
import asset1 from "./assets/Group 1321314137.svg";
import asset2 from "./assets/iPhone 15 Pro.svg";
import asset3 from "./assets/Group 1000005717.svg";
import asset4 from "./assets/Group 1000005718.svg";
import asset5 from "./assets/Group 1000005719.svg";
import ethereumIcon from "./assets/ethereumIcon.svg";
import mayaIcon from "./assets/Maya.svg";
import chainflipIcon from "./assets/chainflip.svg";
import thorchainIcon from "./assets/thorchain.svg";
import layerzeroIcon from "./assets/layerzero-network-seeklogo 1.svg";
import artboard1 from "./assets/Artboard (2).svg";
import artboard2 from "./assets/Artboard (1).svg";
import responsive from "./assets/responsive.svg";
import { Bounce, Fade, Zoom } from "react-awesome-reveal";
import { useState } from "react";
import { Modal } from "./Modal";
import "./assets/font/style.css";
import stars from "./assets/Vector.svg";

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <div
      style={{
        fontFamily: "Trueno Regular",
        overflowX: "hidden",
      }}
      className="relative"
    >
      <div className="w-full sm:px-[60px] px-[16px] py-[20px] justify-between flex items-center z-[100] fixed bg-white overflow-hidden">
        <Fade cascade direction="up">
          <img src={logo} alt="" />
          <div className="items-center gap-[25px] text-[#070623] text-[14px] sm:flex hidden">
            <div className="cursor-pointer hover:text-[#606060]">
              For Business
            </div>
            <div className="cursor-pointer hover:text-[#606060]">Media</div>
            <div className="cursor-pointer hover:text-[#606060]">
              Contact Us
            </div>
            <div className="cursor-pointer hover:text-[#606060]">About Us</div>
            <div className="px-[14px] py-[10px] rounded-full bg-gradient-to-tr from-[#1C1460] to-[#2E31B7] text-white cursor-pointer sm:z-[200] hover:translate-y-[-6px] transition ease-in-out duration-500 hover:shadow-[-1px_6px_10px_0_rgba(91,29,238,0.5)]">
              Get Now
            </div>
          </div>
        </Fade>
        <img
          src={responsive}
          alt=""
          className="sm:hidden block cursor-pointer"
          onClick={() => setMenu(true)}
        />
      </div>
      <>
        <img
          src={polygon2}
          alt=""
          className="top-0 absolute sm:left-0 left-[-70vw]"
        />
        <img
          src={polygon3}
          alt=""
          className="top-0 absolute sm:right-0 right-[-70vw]"
        />
      </>
      <div className="pt-[100px] ">
        <div className="flex flex-col items-center mx-auto">
          <div className="sm:text-[72px] sm:mt-0 mt-[20px] text-[44px] font-bold text-[#070623] flex gap-[10px]">
            Be Your Bank
          </div>
          <Fade cascade>
            <div className="text-center sm:mt-0 mt-[20px] max-w-[70vw] text-[#667085]">
              BiorBank is the first ever Web3 banking app, for everyone
            </div>
            {/* <div className="mt-[40px] px-[14px] py-[10px] text-[14px] rounded-full bg-[#2E30B2] text-white cursor-pointer sm:z-0 z-[120] hover:translate-y-[-6px] transition ease-in-out duration-500 hover:shadow-[-1px_6px_10px_0_rgba(91,29,238,0.5)]">
              Downlaod Now
            </div> */}

            <div className="sm:mt-[40px] mt-[140px] px-[24px] py-[12px] text-[14px] rounded-full bg-gradient-to-tr from-[#1C1460] to-[#2E31B7] text-white cursor-pointer hover:translate-y-[-6px] transition ease-in-out duration-500 hover:shadow-[-1px_6px_10px_0_rgba(91,29,238,0.5)]">
              Downlaod Now
            </div>
            <div className="flex items-center gap-[30px] mt-[30px] z-[120] sm:z-0">
              <div className="p-[10px] rounded-full bg-white shadow-md cursor-pointer hover:translate-y-[-6px] transition ease-in-out duration-500 hover:shadow-[-1px_6px_10px_0_rgba(150,150,150,0.5)]">
                <img src={facebookIcon} alt="" />
              </div>
              <div className="p-[10px] rounded-full bg-white shadow-md cursor-pointer hover:translate-y-[-6px] transition ease-in-out duration-500 hover:shadow-[-1px_6px_10px_0_rgba(150,150,150,0.5)]">
                <img src={discordIcon} alt="" />
              </div>
              <div className="p-[10px] rounded-full bg-white shadow-md cursor-pointer hover:translate-y-[-6px] transition ease-in-out duration-500 hover:shadow-[-1px_6px_10px_0_rgba(150,150,150,0.5)]">
                <img src={twitterIcon} alt="" />
              </div>
              <div className="p-[10px] rounded-full bg-white shadow-md cursor-pointer hover:translate-y-[-6px] transition ease-in-out duration-500 hover:shadow-[-1px_6px_10px_0_rgba(150,150,150,0.5)]">
                <img src={telegramIcon} alt="" />
              </div>
            </div>
          </Fade>
          <Fade>
            <img src={image} alt="" className="my-[40px] sm:h-[50vh]" />
          </Fade>
        </div>
        <div className="flex flex-col items-center sm:w-[70vw] mx-auto">
          <div className="sm:flex block items-center justify-between sm:w-full w-[90vw] sm:mt-[0px] mt-[10px]">
            <div className="sm:text-[42px] text-[28px] max-w-[600px] text-left">
              Step into the future of banking with{" "}
              <span className="text-[#2E30B2]">BiorBank</span>
            </div>
            <div className="sm:max-w-[400px] sm:text-right text-left ">
              Experience seamless transactions, decentralized finance, and a
              world of possibilities at your fingertips. Welcome to the
              evolution of banking.
            </div>
          </div>
          <Fade>
            <img
              src={video}
              alt=""
              className="sm:w-[70vw] w-[90vw] sm:my-[50px] my-[20px]"
            />
          </Fade>
        </div>
        <div className="w-full flex flex-col items-center bg-black py-[40px] relative">
          <img src={stars} alt="" className="absolute top-0" />
          <div className="sm:text-[42px] text-[28px] text-white max-w-[700px] text-center">
            Embrace a diverse ecosystem with BiorBank
          </div>

          <div className="max-w-[700px] text-center text-[#667085]">
            Your gateway to multi-chain functionality and cross-platform
            accessibility. Seamlessly navigate across various chains and
            platforms for a truly interconnected banking experience.
          </div>
          <div className="flex sm:gap-[20px] gap-[10px] text-[14px] sm:flex-row flex-col items-center my-[40px] text-[#d0d0d0]">
            <div className="bg-black shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] rounded-full p-[2px] cursor-pointer bg-gradient-to-br from-[#202020] to-[#f0f0f0]">
              <div className="px-[32px] py-[10px] bg-black rounded-full">
                Desktop
              </div>
            </div>
            <div className="sm:w-[100px] w-[2px] sm:h-[2px] h-[60px] bg-[#303030]" />

            <div className="bg-black shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] rounded-full p-[2px] cursor-pointer bg-gradient-to-br from-[#202020] to-[#f0f0f0]">
              <div className="px-[32px] py-[10px] bg-black rounded-full">
                iOS & Android App
              </div>
            </div>
            <div className="sm:w-[100px] w-[2px] sm:h-[2px] h-[60px] bg-[#303030]" />
            <div className="bg-black shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] rounded-full p-[2px] cursor-pointer bg-gradient-to-br from-[#202020] to-[#f0f0f0]">
              <div className="px-[32px] py-[10px] bg-black rounded-full">
                Web Dashboard
              </div>
            </div>
          </div>

          <div className="px-[24px] py-[12px] text-[14px] rounded-full bg-gradient-to-tr from-[#1C1460] to-[#2E31B7] text-white cursor-pointer hover:translate-y-[-6px] transition ease-in-out duration-500 hover:shadow-[-1px_6px_10px_0_rgba(91,29,238,0.5)]">
            Get Bior Bank
          </div>
        </div>

        <div className="bg-[#F3F7F9]">
          <div className="flex flex-col items-center sm:w-[70vw] w-[90vw] mx-auto py-[40px] ">
            <div className="sm:flex items-center justify-between w-full">
              <div className="sm:text-[42px] text-[28px] max-w-[800px] text-left">
                Endless possibility with{" "}
                <span className="text-[#2E30B2]">BiorBank's</span> functions
              </div>
              <div className="max-w-[400px] sm:text-right text-left">
                From effortless transactions to powerful financial management
                tools, explore a world of convenience and control at your
                fingertips.
              </div>
            </div>
            <div className="sm:flex items-center gap-[40px] w-full my-[20px] sm:space-y-0 space-y-[40px]">
              <div className="rounded-[24px] bg-white shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] flex flex-col items-center justify-between sm:w-[30vw] w-full sm:h-[550px]">
                <div className="text-[#070623] sm:text-[32px] text-[32px] max-w-[300px] text-center sm:mt-[40px] my-[10px]">
                  Interact With Web2 Banks
                </div>
                <Fade cascade className="">
                  <img src={cardsIcon} alt="" className="max-w-[70vw]" />
                </Fade>
              </div>

              <div className="rounded-[24px] bg-white shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] flex flex-col items-center justify-between sm:w-[calc(40vw-40px)] w-full sm:h-[550px] space-y-[20px]">
                <div className="text-[#070623] sm:text-[32px] text-[32px] max-w-[300px] text-center sm:mt-[40px] mt-[10px]">
                  Cross-Chain swaps
                </div>
                <Fade cascade className="">
                  <img src={asset1} alt="" className="max-w-[70vw]" />
                </Fade>
              </div>
            </div>
            <div className="sm:flex items-center gap-[40px] w-full my-[20px] sm:space-y-0 space-y-[40px]">
              <div className="rounded-[24px] bg-white shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] flex flex-col items-center justify-between sm:w-[calc(40vw-40px)] w-full sm:h-[550px] space-y-[20px]">
                <div className="text-[#070623] sm:text-[32px] text-[32px] max-w-[300px] text-center sm:mt-[40px] mt-[10px]">
                  Transfer Crypto With Friends
                </div>
                <Fade cascade>
                  <img src={asset3} alt="" className="max-w-[70vw]" />
                </Fade>
              </div>
              <div className="rounded-[24px] bg-white shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] flex flex-col items-center justify-between sm:w-[30vw] w-full sm:h-[550px] space-y-[50px]">
                <div className="text-[#070623] sm:text-[32px] text-[32px] max-w-[300px] text-center sm:mt-[40px] mt-[10px]">
                  Pay Your Bills
                </div>
                <Fade cascade>
                  <img src={asset4} alt="" className="max-w-[70vw]" />
                </Fade>
              </div>
            </div>
            <div className="sm:flex items-center gap-[40px] w-full my-[20px] sm:space-y-0 space-y-[40px]">
              <div className="rounded-[24px] bg-white shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] flex flex-col items-center justify-between sm:w-[calc(35vw-20px)] w-full sm:h-[550px] space-y-[20px]">
                <div className="text-[#070623] sm:text-[32px] text-[32px] max-w-[300px] text-center sm:mt-[40px] mt-[10px]">
                  Earn Yield & Take Loans
                </div>
                <Fade>
                  <img src={asset5} alt="" className="max-w-[70vw]" />
                </Fade>
              </div>
              <div className="rounded-[24px] bg-white shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] flex flex-col items-center justify-between sm:w-[calc(35vw-20px)] w-full sm:h-[550px] space-y-[50px]">
                <div className="text-[#070623] sm:text-[32px] text-[32px] max-w-[300px] text-center sm:mt-[40px] mt-[10px]">
                  Track Your NFTs And Defi Positions
                </div>
                <Fade>
                  <img src={asset2} alt="" className="max-w-[70vw]" />
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center py-[40px]">
          <div className="sm:text-[42px] text-[36px] max-w-[700px] font-bold text-center">
            EVM Chains
          </div>
          <div className="max-w-[900px] text-center mt-[20px] text-[#667085]">
            Your gateway to multi-chain functionality and cross-platform
            accessibility.
          </div>
          <div className="grid grid-cols-2 sm:flex sm:gap-[20px] gap-[10px] my-[20px]">
            <div className="bg-white shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] p-[8px] pr-[20px] sm:gap-[4px] rounded-full text-[#A5A5A5] cursor-pointer flex items-center">
              <img src={ethereumIcon} alt="" className="w-[36px]" />
              <div>EVM chains</div>
            </div>
            <div className="bg-white shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] p-[8px] pr-[20px] sm:gap-[4px] rounded-full text-[#A5A5A5] cursor-pointer flex items-center">
              <img src={ethereumIcon} alt="" className="w-[36px]" />
              <div>Pows chains</div>
            </div>
            <div className="bg-white shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] p-[8px] pr-[20px] sm:gap-[4px] rounded-full text-[#A5A5A5] cursor-pointer flex items-center">
              <img src={ethereumIcon} alt="" className="w-[36px]" />
              <div>Cosmos Chains</div>
            </div>
            {/* <div className="bg-white shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] p-[4px] pr-[20px] gap-[4px] rounded-full text-[#A5A5A5] cursor-pointer flex items-center">
              <img src={ethereumIcon} alt="" className="w-[36px]" />
              <div>Extension</div>
            </div> */}
          </div>

          <div className="px-[24px] py-[12px] rounded-full bg-gradient-to-tr from-[#1C1460] to-[#2E31B7] text-white cursor-pointer hover:translate-y-[-6px] transition ease-in-out duration-500 hover:shadow-[-1px_6px_10px_0_rgba(91,29,238,0.5)]">
            + 15 more
          </div>
        </div>
        <div className="w-full flex flex-col items-center py-[40px] bg-[#F3F7F9]">
          <div className="sm:text-[42px] text-[36px] font-bold text-[#070623]">
            Our Partner
          </div>
          <div className="sm:flex items-center gap-[40px] mt-[40px] sm:space-y-0 space-y-[40px]">
            <Zoom>
              <img src={mayaIcon} alt="" />
              {/* <img src={thorchainIcon} alt="" />
              <img src={chainflipIcon} alt="" />
              <img src={layerzeroIcon} alt="" /> */}
            </Zoom>
          </div>
        </div>
        <div className="w-full flex flex-col items-center py-[40px]">
          <img src={logo} alt="" />
          <div className="sm:text-[40px] text-[24px] text-center max-w-[90vw] my-[20px] sm:max-w-[800px]">
            Need to tal to us directly?{" "}
            <span className="text-[#2E30B2]">Contact Us</span>
          </div>
          <div className="sm:max-w-[800px] w-[90vw] text-center text-[#667085] text-[14px]">
            Experience seamless transactions, decentralized finance, and a world
            of possibilities at your fingertips. Welcome to the evolution of
            banking.
          </div>
          <div className="flex items-center gap-[40px] my-[24px]">
            <img src={artboard1} alt="" />
            <img src={artboard2} alt="" />
          </div>
          <div>Connect with us</div>
          <div className="flex items-center gap-[30px] my-[20px]">
            <div className="p-[10px] rounded-full bg-white shadow-md cursor-pointer  hover:translate-y-[-6px] transition ease-in-out duration-500 hover:shadow-[-1px_6px_10px_0_rgba(150,150,150,0.5)]">
              <img src={facebookIcon} alt="" />
            </div>
            <div className="p-[10px] rounded-full bg-white shadow-md cursor-pointer hover:translate-y-[-6px] transition ease-in-out duration-500 hover:shadow-[-1px_6px_10px_0_rgba(150,150,150,0.5)]">
              <img src={discordIcon} alt="" />
            </div>
            <div className="p-[10px] rounded-full bg-white shadow-md cursor-pointer hover:translate-y-[-6px] transition ease-in-out duration-500 hover:shadow-[-1px_6px_10px_0_rgba(150,150,150,0.5)]">
              <img src={twitterIcon} alt="" />
            </div>
            <div className="p-[10px] rounded-full bg-white shadow-md cursor-pointer hover:translate-y-[-6px] transition ease-in-out duration-500 hover:shadow-[-1px_6px_10px_0_rgba(150,150,150,0.5)]">
              <img src={telegramIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="w-full bg-gradient-to-b from-[#2E31B7] to-[#1C1460] py-[24px]">
          <div className="text-[14px] flex sm:gap-[40px] gap-[16px] flex-wrap w-[90%] mx-auto items-center justify-center text-white">
            <div className="cursor-pointer hover:text-[#a0a0a0]">
              For Business
            </div>
            <div className="cursor-pointer hover:text-[#a0a0a0]">Media</div>
            <div className="cursor-pointer hover:text-[#a0a0a0]">
              Contact Us
            </div>
            <div className="cursor-pointer hover:text-[#a0a0a0]">About Us</div>
            <div className="cursor-pointer hover:text-[#a0a0a0]">Legal</div>
            <div className="cursor-pointer hover:text-[#a0a0a0]">
              Privacy Policy
            </div>
          </div>
        </div>
      </div>

      <Modal show={menu} onHide={() => setMenu(false)} />
    </div>
  );
}

export default App;
