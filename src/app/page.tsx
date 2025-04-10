"use client";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Cabeçalho */}
      <header className="px-6 py-4 flex justify-between items-center shadow-2xl sticky top-0 bg-white z-50 md:px-40">
        <Image
          src="/logo/logo.png"
          width={160}
          height={160}
          alt="logo"
          onClick={() => (window.location.href = "/")}
          className="cursor-pointer w-36 md:w-48 h-auto"
        />
        <a
          href="https://wa.me/5531996259145"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white text-sm md:text-lg px-4 md:px-6 py-2 md:py-3 rounded-full shadow-md transition-all"
        >
          Solicite um orçamento
        </a>
      </header>

      {/* Hero Section */}
      <section
        className="w-full h-[50vh] px-6 py-20 bg-cover bg-center text-white relative"
        style={{ backgroundImage: "url('/banners/banner.png')" }}
      >
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 892.25 114.72 1200 0z"
              className="fill-white"
            ></path>
          </svg>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold mb-6 "
          >
            Impulsione sua presença digital
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-300 mb-8"
          >
            Criação de websites e landing pages com foco em conversão.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="https://wa.me/5531996259145" // substitua pelo seu número com DDI + DDD
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-lg rounded-full shadow-xl cursor-pointer inline-block"
            >
              <FaWhatsapp className="inline-block mr-2" /> Solicite um orçamento
            </a>
          </motion.div>
        </div>
      </section>

      {/* Sobre nós */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Sobre nós</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-xl shadow border border-gray-200 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="md:w-3/5 w-full">
            <p className="text-lg leading-relaxed text-gray-700 text-center md:text-left">
              Nós somos a <strong>DEVLUP</strong>, uma empresa especializada no
              desenvolvimento de sites modernos, responsivos e otimizados para
              conversão. Atendemos pequenos comércios e profissionais autônomos
              que buscam presença digital com identidade e performance. Nosso
              foco é transformar ideias em soluções que encantam visualmente e
              entregam resultados reais.
            </p>
          </div>
          <div className="md:w-2/5 w-full h-[250px] md:h-[320px]">
            <Image
              src="/images/working-code.jpg"
              alt="coding"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </section>

      {/* Serviços */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-10">
          O que fazemos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Landing Pages",
              desc: "Páginas rápidas e eficazes para campanhas ou produtos.",
            },
            {
              title: "Sites Institucionais",
              desc: "Apresente sua empresa com um site completo e moderno.",
            },
            {
              title: "Portfólios",
              desc: "Mostre seus trabalhos com estilo e profissionalismo.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-200"
            >
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefícios */}
      <section className="bg-gray-100 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Por que escolher meu serviço?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Design moderno e responsivo",
              "Entrega rápida e eficiente",
              "Sites otimizados para performance",
              "Suporte pós-lançamento",
              "Integração com WhatsApp, Instagram, Google Maps",
              "Sem taxas mensais escondidas",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-4 rounded-xl shadow border border-gray-200"
              >
                ✅ {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Portfólio */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Portfólio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {["/projects/apae_pl.png", "/projects/rany_engenharia.png"].map(
            (projeto, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-200 h-48 rounded-xl flex items-center justify-center text-gray-600 cursor-pointer hover:scale-110 transition-all "
              >
                <Image
                  src={projeto}
                  width={600}
                  height={400}
                  alt={`Projeto ${i + 1}`}
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          O que dizem nossos clientes
        </h2>
        <p className="text-gray-600 mb-12">
          Confira os depoimentos dos nossos clientes diretamente do Google.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="text-center flex flex-col justify-center items-center">
            <div className="text-xl font-bold">EXCELENTE</div>
            <div className="flex text-yellow-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5" fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-600 mt-2">
              Com base em <strong>10 avaliações</strong>
            </p>
            <Image
              src="/images/google-logo.png"
              alt="Google"
              width={100}
              height={30}
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "APAE Pedro Leopoldo",
                date: "22/12/2024",
                text: "A DEVLUP nos ajudou a modernizar nossa presença online com um site acessível, bonito e fácil de navegar. Atendimento impecável!",
                profile_picture: "/images/APAE_profile.png",
              },
              {
                name: "João Rany",
                date: "15/03/2025",
                text: "Nosso novo site ficou extremamente profissional. A equipe da DEVLUP entendeu exatamente o que queríamos e entregou com excelência!",
                profile_picture: "/images/RANY_profile.png",
              },
              {
                name: "Larissa Marques",
                date: "01/04/2025",
                text: "A DEVLUP desenvolveu nosso site com muito carinho e dedicação. Agora conseguimos divulgar nosso trabalho e arrecadar doações com mais facilidade! Projeto Irmão Animal",
                profile_picture: "/images/LARI_profile.png",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-[#FBFAFB] border border-gray-200 rounded-xl p-6 shadow-sm text-left"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src={review.profile_picture}
                    alt="comment"
                    width={100}
                    height={100}
                    className="w-10 h-10 bg-gray-300 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {review.name}
                    </div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                </div>
                <div className="flex text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Dúvidas frequentes
        </h2>
        <div className="space-y-6">
          {[
            {
              q: "Quanto custa um site?",
              a: "Depende da complexidade, mas sempre envio um orçamento personalizado.",
            },
            {
              q: "Em quanto tempo fica pronto?",
              a: "Sites simples ficam prontos em até 7 dias.",
            },
            {
              q: "Você faz manutenção?",
              a: "Sim! Posso oferecer pacotes mensais ou por demanda.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-gray-200 rounded-xl p-4 bg-white shadow"
            >
              <h3 className="font-semibold mb-2">❓ {item.q}</h3>
              <p className="text-gray-600">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="px-6 py-20 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-semibold mb-4"
          >
            Pronto para ter um site profissional?
          </motion.h2>
          <p className="text-gray-600 mb-6">
            Entre em contato comigo pelo WhatsApp e vamos conversar sobre seu
            projeto.
          </p>
          <a
            href="https://wa.me/5531996259145" // substitua pelo seu número com DDI + DDD
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-lg rounded-full shadow-xl cursor-pointer inline-block"
          >
            <FaWhatsapp className="inline-block mr-2" /> Fale comigo agora
          </a>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-white border-t border-gray-200 px-6 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DEVLUP. Todos os direitos reservados.
      </footer>
      <a
        href="https://wa.me/5531996259145"
        target="_blank"
        className="fixed bottom-6 right-6 z-50"
        rel="noopener noreferrer"
      >
        <div className="relative w-16 h-16 flex items-center justify-center text-center">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-500" />
          <Image
            src="/images/wpp-icon.png"
            alt="WhatsApp"
            width={40}
            height={40}
            className="z-10"
          />
        </div>
      </a>
    </main>
  );
}
