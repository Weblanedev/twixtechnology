import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-blue-800 flex flex-col p-10 md:p-20 gap-10 md:px-[130px]">
      <div className="flex flex-col md:flex-row w-full items-center md:justify-between gap-5">
        <h3 className="text-white font-medium text-center md:text-left text-[22px] leading-[35.2px] md:w-[850px]">
          <strong className="text-[45px]">Got a Project?</strong> <br /> As
          design strategists, we bridge the gap between strategy conceived and
          strategy executed. We align the goals of your organisation to the
          needs of your customers — creating exceptional brand experiences.
        </h3>

        <Link
          to="/contact-us"
          className="text-base font-medium text-[#333] bg-white rounded-full px-7 md:px-12 py-4 md:py-5 hover:bg-gray-200 flex items-center justify-center gap-3 max-w-max"
        >
          Ready to get started →
        </Link>
      </div>

      <div className="flex items-center justify-center gap-10">
        <Link
          to="/"
          className="text-[14px] leading-[24px] font-medium text-white cursor-pointer"
        >
          Go Home
        </Link>
        <Link
          to="/about-us"
          className="text-[14px] leading-[24px] font-medium text-white cursor-pointer"
        >
          About Twix
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[24px] font-medium text-white cursor-pointer"
        >
          Explore Service
        </Link>
        {/* <Link
          to="/contact-us"
          className="text-[14px] leading-[24px] font-medium text-white cursor-pointer"
        >
          Contact
        </Link> */}
        {/* <Link
          to="/"
          className="text-[14px] leading-[24px] font-medium text-white cursor-pointer"
        >
          Terms & Privacy
        </Link> */}
      </div>

      <p className="text-[12px] capitalize leading-[24px] text-center text-gray-400">
        © 2023 Twix technology platforms Limited.
      </p>
    </div>
  );
};

export default Footer;
