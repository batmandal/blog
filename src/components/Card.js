export const Card = (props) => {
  return (
    <div className="p-[16px] gap-[16px] flex flex-col border-gray-300 border-solid border-2 rounded-xl ">
      <div>
        <img src={props.pic} p />
      </div>

      <div className="flex flex-col gap-[16px]">
        <span>{props.category}</span>
        <h3>{props.title}</h3>
        <p>{props.date}</p>
      </div>
    </div>
  );
};
