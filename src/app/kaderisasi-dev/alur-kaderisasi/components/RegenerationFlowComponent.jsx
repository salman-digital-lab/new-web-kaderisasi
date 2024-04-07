const RegenerationFlowTimelineSection = ({ children }) => {
  return (
    <div className="w-28 h-28 m-4 flex flex-col items-center justify-center mx-auto bg-bmka-accent-orange rounded-full">
      {children}
    </div>
  );
};

const RegenerationFlowTimelineLine = () => {
  return (
    <div className="w-full">
      <div className="w-1 h-32 mx-auto bg-bmka-accent-orange" />
    </div>
  );
};

const RegenerationFlowTimelineContent = ({ title, description }) => {
  return (
    <div>
      <p className="text-black text-2xl font-bold">{title}</p>
      <p className="pt-2 text-gray-600">{description}</p>
    </div>
  );
};

const RegenerationFlowTimelinePoint = ({ title, number, description }) => {
  return (
    <div className="grid items-center grid-rows-timeline md:grid-rows-none md:grid-cols-timeline md:gap-16">
      <div className="hidden md:block">
        {number % 2 === 0 && (
          <RegenerationFlowTimelineContent
            title={title}
            description={description}
          />
        )}
      </div>
      <div
        className="h-full grid grid-flow-row justify-center"
        style={{ gridTemplateRows: "1fr auto 1fr" }}
      >
        <div className="w-1 h-full mx-auto bg-bmka-accent-orange" />
        <div className="w-12 h-12 flex items-center justify-center my-4 bg-blue-400 text-white font-bold rounded-full">
          <p>{number <= 9 ? `0${number}` : number}</p>
        </div>
        <div className="w-1 h-full mx-auto bg-bmka-accent-orange" />
      </div>
      <div className="hidden md:block">
        {number % 2 !== 0 && (
          <RegenerationFlowTimelineContent
            title={title}
            description={description}
          />
        )}
      </div>

      {/* Responsive */}
      <div className="block mb-6 text-center md:hidden">
        <RegenerationFlowTimelineContent
          title={title}
          description={description}
        />
      </div>
    </div>
  );
};

export {
  RegenerationFlowTimelineSection,
  RegenerationFlowTimelineLine,
  RegenerationFlowTimelinePoint,
};
