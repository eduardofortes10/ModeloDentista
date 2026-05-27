import {
  CalendarCheck,
  CheckCircle2,
  Clock3,
  CircleDot,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Stethoscope,
  Users,
  WandSparkles,
} from 'lucide-react';

export const whatsappUrl = 'https://wa.me/5511999999999';

export const clinicInfo = {
  name: 'Clínica Sorriso Prime',
  address: 'Av. Paulista, 1000 - Bela Vista, São Paulo - SP',
  hours: 'Segunda a sexta, das 8h às 19h. Sábado, das 8h às 13h.',
  phone: '(11) 99999-9999',
  email: 'contato@sorrisoprime.com.br',
};

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export const treatments = [
  {
    icon: CircleDot,
    title: 'Limpeza dental',
    description: 'Cuidado preventivo para manter a saúde bucal em dia e acompanhar sua rotina oral.',
  },
  {
    icon: Sparkles,
    title: 'Clareamento dental',
    description: 'Avaliação individual e planejamento seguro para melhorar a aparência do sorriso.',
  },
  {
    icon: Smile,
    title: 'Ortodontia',
    description: 'Acompanhamento para alinhamento dental com conforto, orientação e previsibilidade.',
  },
  {
    icon: ShieldCheck,
    title: 'Restauração',
    description: 'Tratamento conservador para recuperar estrutura dental com atenção aos detalhes.',
  },
  {
    icon: Stethoscope,
    title: 'Implantes dentários',
    description: 'Avaliação cuidadosa e indicação responsável para reabilitação oral.',
  },
  {
    icon: CalendarCheck,
    title: 'Avaliação odontológica',
    description: 'Consulta inicial para entender suas necessidades e definir os próximos cuidados.',
  },
];

export const benefits = [
  { icon: HeartHandshake, title: 'Atendimento humanizado', text: 'Escuta ativa, explicações claras e respeito ao ritmo de cada paciente.' },
  { icon: CheckCircle2, title: 'Ambiente confortável', text: 'Espaços organizados, acolhedores e pensados para uma experiência tranquila.' },
  { icon: WandSparkles, title: 'Equipamentos modernos', text: 'Estrutura atualizada para apoiar diagnósticos e tratamentos com segurança.' },
  { icon: Users, title: 'Profissionais qualificados', text: 'Equipe preparada para cuidar de diferentes necessidades odontológicas.' },
  { icon: MessageCircle, title: 'Agendamento fácil', text: 'Contato rápido pelo WhatsApp para facilitar sua rotina.' },
  { icon: MapPin, title: 'Localização acessível', text: 'Endereço em região de fácil acesso, com opções de transporte por perto.' },
];

export const stats = [
  { value: '+500', label: 'pacientes atendidos' },
  { value: '100%', label: 'atendimento com horário marcado' },
  { value: 'Equipe', label: 'especializada e acolhedora' },
  { value: 'Fácil', label: 'acesso à clínica' },
];

export const testimonials = [
  {
    name: 'Mariana Lopes',
    text: 'Fui muito bem atendida desde o primeiro contato. A equipe explicou tudo com calma e me senti segura durante a consulta.',
  },
  {
    name: 'Carlos Henrique',
    text: 'Ambiente limpo, organizado e com atendimento pontual. Gostei da clareza nas orientações e no planejamento.',
  },
  {
    name: 'Fernanda Ribeiro',
    text: 'Agendei pelo WhatsApp e foi bem simples. A clínica tem uma atmosfera tranquila e profissionais atenciosos.',
  },
];

export const faqs = [
  {
    question: 'Como agendar uma consulta?',
    answer: 'Você pode usar os botões de WhatsApp do site ou entrar em contato pelo telefone informado na seção de contato.',
  },
  {
    question: 'A clínica atende crianças?',
    answer: 'Sim. O atendimento é planejado de acordo com a idade e necessidade de cada paciente, sempre com orientação responsável.',
  },
  {
    question: 'Posso agendar pelo WhatsApp?',
    answer: 'Sim. O WhatsApp é o canal mais rápido para escolher um horário disponível e tirar dúvidas iniciais.',
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'A clínica fictícia aceita pix, cartões de débito e crédito. Condições podem variar conforme o tratamento.',
  },
  {
    question: 'O clareamento dental precisa de avaliação?',
    answer: 'Sim. A avaliação é importante para verificar a saúde bucal e indicar uma abordagem adequada para cada caso.',
  },
];

export const contactItems = [
  { icon: MapPin, title: 'Endereço', text: clinicInfo.address },
  { icon: Clock3, title: 'Horário', text: clinicInfo.hours },
  { icon: MessageCircle, title: 'WhatsApp', text: clinicInfo.phone },
  { icon: Mail, title: 'E-mail', text: clinicInfo.email },
];

export const StarIcon = Star;
