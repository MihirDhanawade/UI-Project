import Rightcard from "./Rightcard";

const Rightcontent = (props) => {
  console.log(props);

  return (
    <div
      id="right"
      className="flex overflow-x-auto rounded-4xl flex-nowrap gap-2 h-full p-4 w-2/3 "
    >
      {props.users.map(function (elem, idx) {
        return <Rightcard key={idx} id={idx} img={elem.img} tag={elem.tag} />;
      })}
    </div>
  );
};

export default Rightcontent;
