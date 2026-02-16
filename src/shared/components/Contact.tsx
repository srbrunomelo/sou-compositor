"use client";

import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

export function Contact() {
  function openWhatsApp() {
    const message = "Olá, gostaria de saber mais sobre as composições.";
    const url = `https://api.whatsapp.com/send?phone=+5527995169328&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-6 bg-secondary/20 relative overflow-hidden"
    >
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Vamos Criar Juntos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interessado em liberar uma faixa para gravação ou criar uma trilha
            sonora original? Entre em contato.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-xl">
              <h3 className="text-2xl font-serif mb-6 text-primary">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {/* <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">
                      contato@compositor.com
                    </p>
                  </div>
                </div> */}

                <div
                  className="flex items-center gap-4 group cursor-pointer"
                  onClick={openWhatsApp}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="text-foreground font-medium">
                      +55 (27) 995169328
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Estúdio</p>
                    <p className="text-foreground font-medium">
                      Vitória, Espírito Santo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <form
              className="space-y-6 bg-card p-8 rounded-2xl border border-border shadow-xl"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-2xl font-serif mb-6">Envie uma Mensagem</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Nome
                  </label>
                  <Input
                    placeholder="Seu nome"
                    className="bg-secondary/50 border-border/50 focus:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-secondary/50 border-border/50 focus:border-primary/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Assunto
                </label>
                <Input
                  placeholder="Liberação de gravação, trilha sonora..."
                  className="bg-secondary/50 border-border/50 focus:border-primary/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Mensagem
                </label>
                <Textarea
                  placeholder="Como posso ajudar?"
                  className="min-h-[120px] bg-secondary/50 border-border/50 focus:border-primary/50"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-medium shadow-lg hover:shadow-primary/20"
              >
                Enviar Mensagem <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
