import { check, service1 } from "../assets";
import { brainwaveServices } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators"
          text="Brainwave unlocks the potential of AI-powered applications"
        />
      </div>

      <div className="relative">
        <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 ronuded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
            <img
              src={service1}
              alt="Smartest AI"
              className="w-full h-full object-cover md:object-right"
              width={800}
              height={730}
            />
          </div>

          <div className="relative z-1 max-w-[17rem] ml-auto">
            <h4 className="h-4 mb-4">Smartest AI</h4>
            <p className="body-2 mb-[3rem] text-n-3">
              Brainwave unlocks the potential of AI-powered application
            </p>
            <ul className="body-2">
              {brainwaveServices.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start py-4 border-t border-n-6"
                >
                  <img src={check} width={24} height={24} />
                  <p className="ml-4">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;