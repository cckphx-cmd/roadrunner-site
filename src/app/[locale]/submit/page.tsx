export default function Submit() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">Submit & Tree Info</h1>

      <section>
        <h2 className="text-xl font-semibold">Approved species</h2>
        <ul className="list-disc pl-5">
          <li>
            <a
              className="underline"
              href="https://www.phoenix.gov/content/dam/phoenix/heatsite/documents/English%20Tree%20Species.pdf"
              target="_blank"
            >
              Tree Species List – English
            </a>
          </li>
          <li>
            <a
              className="underline"
              href="https://www.phoenix.gov/content/dam/phoenix/heatsite/documents/Spanish%20Tree%20Species.pdf"
              target="_blank"
            >
              Lista de Árboles – Español
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Warnings & placement</h2>
        <ul className="list-disc pl-5">
          <li>Front yards only. Away from power lines and underground utilities</li>
          <li>Call Arizona 811 before digging</li>
          <li>Water regularly for the first two years</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Submit your request</h2>
        <p>
          Online form:{" "}
          <a
            className="underline"
            href="https://phoenix-gov.formstack.com/forms/community_canopy_grant_application"
            target="_blank"
          >
            City of Phoenix application
          </a>
        </p>
        <p>
          Handwritten note drop-off: <strong>2133 W Edgemont Ave, Phoenix, AZ 85009</strong>. Use the
          mail slot labeled “Tree Submissions.”
        </p>
      </section>
    </div>
  );
}
