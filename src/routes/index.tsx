import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BicepsFlexed,
  Check,
  ClipboardCheck,
  Dumbbell,
  HeartPulse,
  Instagram,
  Laptop,
  MapPin,
  Menu,
  MessageCircle,
  Play,
  RefreshCw,
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
import resultHypertrophy from "@/assets/resultado-hipertrofia-2026.png.asset.json";
import resultPersonalized from "@/assets/resultado-personalizado-2026.png.asset.json";
import trainingEquipment from "@/assets/atendimento-aparelho.jpg.asset.json";
import trainingGroup from "@/assets/atendimento-grupo.jpg.asset.json";
import trainingOne from "@/assets/treino-aluno-1.mp4.asset.json";
import trainingTwo from "@/assets/treino-aluno-2.mp4.asset.json";
import trainingThree from "@/assets/treino-aluno-3.mp4.asset.json";
import trainingFour from "@/assets/treino-aluno-4.mp4.asset.json";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const whatsappUrl =
  "https://wa.me/5567991066646?text=Ol%C3%A1%2C%20quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20o%20Personal%20Tiago%21";

const services = [
  { icon: UserRoundCheck, title: "Presencial e online", text: "Aulas individuais ou em pequenos grupos, em academias e condomínios de Campo Grande/MS, além de consultoria online e híbrida." },
  { icon: BicepsFlexed, title: "Hipertrofia muscular", text: "Estratégia para ganho de massa muscular com progressão planejada e execução segura." },
  { icon: Activity, title: "Fortalecimento do core", text: "Exercícios para estabilidade, postura, proteção da coluna e melhor desempenho nos movimentos." },
  { icon: TrendingDown, title: "Emagrecimento saudável", text: "Treinos consistentes para reduzir gordura, preservar massa muscular e conquistar mais disposição." },
  { icon: HeartPulse, title: "Idosos e hipertensos", text: "Acompanhamento adaptado às necessidades de grupos especiais, com foco em segurança e autonomia." },
  { icon: ShieldCheck, title: "Reabilitados de lesão", text: "Treinos para quem passou por lesões ou convive com limitações funcionais, respeitando cada etapa da evolução." },
];

const plans = [
  {
    icon: Laptop,
    name: "Consultoria Online",
    label: "Treine onde estiver",
    items: ["Anamnese completa", "Ficha de treino para sua rotina e objetivos", "Vídeos explicativos dos exercícios", "Suporte direto e acompanhamento semanal via WhatsApp"],
  },
  {
    icon: RefreshCw,
    name: "Consultoria Híbrida",
    label: "Online + presencial",
    featured: true,
    items: ["Tudo da Consultoria Online", "3 aulas presenciais", "Ajustes de alinhamento postural", "Correção de técnica e execução"],
  },
  {
    icon: UserRoundCheck,
    name: "Personal Presencial VIP",
    label: "Acompanhamento total",
    items: ["Treino individualizado em cada encontro", "Atendimento em academias e condomínios", "Correção em tempo real", "Suporte em massoterapia e recuperação"],
  },
];

const benefits = [
  { icon: ClipboardCheck, title: "Treinos personalizados", text: "Adaptados à sua realidade, rotina e objetivos." },
  { icon: ShieldCheck, title: "Postura e técnica", text: "Correções que evitam lesões e melhoram a eficácia mecânica." },
  { icon: Zap, title: "Motivação e constância", text: "Apoio próximo para fortalecer sua disciplina diária." },
  { icon: TrendingDown, title: "Resultados rápidos e seguros", text: "Treinos otimizados para acelerar o progresso sem colocar sua saúde em risco." },
];

const steps = [
  ["01", "Questionário completo", "Você responde uma anamnese detalhada sobre rotina, histórico e limitações."],
  ["02", "Montagem personalizada", "Monto seu protocolo individualizado com base nas suas metas e na sua rotina real."],
  ["03", "Vídeos explicativos", "Você recebe o treino detalhado com guias em vídeo para executar cada movimento com segurança."],
  ["04", "Acompanhamento semanal", "Feedback e ajustes contínuos via WhatsApp para garantir evolução constante."],
];

