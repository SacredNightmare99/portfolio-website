import { TypeAnimation } from 'react-type-animation';
import ScrollSection from '../utils/ScrollSection';

const AboutSection = () => {
  return (
    <ScrollSection>
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Ishaan Jindal</h1>
        <p className="text-xl text-neutral-400 mb-8">
          <TypeAnimation
            sequence={[
              'Creative App Developer',
              1000,
              'Tech Enthusiast',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </p>
      </div>
    </ScrollSection>
  );
};

export default AboutSection;
