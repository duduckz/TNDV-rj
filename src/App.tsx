import { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Mail, Phone, ChevronDown, ChevronUp, Menu, X, ArrowRight, Shield, Award, Sparkles, Instagram, Star } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import logoImg from 'figma:asset/bc866ca6a8fec698dc29eda48083feb36ea29e9d.png';
import patriciaImg from 'figma:asset/85e060bbf893fee5f2c8ae6927db9858c3302e87.png';
import testimonialsImg from 'figma:asset/b994d784420f2d66222ae029ca3b4e23f1543040.png';

export default function App() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const testimonials = [
    {
      name: 'Carlos Almeida',
      location: 'Tijuca, RJ',
      text: 'Conseguimos recuperar valores que nem sabíamos que tínhamos direito. Atendimento impecável!',
      rating: 5
    },
    {
      name: 'Fernanda Rocha',
      location: 'Copacabana, RJ',
      text: 'A Patrícia foi essencial para trazer liquidez ao nosso caixa em um momento crítico.',
      rating: 5
    },
    {
      name: 'João Martins',
      location: 'São Cristóvão, RJ',
      text: 'Profissional extremamente séria e comprometida. Passa total segurança jurídica.',
      rating: 5
    },
    {
      name: 'Patrícia Ferreira',
      location: 'Botafogo, RJ',
      text: 'A equipe domina profundamente o Direito Tributário. Resultado além das expectativas.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'Como saber se minha empresa tem créditos tributários a recuperar?',
      answer: 'A análise é feita caso a caso, com base nas operações da sua empresa e na legislação aplicável. A boa notícia é que, na maioria dos setores, sempre encontramos valores pagos a mais que podem ser devolvidos ao caixa.'
    },
    {
      question: 'Esse processo é seguro juridicamente?',
      answer: 'Sim. Todas as teses aplicadas são fundamentadas em jurisprudência consolidada e decisões recentes dos tribunais. A segurança jurídica é inegociável no meu trabalho.'
    },
    {
      question: 'Quanto tempo leva para recuperar valores pagos indevidamente?',
      answer: 'Depende do tipo de crédito e do caminho escolhido (administrativo ou judicial). Alguns casos geram liquidez imediata, outros podem levar alguns meses. Sempre apresento um cronograma realista antes de iniciarmos.'
    },
    {
      question: 'Preciso investir muito para iniciar a análise?',
      answer: 'Não. A primeira análise é gratuita e personalizada. Só depois de identificar oportunidades concretas apresento as condições de atuação.'
    },
    {
      question: 'Quais setores costumam ter mais créditos tributários acumulados?',
      answer: 'Supermercados, atacadistas, indústrias, farmácias, postos de combustíveis e agronegócio são exemplos de setores que frequentemente acumulam créditos tributários expressivos.'
    },
    {
      question: 'E se minha empresa estiver no Lucro Presumido?',
      answer: 'Mesmo no Lucro Presumido existem oportunidades de recuperação e planejamento tributário. Cada regime tem suas particularidades, e por isso a análise especializada é fundamental.'
    }
  ];

  const services = [
    {
      title: 'Recuperação de créditos de PIS/COFINS',
      description: 'Identificamos valores pagos a mais em operações isentas, suspensas ou com alíquota zero, garantindo a restituição ao caixa da sua empresa.'
    },
    {
      title: 'Restituição de tributos previdenciários',
      description: 'Revisamos a folha de pagamento para reaver contribuições indevidas sobre verbas de natureza indenizatória.'
    },
    {
      title: 'Planejamento tributário preventivo',
      description: 'Estruturamos sua carga fiscal de forma estratégica, reduzindo riscos e assegurando conformidade legal.'
    },
    {
      title: 'Gestão estratégica de créditos acumulados',
      description: 'Transformamos créditos tributários em ativos de liquidez, otimizando o fluxo de caixa do seu negócio.'
    },
    {
      title: 'Contencioso administrativo e judicial tributário',
      description: 'Atuamos com defesa técnica em processos de alta complexidade, garantindo segurança jurídica em todas as instâncias.'
    },
    {
      title: 'Auditoria tributária avançada com tecnologia',
      description: 'Aplicamos ferramentas modernas de cruzamento de dados para identificar oportunidades de recuperação e reduzir passivos ocultos.'
    }
  ];

  const differentials = [
    {
      title: 'Ética inegociável',
      description: 'Nossa conduta é guiada pela transparência, integridade e respeito, oferecendo um atendimento responsável e comprometido com cada cliente.'
    },
    {
      title: 'Segurança jurídica e previsibilidade',
      description: 'Desenvolvemos teses sólidas, embasadas em jurisprudência consolidada, assegurando aos clientes a máxima segurança jurídica e confiança nos resultados.'
    },
    {
      title: 'Atendimento personalizado em formato boutique',
      description: 'Nosso modelo de escritório boutique garante um serviço exclusivo e estratégico, moldado às particularidades de cada empresa, com foco total na geração de resultados reais.'
    }
  ];

  const allServices = [
    'Consultoria Empresarial Completa — planejamento financeiro, societário e estratégico',
    'Gestão de Passivos Tributários — negociações com a Receita Federal e Procuradoria (transação tributária, Refis etc.)',
    'Recuperação de Créditos Tributários — revisão fiscal para recuperar impostos pagos a mais (PIS, COFINS, ICMS, INSS etc.)',
    'Planejamento Tributário Preventivo — estruturação para pagar menos impostos dentro da lei',
    'Contencioso Administrativo e Judicial — defesa em autuações fiscais, multas e débitos tributários',
    'Gestão Patrimonial e Holding Familiar — criação de holdings, sucessão e proteção de bens',
    'Consultoria em Compliance e Governança — adequação a normas fiscais e contábeis',
    'Serviços de Apoio Administrativo — escritórios virtuais, gestão documental e suporte de backoffice'
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-700/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
            >
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white p-2 flex items-center justify-center">
                  <img src={logoImg} alt="TNDV Group" className="w-full h-full object-contain" />
                </div>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              <button onClick={() => scrollToSection('about')} className="px-4 py-2 text-white hover:text-white transition-colors relative group">
                <span className="relative z-10">Sobre</span>
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="navHover"
                />
              </button>
              <button onClick={() => scrollToSection('services')} className="px-4 py-2 text-white hover:text-white transition-colors relative group">
                <span className="relative z-10">Serviços</span>
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </button>
              <button onClick={() => scrollToSection('differentials')} className="px-4 py-2 text-white hover:text-white transition-colors relative group">
                <span className="relative z-10">Diferenciais</span>
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </button>
              <button onClick={() => scrollToSection('faq')} className="px-4 py-2 text-white hover:text-white transition-colors relative group">
                <span className="relative z-10">FAQ</span>
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </button>
              <button onClick={() => scrollToSection('contact')} className="ml-4 px-6 py-3 bg-white text-black rounded-full hover:bg-zinc-200 transition-all hover:shadow-lg hover:shadow-white/20 hover:-translate-y-0.5">
                Contato
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 space-y-4"
            >
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-white hover:text-white/80 transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-white hover:text-white/80 transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('differentials')} className="block w-full text-left text-white hover:text-white/80 transition-colors">
                Diferenciais
              </button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-white hover:text-white/80 transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-white hover:text-white/80 transition-colors">
                Contato
              </button>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-zinc-500/20 to-zinc-700/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-zinc-600/20 to-zinc-800/20 rounded-full blur-3xl"
          />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative inline-block mb-12"
          >
            <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-zinc-700 via-zinc-800 to-black p-2 shadow-2xl shadow-zinc-900/50">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-white to-zinc-100 p-6 flex items-center justify-center">
                <img src={logoImg} alt="TNDV Group" className="w-full h-full object-contain" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-zinc-600/30"
              />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 max-w-4xl mx-auto bg-gradient-to-r from-white via-zinc-100 to-white bg-clip-text text-transparent"
          >
            Boutique Tributária de Excelência
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-zinc-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Transformando o Direito Tributário em liberdade empresarial, reconstrução e prosperidade para quem acredita no Brasil.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="https://wa.me/5521992561086"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-white to-zinc-100 text-black rounded-full hover:shadow-2xl hover:shadow-white/20 transition-all relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-white"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <Phone size={20} className="mr-2 relative z-10" />
              <span className="relative z-10">Fale Conosco</span>
              <ArrowRight size={20} className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.button
              onClick={() => scrollToSection('about')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-zinc-500 text-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all hover:shadow-2xl hover:shadow-white/10"
            >
              Conheça Nossa História
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-white/50" />
        </motion.div>
      </section>

      {/* About Patricia Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-zinc-300 to-zinc-400 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={patriciaImg}
                    alt="Patrícia Dmenjon"
                    className="relative w-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zinc-800 to-zinc-700 text-white rounded-full shadow-lg">
                <Sparkles size={18} />
                <span className="uppercase tracking-wider">Sobre mim</span>
              </div>
              
              <h2 className="text-zinc-900 bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">Patrícia Dmenjon</h2>
              
              <p className="text-zinc-900 text-lg">
                Advogada tributarista por paixão e propósito.
              </p>

              <div className="space-y-4">
                <p className="text-zinc-700 leading-relaxed">
                  Minha jornada no Direito nasceu da vontade genuína de transformar injustiças em soluções concretas. Sempre acreditei que o Direito Tributário vai muito além de números e leis: ele é uma ferramenta de liberdade empresarial, de reconstrução e de prosperidade para quem produz e acredita no Brasil.
                </p>

                <p className="text-zinc-700 leading-relaxed">
                  Desde cedo, compreendi o impacto que uma orientação tributária correta pode ter na vida de uma empresa e de quem está por trás dela. Foi essa consciência — somada à minha inquietude e amor pelo que faço — que me levou a fundar o TNDV Group, uma boutique tributária criada para atender com excelência, estratégia e sensibilidade.
                </p>

                <p className="text-zinc-700 leading-relaxed">
                  Se há algo que me define é o amor pelo que faço. Ser advogada tributarista é mais do que uma profissão — é um chamado. E cada caso que chega até mim é uma nova oportunidade de provar que o Direito, quando praticado com inteligência, ética e propósito, transforma realidades.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-white">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-black">
                    <strong>Adv. Patricia Ribeiro Dmenjon</strong>
                  </p>
                  <p className="text-zinc-600">OAB/SP 497.959</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About TNDV Group Section */}
      <section className="py-24 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-white to-zinc-200 text-zinc-900 rounded-full mb-6 shadow-lg">
              <Shield size={18} />
              <span className="uppercase tracking-wider">A Empresa</span>
            </div>
            <h2 className="bg-gradient-to-r from-white via-zinc-200 to-white bg-clip-text text-transparent">Sobre a TNDV Group</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-zinc-300 leading-relaxed text-lg">
                A TNDV Group nasceu com um propósito claro: redefinir a advocacia tributária com inteligência, empatia e resultados reais. Mais do que um escritório, somos uma equipe apaixonada por encontrar oportunidades legítimas que fortalecem empresas, recuperam valores e impulsionam crescimento.
              </p>

              <p className="text-zinc-300 leading-relaxed">
                Atuamos com foco em recuperação de créditos tributários de PIS/COFINS, contribuições previdenciárias e benefícios fiscais amparados pela Lei 11.033/04 (Lei do Reporto), com resultados expressivos em grandes grupos empresariais de todo o país.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-zinc-300 leading-relaxed">
                Nosso diferencial está em unir técnica jurídica sólida com visão estratégica e linguagem empresarial — traduzindo o complexo em claro, o técnico em aplicável, e o jurídico em rentabilidade para quem confia no nosso trabalho.
              </p>

              <p className="text-zinc-300 leading-relaxed">
                O diferencial da TNDV é o olhar humano sobre o técnico. Cada empresa que chega até nós é tratada como única — com diagnóstico detalhado, planejamento estratégico e acompanhamento pessoal dos sócios em cada etapa.
              </p>

              <p className="text-zinc-300 leading-relaxed">
                Não vendemos promessas: entregemos resultados com ética, segurança e transparência. Nosso maior orgulho é ver o impacto positivo que geramos — não só nos balanços, mas na confiança e tranquilidade dos empresários que voltam a respirar com leveza.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-8 md:p-12 rounded-2xl backdrop-blur-sm border border-zinc-700/50 shadow-2xl"
          >
            <h3 className="mb-8 text-center bg-gradient-to-r from-white via-zinc-200 to-white bg-clip-text text-transparent">Serviços Oferecidos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {allServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-800 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <p className="text-zinc-300 leading-relaxed group-hover:text-white transition-colors">{service}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="differentials" className="py-24 bg-gradient-to-b from-zinc-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zinc-800 to-zinc-700 text-white rounded-full mb-6 shadow-lg">
              <Shield size={18} />
              <span className="uppercase tracking-wider">Diferenciais</span>
            </div>
            <h2 className="text-zinc-900 mb-4 bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">Por que escolher a TNDV Group?</h2>
            <p className="text-zinc-700 max-w-3xl mx-auto text-lg">
              Compromissos que sustentam nossa atuação em cada detalhe.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentials.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-gradient-to-br from-zinc-800 to-zinc-900 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-zinc-600 to-zinc-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white to-zinc-200" />
                  </div>
                  <h3 className="mb-4 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">{diff.title}</h3>
                  <p className="text-zinc-300 leading-relaxed">{diff.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-white to-zinc-200 text-zinc-900 rounded-full mb-6 shadow-lg">
              <Sparkles size={18} />
              <span className="uppercase tracking-wider">Soluções</span>
            </div>
            <h2 className="mb-6 bg-gradient-to-r from-white via-zinc-200 to-white bg-clip-text text-transparent">Como nosso escritório pode te ajudar?</h2>
            <p className="text-zinc-300 max-w-4xl mx-auto text-lg leading-relaxed">
              Recuperar créditos tributários é um direito reconhecido pelos tribunais. Atuamos com foco em processos administrativos, ágeis e seguros, homologados pela Receita Federal em 6 a 8 meses. Com base na Lei 11.033/2004 (Lei do Reporto), viabilizando não apenas compensações, mas também restituição em dinheiro, com ressarcimento direto via PIX para a conta da sua empresa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-8 rounded-2xl backdrop-blur-sm border border-zinc-700/50 hover:border-zinc-500/50 transition-all shadow-xl hover:shadow-2xl"
              >
                <div className="w-20 h-2 bg-gradient-to-r from-zinc-400 to-zinc-600 rounded-full mb-6 group-hover:w-full transition-all duration-300" />
                <h3 className="mb-4 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-white to-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zinc-800 to-zinc-700 text-white rounded-full mb-6 shadow-lg">
              <Star size={18} />
              <span className="uppercase tracking-wider">Depoimentos Reais</span>
            </div>
            <h2 className="text-zinc-900 mb-4 bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">O que nossos clientes dizem</h2>
            <p className="text-zinc-700 max-w-3xl mx-auto text-lg">
              Informações de experiências e avaliações enviadas por clientes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-zinc-200 hover:border-zinc-400"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="pt-4 border-t border-zinc-200">
                  <p className="text-zinc-900">
                    <strong>{testimonial.name}</strong>
                  </p>
                  <p className="text-zinc-600 text-sm">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zinc-800 to-zinc-700 text-white rounded-full mb-6 shadow-lg">
              <ChevronDown size={18} />
              <span className="uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-zinc-900 bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">Perguntas Frequentes</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border-2 border-zinc-300 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all shadow-lg hover:shadow-xl"
              >
                <button
                  onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between bg-white hover:bg-zinc-50 transition-colors text-left group"
                >
                  <span className="text-zinc-900 pr-4 group-hover:text-zinc-800 transition-colors">{faq.question}</span>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-800 text-white flex items-center justify-center group-hover:bg-zinc-700 transition-all group-hover:scale-110">
                    {activeQuestion === index ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: activeQuestion === index ? 'auto' : 0,
                    opacity: activeQuestion === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 py-6 bg-gradient-to-br from-zinc-50 to-zinc-100 border-t-2 border-zinc-200">
                    <p className="text-zinc-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-white to-zinc-200 text-zinc-900 rounded-full mb-6 shadow-lg">
              <Mail size={18} />
              <span className="uppercase tracking-wider">Contato</span>
            </div>
            <h2 className="mb-6 bg-gradient-to-r from-white via-zinc-200 to-white bg-clip-text text-transparent">Vamos conversar?</h2>
            <p className="text-zinc-300 max-w-3xl mx-auto text-lg leading-relaxed">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a recuperar valores e otimizar sua gestão tributária.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <motion.a
              href="https://wa.me/5521992561086"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-8 rounded-2xl border border-zinc-700/50 hover:border-zinc-500/50 transition-all flex flex-col items-center text-center shadow-xl hover:shadow-2xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Phone size={28} className="text-white" />
              </div>
              <h3 className="mb-2 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent text-lg">Telefone</h3>
              <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors text-sm">+55 21 99256-1086</p>
            </motion.a>

            <motion.a
              href="mailto:patricia.dmenjon@tndv.com.br"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-8 rounded-2xl border border-zinc-700/50 hover:border-zinc-500/50 transition-all flex flex-col items-center text-center shadow-xl hover:shadow-2xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Mail size={28} className="text-white" />
              </div>
              <h3 className="mb-2 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent text-lg">E-mail</h3>
              <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors text-sm break-all">patricia.dmenjon@tndv.com.br</p>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/advdmenjon/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-8 rounded-2xl border border-zinc-700/50 hover:border-zinc-500/50 transition-all flex flex-col items-center text-center shadow-xl hover:shadow-2xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Instagram size={28} className="text-white" />
              </div>
              <h3 className="mb-2 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent text-lg">Instagram</h3>
              <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors text-sm">@advdmenjon</p>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/tndv.group/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-8 rounded-2xl border border-zinc-700/50 hover:border-zinc-500/50 transition-all flex flex-col items-center text-center shadow-xl hover:shadow-2xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Instagram size={28} className="text-white" />
              </div>
              <h3 className="mb-2 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent text-lg">Instagram TNDV</h3>
              <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors text-sm">@tndv.group</p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-zinc-900 to-zinc-950 text-white border-t border-zinc-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="inline-block mb-4"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-white p-2 flex items-center justify-center">
                    <img src={logoImg} alt="TNDV Group" className="w-full h-full object-contain" />
                  </div>
                </div>
              </motion.div>
              <p className="text-zinc-400 mb-2">
                © {new Date().getFullYear()} TNDV Group
              </p>
              <p className="text-zinc-500 text-sm">
                Todos os direitos reservados.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="text-center md:text-right">
                <p className="text-white mb-1">
                  <strong>Adv. Patricia Ribeiro Dmenjon</strong>
                </p>
                <p className="text-zinc-400">OAB/SP 497.959</p>
              </div>
              <div className="flex gap-3">
                <motion.a
                  href="https://wa.me/5521992561086"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-full flex items-center justify-center hover:from-zinc-600 hover:to-zinc-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <Phone size={20} />
                </motion.a>
                <motion.a
                  href="mailto:patricia.dmenjon@tndv.com.br"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-full flex items-center justify-center hover:from-zinc-600 hover:to-zinc-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <Mail size={20} />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/advdmenjon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center hover:from-pink-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-xl"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/tndv.group/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center hover:from-pink-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-xl"
                >
                  <Instagram size={20} />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
