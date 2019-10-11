export const NavigationContent = [
  {
    title: "Getting Started",
    path: "/getting-started",
    page: "GettingStartedPage",
    content: [
      { title: "Introduction", page: "IntroductionPage" },
      { title: "How To Install", page: "HowToInstallPage" },
      { title: "Style Guide", page: "StyleGuidePage" },
    ],
  },
  {
    title: "Components",
    path: "/components",

    page: "ComponentsPage",
    // content: [
    //   { title: "Button", page: "ButtonPage" },
    //   {
    //     title: "Card",
    //     page: "CardPage",
    //   },
    //   {
    //     title: "Input",
    //     page: "InputPage",
    //   },
    // ],
    anotherContent: [
      {
        type: "Atoms",
        list: [
          { title: "Button", page: "components/button", last: "/components" },
          { title: "Input", page: "components/input", last: "/components" },
          { title: "Number", page: "components/number", last: "/components" },
        ],
      },
      {
        type: "Molecules",
        list: [{ title: "Card", page: "components/card", last: "/components" }],
      },
    ],
  },
  {
    title: "Tokens",
    page: "TokensPage",
    content: [
      { title: "Color", page: "color" },
      { title: "Fonts", page: "fonts" },
    ],
  },
];
