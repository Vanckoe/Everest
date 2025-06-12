import Repair from "@/assets/icon-repair";

export default function SubZeroRepairSection() {
  return (
    <section className="w-full bg-white px-10 py-[7.5rem] md:px-10 md:py-20">
      <div className="flex flex-col md:flex-row">
        {/* Левая сторона (текст) */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-semibold text-left text-[#121212] md:text-5xl">
            Same day Sub-Zero <br /> Appliance Repair
          </h2>
          <p className="mt-4 text-left text-[1.65rem] md:text-base text-[#555555]">
            Sub-Zero is a famous American company that produces high-end appliances.
            Clients prefer reliability and smart designs of the brand’s inventions. However, even <br /> 
            the most luxurious and technically advanced appliances tend to malfunction or <br /> 
            break. Fortunately, you can contact Midwest Standards for Sub-Zero repair.
          </p>

          <h3 className="mt-8 text-left text-4xl md:text-2xl font-semibold">
            Benefits Of Luxury Appliance Repair Service with Midwest Standards team
          </h3>
          <p className="mt-4 text-left text-[1.65rem] md:text-base text-[#555555]">
            There’s no better company for Sub-Zero repair in Chicago than Midwest Standards. We <br />
            employ the best technicians to handle repair of such luxury brands as Sub-Zero. Here’s why <br /> 
            you should choose us:
          </p>
            <ul className="mt-6 space-y-4">
            {[
                "We use genuine parts. Thus, we guarantee high-quality repairs + a longer lifespan of appliances afterward.",
                "Our technicians arrive in under 24 hours. You avoid unnecessary delays and save time, so that your appliances are up and running.",
                "We guarantee accurate diagnostics. It helps identify and fix problems without mistakes.",
                "Preventative maintenance and factory updates. You can call us if you want to make sure that your devices work properly.",
                "We have a clear fee structure. Midwest Standards provides data on the prices for part replacement, repairs, maintenance, and so on. Thus, you can plan your budget for the repair properly and won't have surprises in the future.",
            ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-10 md:gap-4">
                <Repair className="bg-[#ececec] rounded-full w-10 h-10 md:w-6 md:h-6 shrink-0" />
                <p className="text-left text-[1.65rem] leading-snug md:text-base text-[#888888]">{text}</p>
                </li>
            ))}
            </ul>
          <p className="mt-6 text-left text-[1.65rem] md:text-base text-#555555">
            All our technicians have the right skills and also receive advanced training. They handle modern devices and follow the latest industry standards for Sub-Zero repair.
          </p>
        </div>

        {/* Правая сторона (ПК) */}
        <div className="hidden md:flex w-1/2 justify-end">
            <img
            src="/img/Subzero/repair.jpg"
            alt="Sub-Zero Repair"
            className="w-[35.1875rem] h-[52.3125rem] object-cover rounded-[20px]"
            />
        </div>

        {/* Мобильная версия картинки */}
        <div className="block md:hidden mt-[60px] overflow-hidden px-[2,5rem]">
        <img
            src="img/Subzero/repair.jpg"
            alt="Sub-Zero Appliance"
            className="mx-auto w-full h-[480px] rounded-[20px] object-cover"
        />
        </div>
      </div>
    </section>
  );
}