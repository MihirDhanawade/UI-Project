import Section1 from "./components/Section1/section1";
import Section2 from "./components/Section2/section2";

const users = [
  {
    img: "https://shorturl.at/Wdhsm",
    intro: "",
    tag: "Satisfied",
  },
  {
    img: "https://shorturl.at/Mi8yr",
    intro: "",
    tag: "Underserved",
  },
  {
    img: "https://shorturl.at/rk1oj",
    intro: "",
    tag: "Underbanked",
  },
  {
    img: "https://shorturl.at/6O0UN",
    intro: "",
    tag: "Projects",
  },
];
const App = () => {
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
