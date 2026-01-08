import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DescriptionIcon from "@mui/icons-material/Description";

export const DONATE_CONTENT = {
  hero: {
    title: "How you can Donate",
    subTitle:
      "Your generosity helps us support individuals and families in our community when they need it most",
  },

  financialDonation: {
    title: "Financial Donation",
    methods: [
      {
        id: "bank-transfer",
        title: "Bank Transfer",
        icon: AccountBalanceIcon,
        rows: [
          { label: "Account Name", value: "Food Facts Friends Project" },
          { label: "Sort Code", value: "83–26–10" },
          { label: "Account Number", value: "00709837" },
        ],
      },
      {
        id: "cheque",
        title: "Cheque",
        icon: DescriptionIcon,
        content: [
          { type: "text", value: "Payable to:" },
          { type: "strong", value: "Food Facts Friends Project" },
        ],
      },
    ],
    actions: [
      {
        label: "FFF Donation Form",
        variant: "contained",
        href: "/assets/donation_form-DIdqkv8g.pdf",
      },
      {
        label: "Gift Aid Declaration",
        variant: "outlined",
        href: "/assets/gift_aid_declaration-ByHasfVG.pdf",
      },
    ],
  },

  itemDonation: {
    title: "Donate Items",
    note: "These lists outline what we generally need the most. Please check with us before donating to see what supplies we currently need.",
    categories: [
      {
        title: "Food Items",
        items: [
          "Diluting Juice",
          "Long Life or Powdered Milk",
          "Soup",
          "Rice",
          "Pasta / Sauce",
          "Beans / Spaghetti",
          "Tinned Tomatoes",
          "Tinned Meat",
          "Tinned Fish",
          "Tinned Pies",
          "Puddings",
        ],
      },
      {
        title: "Toiletries",
        items: [
          "Deodorant",
          "Toilet Paper",
          "Shower Gel",
          "Shaving Gel",
          "Shampoo",
          "Soap",
          "Toothbrushes",
          "Toothpaste",
          "Hand Wipes",
        ],
      },
      {
        title: "Household Items",
        items: ["Laundry Liquid Detergent", "Laundry Powder", "Washing Up Liquid"],
      },
      {
        title: "Baby Supplies",
        items: ["Nappies", "Baby Wipes", "Baby Food"],
      },
      {
        title: "Feminine Products",
        items: ["Sanitary Towels", "Tampons"],
      },
      {
        title: "Health & Safety Supplies",
        items: ["Face Masks", "Hand Sanitiser"],
      },
    ],
    beforeDonating:
      "Please check our current needs and opening hours before bringing donations to ensure we can accept them.",
  },
} as const;
