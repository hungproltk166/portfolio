import { GitHub, Instagram, Facebook, LinkedIn } from "@mui/icons-material";
import { wallpaper_1, wallpaper_2 } from "../assets/images";

interface ILinkProps {
  element: any;
  path: string;
}

export interface ICurrentWork {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  haveWorked: string[];
  mainWebsite: string;
}

interface IFolders {
  githubLink: string;
  externalLink: string;
  title: string;
  description: string;
  technologies: string[];
  delay: number;
}

interface ICurrentProjects {
  githubLink: string;
  externalLink: string;
  wallPaper: string;
  title: string;
  description: string;
  technologies: string[];
}

export const informationLink: ILinkProps[] = [
  {
    element: <GitHub />,
    path: "https://github.com/hungproltk166",
  },
  {
    element: <Instagram />,
    path: "https://www.instagram.com/",
  },
  {
    element: <Facebook />,
    path: "https://www.facebook.com/",
  },
  {
    element: <LinkedIn />,
    path: "https://www.linkedin.com/in/h%C6%B0ng-l%C3%AA-qu%E1%BB%91c-4a2051265/",
  },
];

export const currentTech: string[] = [
  "Javascript",
  "ReactJS",
  "Node.js",
  "Typescript",
  "Sass",
  "Mongoose",
];

export const CURRENT_WORK: ICurrentWork[] = [
  {
    companyName: "FPT Software",
    mainWebsite: "https://www.fpt-software.com/",
    position: "Internship",
    startDate: "August 2021 - ",
    endDate: "October 2021",
    haveWorked: [
      "Learn about the workings of a system and build basic website interfaces as required through VueJS framework",
      "Build basic interface, and learn some useful tool such as gitlab, nginx, intellji",
      "Learn some software skills such as work with my team or talk with leader how to correctly",
    ],
  },

  {
    companyName: "HD WebSoft",
    position: "Fresher Front-end",
    startDate: "May 2022 - ",
    mainWebsite: "https://www.hdwebsoft.com/",
    endDate: "November 2022",
    haveWorked: [
      "Built user interface based on user interface design ( figma ) and get requirements from client",
      "Built UI through NextJS framework and ChakraUI library and also use React-query for some mini projects in company",
      "Coded with Web3 UI such as Metamask, E-wallet for client and improve performance of product to better",
      "Integration with some websites and libraries to calculate and process payments, such as Stripe, Google Analytics, and Paypal",
      "Learn some git commands to manage projects such as merge, rebase, cherry-pick, branch, checkout",
    ],
  },
];

export const FOLDER_PROJECTS: IFolders[] = [
  {
    title: "Product ecommerce WebSite",
    description:
      "This project built  with the work hard of the intern ReactJS =))",
    technologies: ["HTML5", "CSS", "js", "ReactJS", "Express", "MogoDB", "NodeJS"],
    externalLink: "https://hunglee-tiki.vercel.app/",
    githubLink: "https://github.com/hungproltk166",
    delay: 1,
  },

  {
    title: "Order summary card",
    description:
      "This project built a simple card UI with the main content as order summary card product and  responsive for multiples devices",
    technologies: ["HTML5", "CSS"],
    externalLink: "https://marvelous-bunny-d5f39d.netlify.app/",
    githubLink: "https://github.com/hungproltk166",
    delay: 1,
  },




];

export const CURRENT_PROJECTS: ICurrentProjects[] = [

];
