export default function Home() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl font-semibold">Roadrunner Tree Grant — Saguaro District</h1>
        <p className="mt-2">
          Get up to <strong>2 free shade trees</strong> if your home qualifies.{" "}
          <a className="underline" href="#eligibility">Check eligibility</a>.
        </p>
      </section>

      <section id="overview">
        <h2 className="text-2xl font-semibold">Program overview</h2>
        <ul className="list-disc pl-5">
          <li>City of Phoenix Community Canopy Tree Grant</li>
          <li>Two trees per household. Planting and supplies included</li>
          <li>Friendly help through a simple chatbot</li>
        </ul>
      </section>

      <section id="eligibility">
        <h2 className="text-2xl font-semibold">Boundaries</h2>
        <p>
          Eligible area: <strong>19th Ave – 23rd Ave</strong>, <strong>McDowell Rd</strong> to the
          <strong> south side</strong> of <strong>Thomas Rd</strong>.
        </p>
        <p>Not sure? Open the chat and enter your address to confirm.</p>
        <p className="mt-2">
          <a
            className="underline"
            href="https://experience.arcgis.com/experience/4ff4f175842f4fc5b8b73f2f24a2c39d"
            target="_blank"
          >
            Official eligibility map
          </a>
        </p>
      </section>

      <section id="species">
        <h2 className="text-2xl font-semibold">Approved tree species</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            className="underline"
            href="https://www.phoenix.gov/content/dam/phoenix/heatsite/documents/English%20Tree%20Species.pdf"
            target="_blank"
          >
            Tree Species List – English
          </a>
          <a
            className="underline"
            href="https://www.phoenix.gov/content/dam/phoenix/heatsite/documents/Spanish%20Tree%20Species.pdf"
            target="_blank"
          >
            Lista de Árboles – Español
          </a>
        </div>
      </section>
    </div>
  );
}
