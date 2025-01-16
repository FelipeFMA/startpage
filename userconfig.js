// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Franca, BR",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "Myself",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [
        {
          name: "Most Used",
          links: [
            {
              name: "Github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: palette.blue,
            },
            {
              name: "Youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "Reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "Whatsapp",
              url: "https://web.whatsapp.com/",
              icon: "brand-whatsapp",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "AI",
          links: [
            {
              name: "ChatGPT",
              url: "https://chatgpt.com/",
              icon: "brand-openai",
              icon_color: palette.blue,
            },
            {
              name: "Claude",
              url: "https://claude.ai/new",
              icon: "message-chatbot",
              icon_color: palette.peach,
            },
            {
              name: "Groq",
              url: "https://console.groq.com/playground",
              icon: "terminal-2",
              icon_color: palette.peach,
            },
            {
              name: "Gemini",
              url: "https://gemini.google.com/app?hl=pt-BR",
              icon: "rosette",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "Google",
          links: [
            {
              name: "Gmail",
              url: "https://mail.google.com/mail/u/0/?pli=1#inbox",
              icon: "brand-gmail",
              icon_color: palette.blue,
            },
            {
              name: "Google Fotos",
              url: "https://photos.google.com/",
              icon: "brand-google-photos",
              icon_color: palette.red,
            },
            {
              name: "Google Drive",
              url: "https://drive.google.com/drive/my-drive",
              icon: "brand-google-drive",
              icon_color: palette.yellow,
            },
            {
              name: "Google Docs",
              url: "https://docs.google.com/document/u/0/",
              icon: "file",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "Server",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "Oracle",
          links: [
            {
              name: "Oracle Cloud Infrastructure",
              url: "https://www.oracle.com/br/cloud/sign-in.html",
              icon: "server-2",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "felipao",
          links: [
            {
              name: "Portainer",
              url: "https://134.65.28.106:9443/#!/home",
              icon: "brand-docker",
              icon_color: palette.blue,
            },
            {
              name: "Crafty",
              url: "https://134.65.28.106:8443",
              icon: "brand-minecraft",
              icon_color: palette.green,
            },

          ],
        },
        {
          name: "avavelar",
          links: [
            {
              name: "qBittorrent",
              url: "http://204.216.164.72:1337",
              icon: "skull",
              icon_color: palette.green,
            },
            {
              name: "Portainer",
              url: "https://204.216.164.72:9443",
              icon: "brand-docker",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "Study",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "Unifran",
          links: [
            {
              name: "Área do Aluno",
              url: "https://novoportal.cruzeirodosul.edu.br/",
              icon: "pencil",
              icon_color: palette.green,
            },
            {
              name: "Office365",
              url: "https://m365.cloud.microsoft/?auth=2",
              icon: "brand-office",
              icon_color: palette.peach,
            },
            {
              name: "OneDrive",
              url: "https://acadcruzeirodosul-my.sharepoint.com/",
              icon: "brand-onedrive",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "Other",
          links: [
            {
              name: "Learn C++",
              url: "https://www.learncpp.com/",
              icon: "brand-cpp",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
