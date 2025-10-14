const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-ascend-dark-blue font-playfair flex w-2/3 flex-col items-center gap-10 rounded-md p-10">
      <div className="w-1/2 bg-blue-200 p-5 text-center text-2xl">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-3">
        <div className="font-playfair w-full rounded-full bg-blue-400 p-5 text-center text-2xl">
          {props.text2}
        </div>
        <div className="font-playfair w-full rounded-full bg-blue-400 p-5 text-center text-2xl">
          {props.text2}
        </div>
      </div>
      <div className="-color font-playfair w-1/2 bg-blue-600 p-5 text-center text-2xl text-white">
        {props.text3}
      </div>
    </div>
  );
};
export default Example;
