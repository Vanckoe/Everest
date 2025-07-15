import Repair from "@/assets/icon-repair";

export default function SubZeroRepairSection() {
  return (
    <section className="w-full bg-white px-10 py-20 md:px-10 md:py-20">
      <div className="flex flex-col md:flex-row">
        {/* Левая сторона (текст) */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-gloock text-left text-color md:text-5xl">
            Same day Sub-Zero <br /> Appliance Repair
          </h2>
          <p className="mt-4 text-left font-inter-meduim text-[1.65rem] md:text-base text-[#555555]">
            Sub-Zero is a renowned American brand known for its premium-quality appliances, cutting-edge technologies, 
            and sleek designs. Homeowners trust Sub-Zero for its reliability, innovation, and performance.
          </p>

          <h3 className="mt-8 text-left text-4xl md:text-2xl text-color font-gloock">
            Benefits of Choosing Everest for Sub-Zero <br className="hidden md:block"/> Appliance Repair in Chicago
          </h3>
          <p className="mt-4 text-left font-inter-meduim text-[1.65rem] md:text-base text-[#555555]">
            There’s no better choice for luxury appliance repair in Chicago than Everest. We specialize in servicing high-end brands like Sub-Zero, delivering unmatched quality and attention to detail. Here’s why homeowners trust our team:
          </p>
            <ul className="mt-6 font-inter space-y-4">
            {[
                "Genuine Sub-Zero Parts. We use only authentic manufacturer components, which ensures high-quality repairs and extends the lifespan of your appliances.",
                "Service Within 24 Hours. Our technicians arrive in under 24 hours, so you avoid delays and restore your Sub-Zero appliance quickly and efficiently.",
                "Precise Diagnostics. We guarantee accurate, professional diagnostics — identifying the root cause of any issue and fixing it right the first time.",
                "Preventative Maintenance & Factory Updates. We also offer preventive checkups and apply official factory updates to keep your Sub-Zero appliances running smoothly and efficiently.",
                "Transparent Pricing Structure. You’ll always know what to expect. Our clear pricing includes detailed costs for parts, repairs, and maintenance, so you can plan your budget with confidence.",
            ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-10 md:gap-4">
                <Repair className="bg-[#ececec] rounded-full w-10 h-10 md:w-6 md:h-6 shrink-0" />
                <p className="text-left text-[1.65rem] leading-snug md:text-base text-[#888888]">{text}</p>
                </li>
            ))}
            </ul>
          <p className="mt-6 text-left text-[1.65rem] md:text-base font-inter text-color">
            All our technicians are certified professionals with extensive experience and ongoing advanced training. They stay up to date with the latest Sub-Zero technologies and follow current industry standards, ensuring precise and reliable repairs for even the most modern appliances.
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
        <div className="block md:hidden mt-[30px] overflow-hidden px-[2,5rem]">
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