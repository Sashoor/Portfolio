

function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">// I am not your normal developer</p>
          <p className="py-2 text-gray-600">
            Curabitur iaculis, tellus at laoreet suscipit, urna nisl auctor
            odio, vitae varius dui sem malesuada libero. Cras non dapibus mi.
            Cras tristique libero eget dui eleifend, at consequat quam
            elementum. Nam laoreet est a magna mattis, vitae lobortis ex
            viverra.{" "}
          </p>
          <p className="py-2 text-gray-600">
            consectetur eros sed, elementum felis. Suspendisse nec tellus ante.
            Integer mi elit, ullamcorper eget odio nec, euismod luctus justo.
            Pellentesque efficitur varius lacus, nec ornare velit convallis et.
            Ut finibus tincidunt diam eu laoreet. Maecenas feugiat eu diam id
            lacinia. Nulla lacinia porta tortor id venenatis.{" "}
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out my latest Projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shad shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img className="rounded-xl" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170" alt="" />
    
         
        </div>
      </div>
    </div>
  );
}

export default About;
