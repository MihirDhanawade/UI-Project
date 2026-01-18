import Leftcontent from "./leftcontent";
import Rightcontent from "./rightcontent";

const Page1content = (props) => {
  return (
    <div className="pb-16 pt-4 flex item-center gap-10  h-[90vh] px-18">
      <Leftcontent />
      <Rightcontent users={props.users} />
    </div>
  );
};

export default Page1content;
