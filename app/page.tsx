import { SiteHeader } from "@/components/site-header";
import { RevealInit } from "@/components/reveal-init";

const IMG = {
  hero: "https://images.unsplash.com/photo-1599875953199-2b39f58d106a",
  ovenPizza: "https://images.unsplash.com/photo-1621538997517-58ce53933faa",
  twoPizzas: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f",
  darkPizza: "https://images.unsplash.com/photo-1590234229790-b210b3dcd422",
  octopusSkewer: "https://images.unsplash.com/photo-1778327564742-59ce83f41373",
  octopusPlate: "https://images.unsplash.com/photo-1776097633665-6144787d7d3f",
  squidGrill: "https://images.unsplash.com/photo-1778900724898-f772c66707e7",
  gnocchi: "https://images.unsplash.com/photo-1778837224450-aae9742193ad",
  dessert: "https://images.unsplash.com/photo-1647784057692-7c7116f86c7d",
  interiorWood: "https://images.unsplash.com/photo-1670819917685-f1040e76b9b7",
  barDim: "https://images.unsplash.com/photo-1709548145082-04d0cde481d4",
  doughHands: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907",
  teamPrep: "https://images.unsplash.com/photo-1708436076906-fdd48df3782b",
  courtyardNight: "https://images.unsplash.com/photo-1766957451121-df5e49b539a1",
  flourHands: "https://images.unsplash.com/photo-1606854428857-5121b55a2661",
  bruschetta: "https://images.unsplash.com/photo-1594978583693-8dfdfc93f052",
};

function img(url: string, w: number, q = 80) {
  return `${url}?auto=format&fit=crop&w=${w}&q=${q}`;
}

const MENU = [
  {
    cat: "Iz krušne peći",
    image: IMG.ovenPizza,
    dishes: [
      { name: "Crna kraljica biogradskog mora", desc: "Tijesto zamiješano s crnilom sipe, svježa lignja, pancetta i limun." },
      { name: "Beštek", desc: "Domaći pršut, rikula, cherry rajčica i pahuljice starog sira." },
      { name: "Marinirana govedina", desc: "Kreativno začinjena govedina, karamelizirani luk i domaći ajvar." },
    ],
  },
  {
    cat: "Predjela i bruschete",
    image: IMG.bruschetta,
    dishes: [
      { name: "Bruškete sa sabljarkinim pršutom", desc: "Tanko rezan pršut od sabljarke, rikula i kap maslinova ulja." },
      { name: "Dimljena skuša", desc: "Domaća dimljena skuša, krumpir salata i kiseli kapari." },
      { name: "Štapići iz krušne peći", desc: "Domaće tijesto pečeno na drva, uz umak od češnjaka i začinskog bilja." },
    ],
  },
  {
    cat: "Tjestenina i njoki",
    image: IMG.gnocchi,
    dishes: [
      { name: "Domaći njoki", desc: "Ručno rađeni njoki u umaku po izboru, uz pahuljice starog sira." },
      { name: "Lazanje iz peći", desc: "Slojevi domaće tjestenine, bogati ragu i zapečeni sir." },
      { name: "Zapečena tjestenina", desc: "Pečena u krušnoj peći s pršutom, vrhnjem i gljivama." },
    ],
  },
  {
    cat: "Za kraj",
    image: IMG.dessert,
    dishes: [
      { name: "Birramisu", desc: "Naš tiramisu pripremljen s tamnim craft pivom pivovare Brlog." },
      { name: "Cheesecake od šumskog voća", desc: "Servira se uz prošek, dalmatinsko desertno vino." },
    ],
  },
];

const GALLERY = [
  { src: IMG.darkPizza, alt: "Pizza iz krušne peći na drva", tall: true },
  { src: IMG.squidGrill, alt: "Priprema plodova mora na žaru" },
  { src: IMG.doughHands, alt: "Ručno mijesenje domaćeg tijesta" },
  { src: IMG.teamPrep, alt: "Ekipa Beštek priprema pizze u kuhinji", wide: true },
  { src: IMG.octopusSkewer, alt: "Hobotnica pripremljena za pečenje" },
  { src: IMG.courtyardNight, alt: "Natkriveno dvorište navečer, uz svjetla" },
  { src: IMG.barDim, alt: "Topla unutrašnjost pizzerije", wide: true },
];

