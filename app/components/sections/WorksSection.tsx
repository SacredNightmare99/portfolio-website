import ScrollSection from '../utils/ScrollSection';
import IPhone from '../utils/iPhone';

const WorksSection = () => {
  return (
    <ScrollSection>
      <h2 className="text-3xl font-bold text-center mb-8">My Works</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="md:w-1/2 flex justify-center">
          <IPhone />
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-neutral-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p>A brief description of Project 1.</p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Project 2</h3>
              <p>A brief description of Project 2.</p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Project 3</h3>
              <p>A brief description of Project 3.</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default WorksSection;
