interface SubHeadingProps {
  title: string;
}

const SubHeading = ({ title }: SubHeadingProps) => {
  return (
    <div className="my-9 text-center">
      <hr className="mx-auto my-0 w-[90%] border-t border-black" />
      <div className="my-8">
        <h2 className="text-ascend-red-orange font-playfair text-3xl font-bold">
          {title}
        </h2>
      </div>
      <hr className="mx-auto my-0 w-[90%] border-t border-black" />
    </div>
  );
};

export default SubHeading;
