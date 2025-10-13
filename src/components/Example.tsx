const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-8 rounded-sm bg-red-200 p-10 text-2xl">
      <div className="w-1/2 bg-blue-200 p-5 text-center">{props.text1}</div>
      <div className="flex w-1/2 flex-row gap-x-5">
        <div className="w-full rounded-full bg-blue-400 p-5 text-center">
          {props.text2}
        </div>
        <div className="w-full rounded-full bg-blue-400 p-5 text-center">
          {props.text2}
        </div>
      </div>
      <div className="w-1/2 bg-blue-600 p-5 text-center text-white">
        {props.text3}
      </div>
    </div>
  );
};
export default Example;
