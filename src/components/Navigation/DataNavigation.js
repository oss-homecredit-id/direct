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
          { title: "Text", page: "components/text", last: "/components" },
          {
            title: "Radio Button",
            page: "components/radiobutton",
            last: "/components",
          },
          {
            title: "Dropdown Select",
            page: "components/dropdown-select",
            last: "/components",
          },
          {
            title: "Loader",
            page: "components/loader",
            last: "/components",
          },
          {
            title: "Table",
            page: "components/table",
            last: "/components",
          },
        ],
      },
      {
        type: "Molecules",
        list: [
          {
            title: "Breadcrumb",
            page: "components/breadcrumb",
            last: "/components",
          },

          { title: "Card", page: "components/card", last: "/components" },
          { title: "List", page: "components/list", last: "/components" },
          { title: "Block", page: "components/block", last: "/components" },
        ],
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
  {
    title: "Templates",
    path: "/template",
    page: "Templates",
    content: [
      { title: "Login Form", page: "template/login-form", last: "/template" },
    ],
  },
];
