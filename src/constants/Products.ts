interface SubProduct {
  title: string;
  description: string;
  subItems?: SubProduct[];
}

interface ProductType {
  title: string;
  items: SubProduct[];
}

export const Product1: ProductType[] = [
  {
    title: "Color Palettes & Customization",
    items: [
      {
        title: "Tailwind Color Palettes",
        description:
          "Get predefined Tailwind palettes for quick and beautiful UI designs. Choose from soft pastels, vibrant neons, and professional dark modes.",
      },
      {
        title: "Custom Color Palettes",
        description:
          "Create your own palettes for unique branding. Pick shades, save them, and use them seamlessly in Tailwind.",
      },
      {
        title: "Gradient Palettes (Linear & Radial)",
        description: "Explore various gradient effects for your designs.",
        subItems: [
          {
            title: "Linear Gradients",
            description:
              "Smooth transitions between colors for backgrounds, buttons, and text.",
          },
          {
            title: "Radial Gradients",
            description:
              "Eye-catching, circular color transitions perfect for creative designs.",
          },
          {
            title: "Custom Gradients",
            description:
              "Adjust angles, positions, and color stops for personalized styles.",
          },
        ],
      },
    ],
  },
];

export const Product2: ProductType[] = [
  {
    title: "Text Gradient Effects",
    items: [
      {
        title: "Tailwind Text Gradients",
        description:
          "Apply beautiful gradient effects to text effortlessly with Tailwind. Choose between preset styles or custom gradients.",
      },
      {
        title: "Custom Gradient Text",
        description:
          "Define your colors and transitions. Copy & paste ready-to-use Tailwind classes.",
      },
    ],
  },
  {
    title: "React & Next.js Components",
    items: [
      {
        title: "Pre-Built Components for Faster Development",
        description:
          "Ready-to-use buttons, cards, modals, and more for React & Next.js. Optimized for performance and responsiveness.",
      },
      {
        title: "Tailwind-Specific Components",
        description:
          "Designed with Tailwind utility classes. Customizable themes for light & dark mode.",
      },
      {
        title: "Custom Components",
        description:
          "Need something unique? Customize our existing components or request a new design tailored to your project.",
      },
    ],
  },
];
