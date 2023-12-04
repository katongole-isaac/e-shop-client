/**
 * Main Component for footer section
 *
 */

const links_1 = [
  " Careers",
  " Blog",
  "About [company name]",
  "Investor Relations",
  "[company name] Devices",
  "[company name] Science",
];

const links_2 = [
  "Sell products on [company name]",
  "Sell on [company name] Business",
  " Sell apps on [company name]",
  "Become an Affiliate",
  "Advertise Your Products",
  "Self-Publish with Us",
  "Host an [company name] Hub",
  "› See More Make Money with Us",
];
const links_3 = [
  " [company name] Business Card",
  " Shop with Points",
  "  Reload Your Balance",
  "[company name] Currency Converter",
];

const Footer = () => {
  return (
    <div className=" min-w-[1100px]  bg-[#232F3E] mt-3 pt-5 pb-1 text-white">
      <div className="w-full m-auto max-w-[920px] mb-10 mt-8  flex space-x-20 justify-center">
        <FooterNav links={links_1} title="Get Know Us" />
        <FooterNav links={links_2} title="Make Money with Us" />
        <FooterNav links={links_3} title="[Company name] Payment Products" />
      </div>
      <div className="border-[.1px]  y-4 border-gray-500"> </div>
      <div className="h-full my-3 text-center text-[11px]">
        {/* <p> All &copy; copyright reserved </p> */}
        <p> &copy; 2000 - <span> { new Date().getFullYear() } </span>, Company Name or its affiliates </p>
      </div>
    </div>
  );
};

const FooterNav = ({ links, title }) => {
  return (
    <div className="space-y-2  max-w-[250px]">
      <p className="font-bold text-[14px]">{title}</p>
      <ul className="text-[13px] space-y-1">
        {links.map((link) => (
          <li
            key={link}
            className="hover:underline font-medium text-neutral-200 w-fit"
          >
            <a href="#"> {link} </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
