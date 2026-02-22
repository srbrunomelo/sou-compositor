import Link from "next/link";
import { currentYear } from "@/src/shared/utils/date-helpers";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border/40 bg-card/30">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>
          © - {currentYear} O Compositor de Lançamentos. Todos os direitos
          reservados.
        </p>
        <div className="mt-2 flex justify-center gap-4">
          <Link
            href="https://www.instagram.com/sou.compositor"
            className="hover:text-primary transition-colors"
            target="_blank"
          >
            Instagram
          </Link>
          <Link
            href="https://open.spotify.com/artist/0KmAFSBD0ULxJfyYRCFo73"
            className="hover:text-primary transition-colors"
            target="_blank"
          >
            Spotify
          </Link>
        </div>
      </div>
    </footer>
  );
}
