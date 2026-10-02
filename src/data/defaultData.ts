import { EventSettings, Gift } from '../types';
import alynePortrait from '../assets/images/alyne_portrait_1790969104126.jpg';
import modernLivingRoom from '../assets/images/modern_living_room_1790969114799.jpg';
import kitchenDining from '../assets/images/kitchen_dining_bar_1790969125087.jpg';
import readingNook from '../assets/images/aesthetic_reading_nook_1790969135611.jpg';

export const DEFAULT_SETTINGS: EventSettings = {
  eventName: "Open House • Aniversário • Chá de Casa Nova",
  hostName: "Alyne Nobre",
  instagramHandle: "nobremente_",
  eventDate: "2026-11-21",
  eventTime: "17:00",
  eventEndTime: "23:30",
  locationName: "Novo Apê da Alyne",
  locationAddress: "Rua das Figueiras, 450 - Apto 82",
  locationCity: "São Paulo, SP",
  locationNotes: "Interfone 82. Vagas para visitantes na rua ao lado ou portaria para descer.",
  googleMapsUrl: "https://maps.google.com/?q=S%C3%A3o+Paulo",
  heroHeading: "Minha casa nova finalmente saiu do Pinterest!",
  heroSubheading: "Esse ano a comemoração é diferente: aniversário + casa nova + a desculpa perfeita para reunir quem eu amo.",
  quote: "Vem comemorar comigo e, se quiser, ajuda a montar minha casa nova 😂",
  mainImageUrl: alynePortrait,
  pixKey: "alyne2.nobre.c@gmail.com",
  pixKeyType: "E-mail",
  pixQrCodeUrl: "",
  galleryImages: [
    modernLivingRoom,
    kitchenDining,
    readingNook,
    alynePortrait,
  ]
};

export const INITIAL_GIFTS: Omit<Gift, 'id'>[] = [
  {
    name: "Uma ajudinha para a 1ª parcela da geladeira 🥹",
    description: "Porque água gelada e sobremesas em segurança são essenciais para a dignidade humana.",
    category: "cozinha",
    imageUrl: kitchenDining,
    type: "shares",
    price: 200,
    totalQuantity: 10,
    availableQuantity: 7,
    reservedQuantity: 3,
    pixKey: "alyne2.nobre.c@gmail.com",
    status: "available"
  },
  {
    name: "Ajude a colocar um sofá nessa sala 😂",
    description: "Para você não ter que sentar no chão quando vier me visitar e fazer plantão de fofoca.",
    category: "sala",
    imageUrl: modernLivingRoom,
    type: "shares",
    price: 150,
    totalQuantity: 8,
    availableQuantity: 5,
    reservedQuantity: 3,
    pixKey: "alyne2.nobre.c@gmail.com",
    status: "available"
  },
  {
    name: "Cadeira para visitas ilustres",
    description: "Garante seu assento VIP reservado com o seu nome gravado mentalmente nele.",
    category: "sala",
    imageUrl: readingNook,
    type: "shares",
    price: 180,
    totalQuantity: 4,
    availableQuantity: 2,
    reservedQuantity: 2,
    pixKey: "alyne2.nobre.c@gmail.com",
    status: "available"
  },
  {
    name: "Air Fryer que salva vidas e jantares rápidos",
    description: "Alimento frito com ar e amor, zero bagunça na cozinha nova.",
    category: "cozinha",
    imageUrl: kitchenDining,
    type: "external",
    price: 389,
    totalQuantity: 1,
    availableQuantity: 0,
    reservedQuantity: 1,
    purchaseUrl: "https://www.magazineluiza.com.br",
    status: "sold_out"
  },
  {
    name: "Cafeteira Nespresso (para café de boas-vindas)",
    description: "A promessa é que todo convidado ganha um expresso cremoso na xícara bonita.",
    category: "cozinha",
    imageUrl: kitchenDining,
    type: "shares",
    price: 220,
    totalQuantity: 2,
    availableQuantity: 1,
    reservedQuantity: 1,
    purchaseUrl: "https://www.amazon.com.br",
    status: "available"
  },
  {
    name: "Jogo de Taças de Cristal para brindes",
    description: "Para brindarmos a vida nova, o aniversário e o fim dos perrengues de mudança!",
    category: "cozinha",
    imageUrl: modernLivingRoom,
    type: "product",
    price: 130,
    totalQuantity: 2,
    availableQuantity: 2,
    reservedQuantity: 0,
    status: "available"
  },
  {
    name: "Lixeira com sensor chique (para parecer rica)",
    description: "Aquela que abre sozinha sem você tocar. O auge do luxo da mulher independente.",
    category: "cozinha",
    imageUrl: kitchenDining,
    type: "product",
    price: 125,
    totalQuantity: 1,
    availableQuantity: 1,
    reservedQuantity: 0,
    status: "available"
  },
  {
    name: "Edredom abraço quentinho 400 fios",
    description: "Dormir nas nuvens depois de passar o dia arrumando caixas de mudança.",
    category: "quarto",
    imageUrl: readingNook,
    type: "shares",
    price: 160,
    totalQuantity: 2,
    availableQuantity: 2,
    reservedQuantity: 0,
    status: "available"
  },
  {
    name: "Kit de Toalhas macias para o lavabo",
    description: "Toalhas que secam de verdade e deixam o banheiro com cara de spa Pinterest.",
    category: "banheiro",
    imageUrl: modernLivingRoom,
    type: "product",
    price: 110,
    totalQuantity: 2,
    availableQuantity: 2,
    reservedQuantity: 0,
    status: "available"
  },
  {
    name: "Planta de respeito para a sala (Costela de Adão)",
    description: "Para dar aquele toque 'urban jungle' e oxigenar os dias de home office.",
    category: "sala",
    imageUrl: modernLivingRoom,
    type: "product",
    price: 95,
    totalQuantity: 1,
    availableQuantity: 1,
    reservedQuantity: 0,
    status: "available"
  },
  {
    name: "Cota Livre: 'Gaste com o que você quiser!' 💚",
    description: "Qualquer valor ajuda a pagar os 500 parafusos, buchas e imprevistos de quem acabou de se mudar!",
    category: "pix",
    imageUrl: alynePortrait,
    type: "pix",
    price: 50,
    totalQuantity: 50,
    availableQuantity: 42,
    reservedQuantity: 8,
    pixKey: "alyne2.nobre.c@gmail.com",
    status: "available"
  },
  {
    name: "Barril de Chopp para o nosso Open House 🍻",
    description: "Contribuição oficial para garantir que ninguém saia da festa com sede!",
    category: "pix",
    imageUrl: kitchenDining,
    type: "shares",
    price: 85,
    totalQuantity: 10,
    availableQuantity: 6,
    reservedQuantity: 4,
    pixKey: "alyne2.nobre.c@gmail.com",
    status: "available"
  }
];
