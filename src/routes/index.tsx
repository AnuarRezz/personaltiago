import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BicepsFlexed,
  Check,
  Dumbbell,
  HeartPulse,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Play,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingDown,
  UserRoundCheck,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

import tiagoPhoto from "@/assets/tiago-personal.jpg.asset.json";
import resultPhoto from "@/assets/resultado-hipertrofia.jpg.asset.json";
import trainingOne from "@/assets/treino-aluno-1.mp4.asset.json";
import trainingTwo from "@/assets/treino-aluno-2.mp4.asset.json";
import trainingThree from "@/assets/treino-aluno-3.mp4.asset.json";
import trainingFour from "@/assets/treino-aluno-4.mp4.asset.json";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const whatsappUrl =
  "https://wa.me/5567991066646?text=Ol%C3%A1%2C%20quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20o%20Personal%20Tiago%21";

const services = [
  { icon: BicepsFlexed, title: "Hipertrofia", text: "Estratégia para ganho de massa muscular com progressão planejada e execução segura." },
  { icon: TrendingDown, title: "Emagrecimento", text: "Treinos dinâmicos e consistentes para reduzir medidas e conquistar mais disposição." },
  { icon: Activity, title: "Condicionamento", text: "Mais força, mobilidade e fôlego para melhorar seu desempenho dentro e fora da academia." },
  { icon: HeartPulse, title: "Grupos especiais", text: "Acompanhamento para pessoas com lesões, hipertensão, dores articulares e limitações funcionais." },
  { icon: UserRoundCheck, title: "Online e híbrido", text: "Planejamento individual, orientação próxima e ajustes para treinar onde você estiver." },
  { icon: Sparkles, title: "Massoterapia", text: "Suporte para recuperação muscular, alívio de tensões e bem-estar entre os treinos." },
];

const steps = [
  ["01", "Avaliação inicial", "Entendo seu histórico, rotina, objetivos e possíveis limitações."],
  ["02", "Plano personalizado", "Você recebe um treino construído para o seu momento e sua meta."],
  ["03", "Acompanhamento", "Monitoro sua evolução e ajusto o plano sempre que necessário."],
  ["04", "Resultados duradouros", "Consistência, segurança e evolução que você consegue manter."],
];

const faqs = [
  ["Preciso ter experiência prévia na musculação?", "Não. O treino é adaptado ao seu nível atual, desde o primeiro contato com a academia até objetivos mais avançados."],
  ["O atendimento é presencial ou online?", "Os dois. Você pode treinar presencialmente em Campo Grande/MS ou contar com consultoria online e acompanhamento híbrido."],
  ["Como funciona o treino para quem tem lesões ou dores crônicas?", "A avaliação considera seu histórico, limitações e orientações clínicas. Os exercícios são selecionados e acompanhados com foco em segurança, mobilidade e evolução gradual."],
  ["Como funciona o suporte com massoterapia?", "A massoterapia pode complementar o acompanhamento, auxiliando no relaxamento, na recuperação muscular e no bem-estar geral."],
  ["Como agendo minha primeira avaliação?", "Toque em qualquer botão de WhatsApp desta página. A mensagem já estará pronta para você conversar diretamente com o Personal Tiago."],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Personal Trainer em Campo Grande MS | Prof. Sebastião Tiago" },
      { name: "description", content: "Treinos personalizados para hipertrofia, emagrecimento e condicionamento físico em Campo Grande/MS, presencial e online." },
      { property: "og:title", content: "Prof. Sebastião Tiago | Personal Trainer em Campo Grande MS" },
      { property: "og:description", content: "Treino individual, acompanhamento próximo e resultados com segurança. Agende sua avaliação gratuita." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function WhatsAppButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <Button asChild size="lg" className={`h-14 rounded-sm bg-lime px-6 font-display text-base font-black uppercase text-lime-foreground shadow-lime hover:bg-lime/90 ${className}`}>
      <a href={whatsappUrl} target="_blank" rel="noreferrer">
        <MessageCircle className="size-5" /> {children}
      </a>
    </Button>
  );
}

