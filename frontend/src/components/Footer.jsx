import atLogo from '../assets/at.png'

const Footer = () => {
  return (
    <footer className="bg-[#4F46E5] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center">
              <img 
                src={atLogo} 
                alt="AT Digital Logo" 
                className="w-32 h-auto object-contain"
              />
            </div>
            <div className="text-white leading-relaxed">
              <p className="font-bold">Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
            </div>
          </div>

          {/* Our Technologies */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Our Technologies</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors font-bold">ReactJS</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-bold">Gatsby</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-bold">NextJS</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-bold">NodeJS</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Our Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors font-bold">Social Media Marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-bold">Web & Mobile App Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-bold">Data & Analytics</a></li>
            </ul>
          </div>

          {/* Empty column for spacing on desktop */}
          <div className="hidden lg:block"></div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8">
          {/* Desktop version - centered line and links */}
          <div className="hidden md:block space-y-4">
            {/* Horizontal line - shorter and thicker */}
            <div className="flex justify-center">
              <div className="w-48 md:w-64 lg:w-80 border-t-2 border-white"></div>
            </div>
            
            {/* Centered Privacy Policy and Terms */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition-colors font-bold">Privacy Policy</a>
              <span className="hidden sm:inline text-gray-500">|</span>
              <a href="#" className="hover:text-white transition-colors font-bold">Terms & Conditions</a>
            </div>
          </div>

          {/* Mobile version - with horizontal line and centered links */}
          <div className="md:hidden space-y-4">
            {/* Horizontal line for mobile */}
            <div className="w-full border-t border-white"></div>
            
            {/* Centered links */}
            <div className="flex justify-center">
              <div className="text-sm text-gray-300">
                <a href="#" className="hover:text-white transition-colors font-bold">Privacy Policy</a>
                <span className="mx-3 text-gray-500">|</span>
                <a href="#" className="hover:text-white transition-colors font-bold">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer