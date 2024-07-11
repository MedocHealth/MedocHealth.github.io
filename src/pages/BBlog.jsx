import React from "react";
import styles from "../css/blog.css";
import img from "../resources/image.png";

const BBlog = () => {
  return (
    <div>
      <section id="blog-1" class="bg-slate-300 ">
        <div class="container mx-auto ">
          {/* <!-- SECTION TITLE --> */}
          <div class="flex flex-col items-center justify-between">
            <div class="flex flex-col text-center">
              {/* <!-- Title --> */}
              <h2 class=" flex text-4xl test-wrap text-black  font-extrabold">
                Blogs
              </h2>
              {/* <!-- <p class="text-gray-600 mt-2">Stay Updated around what's new in the Medoc Ecosystem and the healthcare industry with Blogs & News delivered straight to you.</p> --> */}
            </div>

            {/* <!-- Blog Posts Containers --> */}
            <div class="grid  grid-rows-1 md:grid-cols-2 min-h-screen w-full gap-4 items-start justify-between m-4 p-2  overflow-hidden">
              <div class="flex flex-col  w-full  items-start overflow-hidden p-2 bg-slate-500 rounded-lg ">
                <img class="w-full rounded-md mx-auto" src={img} alt="post1" />
                <div class="flex flex-col ">
                  <h3 class="text-xl font-bold m-2">Today's Super Food</h3>
                  <p class="flex text-wrap p-2 ">
                    Superfoods are foods that have a very high nutritional
                    density. This means that they provide a substantial amount
                    of nutrients and very few calories. They contain a high
                    volume of minerals, vitamins, and antioxidants. Antioxidants
                    are natural molecules that occur in certain foods.
                  </p>
                </div>
              </div>
              <div class="flex flex-col w-full  items-start overflow-hidden p-2 bg-slate-500 rounded-lg">
                <img class="w-full rounded-md  mx-auto" src={img} alt="post1" />
                <div class="flex flex-col ">
                  <h3 class="text-xl font-bold m-2">Today's Super Food</h3>
                  <p class="flex text-wrap p-2 ">
                    Superfoods are foods that have a very high nutritional
                    density. This means that they provide a substantial amount
                    of nutrients and very few calories. They contain a high
                    volume of minerals, vitamins, and antioxidants. Antioxidants
                    are natural molecules that occur in certain foods.
                  </p>
                </div>
              </div>
              <div class="flex flex-col w-full  items-start overflow-hidden p-2 bg-slate-500 rounded-lg">
                <img class="w-full rounded-md mx-auto" src={img} alt="post1" />
                <div class="flex flex-col ">
                  <h3 class="text-xl font-bold m-2">Today's Super Food</h3>
                  <p class="flex text-wrap p-2 ">
                    Superfoods are foods that have a very high nutritional
                    density. This means that they provide a substantial amount
                    of nutrients and very few calories. They contain a high
                    volume of minerals, vitamins, and antioxidants. Antioxidants
                    are natural molecules that occur in certain foods.
                  </p>
                </div>
              </div>
              <div class="flex flex-col  w-full  items-start overflow-hidden p-2 bg-slate-500 rounded-lg ">
                <img class="w-full rounded-md mx-auto" src={img} alt="post1" />
                <div class="flex flex-col ">
                  <h3 class="text-xl font-bold m-2">Today's Super Food</h3>
                  <p class="flex text-wrap p-2 ">
                    Superfoods are foods that have a very high nutritional
                    density. This means that they provide a substantial amount
                    of nutrients and very few calories. They contain a high
                    volume of minerals, vitamins, and antioxidants. Antioxidants
                    are natural molecules that occur in certain foods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BBlog;
