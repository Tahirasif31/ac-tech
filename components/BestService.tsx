import { BackgroundGradientDemo } from "./BackgroundGradient";

function BestService() {
  return (
    <div className="flex lg:flex-row flex-col mx-auto xl:max-w-[1080px] md:max-w-[1000px] py-[100px] lg:gap-3 gap-8 px-5 items-center">
      <div className="md:px-5 px-1">
        <h2 className="md:text-[32px] text-[26px] font-[600]">
          Book Best Service <br /> On Reasonable Price
        </h2>
        <p className="mt-2">
          Welcome to [Your Company Name], your go-to destination for affordable
          AC repair services! We understand the importance of a properly
          functioning air conditioning system, particularly during extreme
          weather conditions. Our expert technicians are dedicated to delivering
          top-notch repairs for all AC units, ensuring your comfort is never
          compromised.
        </p>
        <p className="mt-2">
          At [Your Company Name], we prioritize transparency and affordability.
          Our pricing structure is straightforward and competitive, designed to
          provide you with exceptional value for your investment. Say goodbye to
          hidden costs and hello to budget-friendly AC repairs!
        </p>
        <p className="mt-2">
          Booking with us is simple and convenient. Just fill out the form on
          our website or give us a call, and we'll promptly schedule a service
          appointment that fits your schedule. Our skilled technicians will
          arrive equipped and ready to diagnose and resolve your AC issues
          efficiently.
        </p>
        <p className="mt-2">
          Don't let AC problems disrupt your comfort any longer. Trust [Your
          Company Name] for reliable repairs at prices that won't strain your
          wallet. Schedule your service today and experience the difference for
          yourself!
        </p>
      </div>
      <div>
        <BackgroundGradientDemo />
      </div>
    </div>
  );
}

export default BestService;