export default function Home() {
  return (
    <>
      <RevealInit />
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-screen min-h-[640px] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            id="heroImg"
            src={img(IMG.hero, 1900)}
            alt="Vatra u krušnoj peći Pizzerije Beštek u Biogradu na Moru"
            className="h-full w-full object-cover scale-[1.14] will-change-transform"
          />
          <div className="absolute inset-0" style={{ background: "var(--hero-vignette)" }} />
          <div className="absolute inset-0" style={{ background: "var(--hero-glow)" }} />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20">
          <span className="text-label reveal block mb-5" style={{ color: "var(--steel)" }}>
            Pizzeria · Biograd na Moru
          </span>
          <h1
            className="font-display reveal max-w-[18ch]"
            style={{ fontSize: "var(--hero-title-size)", lineHeight: "var(--hero-title-leading)", color: "var(--foreground)" }}
          >
            Uzmi <em className="italic" style={{ color: "var(--steel)" }}>beštek</em> i navali.
          </h1>
          <p className="reveal mt-6 max-w-[46ch] text-[1.05rem]" style={{ color: "var(--bone-300, #DFCFB2)" }}>
            Kreativne pizze iz krušne peći na drva, u natkrivenom dvorištu skrivenom od gužve starog grada — tijesto koje odmara, vatra koja ne staje, stol koji se ne žuri.
          </p>
          <div className="reveal mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="rounded-full px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--steel)", color: "var(--background)" }}
            >
              Rezerviraj stol
            </a>
            <a
              href="#jelovnik"
              className="border-b pb-1 text-[0.9rem] transition-colors hover:text-[var(--steel)]"
              style={{ borderColor: "var(--surface-line)", color: "var(--foreground)" }}
            >
              Pogledaj jelovnik →
            </a>
          </div>
        </div>
      </section>

      {/* STATS / SOCIAL PROOF */}
      <div className="border-b" style={{ background: "var(--card)", borderColor: "var(--surface-line)" }}>
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-14 px-6 py-8 text-center">
          <div>
            <div className="font-display text-4xl" data-count="4.8" data-dec="1" style={{ color: "var(--foreground)" }}>
              4.8
            </div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>★ Google ocjena</div>
          </div>
          <div>
            <div className="font-display text-4xl" data-count="1000" data-suffix="+" style={{ color: "var(--foreground)" }}>
              1000+
            </div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>Recenzija</div>
          </div>
          <div>
            <div className="font-display text-4xl" data-count="20" data-suffix="+" style={{ color: "var(--foreground)" }}>
              20+
            </div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>Godina iskustva pizzaiola</div>
          </div>
        </div>
      </div>

      {/* MANIFESTO */}
      <section id="dvoriste" className="py-28 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-label reveal block mb-6" style={{ color: "var(--steel)" }}>Naše dvorište</span>
          <p className="font-display reveal text-[clamp(1.5rem,3vw,2.3rem)] leading-snug" style={{ color: "var(--foreground)" }}>
            Beštek — pribor za jelo, po dalmatinski. Onaj trenutak kad sjedneš, uzmeš nož i vilicu i{" "}
            <em className="italic" style={{ color: "var(--steel)" }}>jednostavno navališ.</em> Bez fasade, u dvorištu skrivenom od žurbe.
          </p>
        </div>
      </section>

      {/* MENU */}
      <section id="jelovnik" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-16 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--steel)" }}>Jelovnik</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)]" style={{ color: "var(--foreground)" }}>
              Vatra, drvo i <em className="italic" style={{ color: "var(--steel)" }}>tijesto</em>
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {MENU.map((group, i) => (
              <div
                key={group.cat}
                className={`reveal grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
                style={{ background: "var(--card)" }}
              >
                <div className="min-h-[280px] md:min-h-[360px] overflow-hidden">
                  <img src={img(group.image, 900)} alt={group.cat} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-col justify-center p-9 md:p-12">
                  <div className="text-label mb-4" style={{ color: "var(--steel)" }}>{group.cat}</div>
                  <div className="flex flex-col">
                    {group.dishes.map((d) => (
                      <div key={d.name} className="border-b py-4 last:border-none" style={{ borderColor: "var(--surface-line)" }}>
                        <div className="font-display text-xl" style={{ color: "var(--foreground)" }}>{d.name}</div>
                        <div className="mt-1 text-[0.92rem]" style={{ color: "var(--muted-foreground)" }}>{d.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="prica" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
          <div className="reveal h-[420px] md:h-[540px] overflow-hidden rounded-2xl">
            <img src={img(IMG.interiorWood, 1000)} alt="Topla drvena unutrašnjost Pizzerije Beštek" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <span className="text-label reveal block mb-5" style={{ color: "var(--steel)" }}>Naša priča</span>
            <h2 className="font-display reveal text-[clamp(1.8rem,3.2vw,2.6rem)] mb-6" style={{ color: "var(--foreground)" }}>
              Obiteljski posao, skriven u <em className="italic" style={{ color: "var(--steel)" }}>staroj uličici</em>
            </h2>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Kristijan Dubravica peče pizze već više od dvadeset godina, a Beštek je njegov prvi vlastiti posao. Ime i dizajn smislila je supruga, koja s njim slaže i kombinacije na jelovniku — sin poslužuje za stolovima. Obiteljska stvar, od peći do stola.
            </p>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Natkriveno dvorište u srcu starog grada, sa sedamdesetak mjesta, drvom i otvorenom vatrom kod koje se sve kuha — daleko od gužve, iako je more na dva koraka. Brašno stiže iz čakovečkih mlinova, tijesto odmara dovoljno dugo da korica bude hrskava, a craft pivo iz obližnjeg Brloga uvijek je na dohvat ruke.
            </p>
            <p className="reveal font-display italic text-lg" style={{ color: "var(--steel)" }}>
              — obitelj Dubravica, Pizzeria Beštek
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galerija" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-14 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--steel)" }}>Galerija</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)]" style={{ color: "var(--foreground)" }}>
              Iz peći i <em className="italic" style={{ color: "var(--steel)" }}>dvorišta</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {GALLERY.map((g) => (
              <figure
                key={g.src}
                className={`reveal overflow-hidden rounded-xl ${g.tall ? "row-span-2 h-[220px] md:h-full" : "h-[220px]"} ${
                  g.wide ? "col-span-2" : ""
                }`}
              >
                <img src={img(g.src, 700)} alt={g.alt} className="h-full w-full object-cover" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="kontakt" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 overflow-hidden rounded-2xl md:grid-cols-2" style={{ background: "var(--background)" }}>
          <div className="p-9 md:p-14">
            <span className="text-label reveal block mb-5" style={{ color: "var(--steel)" }}>Posjetite nas</span>
            <h2 className="font-display reveal text-[clamp(1.8rem,3.2vw,2.6rem)] mb-8" style={{ color: "var(--foreground)" }}>
              U srcu starog <em className="italic" style={{ color: "var(--steel)" }}>Biograda</em>
            </h2>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--steel)" }}>Adresa</div>
              <p style={{ color: "var(--muted-foreground)" }}>Ul. kraljice Jelene 5, 23210 Biograd na Moru</p>
            </div>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--steel)" }}>Rezervacije</div>
              <p style={{ color: "var(--muted-foreground)" }}>Stol rezervirajte pozivom ili mailom.</p>
              <a href="tel:+38523367591" className="font-display text-2xl mt-1 inline-block" style={{ color: "var(--steel)" }}>
                +385 23 367 591
              </a>
              <p className="mt-1 text-sm" style={{ color: "var(--muted-foreground)" }}>pizzeria.bestek@gmail.com</p>
            </div>

            <div className="reveal mb-8">
              <div className="text-label mb-2" style={{ color: "var(--steel)" }}>Radno vrijeme</div>
              <div className="flex justify-between max-w-[280px] border-b border-dotted py-1.5" style={{ borderColor: "var(--surface-line)", color: "var(--foreground)" }}>
                <span>Svaki dan</span><span>15:00 – 22:00</span>
              </div>
            </div>

            <a
              href="tel:+38523367591"
              className="reveal inline-block rounded-full px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium"
              style={{ background: "var(--steel)", color: "var(--background)" }}
            >
              Rezerviraj stol
            </a>
          </div>
          <div className="reveal min-h-[360px]">
            <iframe
              src="https://maps.google.com/maps?q=Pizzeria+Bestek+Kraljice+Jelene+5+Biograd+na+Moru&output=embed"
              loading="lazy"
              title="Pizzeria Beštek — Biograd na Moru"
              className="h-full w-full min-h-[360px] border-0 grayscale-[20%]"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-9" style={{ background: "var(--char-900, #1B1512)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 pb-14 md:grid-cols-3">
            <div>
              <div className="font-display text-2xl mb-4" style={{ color: "var(--foreground)" }}>
                Be<span style={{ color: "var(--steel)" }}>š</span>tek
              </div>
              <p className="max-w-[34ch] text-sm" style={{ color: "var(--muted-foreground)" }}>
                Obiteljska pizzeria u natkrivenom dvorištu starog grada, Biograd na Moru. Pizza iz krušne peći na drva, tjestenina i domaći deserti.
              </p>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "var(--steel)" }}>Izbornik</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "var(--muted-foreground)" }}>
                <a href="#jelovnik" className="hover:text-[var(--steel)]">Jelovnik</a>
                <a href="#prica" className="hover:text-[var(--steel)]">Naša priča</a>
                <a href="#galerija" className="hover:text-[var(--steel)]">Galerija</a>
                <a href="#kontakt" className="hover:text-[var(--steel)]">Kontakt</a>
              </div>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "var(--steel)" }}>Kontakt</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "var(--muted-foreground)" }}>
                <a href="tel:+38523367591" className="font-display text-lg" style={{ color: "var(--foreground)" }}>+385 23 367 591</a>
                <a href="mailto:pizzeria.bestek@gmail.com" className="hover:text-[var(--steel)]">pizzeria.bestek@gmail.com</a>
                <p>Ul. kraljice Jelene 5, Biograd na Moru</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-wrap justify-between gap-3 border-t pt-6 text-xs"
            style={{ borderColor: "var(--surface-line)", color: "var(--muted-foreground)" }}
          >
            <span>© 2026 Pizzeria Beštek · Biograd na Moru</span>
            <span>4.8 ★ Google · 1000+ recenzija</span>
          </div>
        </div>
      </footer>
    </>
  );
}
