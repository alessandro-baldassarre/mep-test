import {
  app_icon,
  coworking,
  expert,
  meetings,
  membership,
  office,
  solution,
  virtual,
  virtual_office,
  workspace,
  solution_membership,
  emergency,
  talkexpert,
  day_office,
  about_regus,
  business_address,
  lounges,
  mobile_app,
  covid,
} from "@/assets/images";

export const navLinks = [
  {
    id: "1",
    linkName: "Che cosa facciamo",
    subTitle: "Scopri tutte le soluzioni",
    subLinks: [
      { id: "uffici", linkName: "Uffici", icon: office },
      { id: "coworking", linkName: "Coworking", icon: coworking },
      {
        id: "sol-membership",
        linkName: "Membership",
        icon: solution_membership,
      },
      {
        id: "virtual-office",
        linkName: "Uffici virtuali",
        icon: virtual_office,
      },
      { id: "meetingrooms", linkName: "Sala riunioni", icon: meetings },
      { id: "rec-workplace", linkName: "Workplace recovery", icon: emergency },
    ],
  },
  {
    id: "2",
    linkName: "Inizia",
    subTitle: "",
    subLinks: [
      { id: "expert", linkName: "Contatta esperto", icon: talkexpert },
      { id: "office", linkName: "Trova ufficio", icon: office },
      {
        id: "virtual-office",
        linkName: "Acquista un ufficio virtuale",
        icon: virtual_office,
      },
      {
        id: "meeting",
        linkName: "Prenota una sala riunioni",
        icon: meetings,
      },
      {
        id: "membership",
        linkName: "Acquista una membership",
        icon: solution_membership,
      },
      {
        id: "temp-office",
        linkName: "Prenota uffici temporanei",
        icon: day_office,
      },
    ],
  },
  {
    id: "3",
    linkName: "Scopri Regus",
    subTitle: "",
    subLinks: [
      { id: "about", linkName: "Chi siamo", icon: about_regus },
      {
        id: "business-address",
        linkName: "Le nostre sedi",
        icon: business_address,
      },
      {
        id: "lounges",
        linkName: "Passa all'ibrido",
        icon: lounges,
      },
      {
        id: "app",
        linkName: "Scarica la nostra app",
        icon: mobile_app,
      },
      {
        id: "covid",
        linkName: "La nostra risposta al COVID-19",
        icon: covid,
      },
    ],
  },
];

export const searchLinks = [
  {
    id: "office",
    title: "Uffici",
    icon: office,
  },
  {
    id: "coworking",
    title: "Coworking",
    icon: coworking,
  },
  {
    id: "virtualoffice",
    title: "Uffici virtuali",
    icon: virtual_office,
  },
  {
    id: "meetingrooms",
    title: "Sala riunioni",
    icon: meetings,
  },
];

export const ctaLinks = [
  {
    id: "solutions",
    title: "Le nostre soluzioni",
    subtitle: "Esplora la nostra gamma di prodotti e servizi",
    icon: solution,
  },
  {
    id: "enquiry",
    title: "Parla con noi",
    subtitle: "Richiedi consigli ai nostri esperti, 24/7",
    icon: expert,
  },
  {
    id: "meeting-rooms",
    title: "Prenota spazi di lavoro",
    subtitle: "Prenota subito sale riunioni e uffici temporanei",
    icon: workspace,
  },
  {
    id: "virtual-offices",
    title: "Configura un ufficio virtuale",
    subtitle: "Inizia oggi a sviluppare una presenza reale",
    icon: virtual,
  },
  {
    id: "membership",
    title: "Acquista una membership",
    subtitle: "Accedi on demand a migliaia di sedi nel mondo",
    icon: membership,
  },
  {
    id: "download",
    title: "Esplora la nostra app",
    subtitle: "Scarica l'app e inizia subito",
    icon: app_icon,
  },
];
