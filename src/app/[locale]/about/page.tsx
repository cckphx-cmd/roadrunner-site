export default function About() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">About & Midcentury Design</h1>

      <section>
        <h2 className="text-xl font-semibold">About Courtney</h2>
        <p>
          Neighborhood coordinator and product leader based in Phoenix. Contact:{" "}
          <a className="underline" href="mailto:roadrunner602@gmail.com">roadrunner602@gmail.com</a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Why shade design matters here</h2>
        <p>
          Many midcentury desert neighborhoods considered sun angles, street orientation, and shared
          canopy to reduce heat. Trees planted in front yards can cool homes and sidewalks for
          neighbors too.
        </p>
        <p className="mt-2">
          Source:{" "}
          <a
            className="underline"
            href="https://www.phoenix.gov/content/dam/phoenix/oepsite/documents/eqsc/Tree%20and%20Shade%20Recommendations%20EQSC%202019-9-11.pdf"
            target="_blank"
          >
            Tree and Shade Recommendations (EQSC)
          </a>
        </p>
      </section>
    </div>
  );
}
