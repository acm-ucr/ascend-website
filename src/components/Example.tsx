const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-8 rounded-lg bg-red-200 p-10 text-center text-xl">
      <div className="w-1/2 bg-blue-200 p-5">{props.text1}</div>
      <div className="flex w-1/2 flex-row gap-4">
        <div className="w-full rounded-full bg-blue-300 p-5">{props.text2}</div>
        <div className="w-full rounded-full bg-blue-300 p-5">{props.text2}</div>
      </div>
      <div className="w-1/2 bg-blue-400 p-5 text-white">{props.text3}</div>
    </div>
  );
};
export default Example;
