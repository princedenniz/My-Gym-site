import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/16/solid";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import Htext from "@/shared/Htext";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";


const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6"/>,
    title: "state of the Art Facilities",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, minima sunt rem ratione sed in, pariatur enim quisquam, cum natus perspiciatis odit dolorem ",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6"/>,
    title: "100'S OF Diverse Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, minima sunt rem ratione sed in, pariatur enim quisquam, cum natus perspiciatis odit dolorem ",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6"/>,
    title: "Expert and Pro Trainers",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, minima sunt rem ratione sed in, pariatur enim quisquam, cum natus perspiciatis odit dolorem ",
  },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const  Benefits = ({setSelectedPage}: Props) =>  {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div 
        initial="hidden" whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{duration: 0.5 }}
        // variants={{
        //     hidden: { opacity: 0, x: -50 },
        //     visible: { opacity: 1, x: 0 }
        // }}
       onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        {/* header */}
        <div className="md:my-5 md:w-3/5" >
          <Htext>MORE THAN JUST A GYM.</Htext>
          <p className="my-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, minima sunt rem ratione sed in, pariatur enim quisquam, cum natus perspiciatis odit dolorem reprehenderit!</p>
        </div>

        {/* benefits */}
        <div className="mt-5 items-center justify-between gap-8 md:flex">
          {benefits.map((benefit: BenefitType) => (
            <Benefit 
            key={benefit.title} 
            icon={benefit.icon} 
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>

            {/* graphics and description */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
              {/* graphic */}
              <img className="mx-auto" src={BenefitsPageGraphic} alt="BenefitsPageGraphic" />

              {/* description */}
              <div>\
                {/* title */}
                <div className="relative">
                  <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                    <motion.div
                      initial="hidden" whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{duration: 0.5 }}
                      variants={{
                          hidden: { opacity: 0, x: 50 },
                          visible: { opacity: 1, x: 0 }
                      }}
                    >
                      <Htext>
                        MILLIONS OF HAPPY MEMBERS GETTING 
                        <span className="text-primary-500">FITS</span>
                      </Htext>
                    </motion.div>
                  </div>
                </div>

                {/* descript */}
                <motion.div
                  initial="hidden" whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{delay:0.2, duration: 0.5 }}
                  variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 }
                  }}
                >
                  <p className="my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus numquam blanditiis molestiae dolorem saepe, non voluptatum, tempore odit, recusandae sit repudiandae ipsa in amet hic!</p>
                  <p className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda minus architecto quidem hic, consectetur sit voluptas natus, amet libero ducimus quaerat tempore, maiores voluptatibus.</p>
                </motion.div>
                {/* button */}
                <div className="relative mt-16">
                  <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                    <ActionButton setSelectedPage={setSelectedPage}>
                      Join Now
                    </ActionButton>
                  </div>
                </div>
              </div>
            </div>

    </section>
  )
}

export default Benefits