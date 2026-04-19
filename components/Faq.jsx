import Pretitle from "./Pretitle";
import FaqItem from "./FaqItem";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const faqItemsData = [
  {
    title: "How long does a construction project usually take?",
    description: "Timelines depend on project scope. Smaller projects may take a few months, while larger residential or commercial developments can take a year or more. We provide a clear schedule from day one and keep you updated throughout.",
  },
  {
    title: "Do I need permits for my project?",
    description: "Yes, permits are typically required. We handle the full process—documentation, approvals, and coordination with authorities—to ensure your project is fully compliant.",
  },
  {
    title: "What materials do you use?",
    description: "We use only high-quality, approved materials. Selections are tailored to your project’s design, durability needs, and budget, with options for premium finishes.We use only high-quality, approved materials. Selections are tailored to your project’s design, durability needs, and budget, with options for premium finishes.",
  },
  {
    title: "Can I make changes after construction starts?",
    description: "Yes, with careful planning. Changes may affect cost and timeline, but we work closely with you to implement adjustments efficiently while maintaining quality and progress.",
  },
  {
    title: "How much will my construction project cost?",
    description: "Costs depend on project size and specifications. Pricing varies based on design, materials, location, and overall scope. At NOA Builders, we provide detailed and transparent estimates after understanding your requirements, ensuring you receive the best value for your investment.",
  },
  {
    title: "How do you ensure quality and safety on-site?",
    description: "We follow strict quality and safety standards at every stage. All materials are inspected, work is executed to approved specifications, and experienced engineers supervise every phase. We enforce safety protocols, conduct regular testing, and carry out daily site checks to ensure a safe, controlled, and high-quality construction environment.",
  },
];

// animation variants for FAQ items
const faqItemVariants = {
  hidden: { opacity: 0, y: 30 },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.3 }, // staggered animation
  }),
};

const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        {/* text */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto xl:mb-20"
        >
          <Pretitle text="Faq" center />
          <h2 className="h2 mb-3">Got Questions? We've Got You Covered</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            From project planning to final touches, we've answered the most
            common questions to help you make informed decisions.
          </p>
        </motion.div>
        {/* faq items */}
        <ul className="w-full flex flex-col">
          {faqItemsData.map((item, index) => {
            return (
              <motion.li
                key={index}
                variants={faqItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.8 }}
                custom={index} // pass index to control stagger effect
              >
                <FaqItem title={item.title} description={item.description} />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
