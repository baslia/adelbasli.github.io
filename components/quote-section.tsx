export function QuoteSection() {
  return (
    <section className="bg-card text-card-foreground rounded-lg shadow p-6 text-center scroll-mt-16 border-l-4 border-accent">
      <blockquote className="italic text-muted-foreground text-lg">
        <p>{'"Once you stop learning, you start dying."'}</p>
        <footer className="mt-2 text-sm font-medium text-card-foreground">
          - Albert Einstein
        </footer>
      </blockquote>
    </section>
  )
}
