import { teamContent } from "@/data/content";
import { markdownify } from "@/lib/utils/textConverter";
import React from "react";

const OurTeam = () => {
  const { title, description, members } = teamContent;
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="lg:col-10" data-aos="fade-up-sm">
            {title && (
              <h2
                className="has-gradient mb-4"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}
            {description && (
              <p
                className="text-lg/[inherit] opacity-80"
                dangerouslySetInnerHTML={markdownify(description)}
              />
            )}
          </div>
          <div
            className="col-12 pt-20"
            data-aos="fade-up-sm"
            data-aos-delay="200"
          >
            <div className="row gx-4 gy-5">
              {members?.map((member, i: number) => (
                <div className="lg:col-4" key={i}>
                  <div className="team-card text-center">
                    <div className="mb-4">
                      <div className="h-20 w-20 mx-auto overflow-hidden rounded-full">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover rounded-full"
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>
                    <h3 className="mt-4 text-base md:text-lg">{member.name}</h3>
                    <p className="opacity-70">{member.position}</p>
                    {member.social && (
                      <ul className="mt-6 flex gap-3 justify-center">
                        {member.social.map((social) => (
                          <li key={social.platform}>
                            <a
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-b from-white/10 to-slate-800/25 transition-all duration-300 hover:scale-y-[-1]"
                            >
                              <img
                                src={social.icon}
                                alt={social.platform}
                                className="h-4 w-4 object-cover"
                                width={16}
                                height={16}
                              />
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
