// import  DrawerNav  from "./DrawerNav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquare, faGrinHearts, faHeader, faHeart, faHeartbeat, faHeartCircleBolt, faHeartCirclePlus, faHeartCircleXmark, faHeartPulse, faLocation, faLocationDot, faLocationPin, faLocationPinLock, faMap, faMapLocation, faSearch, faUser, faUsersViewfinder  } from "@fortawesome/free-solid-svg-icons";
export const HeaderSeries = () => {
    return (
        <div>
            {/* < DrawerNav/> */}
            <header>
                <div className="py-[1%] px-[11%]  flex flex-row items-center justify-between bg-green-900">
                    <div className="cursor-pointer flex items-center gap-2  text-white ">
                        <div className="w-[15px] flex flex-col gap-1 ">
                            <div className="toggle-line border-1"></div>
                            <div className="toggle-line border-1"></div>
                        </div>
                        <span className="font-medium">Menu</span>
                    </div>
                    <div className="">
                        <img src="logo.svg" className="w-20" alt="" />
                    </div>
                    <ul className="flex gap-20  font-medium">
                        <li className="text-white ">
                            <a href="#" className="flex items-center hover:opacity-70">
                                <div>  <FontAwesomeIcon icon={faSearch} className="pe-2" /></div>
                                <div className="lg:block hidden">Seacrh</div>
                            </a>
                        </li>
                        <li className="text-white ">
                            <a href="#" className="flex items-center hover:opacity-70">
                                <div><FontAwesomeIcon icon={faLocationDot} className="pe-2" /></div>
                                <div className="lg:block hidden">Stroe locater</div>
                            </a>
                        </li>
                        <li className="text-white">
                            <a href="#" className="flex items-center hover:opacity-70">
                                <div> <FontAwesomeIcon icon={faHeart} className="pe-2" /></div>
                                <div className=" lg:block hidden">Fvourties</div>
                            </a>
                        </li>
                    </ul>
                   
                    </div>
                
            </header>
       </div>
    );
};



export default HeaderSeries;