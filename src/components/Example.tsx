const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-ascend-dark-blue font-playfair flex w-2/3 flex-col items-center gap-10 rounded-lg p-10">
      <div className="bg-ascend-red-orange w-1/2 p-5 text-center text-2xl text-white">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-6">
        <div className="bg-ascend-light-orange font-nunito w-full rounded-4xl p-5 text-center text-2xl">
          {props.text2}
        </div>
        <div className="bg-ascend-light-orange font-nunito w-full rounded-4xl p-5 text-center text-2xl">
          {props.text2}
        </div>
      </div>
      <div className="bg-ascend-peach w-1/2 p-5 text-center text-2xl">
        {props.text3}
      </div>
    </div>
  );
};
export default Example;
