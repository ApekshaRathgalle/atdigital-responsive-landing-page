import heroImage from '../assets/hero.jpg'

const Hero = () => {
  return (
    <section className="relative">
      {/* Desktop version - Full screen with overlay */}
      <div className="hidden lg:block relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Modern workspace with laptop"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Content Container */}
        <div className="relative w-full h-screen">
          <div 
            className="absolute bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg text-white flex flex-col justify-center"
            style={{
              width: '630px',
              height: '306px',
              top: '354px',
              left: '80px',
              padding: '40px'
            }}
          >
            <h1 className="text-4xl font-bold leading-tight mb-6">
              We Crush Your
              <br />
              Competitors, Goals, And
              <br />
              Sales Records - Without
              <br />
              The B.S.
            </h1>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-colors text-sm w-fit">
              GET FREE CONSULTATION
            </button>
          </div>
        </div>
      </div>

      {/* Mobile and Tablet version - Content positioned at bottom of image */}
      <div className="lg:hidden relative">
        {/* Background Image */}
        <div className="w-full relative">
          <img 
            src={heroImage} 
            alt="Modern workspace with laptop"
            className="w-full h-64 md:h-80 object-cover object-center"
          />
          
          {/* Content box positioned at bottom with proper spacing */}
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
            <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg text-white p-6 md:p-8">
              <h1 className="text-xl md:text-2xl font-bold leading-tight mb-6">
                We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
              </h1>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-colors text-sm">
                GET FREE CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero