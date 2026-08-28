import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60svh] max-w-3xl flex-col justify-center px-5 py-24 sm:px-8">
      <p className="mono text-[11px] tracking-[0.2em] text-faint uppercase">404</p>
      <h1 className="serif mt-4 text-4xl tracking-tight">This page is not part of the graph.</h1>
      <p className="mt-4 max-w-md text-muted">
        The route does not exist. The rest of the work is still on the homepage.
      </p>
      <div className="mt-8">
        <ButtonLink href="/">Back home</ButtonLink>
      </div>
    </div>
  );
}
