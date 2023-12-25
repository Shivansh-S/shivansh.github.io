import { Image } from "@chakra-ui/react";
import {
  SiHtml5,
  SiCss3,
  SiChakraui,
  SiJavascript,
  SiReact,
  SiRedux,
  SiPostman,
  SiGit,
  SiHeroku,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiAmazonaws ,
  SiNextdotjs 
} from "react-icons/si";

import { SiMui } from "react-icons/si";

const skillList = [
  {
    hover: {
      color: "#E44D26",
    },
    skill: "HTML",
    icon: <SiHtml5 className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "#264DE4",
    },
    skill: "CSS",
    icon: <SiCss3 className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "#F7DF1E",
    },
    skill: "JavaScript",
    icon: <SiJavascript className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "#53C1DE",
    },
    skill: "React JS",
    icon: <SiReact className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "#c2c2c2",
    },
    skill: "Next JS",
    icon: <SiNextdotjs  className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "#764ABC",
    },
    skill: "Redux",
    icon: <SiRedux className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "#007fff",
    },
    skill: "Material UI",
    icon: (
      <Image
        className="dev"
        width={"64px"}
        src={require("../assets/images/mui.png")}
        alt=""
      />
    ),
  },
  {
    hover: {
      color: "#38bdf8",
    },
    skill: "Tailwind CSS",
    icon: <SiTailwindcss className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "#7b11f8",
    },
    skill: "Bootstrap",
    icon: <SiBootstrap className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "#732FF9",
    },
    skill: "Express JS",
    icon: <SiExpress className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "black",
    },
    skill: "Mongo DB",
    icon: <SiMongodb className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "#99424F",
    },
    skill: "Node JS",
    icon: <SiNodedotjs className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "#DE4C36",
    },
    skill: "Postman",
    icon: <SiPostman className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "#DE4C36",
    },
    skill: "Git",
    icon: <SiGit className="dev" fontSize="4rem" />,
  },
  {
    hover: {
      color: "#ff9a2b",
    },
    skill: "AWS",
    icon: <SiAmazonaws  className="dev" fontSize="4rem" />,
  },
];

export default skillList;
