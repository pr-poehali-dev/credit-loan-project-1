const HeroSection = () => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Кредитные карты 2025: полное руководство по выбору и оформлению
      </h1>
      <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Кредитные карты стали неотъемлемой частью финансовой жизни россиян. В 2025 году банки предлагают улучшенные условия получения кредитных карт, включая программы для клиентов с плохой кредитной историей и возможность оформления без отказа.
      </p>
      
      {/* Hero Image */}
      <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl">
        <img 
          src="https://cdn.poehali.dev/files/aa1b06f7-ca4e-42d8-9fed-55b1f97c59a3.jpg" 
          alt="Кредитные карты 2025"
          className="w-full h-64 md:h-80 object-cover"
          width="1186"
          height="565"
        />
      </div>
    </div>
  );
};

export default HeroSection;