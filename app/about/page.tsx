import Image from "next/image";
//import { NavBar } from "../../components/navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* <NavBar /> */}

      <main className="container mx-auto px-4 py-8">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-8">About Dev3pack</h1>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <Image
              src="/community.jpg" // Corrected path
              alt="Dev3pack team"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full md:w-1/2"
            />
            <div className="md:w-1/2">
              <p className="text-lg">
                Dev3pack is a friendly online dev initiative to onboard and
                follow up many women/non-binary and students coming from Web2
                development, from their first steps to their full integration as
                a builder inside the ecosystem. The first objective of this
                initiative is to support 500+ new fresh and diversified
                developers until EthCC.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Onchain Starter Basecamp",
                description:
                  "This onchain starter basecamp, in partnership with Buidl Guild, is mandatory to join the onchain packers club and benefit from a long term mentorship from us.",
                image: "/images/activity1.png", // Ensure the image is in the public/images directory
              },
              {
                title: "Open Source / P2P Learning",
                description:
                  "After a successful onboarding through the onchain starter basecamp, we will proceed to the follow up phase with all students including some open source contributions and P2P learning. This phase will be achieved in collaboration with Buidl Guild and Only Dust.",
                image: "/images/activity2.png",
              },
              {
                title: "Onchain Product Sessions",
                description:
                  "These sessions will be **fully available to anyone** outside the onchain packers club. We are going to **cultivate interest** of the developers through product session oriented on the user experience. This aspect is fundamental to **build world class onchain products**.",
                image: "/images/activity3.png",
              },
              {
                title: "Universities Tour",
                description:
                  "Argentina is a strategic country this year, with probably the Devconnect on November! We are planning to do a university tour in Buenos Aires during the Crecimiento pop up city in March. We still have to figure out everything about it, but already are in contact with all the blockchains clubs in order to do it.",
                image: "/images/activity4.png",
              },
              {
                title: "Hackathon Preparation Week",
                description:
                  "The hackathon preparation week, in collaboration with **ThirdWeb**, is a dedicated time before each major international event like EthCC and Devconnect. This week will be a mix of workshops, team building, and project ideation.",
                image: "/images/activity5.png",
              },
              {
                title: "Career Development",
                description:
                  "Receive guidance on building a career in the Web3 space, including resume building and interview preparation.",
                image: "/images/career-development.jpg",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
              >
                <Image
                  src={activity.image}
                  alt={activity.title}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground">{activity.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Dev3pack Team</h2>
          <p className="text-lg mb-8">
            Our team is composed of passionate Web3 developers and educators
            dedicated to fostering diversity and inclusion in the blockchain
            ecosystem.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Team Member 1"
                width={200}
                height={200}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
              <ul className="list-disc list-inside text-left">
                <li>5+ years of Web3 development experience</li>
                <li>Smart contract security expert</li>
                <li>Open-source contributor to major blockchain projects</li>
                <li>Speaker at EthCC and DevCon</li>
              </ul>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Team Member 2"
                width={200}
                height={200}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">John Smith</h3>
              <ul className="list-disc list-inside text-left">
                <li>Former Web2 developer turned Web3 enthusiast</li>
                <li>DApp development specialist</li>
                <li>Community manager for several Web3 projects</li>
                <li>Mentor at Women in Blockchain hackathons</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
