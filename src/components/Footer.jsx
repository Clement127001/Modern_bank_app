import styles from "../style";
import { logo } from "../assets";
import { footerLinks } from "../constants";
import { socialMedia } from "../constants";

const Footer = () => (
  //main footer
  <div className={`w-full  flex flex-col items-center`}>
    {/* site map */}
    <div
      className={`flex flex-row flex-1
flex-wrap w-[300px] flex-start w-full`}
    >
      {/* bank logo and info */}
      <div className="flex-1 flex flex-col justify-start mr-10 sm:ml-12 ml-5">
        <img
          src={logo}
          alt="hoo Bank"
          key="hooBank"
          className="w-[140px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} max-w-[320px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      {/* comunity usefullinks partners */}
      <div className="flex-[1.5] flex flex-row  justify-around  sm:mt-3 mt-12">
        {footerLinks.map((footerlink, index) => (
          <div key={footerlink.title} className="flex-col ml-2">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="mt-2">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`${
                    index === footerlink.links.length - 1 ? "mb-0" : "mb-3"
                  }`}
                >
                  <a
                    href={link.link}
                    className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] hover:text-[#33bbcf]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    {/* copyright and socialmedia icons */}
    <div className="  flex sm:flex-row flex-col justify-around mt-16 w-full items-center border-t-[1px]border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-dimWhite text-[14px] leading-[20px]">
        Copyright Ⓒ 2021 HooBank. All Rights Reserved.{" "}
      </p>

      <div className="flex flex-row">
        {socialMedia.map((social, index) => (
          <img
            src={social.icon}
            className={`w-[24px] h-[24px] object-contain ${
              index === socialMedia.length - 1 ? "ml-0" : "mr-4"
            } sm:mt-0 mt-4 mb-10 `}
          />
        ))}
      </div>
    </div>
  </div>
);
export default Footer;
