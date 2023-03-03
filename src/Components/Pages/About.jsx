import React from "react";

function About() {
  return (
    <div className="grid grid-cols-7">
      <div className=" col-span-5 w-11/12 mx-auto flex-col ">
        <div className="flex h-66 w-full justify-between flex-col mt-8  gap-4  pb-10 border-b-4 border-gray-200">
          <div className="text-5xl font-black ">Getting Started</div>
          <div className="text-blue-200">
            This page is an overview of the React documentation and related
            resources.
          </div>
          <div>
            <span className="font-bold">React</span> is a JavaScript library for
            building user interfaces. Learn what React is all about on
            <span className="bg-blue-100">our homepage</span> or{" "}
            <span className="bg-blue-100">in the tutorial.</span>
          </div>
        </div>
        <div>
          <div className="flex h-66 w-full justify-between flex-col mt-8  gap-4">
            <li>
              <span className="bg-blue-100">Try React </span>
            </li>
            <li>
              <span className="bg-blue-100">Learn React</span>
            </li>
            <li>
              <span className="bg-blue-100">Staying Informed</span>
            </li>
            <li>
              <span className="bg-blue-100">Version Documentation</span>
            </li>
            <li>
              <span className="bg-blue-100">Something Missing?</span>
            </li>
          </div>
          <div className="flex h-66 w-full justify-between flex-col mt-8  gap-3 ">
            <div className="text-3xl font-black ">Try React</div>
            <br />
            <div>
              {" "}
              React has been designed from the start for gradual adoption, and{" "}
              <span className="text-1xl font-black ">
                you can use as little or as much React as you need.
              </span>{" "}
              Whether you want to get a taste of React, add some interactivity
              to a simple HTML page, or start a complex React-powered app, the
              links in this section will help you get started.
            </div>
            <br />
            <div className="text-2xl font-black ">Online Playgrounds</div>
            <br />
            <div>
              If you’re interested in playing around with React, you can use an
              online code playground. Try a Hello World template on{" "}
              <span className="bg-blue-100">CodePen, CodeSandbox,</span> or{" "}
              <span className="bg-blue-100">Stackblitz.</span>
              <br />
              <br />
              If you prefer to use your own text editor, you can also{" "}
              <span className="bg-blue-100">download this HTML file,</span> edit
              it, and open it from the local filesystem in your browser. It does
              a slow runtime code transformation, so we’d only recommend using
              this for simple demos.
            </div>
            <br />
            <div className="text-2xl font-black ">Add React to a Website</div>
            <br />
            <div>
              You can{" "}
              <span className="bg-blue-100">
                add React to an HTML page in one minute.
              </span>{" "}
              You can then either gradually expand its presence, or keep it
              contained to a few dynamic widgets.
            </div>
            <br />
            <div className="text-2xl font-black ">Create a New React App</div>
            <br />
            <div>
              When starting a React project,{" "}
              <span className="bg-blue-100">
                simple HTML page with script tags
              </span>
              a might still be the best option. It only takes a minute to set
              up! As your application grows, you might want to consider a more
              integrated setup. There are several JavaScript toolchains we
              recommend for larger applications. Each of them can work with
              little to no configuration and lets you take full advantage of the
              rich React ecosystem.{" "}
              <span className="bg-blue-100">Learn how.</span>
            </div>
            <br />
          </div>
          <div className="flex h-66 w-full justify-between flex-col mt-8  gap-3 ">
            <div className="text-3xl font-black ">Learn React</div>
            <div>
              People come to React from different backgrounds and with different
              learning styles. Whether you prefer a more theoretical or a
              practical approach, we hope you’ll find this section helpful.
              <li>
                If you prefer to learn by doing, start with our practical
                tutorial.
              </li>
              <li>
                If you prefer to learn concepts step by step, start with our
                guide to main concepts.
              </li>
              <br />
              Like any unfamiliar technology, React does have a learning curve.
              With practice and some patience, you will get the hang of it.
            </div>
            <div className="text-2xl font-black ">First Examples</div>
            <div>
              The React homepage contains a few small React examples with a live
              editor. Even if you don’t know anything about React yet, try
              changing their code and see how it affects the result.
            </div>
            <div className="text-2xl font-black ">React for Beginners</div>
            <div>
              If you feel that the React documentation goes at a faster pace
              than you’re comfortable with, check out this overview of React by
              Tania Rascia. It introduces the most important React concepts in a
              detailed, beginner-friendly way. Once you’re done, give the
              documentation another try!
            </div>
            <div className="text-2xl font-black ">React for Designers</div>
            <div>
              If you’re coming from a design background, these resources are a
              great place to get started.
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="col-span-2 bg-gray-300">
        <div className="flex h-66 w-full justify-between flex-col mt-8  gap-5 px-9 py-7">
          <div>INSTALLATION</div>
          <div>MAIN CONCEPTS</div>
          <div>ADVANCED GUIDES</div>
          <div>API REFERENCE</div>
          <div>HOOKS</div>
          <div>TESTING</div>
          <div>CONTRIBUTING</div>
          <div>FAQ</div>
        </div>
      </div>
    </div>
  );
}

export default About;
