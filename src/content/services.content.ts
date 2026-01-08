export const SERVICES_CONTENT = {
  hero: {
    title: "What We Offer",
    subtitle: "Offering food, practical support, and a welcoming community space for everyone",
  },

  services: [
    {
      id: "connection-cafe",
      sectionVariant: "default",
      subtitle: "Every Tuesday",
      title: "Connection Café",
      description:
        "Join us for a cuppa and a snack while connecting with friendly support workers.",
      openingHours: [{ day: "Tuesday", time: "11:00am – 1:00pm" }],
    },

    {
      id: "community-hub",
      sectionVariant: "dark",
      subtitle: undefined,
      title: "Community Hub",
      description: "A welcoming space offering support, advice, and access to essential services.",
      openingHours: [
        { day: "Monday", time: "10:00am – 3:00pm" },
        { day: "Tuesday", time: "10:00am – 3:00pm" },
        { day: "Wednesday", time: "10:00am – 3:00pm" },
        { day: "Thursday", time: "10:00am – 3:00pm" },
        { day: "Friday", time: "10:00am – 3:00pm" },
        { day: "Saturday", time: "10:30am – 1:00pm" },
        { day: "Sunday", time: "Closed" },
      ],
    },

    {
      id: "midlothian-pantry",
      sectionVariant: "default",
      subtitle: undefined,
      title: "Midlothian Pantry",
      description:
        "Affordable food and essentials for individuals and families needing extra support.",
      openingHours: [
        { day: "Monday", time: "10:30am – 12:00pm, 1:00pm – 3:00pm" },
        { day: "Tuesday", time: "10:30am – 12:00pm" },
        { day: "Wednesday", time: "10:30am – 12:00pm" },
        { day: "Thursday", time: "10:30am – 12:00pm, 1:00pm – 3:00pm" },
        { day: "Friday", time: "10:30am – 12:00pm" },
        { day: "Saturday", time: "11:00am – 1:00pm" },
        { day: "Sunday", time: "Closed" },
      ],
    },
  ],
} as const;
