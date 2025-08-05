import { TeamData } from "@/data/content";
import { markdownify } from "@/lib/utils/textConverter";
import ImageFallback from "@/helpers/ImageFallback";

interface TeamProps {
  data: TeamData;
}

const Team = ({ data }: TeamProps) => {
  const { title, description, members } = data;

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div
            className="flex flex-col justify-center align-middle mx-auto w-full text-center"
            data-aos="fade-up-sm"
          >
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
            <div className="row gx-4 gy-12 justify-center">
              {members?.map((member, i: number) => (
                <div className="sm:col-6 md:col-4 lg:col-3" key={i}>
                  <div className="team-card text-center">
                    <div className="mb-6">
                      <div className="h-32 w-32 mx-auto overflow-hidden rounded-full">
                        <ImageFallback
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover rounded-full"
                          width={128}
                          height={128}
                        />
                      </div>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">
                      {member.name}
                    </h3>
                    <p className="opacity-70 text-base">{member.position}</p>
                    {member.social && (
                      <ul className="mt-6 flex gap-3 justify-center">
                        {member.social.map((social) => (
                          <li key={social.platform}>
                            <a
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-b from-white/10 to-slate-800/25 transition-all duration-300"
                            >
                              <ImageFallback
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

export default Team;
