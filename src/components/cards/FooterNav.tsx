import { Link } from "react-router-dom";

const footerNavElements = [
  {
    id: 1,
    title: "Explores",
    links: [
      { text: "Communities", href: "https://www.youtube.com" },
      { text: "Recuiter", href: "" },
      { text: "Jobs", href: "" },
      { text: "Events", href: "" },
      { text: "Forum", href: "" },
    ],
  },
  {
    id: 2,
    title: "Hire Learning",
    links: [
      { text: "Articles", href: "" },
      { text: "Guides", href: "" },
      { text: "Templates", href: "" },
      { text: "Reports", href: "" },
      { text: "Courses", href: "" },
    ],
  },
  {
    id: 3,
    title: "Resources",
    links: [
      { text: "Blogs", href: "" },
      { text: "Podcast", href: "" },
      { text: "Content library", href: "" },
    ],
  },
  {
    id: 4,
    title: "Product",
    links: [
      { text: "Attract", href: "" },
      { text: "Quality", href: "" },
      { text: "Hire", href: "" },
      { text: "Pricing", href: "" },
      { text: "Customers", href: "" },
      { text: "Partners", href: "" },
    ],
  },
  {
    id: 5,
    title: "Support",
    links: [
      { text: "Help center", href: "" },
      { text: "Developer API", href: "" },
      { text: "Status", href: "" },
    ],
  },
  {
    id: 6,
    title: "For job seekers",
    links: [
      { text: "Go pro", href: "" },
      { text: "Code of conduct", href: "" },
      { text: "Financial statement", href: "" },
      { text: "Press release", href: "" },
      { text: "Prospectus", href: "" },
    ],
  },
  {
    id: 7,
    title: "Integrations",
    links: [
      { text: "Slack", href: "" },
      { text: "Xero", href: "" },
      { text: "1 Password", href: "" },
      { text: "Sage", href: "" },
      { text: "Netsuite", href: "" },
    ],
  },
  {
    id: 8,
    title: "Solutions",
    links: [
      { text: "Human resources", href: "" },
      { text: "Sales & marketing", href: "" },
      { text: "Financial", href: "" },
      { text: "Investor", href: "" },
      { text: "Revenue", href: "" },
    ],
  },
  {
    id: 9,
    title: "Company",
    links: [
      { text: "Find Jobs", href: "/" },
      { text: "For Recruiters", href: "/recruiter" },
      { text: "Blogs", href: "/blogs" },
      { text: "Career tips", href: "/careertips" },
    ],
  },
  {
    id: 10,
    title: "Policies",
    links: [
      { text: "Community guidelines", href: "" },
      { text: "Terms of use", href: "" },
      { text: "Privacy policy", href: "" },
      { text: "Legal cookies", href: "" },
    ],
  },
];

export const FooterNav = () => {
  return (
    <div className="container mx-auto flex justify-center my-10 px-1">
      <ul className="flex flex-wrap justify-center gap-10">
        {footerNavElements.map((item) => (
          <li key={item.id}>
            <div className=" w-[150px] md:w-[190px] px-5">
              <h1 className="font-bold mb-2 sm:text-lg text-base">
                {item.title}
              </h1>
              <ul>
                {item.links.map((link, i) => (
                  <li
                    key={i}
                    className="mb-1 hover:text-gray-500/70 text-gray-500 sm:text-base text-sm"
                  >
                    <Link to={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
