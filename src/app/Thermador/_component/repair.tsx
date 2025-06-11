import Repair from "@/assets/icon-repair";

export default function SubZeroRepairSection() {
  return (
    <section className="w-full bg-white px-4 py-[7.5rem] md:px-10 md:py-20">
      <div className="flex flex-col md:flex-row">
        {/* Левая сторона (текст) */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-semibold text-left text-[#121212] md:text-5xl">
            Thermador appliance <br /> repair in Chicago: fast, <br /> reliable, and with a <br /> guarantee
          </h2>
          <p className="mt-4 text-left text-[1.65rem] md:text-base text-[#555555]">
            Thermador is a luxury appliance brand offering high-end cooktops, ovens, 
            hobs, hoods, dishwashers, warming drawers, and refrigerators. Thermador products are known for their 
            elegant design, smart features, high performance, and innovative technologies. But even the most reliable 
            appliances can break down. Whatever the cause of the breakdown, Midwest Standards specialists are ready 
            to solve it as soon as possible, regardless of the type and complexity of the work.
          </p>

          <h3 className="mt-8 text-left text-4xl md:text-2xl font-semibold">
            The most common causes of Thermador failure
          </h3>
          <p className="mt-4 text-left text-[1.65rem] md:text-base text-[#555555]">
            Thermador repair may be required in the following cases:
          </p>
            <ul className="mt-6 space-y-4">
            {[
                "Natural wear and tear. Each part or mechanism has a particular resource. If you do not perform regular maintenance or replace worn-out parts in time, your equipment will break down. Thermador repair, which replaces worn-out parts, will help restore the functionality of your household helpers.",
                "Increased loads on equipment. The hood overheats due to prolonged operation at maximum power, and the dishwasher stops due to loading too many dishes. These are just a few examples of how people operate their devices. It is important to strictly follow the instructions. Use devices only for their intended purpose and do not overload them. Then, you will not need the Thermador repair Chicago service.",
                "Short circuit. A damaged wire and poor wiring insulation lead to a sharp drop in resistance values ​and equipment breakdown.",
                "Ignoring the manufacturer's recommendations. Each device has instructions that describe in detail how to turn it on / off, use specific modes, and clean elements. If you try to adjust the equipment yourself or use its functionality for other purposes, it will soon break down.",
                "Improper maintenance and lack of service. Despite its innovation and well-thought-out functionality, Thermador equipment needs maintenance. It is imperative to service such devices as refrigerators, dishwashers, and hobs. You should also regularly monitor the condition of the microwave oven, coffee machine, and hood. This is the only way to significantly extend your assistants' service life.",
            ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-10 md:gap-4">
                <Repair className="bg-[#ececec] rounded-full w-10 h-10 md:w-6 md:h-6 shrink-0" />
                <p className="text-left text-[1.65rem] leading-snug md:text-base text-[#888888]">{text}</p>
                </li>
            ))}
            </ul>
          <p className="mt-6 text-left text-[1.65rem] md:text-base text-#555555">
            These are just some of the faults that can lead to malfunctions in the device. The actual cause of the breakdown can only be established as a result of professional diagnostics.
          </p>
        </div>

        {/* Правая сторона (ПК) */}
        <div className="hidden md:flex w-1/2 justify-end">
            <img
            src="/img/Thermador/repair.jpg"
            alt="Sub-Zero Repair"
            className="w-[35.1875rem] h-[52.3125rem] object-cover rounded-[20px]"
            />
        </div>

        {/* Мобильная версия картинки */}
        <div className="block md:hidden mt-[60px] overflow-hidden px-[2,5rem]">
        <img
            src="img/Thermador/repair.jpg"
            alt="Sub-Zero Appliance"
            className="mx-auto w-full h-[480px] rounded-[20px] object-cover"
        />
        </div>
      </div>
    </section>
  );
}