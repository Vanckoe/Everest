import Repair from "@/assets/icon-repair";

export default function SubZeroRepairSection() {
  return (
    <section className="w-full bg-white px-4 py-8 md:px-10 md:py-20">
      <div className="flex flex-col md:flex-row">
        {/* Левая сторона (текст) */}
        <div className="md:pr-[100px] md:w-1/2">
          <h2 className="text-xl font-semibold text-left md:text-4xl">
            Same day Sub-Zero br Appliance Repair
          </h2>
          <p className="mt-4 text-left text-base text-gray-700">
            Sub-Zero is a famous American company that produces high-end appliances. Clients prefer reliability and smart designs of the brand’s inventions. However, even the most luxurious and technically advanced appliances tend to malfunction or break. Fortunately, you can contact Midwest Standards for Sub-Zero repair.
          </p>

          <h3 className="mt-8 text-left text-lg md:text-2xl font-semibold">
            Benefits Of Luxury Appliance Repair Service with Midwest Standards team
          </h3>
          <p className="mt-4 text-left text-base text-gray-700">
            There’s no better company for Sub-Zero repair in Chicago than Midwest Standards. We employ the best technicians to handle repair of such luxury brands as Sub-Zero. Here’s why you should choose us:
          </p>

          <ul className="mt-6 space-y-4">
            {[
              "We use genuine parts. Thus, we guarantee high-quality repairs + a longer lifespan of appliances afterward.",
              "Our technicians arrive in under 24 hours. You avoid unnecessary delays and save time, so that your appliances are up and running.",
              "We guarantee accurate diagnostics. It helps identify and fix problems without mistakes.",
              "Preventative maintenance and factory updates. You can call us if you want to make sure that your devices work properly.",
              "We have a clear fee structure. Midwest Standards provides data on the prices for part replacement, repairs, maintenance, and so on. Thus, you can plan your budget for the repair properly and won't have surprises in the future.",
            ].map((text, idx) => (
              <li key={idx} className="flex items-start">
                <Repair className="w-5 h-5 mt-1 mr-3 shrink-0" />
                <p className="text-left text-base text-gray-700">{text}</p>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-left text-base text-gray-700">
            All our technicians have the right skills and also receive advanced training. They handle modern devices and follow the latest industry standards for Sub-Zero repair.
          </p>
        </div>

        {/* Правая сторона (ПК) */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="img/Subzero/repair.jpg"
            alt="Sub-Zero Appliance"
            className="w-[39.1875rem] h-[52.3125rem] object-cover"
          />
        </div>

        {/* Мобильная версия картинки */}
        <div className="block md:hidden mt-[60px]">
          <img
            src="img/Subzero/repair.jpg"
            alt="Sub-Zero Appliance"
            className="mx-auto w-full h-[480px] rounded-[60px] px-[15px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}