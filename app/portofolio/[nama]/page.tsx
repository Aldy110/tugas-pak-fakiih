import { portfolioData } from '../data/portfolio';
import LikeButton from '../../../components/Likebutton'

export default async function PortofolioDetail({
  params,
}: {
  params: Promise<{ nama: string }>;
}) {
  const { nama } = await params;

  const person =
    portfolioData[nama as keyof typeof portfolioData];

  if (!person) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          Portfolio tidak ditemukan
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-orange-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Profile */}
        <section className="text-center mb-16">
          <div className="text-6xl mb-4">
            {person.avatar}
          </div>

          <h1 className="text-4xl font-bold">
            {person.name}
          </h1>

          <LikeButton cardId={nama} />

          <p className="text-orange-500 mt-2 text-lg">
            {person.role}
          </p>

          <p className="max-w-2xl mx-auto mt-6 text-gray-600">
            {person.description}
          </p>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Skills
          </h2>

          <div className="flex flex-wrap gap-3">
            {person.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white rounded-full shadow-sm border"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {person.projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}