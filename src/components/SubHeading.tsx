interface SubHeadingProps {
  title: string;
}

const SubHeading = ({ title }: SubHeadingProps) => {
  return (
    <div className="my-9 w-1/2 text-center">
      <div className="border-t border-black" />
      <div className="my-8">
        <p className="text-ascend-red-orange font-playfair text-3xl font-bold">
          {title}
        </p>
      </div>
      <div className="border-t border-black" />
    </div>
  );
};

export default SubHeading;
