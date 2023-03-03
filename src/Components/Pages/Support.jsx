import React from "react";

function Support() {
  return (
    <div>
      <div className="grid grid-cols-7">
        <div className=" col-span-5 w-11/12 mx-auto flex-col ">
          <div className="flex h-66 w-full justify-between flex-col mt-8  gap-4  pb-10 border-b-4 border-gray-200">
            <div className="text-5xl font-black ">Where To Get Support</div>
            <div className="text-blue-200">
              React has a community of millions of developers.
            </div>
            <div>
              On this page we’ve listed some React-related communities that you
              can be a part of; see the other pages in this section for
              additional online and in-person learning materials.
            </div>
            <div>
              Before participating in React’s communities, please read our Code
              of Conduct. We have adopted the Contributor Covenant and we expect
              that all community members adhere to the guidelines within.
            </div>
            <div></div>
          </div>
          <div className="flex h-66 w-full justify-between flex-col mt-8  gap-4  pb-10 border-b-4 border-gray-200">
            <div className="text-2xl font-black ">Stack Overflow</div>
            <div>
              Stack Overflow is a popular forum to ask code-level questions or
              if you’re stuck with a specific error. Read through the existing
              questions tagged with reactjs or ask your own!
            </div>
          </div>
          <div className="text-2xl font-black  ">Popular Discussion Forums</div>
          <div>
            There are many online forums which are a great place for discussion
            about best practices and application architecture as well as the
            future of React. If you have an answerable code-level question,
            Stack Overflow is usually a better fit.
          </div>
          <div>Each community consists of many thousands of React users.</div>
          <li>DEV’s React community</li>
          <li>Hashnode’s React community</li>
          <li>Reactiflux online chat</li>
          <li>Reddit’s React community</li>
        </div>
        <div className="col-span-2 bg-gray-300"></div>
      </div>
    </div>
  );
}

export default Support;
