import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { TeamData } from "@/data/content";

interface TeamProps {
  data: TeamData;
}

const Team = ({ data }: TeamProps) => {
  const { title, description, members } = data;

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-center">
          <div className="lg:col-8 text-center">
            {title && (
              <h2
                className="mb-4"
                dangerouslySetInnerHTML={markdownify(title)}
                data-aos="fade-up-sm"
              />
            )}
            {description && (
              <p
                className="mb-12 text-light"
                dangerouslySetInnerHTML={markdownify(description)}
                data-aos="fade-up-sm"
                data-aos-delay="100"
              />
            )}
          </div>
        </div>

        {members && members.length > 0 && (
          <div className="row g-4 justify-center">
            {members.map((member, index) => (
              <div key={index} className="lg:col-3 md:col-6">
                <div
                  className="team-card text-center"
                  data-aos="fade-up-sm"
                  data-aos-delay={index * 100}
                >
                  <div className="mb-4">
                    <ImageFallback
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="mx-auto rounded-full w-32 h-32 object-cover"
                    />
                  </div>
                  <h3 className="mb-1 text-lg font-semibold">{member.name}</h3>
                  <p className="mb-4 text-sm text-light opacity-70">{member.position}</p>
                  
                  {member.social && member.social.length > 0 && (
                    <div className="flex justify-center gap-3">
                      {member.social.map((social, socialIndex) => (
                        <a
                          key={socialIndex}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 hover:border-primary hover:bg-primary transition-all duration-300"
                        >
                          <ImageFallback
                            src={social.icon}
                            alt={social.platform}
                            width={16}
                            height={16}
                            className="opacity-70 hover:opacity-100"
                          />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;