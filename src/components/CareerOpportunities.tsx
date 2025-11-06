const CareerOpportunities = () => {
  return (
    <section className="bg-white py-4 lg:py-10">
      <div className="container mx-auto px-4 lg:px-1"> 
        <div className="flex flex-col lg:flex-row">
          
          {/* Left Side Image */}
          <div className="lg:w-1/2 flex justify-end lg:pl-2"> 
            <img 
              src="https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/b0cc/35cf/218dad58f95fc53f2ad0dc770a0d6ca0?Expires=1760918400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cBXiWpB~wPIdgRRERkzfdUlYHUAOSaajE-gSwrIyyK3s-LdLFogeC5wwXBLIBpq1mjJyzGR36bGiOUYBeNxzI~80pjtxAAgWLZsqna6skWG1Jcfm8hazbHfo3gil7zM2EpUifruicBK-7-itMkkJKv~-4LDeu3jt5n-GlihebAI~ZGezCAI-DqY9XNW~kgYC9IXUXT9Wk94iEBW8gYVR9rrgBQDXGcvEzBSGewOTbbZ0W76ZBEc3iKZ7hYhQRbn9Upk3PxxJJgi7Yd1C1cln9J8ZBcDHXGQb5tYfHpkfmKsfoqtH0ZHzvL7ddfwz4TiZWOqaNirRlcVwMzYEdlG9cQ__" 
              alt="Graduates throwing hats in the air" 
              className="w-[606px] h-[520px] object-cover"
            />
          </div>

          {/* Right Side Text */}
          <div className="lg:w-1/2 bg-brand-gray-light flex items-center lg:-ml-7"> 
            <div className="p-4 md:p-6 lg:p-8">
              <h2 className="font-poppins font-semibold text-4xl md:text-5xl mb-6 text-brand-red-darkest">
                Career Opportunities
              </h2>
              {/* <p className="font-poppins text-lg md:text-xl lg:text-2xl tracking-wider leading-relaxed text-gray-700 space-y-4"> */}
              <p className="font-poppins font-medium text-base md:text-lg lg:text-xl leading-snug text-gray-700">
                
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt.
                <br></br>
                  Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus a pretium in tincidunt.
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunities;
