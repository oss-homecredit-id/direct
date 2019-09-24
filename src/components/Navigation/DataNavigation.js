export const NavigationContent = [
  {
    title: "Getting Started",
    page: "GettingStartedPage",
    content: [
      { title: "Introduction", page: "IntroductionPage" },
      { title: "How To Install", page: "HowToInstallPage" },
      { title: "Style Guide", page: "StyleGuidePage" },
    ],
  },
  {
    title: "Components",
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
          { title: "Button", page: "ButtonPage" },
          { title: "Input", page: "InputPage" },
        ],
      },
      {
        type: "Molecules",
        list: [{ title: "Card", page: "CardPage" }],
      },
    ],
  },
  {
    title: "Tokens",
    page: "TokensPage",
    content: [
      { title: "Color", page: "ColorPage" },
      { title: "Fonts", page: "FontPage" },
    ],
  },
];
