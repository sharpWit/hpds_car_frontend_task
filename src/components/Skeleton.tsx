interface SkeletonProps {
  count?: number;
}

const Skeleton = ({ count = 20 }: SkeletonProps) => {
  return (
    <div className="flex flex-col gap-6">
      {Array.from({ length: count }).map((_, index: number) => (
        <div key={index} className="flex w-5/6 flex-col gap-4 mx-auto">
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
