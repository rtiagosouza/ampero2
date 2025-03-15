import Image from "next/image"
import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import ProductCarousel from "@/components/product-carousel"


export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <header className="border-b w-full">
        <div className="w-full flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Hotone Audio</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Características
            </Link>
            <Link href="#specs" className="text-sm font-medium hover:underline underline-offset-4">
              Especificações
            </Link>
            <Link href="#buy" className="text-sm font-medium hover:underline underline-offset-4">
              Comprar
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 w-full">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hotone Ampero II</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Pedal Profissional de Multi-Efeitos e Modelador de Amplificador.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-8">
              <ProductCarousel />
            </div>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <p className="text-lg text-muted-foreground">
                Experimente a próxima geração de processamento de efeitos para guitarra com o Hotone Ampero II. Apresentando modelagem poderosa de amplificadores, efeitos versáteis e uma interface intuitiva.
              </p>
              <div id="buy" className="flex flex-col items-center space-y-4">
                <div className="text-5xl font-bold">R$3000.00</div>
                <Button asChild
                  size="lg"
                  className="h-16 px-8 text-lg animate-pulse bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"

                >
                  <Link href="https://cielolink.com.br/4isIfFe">Comprar</Link>

                </Button>
                <p className="text-sm text-muted-foreground">

                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Efeitos de Qualidade Profissional</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    O Ampero II oferece som de qualidade de estúdio com sua poderosa arquitetura de DSP duplo.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Mais de 100 modelos de amp e efeitos!</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Interface TouchScreen Intuitiva</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Capacidade de Carregamento de IR</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Funcionalidade de Interface de Áudio USB</span>
                  </li>
                </ul>
              </div>
              <Image
                src="/images/hotone-ampero2.jpg"
                width={600}
                height={400}
                alt="Hotone Ampero II Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="specs" className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center">
              <div className="space-y-2 text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Especificações Técnicas
                </h2>
              </div>

              {/* Grid centralizado com largura máxima reduzida */}
              <div className="grid gap-10 md:grid-cols-2 max-w-3xl mx-auto w-full">
                <div className="space-y-3">
                  <h3 className="font-bold text-lg">Audio</h3>
                  <ul className="grid gap-3">
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>24-bit/44.1kHz qualidade de áudio</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Entradas e Saídas Estéreo</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Saída para fone de ouvido</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-lg">Conectividade</h3>
                  <ul className="grid gap-3">
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>USB-C para audio e MIDI</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>MIDI in/out</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Entrada para pedal de expressão</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Está pronto para transformar o seu som?</h2>
                <p className="max-w-[800px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Junte-se a milhares de músicos que aprimoraram seu som com o Hotone Ampero II!
                </p>
              </div>
              <Button asChild
                size="lg" variant="secondary" className="h-12 px-8 text-lg">
                <Link href="https://cielolink.com.br/4isIfFe">Comprar</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t w-full">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-2 py-6 px-4 md:px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs text-muted-foreground">© 2025 Hotone Audio. All rights reserved.</div>
            <nav className="flex gap-4">

            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}