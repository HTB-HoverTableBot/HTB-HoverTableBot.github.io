import { Section } from './components/Section'
import { VerticalFeatureRow } from './components/VerticalRow';

function App() {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w lg:w-full lg:pb-28 xl:pb-32">
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
        <img src="https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="alt text" />
      </div>
        </main>
      </div>
      <Section
        title="Features"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
      >
        <VerticalFeatureRow
          title="Your title here"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
          image="https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          imageAlt="First feature alt text"
        />
        <VerticalFeatureRow
          title="Your title here"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
          image="https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          imageAlt="Second feature alt text"
          reverse="true"
        />
        <VerticalFeatureRow
          title="Your title here"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
          image="https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          imageAlt="Third feature alt text"
        />
      </Section>

    </div>
  )
}

export default App;
