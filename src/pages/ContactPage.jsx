import profileImg from '../assets/profile.png'
import ContactActionCard from '../components/ContactActionCard.jsx'

export default function ContactPage() {
  const resumeUrl = '/Yueyi_Liao_Resume.pdf'

  const contactActions = [
    {
      title: 'LinkedIn',
      label: 'Connect via LinkedIn',
      href: 'https://www.linkedin.com/in/yueyi-liao',
      icon: 'linkedin',
      isExternal: true,
    },
    {
      title: 'Email',
      label: 'Email Me',
      href: 'mailto:yl9757@nyu.edu',
      detail: 'yl9757@nyu.edu',
      icon: 'email',
      isExternal: false,
    },
    {
      title: 'Resume',
      label: 'View / Download Resume',
      href: resumeUrl,
      icon: 'resume',
      isExternal: true,
    },
  ]

  return (
    <section className="min-h-[calc(100vh-76px)] bg-[#dfeaf8] px-4 py-12 text-[#232018] md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-8 rounded-[2rem] border border-white/70 bg-white/45 p-6 shadow-[0_24px_70px_rgba(63,82,104,0.12)] backdrop-blur md:grid-cols-[220px_1fr] md:p-10">
          <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-[0_18px_42px_rgba(63,82,104,0.18)] md:h-44 md:w-44">
            <img
              src={profileImg}
              alt="Yueyi Liao"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#5e789c]">
              Contact
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-[#1f2430] md:text-6xl">
              Let’s Connect!
            </h1>
            <p className="mt-[60px] max-w-2xl text-lg leading-8 text-[#526174]">
              I’m open to early-career project management and digital project
              coordination opportunities, collaborations inspired by my projects,
              and conversations about requirements, process improvement, and
              cross-functional delivery.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {contactActions.map((action) => (
            <ContactActionCard key={action.title} action={action} />
          ))}
        </div>
      </div>
    </section>
  )
}