const deliverables = [
  "Avaliação completa e anamnese",
  "Treinos personalizados e periodizados",
  "Acompanhamento da execução e técnica",
  "Ajustes constantes conforme a evolução",
  "Motivação e compromisso direto com sua jornada",
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
    <Button asChild size="lg" className={`min-h-12 h-auto whitespace-normal rounded-sm bg-lime px-5 py-3 text-center font-display text-[clamp(0.9rem,4vw,1rem)] font-black uppercase leading-tight text-lime-foreground shadow-lime hover:bg-lime/90 sm:min-h-14 sm:px-6 ${className}`}>
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
      <h2 className="font-display text-[clamp(2.25rem,11vw,3.75rem)] font-black uppercase leading-[0.95] text-foreground">{children}</h2>
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
            {[['Sobre','#sobre'],['Serviços','#servicos'],['Planos','#planos'],['Resultados','#resultados'],['Como funciona','#como-funciona'],['Dúvidas','#faq']].map(([label, href]) => <a key={href} href={href} className="text-sm font-bold uppercase text-muted-foreground transition-colors hover:text-lime">{label}</a>)}
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="border-t border-foreground/10 bg-background px-5 py-5 md:hidden">{[['Sobre','#sobre'],['Serviços','#servicos'],['Planos','#planos'],['Resultados','#resultados'],['Como funciona','#como-funciona'],['Dúvidas','#faq']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-foreground/10 py-3 font-display font-bold uppercase">{label}</a>)}</nav>}
      </header>

      <section id="inicio" className="relative min-h-[720px] pt-20 sm:min-h-[760px] lg:min-h-[860px]">
        <div className="absolute inset-0 bg-hero-grid opacity-40" />
        <div className="absolute bottom-0 right-0 top-20 w-full lg:w-[52%]">
          <img src={tiagoPhoto.url} alt="Prof. Sebastião Tiago, Personal Trainer" className="h-full w-full object-cover object-[50%_18%] opacity-45 lg:opacity-100" />
          <div className="absolute inset-0 bg-hero-fade" />
        </div>
        <div className="relative mx-auto flex min-h-[640px] max-w-7xl items-end px-5 pb-10 pt-20 sm:min-h-[680px] sm:items-center sm:pb-16 sm:pt-24 lg:px-8 lg:pb-0">
          <div className="max-w-3xl animate-fade-in">
            <div className="mb-6 inline-flex items-center gap-2 border border-lime/40 bg-lime/10 px-3 py-2 text-xs font-bold uppercase text-lime"><BadgeCheck className="size-4" /> CREF 007920-G/MS</div>
            <h1 className="font-display text-[clamp(2.9rem,13.5vw,6rem)] font-black uppercase leading-[0.88]">Seu corpo.<br /><span className="text-outline">Suas regras.</span><br /><span className="text-lime">Meu método.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">Treinos personalizados para hipertrofia, emagrecimento e condicionamento físico em Campo Grande/MS.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <WhatsAppButton>Agende sua avaliação grátis</WhatsAppButton>
              <a href="#resultados" className="inline-flex min-h-12 items-center justify-center gap-2 px-4 text-sm font-bold uppercase text-foreground hover:text-lime sm:min-h-14">Conheça os resultados <ArrowDown className="size-4 shrink-0" /></a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold uppercase text-muted-foreground"><span className="flex items-center gap-2"><Check className="size-4 text-lime" /> Presencial</span><span className="flex items-center gap-2"><Check className="size-4 text-lime" /> Online</span><span className="flex items-center gap-2"><MapPin className="size-4 text-lime" /> Campo Grande/MS</span></div>
          </div>
        </div>
      </section>

      <section id="sobre" className="border-y border-foreground/10 bg-surface py-16 sm:py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-3 border border-primary/40" />
            <img src={tiagoPhoto.url} alt="Personal Trainer Sebastião Tiago" loading="lazy" className="relative aspect-[4/5] w-full object-cover object-top grayscale-[15%]" />
            <div className="absolute -bottom-5 -right-3 bg-primary px-5 py-4 font-display text-sm font-black uppercase text-primary-foreground">Personal Trainer</div>
          </div>
          <div>
            <SectionTitle kicker="Sobre o profissional">Treino inteligente.<br /><span className="text-primary">Evolução segura.</span></SectionTitle>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">Sou o Prof. Sebastião Tiago. Meu trabalho começa entendendo seu corpo, sua rotina e seu objetivo. Cada treino é planejado de forma individual, com atenção à execução, à progressão e à sua segurança.</p>
            <p className="mt-5 leading-relaxed text-muted-foreground">Meu trabalho é voltado para pessoas que buscam resultados com planejamento e acompanhamento, seja para hipertrofia, emagrecimento, fortalecimento ou melhora do condicionamento físico.</p>
            <p className="mt-5 leading-relaxed text-muted-foreground">Também trabalho com quem precisa de cuidado mais individualizado — alunos com limitações, lesões ou necessidades específicas — respeitando as condições de cada pessoa e, quando necessário, em conjunto com orientações médicas.</p>
            <p className="mt-5 leading-relaxed text-muted-foreground">Você não fica simplesmente fazendo exercícios aleatórios. Eu acompanho sua execução, corrijo sua técnica, ajusto o treinamento conforme sua evolução e faço com que cada treino tenha um propósito dentro do seu objetivo.</p>
            <blockquote className="mt-8 border-l-4 border-lime bg-background p-6">
              <p className="text-lg font-semibold leading-relaxed">“Eu não transformo apenas corpos. Transformo autoestima, confiança e qualidade de vida através do treinamento.”</p>
              <p className="mt-4 font-display text-xl font-black uppercase text-lime">Mente forte, corpo forte.</p>
            </blockquote>
            <div className="mt-6 flex flex-wrap gap-3 font-display text-base font-black uppercase"><span className="border border-primary/40 bg-primary/10 px-4 py-3 text-primary">Seu objetivo, minha missão!</span><span className="border border-lime/40 bg-lime/10 px-4 py-3 text-lime">Treino • Foco • Evolução</span></div>
            <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              <p className="flex items-start gap-3"><BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" /><span><strong className="block text-foreground">Educação Física</strong>Licenciatura e Bacharelado</span></p>
              <p className="flex items-start gap-3"><BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" /><span><strong className="block text-foreground">Pós-graduação</strong>Treinamento Físico e Cinesiologia</span></p>
              <p className="flex items-start gap-3"><BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" /><span><strong className="block text-foreground">Registro profissional</strong>CREF 007920-G/MS</span></p>
              <p className="flex items-start gap-3"><BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" /><span><strong className="block text-foreground">Cursos base</strong>Fisiologia, Treinamento Funcional e Fortalecimento do Core</span></p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle kicker="Serviços">Um método para<br /><span className="text-lime">cada objetivo.</span></SectionTitle>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }, index) => <article key={title} className="group relative bg-background p-7 transition-colors duration-300 hover:bg-surface"><span className="absolute right-5 top-4 font-display text-5xl font-black text-foreground/5">0{index + 1}</span><div className="mb-8 flex size-12 items-center justify-center bg-primary text-primary-foreground transition-transform group-hover:-translate-y-1"><Icon /></div><h3 className="font-display text-xl font-black uppercase">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="planos" className="border-y border-foreground/10 bg-surface py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><SectionTitle kicker="Planos de acompanhamento">Escolha como quer<br /><span className="text-primary">treinar comigo.</span></SectionTitle><p className="max-w-lg text-muted-foreground">Presencial em academias e condomínios de Campo Grande/MS, online de onde você estiver ou no formato híbrido.</p></div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map(({ icon: Icon, name, label, items, featured }) => <article key={name} className={`relative flex min-h-full flex-col border p-6 sm:p-8 ${featured ? "border-lime bg-background shadow-lime" : "border-foreground/15 bg-background"}`}>{featured && <span className="absolute right-4 top-4 bg-lime px-3 py-1 text-xs font-black uppercase text-lime-foreground">Mais completo</span>}<Icon className={`size-10 ${featured ? "text-lime" : "text-primary"}`} /><p className="mt-6 text-xs font-bold uppercase text-muted-foreground">{label}</p><h3 className="mt-1 font-display text-3xl font-black uppercase">{name}</h3><ul className="mt-7 flex-1 space-y-4">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground"><Check className="mt-0.5 size-5 shrink-0 text-lime" /><span>{item}</span></li>)}</ul><WhatsAppButton className="mt-8 w-full">Quero este acompanhamento</WhatsAppButton></article>)}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle kicker="Por que treinar com personal">Mais direção.<br /><span className="text-lime">Mais resultado.</span></SectionTitle>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">{benefits.map(({ icon: Icon, title, text }) => <article key={title} className="bg-background p-6 sm:p-7"><Icon className="size-9 text-primary" /><h3 className="mt-6 font-display text-xl font-black uppercase">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}</div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-surface py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionTitle kicker="Atendimento real">Técnica de perto.<br /><span className="text-primary">Evolução na prática.</span></SectionTitle><p className="max-w-md text-muted-foreground">Acompanhamento individual em aparelhos e aulas para pequenos grupos, sempre com atenção à execução.</p></div>
          <div className="mt-10 grid gap-4 md:grid-cols-[1.25fr_0.75fr]">
            <figure className="relative min-h-[320px] overflow-hidden md:min-h-[540px]"><img src={trainingEquipment.url} alt="Tiago orientando aluno durante exercício em aparelho" loading="lazy" className="absolute inset-0 h-full w-full object-cover" /><figcaption className="absolute inset-x-0 bottom-0 bg-background/90 p-5 font-display text-lg font-black uppercase">Correção e acompanhamento individual</figcaption></figure>
            <figure className="relative min-h-[320px] overflow-hidden md:min-h-[540px]"><img src={trainingGroup.url} alt="Tiago conduzindo treino presencial em pequeno grupo" loading="lazy" className="absolute inset-0 h-full w-full object-cover" /><figcaption className="absolute inset-x-0 bottom-0 bg-background/90 p-5 font-display text-lg font-black uppercase">Aulas dinâmicas em pequenos grupos</figcaption></figure>
          </div>
        </div>
      </section>

      <section id="resultados" className="bg-primary py-16 text-primary-foreground sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-3 font-display text-sm font-bold uppercase text-lime">Resultados reais</p><h2 className="font-display text-4xl font-black uppercase leading-none sm:text-6xl">Trabalho que<br />aparece.</h2></div><p className="max-w-md text-sm leading-relaxed text-primary-foreground/70">Acompanhamento próximo, método e consistência para transformar objetivos em evolução visível.</p></div>
           <div className="mt-12 grid gap-5 lg:grid-cols-2">
             <article className="min-w-0 overflow-hidden bg-background">
               <img src={resultHypertrophy.url} alt="Antes e depois de aluno com ganho de 8,8 kg de massa muscular" loading="lazy" className="aspect-[2/1] w-full object-cover" />
               <div className="p-5"><h3 className="font-display text-xl font-black uppercase">+8,8 kg de massa muscular</h3><p className="mt-2 text-sm text-muted-foreground">Resultado construído com treino de hipertrofia, foco e persistência.</p></div>
             </article>
             <article className="min-w-0 overflow-hidden bg-background">
               <img src={resultPersonalized.url} alt="Antes e depois de aluno com perda de gordura e maior definição muscular" loading="lazy" className="aspect-[2/1] w-full object-cover" />
               <div className="p-5"><h3 className="font-display text-xl font-black uppercase">Menos gordura, mais definição</h3><p className="mt-2 text-sm text-muted-foreground">Evolução alcançada com treinos personalizados e acompanhamento individual.</p></div>
             </article>
          </div>
           <blockquote className="mt-5 border-l-4 border-lime bg-background p-6 text-lg font-semibold leading-relaxed text-foreground">“Treino planejado, atenção em cada execução e evolução que dá vontade de continuar.” <span className="mt-3 block text-xs font-bold uppercase text-muted-foreground">— Aluno acompanhado</span></blockquote>
          <div className="mt-14 flex items-center gap-3"><Play className="fill-lime text-lime" /><h3 className="font-display text-2xl font-black uppercase">Treino em ação</h3></div>
          <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[trainingOne, trainingTwo, trainingThree, trainingFour].map((video, index) => <div key={video.url} className="relative overflow-hidden bg-background"><video controls preload="metadata" playsInline className="aspect-[9/16] w-full object-cover" aria-label={`Vídeo de treino com aluno ${index + 1}`}><source src={video.url} type="video/mp4" /></video></div>)}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle kicker="Como funciona a consultoria" centered>Da anamnese<br /><span className="text-primary">à sua evolução.</span></SectionTitle>
          <div className="relative mt-14 grid gap-8 md:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-border md:block" />
            {steps.map(([number, title, text]) => <article key={number} className="relative text-center"><span className="relative z-10 mx-auto flex size-14 items-center justify-center rounded-full border-4 border-background bg-lime font-display text-lg font-black text-lime-foreground">{number}</span><h3 className="mt-5 font-display text-lg font-black uppercase">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}
          </div>
          <div className="mt-16 grid gap-8 border-t border-foreground/15 pt-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div><p className="font-display text-sm font-bold uppercase text-lime">O que você recebe</p><h3 className="mt-3 font-display text-3xl font-black uppercase sm:text-4xl">Tudo para treinar<br />com propósito.</h3></div>
            <ul className="grid gap-3 sm:grid-cols-2">{deliverables.map((item) => <li key={item} className="flex min-h-16 items-center gap-3 border border-foreground/15 bg-surface px-4 py-3 text-sm font-semibold"><Check className="size-5 shrink-0 text-lime" />{item}</li>)}</ul>
          </div>
        </div>
      </section>

      <section id="faq" className="border-y border-foreground/10 bg-surface py-16 sm:py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div><SectionTitle kicker="Dúvidas frequentes">Sem dúvida.<br /><span className="text-lime">Só evolução.</span></SectionTitle><p className="mt-6 max-w-md text-muted-foreground">Ainda quer saber algo? Fale diretamente comigo pelo WhatsApp.</p></div>
          <Accordion type="single" collapsible className="border-t border-foreground/15">
            {faqs.map(([question, answer], index) => <AccordionItem key={question} value={`item-${index}`} className="border-foreground/15"><AccordionTrigger className="py-6 pr-2 text-left font-display text-base font-bold uppercase hover:no-underline hover:text-lime">{question}</AccordionTrigger><AccordionContent className="max-w-2xl pb-6 leading-relaxed text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}
          </Accordion>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 text-center sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-cta-grid opacity-30" />
        <div className="relative mx-auto max-w-4xl px-5"><Zap className="mx-auto mb-6 size-10 fill-lime text-lime" /><p className="mb-3 font-display text-sm font-bold uppercase text-primary">Seu objetivo. Meu compromisso.</p><h2 className="font-display text-[clamp(2.75rem,12vw,4.5rem)] font-black uppercase leading-[0.92]">Comece sua<br /><span className="text-lime">transformação hoje.</span></h2><p className="mx-auto mt-6 max-w-xl text-muted-foreground">Agende uma avaliação gratuita e descubra o caminho mais eficiente e seguro para o seu objetivo.</p><WhatsAppButton className="mt-9 w-full sm:w-auto">Falar com o Personal Tiago</WhatsAppButton></div>
      </section>

      <footer className="border-t border-foreground/10 bg-surface py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between lg:px-8"><div><p className="font-display text-xl font-black uppercase">Prof. Sebastião Tiago</p><p className="mt-1 text-xs uppercase text-muted-foreground">Personal Trainer • CREF 007920-G/MS</p></div><div className="flex flex-wrap gap-5 text-sm"><a href="https://instagram.com/tiagopersonal.cg" target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold hover:text-lime"><Instagram className="size-4" /> @tiagopersonal.cg</a><span className="flex items-center gap-2 text-muted-foreground"><MapPin className="size-4" /> Campo Grande/MS</span></div></div>
      </footer>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Agendar avaliação pelo WhatsApp" className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-whatsapp transition-transform hover:scale-105 sm:bottom-7 sm:right-7 sm:size-16"><MessageCircle className="size-7 fill-current" /></a>
    </main>
  );
}