"use client";

import { motion } from "framer-motion";
import { Music2, Mic2, FileMusic, Award } from "lucide-react";

const stats = [
  { icon: Music2, label: "Composições", value: "100+" },
  { icon: Mic2, label: "Gêneros musicais", value: "8+" },
  { icon: FileMusic, label: "Guias gravadas", value: "100+" },
  { icon: Award, label: "Anos de experiência", value: "10+" },
];

const genres = [
  "Sertanejo",
  "Gospel",
  "Worship",
  "Funk",
  "Pagode",
  "Samba",
  "Reggae",
  "Pop",
  "Rock",
];

export function AboutComposer() {
  return (
    <section
      id="about"
      className="py-24 px-4 md:px-6 bg-secondary/10"
      aria-label="Sobre o compositor Bruno Melo"
    >
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Sobre o Compositor
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bruno Melo — compositor profissional baseado em Vitória, ES
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              Sou <strong className="text-foreground">Bruno Melo</strong>,
              compositor profissional com mais de 10 anos de experiência na
              criação de letras e melodias para o mercado musical brasileiro.
              Meu trabalho como compositor abrange desde o{" "}
              <strong className="text-foreground">Sertanejo Universitário</strong>{" "}
              até o{" "}
              <strong className="text-foreground">Gospel e Worship</strong>,
              passando por Funk, Pagode, Reggae, Pop e Rock.
            </p>
            <p>
              Como compositor, entendo que cada artista tem uma identidade
              única. Por isso, cada composição é criada com atenção à voz, ao
              estilo e à proposta do cantor ou da dupla. O resultado é uma
              música de trabalho que soa verdadeira — não apenas mais uma letra
              genérica, mas uma composição feita para impactar.
            </p>
            <p>
              Todo projeto inclui uma{" "}
              <strong className="text-foreground">guia exclusiva gravada</strong>
              {" "}— um demo com melodia e arranjo base — facilitando o processo de
              gravação em estúdio. Atendo artistas iniciantes, duplas
              estabelecidas e ministérios de louvor em todo o Brasil.
            </p>
            <p>
              Se você busca um compositor que entenda o mercado, saiba criar hits
              e entregue músicas com potencial de execução, você está no lugar
              certo. Explore o portfólio e entre em contato para liberar uma
              composição inédita para a sua carreira.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="bg-card border border-border/50 rounded-2xl p-5 flex flex-col gap-2"
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-3xl font-bold font-serif text-foreground">
                    {value}
                  </span>
                  <span className="text-sm text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border/50 rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Gêneros que atendo
              </h3>
              <div className="flex flex-wrap gap-2">
                {genres.map((genre) => (
                  <span
                    key={genre}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
