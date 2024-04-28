import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity';
import { Experience } from '@/typings';
import { VerticalTimelineElement, VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type Props = {
    experience: Experience;
};

export default function ExperienceCard({experience}: Props) { 
    return(
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.dateStarted}
            iconStyle={{ background: experience.iconBg }} 
            icon={
                <div>
                  <Image className="w-[100%] h-[100%] object-contain rounded-full"
                    src={urlFor(experience?.companyImage).url()}
                    alt="" 
                  />
                </div>
            }      
        >
            <div className='pb-[1rem] '>
                <h3 className="text-white text-[18px] md:text-[22px] font-semibold">{experience.jobTitle}</h3>
                <p className="text-secondary text-[16px]  font-semibold"
                style={{ margin: 0 }}
                >
                {experience.company}
                </p>
            </div>
            
            <ul className="list-disc space-y-2 px-[1.2rem] md:px-[1.2rem] max-h-72 w-1/14 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800 ">
                {experience.points.map((point, index) => (
                <li
                    key={`experience-point-${index}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                >
                    {point}
                </li>
                ))}
            </ul>
        </VerticalTimelineElement>
      
    )
}
