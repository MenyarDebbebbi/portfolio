import temps from "../assets/temp.png";
import ecomerce from "../assets/ecomerce.png";
export default function project() {
  return (
    <>
      <div className="bg-indigo-800 m-20 max-w-full ">
        <div className=" grid justify-items-center m-10 ">
          <h1 className=" text-3xl text-white mt-10"> Projects</h1>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 p-5">
            <div className="max-w-md mx-auto  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className=" uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    emploi de temps
                  </div>
                  <a href="#"> Subheading</a>
                  <p className="mt-2 text-slate-500">
                    {" "}
                    tttttttttttttttttttttttttttttttttttt using vueJs and PHP8{" "}
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img src={temps} width={150} height={150} />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="md:shrink-0 p-5">
                  <img src={ecomerce} width={150} height={150} />
                </div>
                <div className="p-8">
                  <div className=" uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    E-commerce website{" "}
                  </div>
                  <a href="#"> Subheading</a>
                  <p className="mt-2 text-slate-500">
                    tttttttttttttttttttttt using angular and spring boot
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-4 p-5 ">
            <div className="max-w-md mx-auto  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className=" uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    emploi de temps
                  </div>
                  <a href="#"> Subheading</a>
                  <p className="mt-2 text-slate-500">
                    {" "}
                    tttttttttttttttttttttttttttttttttttt using vueJs and PHP8{" "}
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img src={temps} width={150} height={150} />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="md:shrink-0 p-5">
                  <img src={ecomerce} width={150} height={150} />
                </div>
                <div className="p-8">
                  <div className=" uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    E-commerce website{" "}
                  </div>
                  <a href="#"> Subheading</a>
                  <p className="mt-2 text-slate-500">
                    tttttttttttttttttttttt using angular and spring boot
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
