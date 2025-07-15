import Repair from "@/assets/icon-repair";

export default function SubZeroRepairSection() {
  return (
    <section className="w-full bg-white px-10 py-[5.5rem] md:px-10 md:py-16">
      <div className="flex flex-col md:flex-row">
        {/* Левая сторона (текст) */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-gloock text-left text-color md:text-5xl">
            Viking appliance <br /> repair in Chicago - fast, <br /> reliable, and guarantee
          </h2>
          <p className="mt-4 text-left text-[1.65rem] md:text-base text-[#555555]">
            If you're looking for professional Viking appliance repair in Chicago, Everest 
            is your trusted local expert. We offer fast, reliable, and affordable repair services for the full range of 
            Viking appliances — including cooktops, ovens, hobs, range hoods, dishwashers, warming drawers, and 
            refrigerators.
          </p>

          <h3 className="mt-8 text-left text-4xl md:text-2xl text-color font-gloock">
            The most common causes of Viking failure
          </h3>
          <p className="mt-4 text-left text-[1.65rem] md:text-base text-[#555555]">
            Even premium appliances like Viking can experience issues over time. 
            You may need Viking repair service in the following cases:          
          </p>
            <ul className="mt-6 space-y-4">
            {[
                "Natural wear and tear. Every appliance component has a limited lifespan. Without regular maintenance and timely replacement of worn-out parts, your Viking appliance may stop working properly. Viking repair services can help restore functionality by replacing defective elements with original parts.",
                "Overloading and Excessive Use. Running your hood at maximum power for too long or overloading the dishwasher with too many dishes can lead to overheating or system failure. Always follow the manufacturer's usage instructions and avoid excessive loads. Proper use can reduce the need for Viking appliance repair.",
                "Electrical Issues and Short Circuits. Damaged wires or poor insulation can cause short circuits, leading to sudden breakdowns. Regular inspection of your home’s wiring and proper installation can help prevent these issues.",
                "Ignoring Manufacturer Recommendations. Viking provides detailed instructions for operation, cleaning, and maintenance. If you misuse functions or attempt DIY fixes, it can result in costly damage. Following official guidelines reduces the risk of malfunctions and the need for professional repair.",
                "Lack of Maintenance. Even though Viking appliances are built to last, they require periodic service. Refrigerators, dishwashers, hobs, microwaves, coffee machines, and hoods all benefit from professional maintenance. Preventative care extends their service life and helps avoid emergency Viking repair services.",
            ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-10 md:gap-4">
                <Repair className="bg-[#ececec] rounded-full w-10 h-10 md:w-6 md:h-6 shrink-0" />
                <p className="text-left text-[1.65rem] leading-snug md:text-base text-[#888888]">{text}</p>
                </li>
            ))}
            </ul>
          <p className="mt-6 text-left text-[1.65rem] md:mb-2 md:text-base text-#555555">
            These are just some of the most common issues that can cause your Viking 
            appliance to malfunction. However, the exact cause of the breakdown can 
            only be identified through professional diagnostics performed by a qualified technician. <br/>
            At Everest, we provide comprehensive Viking appliance diagnostics and repair services in Chicago. 
            Our experts use advanced tools to accurately detect the source of the problem and offer reliable 
            solutions that restore your appliance’s full functionality — all with a service guarantee.
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
        <div className="block md:hidden mt-[30px] overflow-hidden px-[2,5]">
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