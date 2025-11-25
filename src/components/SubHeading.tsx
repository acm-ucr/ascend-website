interface SubHeadingProps {
  title: string;
}

const SubHeading = ({ title }: SubHeadingProps) => {
  return (
    <div className="mx-auto my-9 w-3/4 text-center">
      <div className="border-t border-black" />
      <div className="my-8">
        <p className="text-ascend-red-orange font-playfair text-3xl font-bold md:text-4xl">
          {title}
        </p>
      </div>
      <div className="border-t border-black" />
    </div>
  );
};

export default SubHeading;
