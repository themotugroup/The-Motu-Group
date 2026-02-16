import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Calendar,
  Camera,
  Handshake,
  Headphones,
  Mic2,
  Shield,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const Section = ({ id, kicker, title, desc, children }) => (
  <section id={id} className="py-16 md:py-24">
    <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        {kicker ? (
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{kicker}</span>
          </div>
        ) : null}
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white">
          {title}
        </h2>
        {desc ? (
          <p className="mt-3 max-w-2xl text-base md:text-lg text-white/70">
            {desc}
          </p>
        ) : null}
      </motion.div>
      {children}
    </div>
  </section>
);

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-sm text-white/70 hover:text-white transition-colors"
  >
    {children}
  </a>
);

export default function MotuGroupSite() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-[-180px] top-[240px] h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 grid place-items-center overflow-hidden">
              {/* LOGO PLACEHOLDER: replace /logo.png with your uploaded logo */}
              <img
                src="/logo.png"
                alt="The Motu Group logo"
                className="h-full w-full object-contain p-1"
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">THE MOTU GROUP</div>
              <div className="text-xs text-white/60">Entertainment • Media • Events</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#process">Process</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="secondary"
              className="rounded-2xl bg-white text-black hover:bg-white/90"
            >
              <a href="#contact">Book a call</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main id="top">
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Build your moment. Capture your story.</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                  The Motu Group
                  <span className="block text-white/70">Entertainment & Media Company</span>
                </h1>
                <p className="mt-5 max-w-xl text-base md:text-lg text-white/70">
                  We support artists, brands, and events with production, promotion, booking,
                  and a trusted network of contractors—so your next release or event runs like
                  a real operation.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    className="rounded-2xl bg-white text-black hover:bg-white/90"
                  >
                    <a href="#contact">
                      Get a quote <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-2xl border-white/20 bg-transparent text-white hover:bg-white/5"
                  >
                    <a href="#services">Explore services</a>
                  </Button>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-3 max-w-md">
                  {[
                    { k: "Fast turnarounds", v: "24–72h" },
                    { k: "Trusted crew", v: "Vetted" },
                    { k: "Coverage", v: "DMV + NYC" },
                  ].map((s) => (
                    <div
                      key={s.k}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="text-sm font-semibold">{s.v}</div>
                      <div className="mt-1 text-xs text-white/60">{s.k}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="relative"
              >
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">Service Snapshot</div>
                    <div className="text-xs text-white/60">Updated weekly</div>
                  </div>
                  <div className="mt-5 grid gap-3">
                    {[
                      {
                        icon: <Mic2 className="h-4 w-4" />,
                        title: "Artist & performance booking",
                        meta: "Negotiation • contracts • show flow",
                      },
                      {
                        icon: <Camera className="h-4 w-4" />,
                        title: "Photo / video production",
                        meta: "Events • BTS • promos • recaps",
                      },
                      {
                        icon: <Headphones className="h-4 w-4" />,
                        title: "Music production support",
                        meta: "Producers • sessions • releases",
                      },
                      {
                        icon: <Calendar className="h-4 w-4" />,
                        title: "Event coordination",
                        meta: "Vendors • timelines • staffing",
                      },
                      {
                        icon: <Handshake className="h-4 w-4" />,
                        title: "Brand partnerships",
                        meta: "Sponsors • promo packages",
                      },
                      {
                        icon: <Shield className="h-4 w-4" />,
                        title: "Contract-ready operations",
                        meta: "Professional templates + eSign",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/40 p-4"
                      >
                        <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl bg-white text-black">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm font-semibold">{item.title}</div>
                          <div className="mt-1 text-xs text-white/60">{item.meta}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs text-white/70">
                      Want this site to collect leads automatically?
                    </div>
                    <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                      <a
                        className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
                        href="#contact"
                      >
                        Add lead capture
                      </a>
                      <a
                        className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-transparent px-4 py-2 text-sm font-semibold text-white hover:bg-white/5"
                        href="#process"
                      >
                        See process
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <Section
          id="services"
          kicker="What we do"
          title="Services built for artists, brands, and events"
          desc="Pick one service or bundle them. We can operate as your plug-in team or run the entire project end-to-end."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: <Mic2 className="h-5 w-5" />,
                title: "Artist Support",
                bullets: [
                  "Release planning & rollout support",
                  "Booking coordination",
                  "Press kit + promo assets",
                ],
              },
              {
                icon: <Camera className="h-5 w-5" />,
                title: "Media Production",
                bullets: [
                  "Event photo/video coverage",
                  "Recap edits & promo clips",
                  "Behind-the-scenes content",
                ],
              },
              {
                icon: <Calendar className="h-5 w-5" />,
                title: "Event Operations",
                bullets: [
                  "Vendor management",
                  "Staffing & run-of-show",
                  "Contracts + eSign workflow",
                ],
              },
            ].map((s) => (
              <Card
                key={s.title}
                className="rounded-3xl border-white/10 bg-white/5"
              >
                <CardContent className="p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-black">
                    {s.icon}
                  </div>
                  <div className="mt-4 text-lg font-semibold">{s.title}</div>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-[1.4fr,0.6fr] md:items-center">
              <div>
                <div className="text-lg font-semibold">Need a custom package?</div>
                <p className="mt-2 text-sm text-white/70">
                  Tell us what you’re building (show, release, content run) and we’ll reply
                  with a simple quote, timeline, and deliverables.
                </p>
              </div>
              <div className="md:text-right">
                <Button
                  asChild
                  className="w-full md:w-auto rounded-2xl bg-white text-black hover:bg-white/90"
                >
                  <a href="#contact">
                    Request package <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Work */}
        <Section
          id="work"
          kicker="What you can expect"
          title="Clean deliverables. Fast communication."
          desc="A tight process so you always know what’s happening next."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {["Project kickoff", "Production", "Delivery & publish"].map((t, i) => (
              <Card
                key={t}
                className="rounded-3xl border-white/10 bg-white/5"
              >
                <CardContent className="p-6">
                  <div className="text-xs text-white/60">Step {i + 1}</div>
                  <div className="mt-2 text-lg font-semibold">{t}</div>
                  <p className="mt-2 text-sm text-white/70">
                    {i === 0
                      ? "We align on goals, scope, budget, and timeline. Then we lock it in with a simple agreement."
                      : i === 1
                      ? "We execute with our crew, track milestones, and keep you updated."
                      : "We deliver files organized for social, streaming, and partners—ready to post and monetize."}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Process */}
        <Section
          id="process"
          kicker="How we work"
          title="A contract-ready workflow"
          desc="We keep everything documented so projects move smoothly with contractors, talent, and clients."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="rounded-3xl border-white/10 bg-white/5">
              <CardContent className="p-6">
                <div className="text-lg font-semibold">Contracts & eSign</div>
                <p className="mt-2 text-sm text-white/70">
                  Standard templates for contractors, vendors, talent, sponsors, and clients.
                  Sign from any phone. Signed copies stored automatically.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {["Independent Contractor", "Vendor", "Performance", "Sponsorship"].map(
                    (x) => (
                      <li key={x} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                        <span>{x}</span>
                      </li>
                    )
                  )}
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-white/10 bg-white/5">
              <CardContent className="p-6">
                <div className="text-lg font-semibold">Asset delivery</div>
                <p className="mt-2 text-sm text-white/70">
                  We deliver organized folders with clear naming for easy posting, sharing,
                  and archiving.
                </p>
                <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 p-4 text-xs text-white/70">
                  Example structure:
                  <div className="mt-2 font-mono text-[11px] leading-5 text-white/60">
                    /Project_Name<br />
                    ├── 01_Raw<br />
                    ├── 02_Selects<br />
                    ├── 03_Edits<br />
                    └── 04_Social_Cuts
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Contact */}
        <Section
          id="contact"
          kicker="Get in touch"
          title="Tell us what you’re building"
          desc="Send the basics and we’ll respond with next steps."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="rounded-3xl border-white/10 bg-white/5">
              <CardContent className="p-6">
                <div className="text-sm font-semibold">Lead capture</div>
                <p className="mt-2 text-sm text-white/70">
                  Drop your details and we’ll respond with next steps, pricing, and a timeline.
                </p>

                {/*
                  OPTION 1 (recommended): Formspree
                  - Create a free Formspree form and replace the action URL below.
                  - Example: https://formspree.io/f/xxxxabcd

                  OPTION 2: Tally.so
                  - Replace the form block with an <iframe> embed from Tally.

                  OPTION 3: Google Forms
                  - Use a Google Form link (button) or embed the form in an <iframe>.
                */}
                <form
                  className="mt-5 grid gap-3"
                  method="POST"
                  action="https://formspree.io/f/REPLACE_ME"
                >
                  <div className="grid gap-3 md:grid-cols-2">
                    <input
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30"
                    />
                    <input
                      name="phone"
                      placeholder="Phone (optional)"
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30"
                  />
                  <div className="grid gap-3 md:grid-cols-2">
                    <select
                      name="project_type"
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Project type
                      </option>
                      <option value="Event Coverage">Event Coverage</option>
                      <option value="Artist Support">Artist Support</option>
                      <option value="Content Run">Content Run</option>
                      <option value="Brand Partnership">Brand Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                    <input
                      name="date"
                      placeholder="Date / timeline"
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30"
                    />
                  </div>
                  <textarea
                    name="details"
                    required
                    placeholder="Tell us what you need (location, deliverables, budget range, links)"
                    rows={5}
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30"
                  />

                  {/* Honeypot anti-spam (optional) */}
                  <input
                    type="text"
                    name="_gotcha"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-white/90"
                  >
                    Submit request <ArrowRight className="ml-2 h-4 w-4" />
                  </button>

                  <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-xs text-white/70">
                    <div className="font-semibold text-white">Setup note</div>
                    <div className="mt-1">
                      Replace the Formspree URL in the code with your real endpoint.
                      Until then, use the email button below as a backup.
                    </div>
                  </div>
                </form>

                <div className="mt-4">
                  <a
                    className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm font-semibold text-white hover:bg-white/5 w-full"
                    href={`mailto:hello@themotugroup.com?subject=Project%20Request%20%E2%80%94%20The%20Motu%20Group&body=Hi%20The%20Motu%20Group%2C%0A%0AProject%20type%3A%20%0ADate%2Ftimeline%3A%20%0ALocation%3A%20%0ABudget%20range%3A%20%0ADeliverables%3A%20%0A%0AName%3A%20%0APhone%3A%20%0A%0AThanks%21`}
                  >
                    Or email us instead
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-white/10 bg-white/5">
              <CardContent className="p-6">
                <div className="text-sm font-semibold">Contact details</div>
                <div className="mt-4 space-y-3 text-sm text-white/70">
                  <div>
                    <div className="text-xs text-white/60">Email</div>
                    <div className="font-medium text-white">hello@themotugroup.com</div>
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Service area</div>
                    <div className="font-medium text-white">DMV • NYC • Travel by request</div>
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Primary services</div>
                    <div className="font-medium text-white">
                      Entertainment • Media Production • Events
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4 text-xs text-white/70">
                  Want a multi-page site (Services, Portfolio, Booking, Shop)? We can expand this
                  into a full build next.
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between md:px-6">
            <div className="text-sm text-white/60">
              © {new Date().getFullYear()} The Motu Group. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a className="text-sm text-white/60 hover:text-white" href="#services">
                Services
              </a>
              <a className="text-sm text-white/60 hover:text-white" href="#contact">
                Contact
              </a>
              <a
                className="text-sm text-white/60 hover:text-white"
                href="#top"
              >
                Back to top
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
