import "./App.css";
import logo from "./assets/Biorbank.svg";
import polygon2 from "./assets/Polygon 2.svg";
import polygon3 from "./assets/Polygon 3.svg";
import facebookIcon from "./assets/facebook-big.svg";
import discordIcon from "./assets/discord-big.svg";
import twitterIcon from "./assets/Twitter.svg";
import telegramIcon from "./assets/Telegram.svg";
import image from "./assets/image.svg";
import video from "./assets/video.svg";
import cardsIcon from "./assets/pngegg (67) 1.svg";
import asset1 from "./assets/Asset 1 1.svg";
import asset2 from "./assets/Asset 1 2.svg";
import asset3 from "./assets/Asset 1 3.svg";
import asset4 from "./assets/Asset 1 4.svg";
import asset5 from "./assets/Asset 1 5.svg";
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
            <div className="px-[14px] py-[10px] rounded-full bg-[#2E30B2] text-white cursor-pointer sm:z-[200] hover:translate-y-[-6px] transition ease-in-out duration-500 hover:shadow-[-1px_6px_10px_0_rgba(91,29,238,0.5)]">
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
          className="top-0 absolute sm:left-0 left-[-50vw]"
        />
        <img
          src={polygon3}
          alt=""
          className="top-0 absolute sm:right-0 right-[-50vw]"
        />
      </>
      <div className="pt-[100px] ">
        <div className="flex flex-col items-center mx-auto">
          <div className="sm:text-[72px] text-[44px] font-bold text-[#070623] flex gap-[10px]">
            Be Your Bank
          </div>
          <Fade cascade>
            <div className="text-center">
              BiorBank is the first ever Web3 banking app, for everyone
            </div>
            <div className="mt-[40px] px-[14px] py-[10px] text-[14px] rounded-full bg-[#2E30B2] text-white cursor-pointer sm:z-0 z-[120] hover:translate-y-[-6px] transition ease-in-out duration-500 hover:shadow-[-1px_6px_10px_0_rgba(91,29,238,0.5)]">
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
            <img
              src={image}
              alt=""
              className="my-[40px] sm:block hidden h-[50vh]"
            />
          </Fade>
        </div>
        <div className="flex flex-col items-center sm:w-[70vw] mx-auto">
          <div className="sm:flex block items-center justify-between w-full sm:mt-[0px] mt-[300px]">
            <div className="sm:text-[42px] text-[28px] max-w-[600px] text-center sm:text-left">
              Step into the future of banking with{" "}
              <span className="text-[#2E30B2]">BiorBank</span>
            </div>
            <div className="sm:max-w-[400px] sm:text-right text-center ">
              Experience seamless transactions, decentralized finance, and a
              world of possibilities at your fingertips. Welcome to the
              evolution of banking.
            </div>
          </div>
          <Fade>
            <img src={video} alt="" className="w-[70vw] my-[50px]" />
          </Fade>
        </div>
        <div className="w-full flex flex-col items-center bg-[#F6F5FA] py-[40px]">
          <div className="sm:text-[42px] text-[28px] max-w-[700px] text-center">
            Embrace a diverse ecosystem with{" "}
            <span className="text-[#2E30B2]">BiorBank</span>
          </div>

          <div className="max-w-[900px] text-center">
            Your gateway to multi-chain functionality and cross-platform
            accessibility. Seamlessly navigate across various chains and
            platforms for a truly interconnected banking experience.
          </div>
          <div className="flex sm:gap-[20px] gap-[10px] text-[14px] sm:flex-row flex-col items-center my-[40px]">
            <div className="bg-white py-[12px] shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] px-[18px] rounded-full text-[#A5A5A5] cursor-pointer">
              Extension
            </div>
            <div className="sm:w-[100px] w-[4px] sm:h-[4px] h-[60px] bg-[#A5A5A5]" />
            <div className="bg-white py-[12px] shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] px-[18px] rounded-full text-[#A5A5A5] cursor-pointer">
              iOS & Android App
            </div>
            <div className="sm:w-[100px] w-[4px] sm:h-[4px] h-[60px] bg-[#A5A5A5]" />
            <div className="bg-white py-[12px] shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] px-[18px] rounded-full text-[#A5A5A5] cursor-pointer">
              Web Dashboard
            </div>
          </div>

          <div className="px-[14px] py-[10px] text-[14px] rounded-full bg-[#2E30B2] text-white cursor-pointer hover:translate-y-[-6px] transition ease-in-out duration-500 hover:shadow-[-1px_6px_10px_0_rgba(91,29,238,0.5)]">
            Downlaod Now
          </div>
        </div>

        <div className="flex flex-col items-center sm:w-[70vw] w-[90vw] mx-auto py-[40px]">
          <div className="sm:flex items-center justify-between w-full">
            <div className="sm:text-[42px] text-[28px] max-w-[800px] text-center sm:text-left">
              Endless possibility with{" "}
              <span className="text-[#2E30B2]">BiorBank's</span> functions
            </div>
            <div className="max-w-[400px] sm:text-right text-center">
              From effortless transactions to powerful financial management
              tools, explore a world of convenience and control at your
              fingertips.
            </div>
          </div>
          <div className="sm:flex items-center gap-[40px] w-full my-[20px] sm:space-y-0 space-y-[40px]">
            <div className="rounded-[24px] bg-white shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] flex flex-col items-center justify-center sm:w-[30vw] w-full h-[550px]">
              <div className="text-[#070623] sm:text-[32px] text-[32px] max-w-[400px] text-center">
                Interact With Web2 Banks
              </div>
              <Fade cascade className="">
                <img src={cardsIcon} alt="" className="mt-[-80px]" />
              </Fade>
            </div>

            <div className="rounded-[24px] bg-white shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] flex flex-col items-center justify-center sm:w-[calc(40vw-40px)] w-full h-[550px] space-y-[20px]">
              <div className="text-[#070623] sm:text-[32px] text-[32px] max-w-[400px] text-center">
                Pay your bills
              </div>
              <Fade cascade className="">
                <img src={asset1} alt="" />
              </Fade>
            </div>
          </div>
          <div className="sm:flex items-center gap-[40px] w-full my-[20px] sm:space-y-0 space-y-[40px]">
            <div className="rounded-[24px] bg-white shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] flex flex-col items-center justify-center sm:w-[calc(40vw-40px)] w-full h-[550px] space-y-[20px]">
              <div className="text-[#070623] sm:text-[32px] text-[32px] max-w-[400px] text-center">
                Support for hardware wallets
              </div>
              <Fade cascade>
                <img src={asset3} alt="" />
              </Fade>
            </div>
            <div className="rounded-[24px] bg-white shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] flex flex-col items-center justify-center sm:w-[30vw] w-full h-[550px] space-y-[50px]">
              <div className="text-[#070623] sm:text-[32px] text-[32px] max-w-[400px] text-center">
                Cross-chain swaps
              </div>
              <Fade cascade>
                <img src={asset4} alt="" />
              </Fade>
            </div>
          </div>
          <div className="sm:flex items-center gap-[40px] w-full my-[20px] sm:space-y-0 space-y-[40px]">
            <div className="rounded-[24px] bg-white shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] flex flex-col items-center justify-center sm:w-[calc(35vw-40px)] w-full h-[550px] space-y-[20px]">
              <div className="text-[#070623] sm:text-[32px] text-[32px] max-w-[500px] text-center">
                Track your NFTs and DeFi positions
              </div>
              <Fade>
                <img src={asset5} alt="" />
              </Fade>
            </div>
            <div className="rounded-[24px] bg-white shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] flex flex-col items-center justify-center sm:w-[calc(35vw-40px)] w-full h-[550px] space-y-[50px]">
              <div className="text-[#070623] sm:text-[32px] text-[32px] max-w-[500px] text-center">
                Stake And Delegate your crypto
              </div>
              <Fade>
                <img src={asset2} alt="" />
              </Fade>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center py-[40px]">
          <div className="sm:text-[42px] text-[36px] max-w-[700px] text-center">
            EVM Chains
          </div>
          <div className="max-w-[900px] text-center mt-[20px]">
            Your gateway to multi-chain functionality and cross-platform
            accessibility.
          </div>
          <div className="sm:flex sm:gap-[20px] items-center my-[40px] sm:space-y-0 space-y-[20px]">
            <div className="bg-white shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] p-[4px] pr-[20px] gap-[4px] rounded-full text-[#A5A5A5] cursor-pointer flex items-center">
              <img src={ethereumIcon} alt="" className="w-[36px]" />
              <div>Extension</div>
            </div>
            <div className="bg-white shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] p-[4px] pr-[20px] gap-[4px] rounded-full text-[#A5A5A5] cursor-pointer flex items-center">
              <img src={ethereumIcon} alt="" className="w-[36px]" />
              <div>Extension</div>
            </div>
            <div className="bg-white shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] p-[4px] pr-[20px] gap-[4px] rounded-full text-[#A5A5A5] cursor-pointer flex items-center">
              <img src={ethereumIcon} alt="" className="w-[36px]" />
              <div>Extension</div>
            </div>
            <div className="bg-white shadow-[2px_4px_40px_0_rgba(170,170,170,0.25)] p-[4px] pr-[20px] gap-[4px] rounded-full text-[#A5A5A5] cursor-pointer flex items-center">
              <img src={ethereumIcon} alt="" className="w-[36px]" />
              <div>Extension</div>
            </div>
          </div>

          <div className="px-[14px] py-[10px] rounded-full bg-[#2E30B2] text-white cursor-pointer hover:translate-y-[-6px] transition ease-in-out duration-500 hover:shadow-[-1px_6px_10px_0_rgba(91,29,238,0.5)]">
            + 150 more
          </div>
        </div>
        <div className="w-full flex flex-col items-center py-[40px] bg-[#F6F5FA]">
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
          <div className="sm:text-[40px] text-[24px] text-center max-w-[300px] my-[20px] sm:max-w-[800px]">
            Need to tal to us directly?{" "}
            <span className="text-[#2E30B2]">Contact Us</span>
          </div>
          <div className="max-w-[800px] text-center">
            Experience seamless transactions, decentralized finance, and a world
            of possibilities at your fingertips. Welcome to the evolution of
            banking.
          </div>
          <div className="sm:flex items-center gap-[40px] my-[24px] sm:space-y-0 space-y-[20px]">
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
          <div className="text-[14px] sm:flex sm:gap-[40px] w-[90%] mx-auto grid grid-cols-2 items-center justify-center text-white">
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
