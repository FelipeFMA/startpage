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
          name: "felipao",
          links: [
            {
              name: "...",
              url: "...",
              icon: "...",
              icon_color: palette.peach,
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
              url: "https://novoportal.cruzeirodosul.edu.br/?token=eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkExMjhDQkMtSFMyNTYiLCJ4NXQiOiJISVdKdzZNcUJYNXRqWVljTDdHM3hCVTBxUEEiLCJ6aXAiOiJERUYifQ.m30wy1lMzrZfnqUVoz8jx5yp__oCt2JJp7G_v0nTqHWZV7ItjBKuf2_WnVequGTqISM3VFlfx8OSL-Do5nyEmZbS2iAAU_YbXFx8xFk3L4HfdQS9Vvn9HBaZ4TWJNO6yeSzm7m_i3Mp_mb9zxcAx7WlsK12ePrBfIoijt_h-h8pozbMkMaRYRu7q7m8zncLo3xOr9ErsiWYBuHvDlKUfzybyXS7Damxgt16Fs2VUvjGJmmkohBmZy_CA09ReqwqUi9HnZNREcvP58DvyWWSwDqnRnh-xTif24JBWvcJ460LtQDeuDQ8Mqhyt6hQYY1nXx-UkT6t8Xo_WylpwyK_LlQ.CSmCCRZK5RotiySlAUTKmw._NXgpBV53GP3-1N1oDdcoSN96YoO4BvmDf9r4iDvv4NQ-ScUGJl0uI7KDHWDz8gEq7Lt8dYIitT8RWg6pxQWqX0m5ggRLjbH7Vrrb501PjmB4l21B2E_Mc6ZRJLj2H6R8QXIG32FefQxOjyjBiukqV2A5MPjcwLLL5NESXkqiGGKieliFdEGstVwr4RFYmkEMwUEq-N3khv4JShTGZL3KCjFd3n_-XphWrvUZsFBpwXrMGwoCVUiXZeR7F6ak2GwGZa6iINZHrABG0LPbXUW64czU3cGkgxZqBP9VhuvMlTimy2cHmDch_peHreQSGNenmwhrgmen_e-fbXl2OWig95bgYQ4hKswh0hNIIOU6Q9Lql4dkekHVO-wCK3HOFP4Jx3HWXmKVotSFwyXpz5dHvbJ2ZTUsx0uevoZPIKKZgHzEqIo0K4JMkzzDe2ZuisocHYBLnMk5fLhyN6plHEE5zmGWyQSW2jjvW8bkfFdlC3GLqSdXPVl3LnYMlU7hnY5yQlVOwhgz7GNYp_cAWsn5gRe3DYLdC5WMa6ClntjqLpwPLd1A4-QSZ9mjWT7fdWo2oPWMFDfAyaYLS3Cfkexrek6wuejeTa1V_OwhJDWO-2hrPZSX0FUsraG8KxpJZQfhtF4URzN_K5leN01HcmXSFgUd8snHhijNmP-6FM3BBtPp1aZqlvwW-CvUTHcfBMdCVeqajree0yaroVxzoHOMWbXWVlrady8yIggIQ5Lyh6zcE-xL0ARAeVSm7vxXfeukZUQnelDyqpkaykySAea4_1J8XMJtVKqEHfOjAOHfMasNxdaF06f_vWzF4fzdalbcoo4sEInml8-LuIVPb01W8ux5pOM8Ati9PvXR1bmdo7hP_eNAoB4akUhKk1F3lQ0rt_FtHaeXo9aWqhXKlWRsavkCBJ257_SLb9YGg8vfiBUK1ebOlkAQ2CR7Js7iienrHuTIf_Aren6LV1l3jbPk6-DPzGW69P7mY4C0fys5N9BT0uRE8P-faskSw8DWwfFvrvHOiaSRnMFfJ3JiZ-3neT-UTmyBBaTzoQJN33JYtGJtmJg1FRlOEv1Q6YmB6TEaQKQI8by1wOZq-ZBI8A-1rvZKjDHSBURWkvy_r8acRxHxwpwMr4nkIxtbWRCHB9wA4npffEQUM7DVM-8DMpjTxfWpZ85jcfXgDIIiMgLUKV3dTKKlJSMh8b_veXNlyM_XV_Qz7aPsL7DoBSUM8LksWr6cTdxAYHOwdvJtfVJFukKLG6YY1_LHDhGllTYk-XRKHWzp7lus_JnASm77-Bg49E3FXJN-OpKWoerdcATK3y_041fmrHtYxyOPNJG8nLsOBXLuapl-iWLF94l0oaRTzvYGzcAJC0aefX7GmKW455lpKdgwKjGDnGRqZRRlLcP-iqxzhNt7cQNXvgNMnS2H4n8-SxyQieOkPIzmg7BxtCRuIS-4AZJ3FFAYL2iI2u9NGRNpsSGPWOJ6XUkjye_6A.cYAEAOPRA60sxZjY5S9pVA&empresa=unifran",
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
