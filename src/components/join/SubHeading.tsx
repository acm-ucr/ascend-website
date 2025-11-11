interface SubHeadingProps {
    title: string;
}

const SubHeading = ({ title }: SubHeadingProps) => {
    return (
        <div className="text-center my-9">
            <hr className="w-[90%] mx-auto border-t border-black my-0"/>
            <div className="my-8">
                <h2 className="text-ascend-red-orange font-playfair text-3xl font-bold">{title}</h2>
            </div>
            <hr className="w-[90%] mx-auto border-t border-black my-0"/>
        </div>
    );
}

export default SubHeading;