import { Section } from './layout/Section'
import { VerticalFeatureRow } from './components/VerticalRow';
import { Footer } from './components/footer/Footer';
import casterPicture from './images/caster.webp'
import hoverboardPicture from './images/hover.webp'
import headerPicture from './images/header.webp'
import repoPicture from './images/mainrepo.webp'

function App() {
  let casterWheelDescription = [
    "Fully modular caster wheel xacro file",
    <br/>,
    "Wheels can be modified according to the real dimensions "
  ];
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w lg:w-full lg:pb-20 xl:pb-10">
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="text-center rounded-lg">
            <h1 className="text-4xl font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">HTB - Hover Table Bot</span>
            </h1>
            <p className="mt-3 text-2xl text-center text-orange-500 ">
              From hoverboard to differential robot
            </p>
          </div>
      <div className="mx-auto w-full sm:w-1/2 p-6">
        <img src={headerPicture} alt="alt text" />
      </div>
        </main>
      </div>

      <Section
        description="We can imagine a mobile robot as a couple of engines and a controller.
        If we add a charger, a battery pack and an amazing code to control two powerful engines, we have a platform capable of moving a person ... a hoverboard."
        yPadding="py-2"
      />
      <Section
        description="If we place it in a solid base with different sensors, all controlled by ROS, we have HTB!"
        yPadding="py-2"
      />
      <div className="mb-4 text-center">
        <div className="mt-4 text-xl text-gray-500 md:px-20">
          HTB is born from the 
          <a className="text-white" href="https://github.com/alex-makarov/robaka-ros"> Robaka </a>
          project, a Mobile
          <a className="text-white" href="https://www.ros.org/"> ROS </a>
          TestBed.
        </div>
      </div>


      <Section
        yPadding="py-2"
      >
        <VerticalFeatureRow
          title="Caster Wheels"
          description={casterWheelDescription}
          image={casterPicture}
          imageAlt="First feature alt text"
        />
        <VerticalFeatureRow
          title="Built from a hoverboard"
          description="Built around two really strong brushless hub motor, hoverboards are capable of moving up to 100kg in some cases"
          image={hoverboardPicture}
          imageAlt="Second feature alt text"
          reverse="true"
        />
        <VerticalFeatureRow
          title="Notes"
          description="This project is still under development. Please check for updates regulary in the main repository."
          image={repoPicture}
          imageAlt="Third feature alt text"
          link="https://github.com/HTB-HoverTableBot"
          textLink="Code"
        />
      </Section>
      <Section
        title="Disclaimer"
        description="This project comes without any warranty. It is still under development and things will change. Also as my build is not complete so far, files may not fit together as planned. You build at your own risk."
      >
      </Section>
      <Footer />
    </div>
  )
}

export default App;