function SectionTitle({ kicker, children, centered = false }: { kicker: string; children: React.ReactNode; centered?: boolean }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-3 flex items-center gap-2 font-display text-sm font-bold uppercase text-lime"><span className="h-px w-8 bg-lime" />{kicker}</p>
      <h2 className="font-display text-4xl font-black uppercase leading-none text-foreground sm:text-5xl lg:text-6xl">{children}</h2>
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-40 border-b border-foreground/10 bg-background/60 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#inicio" className="font-display text-xl font-black uppercase leading-none text-foreground">Tiago<span className="text-lime">Personal</span></a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
            {[['Sobre','#sobre'],['Serviços','#servicos'],['Resultados','#resultados'],['Como funciona','#como-funciona'],['Dúvidas','#faq']].map(([label, href]) => <a key={href} href={href} className="text-sm font-bold uppercase text-muted-foreground transition-colors hover:text-lime">{label}</a>)}
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="border-t border-foreground/10 bg-background px-5 py-5 md:hidden">{[['Sobre','#sobre'],['Serviços','#servicos'],['Resultados','#resultados'],['Como funciona','#como-funciona'],['Dúvidas','#faq']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-foreground/10 py-3 font-display font-bold uppercase">{label}</a>)}</nav>}
      </header>

      <section id="inicio" className="relative min-h-[760px] pt-20 lg:min-h-[860px]">
        <div className="absolute inset-0 bg-hero-grid opacity-40" />
        <div className="absolute bottom-0 right-0 top-20 w-full lg:w-[52%]">
          <img src={tiagoPhoto.url} alt="Prof. Sebastião Tiago, Personal Trainer" className="h-full w-full object-cover object-[50%_18%] opacity-45 lg:opacity-100" />
          <div className="absolute inset-0 bg-hero-fade" />
        </div>
        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-end px-5 pb-16 pt-24 sm:items-center lg:px-8 lg:pb-0">
          <div className="max-w-3xl animate-fade-in">
            <div className="mb-6 inline-flex items-center gap-2 border border-lime/40 bg-lime/10 px-3 py-2 text-xs font-bold uppercase text-lime"><BadgeCheck className="size-4" /> CREF 007920-G/MS</div>
            <h1 className="font-display text-5xl font-black uppercase leading-[0.9] sm:text-7xl lg:text-8xl">Seu corpo.<br /><span className="text-outline">Suas regras.</span><br /><span className="text-lime">Meu método.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">Treinos personalizados para hipertrofia, emagrecimento e condicionamento físico em Campo Grande/MS.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <WhatsAppButton>Agende sua avaliação grátis</WhatsAppButton>
              <a href="#resultados" className="inline-flex h-14 items-center justify-center gap-2 px-4 text-sm font-bold uppercase text-foreground hover:text-lime">Conheça os resultados <ArrowDown className="size-4" /></a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold uppercase text-muted-foreground"><span className="flex items-center gap-2"><Check className="size-4 text-lime" /> Presencial</span><span className="flex items-center gap-2"><Check className="size-4 text-lime" /> Online</span><span className="flex items-center gap-2"><MapPin className="size-4 text-lime" /> Campo Grande/MS</span></div>
          </div>
        </div>
      </section>

      <section id="sobre" className="border-y border-foreground/10 bg-surface py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-3 border border-primary/40" />
            <img src={tiagoPhoto.url} alt="Personal Trainer Sebastião Tiago" loading="lazy" className="relative aspect-[4/5] w-full object-cover object-top grayscale-[15%]" />
            <div className="absolute -bottom-5 -right-3 bg-primary px-5 py-4 font-display text-sm font-black uppercase text-primary-foreground">Personal Trainer</div>
          </div>
          <div>
            <SectionTitle kicker="Sobre o profissional">Treino inteligente.<br /><span className="text-primary">Evolução segura.</span></SectionTitle>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">Sou o Prof. Sebastião Tiago. Meu trabalho começa entendendo seu corpo, sua rotina e seu objetivo. Cada treino é planejado de forma individual, com atenção à execução, à progressão e à sua segurança.</p>
            <p className="mt-5 leading-relaxed text-muted-foreground">O foco é construir resultados reais sem atalhos: mais força, autonomia, saúde e confiança para você se sentir melhor em todos os aspectos da vida.</p>
            <div className="mt-8 border-l-4 border-lime bg-background p-6">
              <div className="mb-3 flex items-center gap-3 font-display text-lg font-black uppercase"><ShieldCheck className="text-lime" /> Atendimento para grupos especiais</div>
              <p className="text-sm leading-relaxed text-muted-foreground">Treinos adaptados para pessoas com lesões, hipertensão, dores nos joelhos, dores lombares e limitações funcionais, sempre respeitando cada caso.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle kicker="Serviços">Um método para<br /><span className="text-lime">cada objetivo.</span></SectionTitle>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }, index) => <article key={title} className="group relative bg-background p-7 transition-colors duration-300 hover:bg-surface"><span className="absolute right-5 top-4 font-display text-5xl font-black text-foreground/5">0{index + 1}</span><div className="mb-8 flex size-12 items-center justify-center bg-primary text-primary-foreground transition-transform group-hover:-translate-y-1"><Icon /></div><h3 className="font-display text-xl font-black uppercase">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="resultados" className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-3 font-display text-sm font-bold uppercase text-lime">Resultados reais</p><h2 className="font-display text-4xl font-black uppercase leading-none sm:text-6xl">Trabalho que<br />aparece.</h2></div><p className="max-w-md text-sm leading-relaxed text-primary-foreground/70">Acompanhamento próximo, método e consistência para transformar objetivos em evolução visível.</p></div>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="relative overflow-hidden bg-background">
              <img src={resultPhoto.url} alt="Resultado de aluno: ganho de 8,8 kg de massa muscular" loading="lazy" className="aspect-[4/5] h-full w-full object-cover object-top sm:aspect-[4/3]" />
              <span className="sticker absolute right-4 top-5 flex size-28 rotate-6 items-center justify-center bg-lime text-center font-display text-xl font-black uppercase leading-none text-lime-foreground">+8,8 kg<br />massa</span>
            </article>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <article className="relative flex min-h-64 flex-col justify-end overflow-hidden bg-background p-7"><div className="absolute inset-0 bg-result-lines opacity-40" /><span className="sticker absolute right-5 top-5 flex size-24 -rotate-6 items-center justify-center bg-highlight text-center font-display text-sm font-black uppercase text-highlight-foreground">Mudança<br />real</span><p className="relative font-display text-6xl font-black text-lime">−12 KG</p><h3 className="relative mt-1 font-display text-xl font-black uppercase">em 2 meses</h3><p className="relative mt-3 text-sm text-muted-foreground">Foco em emagrecimento, rotina e acompanhamento individual.</p></article>
              <article className="flex min-h-64 flex-col justify-between bg-surface p-7"><span className="font-display text-7xl leading-none text-primary">“</span><blockquote className="text-lg font-semibold leading-relaxed">Treino planejado, atenção em cada execução e evolução que dá vontade de continuar.</blockquote><p className="mt-5 text-xs font-bold uppercase text-muted-foreground">— Aluno acompanhado</p></article>
            </div>
          </div>
          <div className="mt-14 flex items-center gap-3"><Play className="fill-lime text-lime" /><h3 className="font-display text-2xl font-black uppercase">Treino em ação</h3></div>
          <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[trainingOne, trainingTwo, trainingThree, trainingFour].map((video, index) => <div key={video.url} className="relative overflow-hidden bg-background"><video controls preload="metadata" playsInline className="aspect-[9/16] w-full object-cover" aria-label={`Vídeo de treino com aluno ${index + 1}`}><source src={video.url} type="video/mp4" /></video></div>)}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle kicker="Como funciona" centered>Do primeiro passo<br /><span className="text-primary">à sua evolução.</span></SectionTitle>
          <div className="relative mt-14 grid gap-8 md:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-border md:block" />
            {steps.map(([number, title, text]) => <article key={number} className="relative text-center"><span className="relative z-10 mx-auto flex size-14 items-center justify-center rounded-full border-4 border-background bg-lime font-display text-lg font-black text-lime-foreground">{number}</span><h3 className="mt-5 font-display text-lg font-black uppercase">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="faq" className="border-y border-foreground/10 bg-surface py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div><SectionTitle kicker="Dúvidas frequentes">Sem dúvida.<br /><span className="text-lime">Só evolução.</span></SectionTitle><p className="mt-6 max-w-md text-muted-foreground">Ainda quer saber algo? Fale diretamente comigo pelo WhatsApp.</p></div>
          <Accordion type="single" collapsible className="border-t border-foreground/15">
            {faqs.map(([question, answer], index) => <AccordionItem key={question} value={`item-${index}`} className="border-foreground/15"><AccordionTrigger className="py-6 pr-2 text-left font-display text-base font-bold uppercase hover:no-underline hover:text-lime">{question}</AccordionTrigger><AccordionContent className="max-w-2xl pb-6 leading-relaxed text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}
          </Accordion>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 text-center lg:py-32">
        <div className="absolute inset-0 bg-cta-grid opacity-30" />
        <div className="relative mx-auto max-w-4xl px-5"><Zap className="mx-auto mb-6 size-10 fill-lime text-lime" /><p className="mb-3 font-display text-sm font-bold uppercase text-primary">Seu próximo passo começa agora</p><h2 className="font-display text-5xl font-black uppercase leading-none sm:text-7xl">Comece sua<br /><span className="text-lime">transformação hoje.</span></h2><p className="mx-auto mt-6 max-w-xl text-muted-foreground">Agende uma avaliação gratuita e descubra o caminho mais eficiente e seguro para o seu objetivo.</p><WhatsAppButton className="mt-9 w-full sm:w-auto">Falar com o Personal Tiago</WhatsAppButton></div>
      </section>

      <footer className="border-t border-foreground/10 bg-surface py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between lg:px-8"><div><p className="font-display text-xl font-black uppercase">Prof. Sebastião Tiago</p><p className="mt-1 text-xs uppercase text-muted-foreground">Personal Trainer • CREF 007920-G/MS</p></div><div className="flex flex-wrap gap-5 text-sm"><a href="https://instagram.com/tiagopersonal.cg" target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold hover:text-lime"><Instagram className="size-4" /> @tiagopersonal.cg</a><span className="flex items-center gap-2 text-muted-foreground"><MapPin className="size-4" /> Campo Grande/MS</span></div></div>
      </footer>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Agendar avaliação pelo WhatsApp" className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-whatsapp transition-transform hover:scale-105 sm:bottom-7 sm:right-7 sm:size-16"><MessageCircle className="size-7 fill-current" /></a>
    </main>
  );
}