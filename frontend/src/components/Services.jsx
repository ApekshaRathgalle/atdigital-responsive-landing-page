import serviceIllustration1 from '../assets/service_illsutration1.png'
import serviceIllustration2 from '../assets/service_illsutration2.png'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web & Mobile App Development",
      description: "Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.",
      buttonText: "LEARN MORE",
      buttonColor: "bg-secondary hover:bg-orange-600",
      illustration: serviceIllustration1
    },
    {
      id: 2,
      title: "Digital Strategy Consulting",
      description: "Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.",
      buttonText: "LEARN MORE",
      buttonColor: "bg-secondary hover:bg-orange-600",
      illustration: serviceIllustration2
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 lg:space-y-32">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Service Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} flex justify-center lg:justify-start`}>
                <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg">
                  <img 
                    src={service.illustration} 
                    alt={`${service.title} illustration`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Service Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} space-y-4 lg:space-y-6 text-center lg:text-left`}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-primary leading-tight">
                  {service.title}
                </h2>
                <p className="text-textPrimary text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {service.description}
                </p>
                <div className="pt-2">
                  <button className={`${service.buttonColor} text-white font-semibold px-6 py-3 lg:px-8 lg:py-3 rounded text-sm lg:text-base transition-colors hover:shadow-lg`}>
                    {service.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services