import Link from "next/link";

export default function NotFound() {
  return (
    <main className="detail-shell detail-shell--centered">
      <span className="eyebrow">404</span>
      <h1>Spot not found</h1>
      <p>
        That location is not wired into the first Cape build yet. Use the
        dashboard to jump back into the supported spots.
      </p>
      <Link href="/">Return to the dashboard</Link>
    </main>
  );
}
