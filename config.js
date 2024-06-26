module.exports = {
  OWNER_IDS: ["731093962382901308"], // Bot owner ID's
  SUPPORT_SERVER: "https://discord.gg/eYBQYx7Gqd", // Your bot support server
  PREFIX_COMMANDS: {
    ENABLED: true, // Enable/Disable prefix commands
    DEFAULT_PREFIX: "/", // Default prefix for the bot
  },
  INTERACTIONS: {
    SLASH: true, // Should the interactions be enabled
    CONTEXT: true, // Should contexts be enabled
    GLOBAL: true, // Should the interactions be registered globally
    TEST_GUILD_ID: "xxxxxxxxxxx", // Guild ID where the interactions should be registered. [** Test you commands here first **]
  },
  EMBED_COLORS: {
    BOT_EMBED: "#068ADD",
    TRANSPARENT: "#36393F",
    SUCCESS: "#00A56A",
    ERROR: "#D61A3C",
    WARNING: "#F7E919",
  },
  CACHE_SIZE: {

    // DO NOT TOUCH UNLESS YOU UNDERSTAND WHAT YOU ARE DOING
    GUILDS: 100,
    USERS: 10000,
    MEMBERS: 10000,



  },
  MESSAGES: {
    API_ERROR: "Unexpected Backend Error! Try again later or contact support server",
  },

  // PLUGINS

  AUTOMOD: {
 
    ENABLED: true, // Should the automod system be enabled


 
    LOG_EMBED: "#36393F",
    DM_EMBED: "#36393F",
  },

  DASHBOARD: {
    enabled: true, // enable or disable dashboard
    baseURL: "https://mythicxv2.onrender.com", // base url
    failureURL: "https://mythicxv2.onrender.com", // failure redirect url
    port: "8080", // port to run the bot on
    style: "dark", // color style for dashboard - light ~ dark // dashboard colors can be edited in dashboard/public/dist/css/custom.css
  },

  ECONOMY: {
    ENABLED: true,
    CURRENCY: "$",
    DAILY_COINS: 100, // coins to be received by daily command
    MIN_BEG_AMOUNT: 100, // minimum coins to be received when beg command is used
    MAX_BEG_AMOUNT: 2500, // maximum coins to be received when beg command is used
  },

  MUSIC: {
    ENABLED: true,
    IDLE_TIME: 60, // Time in seconds before the bot disconnects from an idle voice channel
    MAX_SEARCH_RESULTS: 5,

    DEFAULT_SOURCE: "SC", // YT = Youtube, YTM = Youtube Music, SC = SoundCloud

    // Add any number of lavalink nodes here
    // Refer to https://github.com/freyacodes/Lavalink to host your own lavalink server

    LAVALINK_NODES: [
      // Add any number of lavalink nodes here
      // Refer to https://github.com/freyacodes/Lavalink to host your own lavalink server
      {
        host: "lavalink.techpoint.world",
        port: 80,
        password: "techpoint",
        id: "Local Node",
        secure: false,
      },
    ],
  },

  GIVEAWAYS: {

    ENABLED: true, // Should the giveaway system be enabled
    REACTION: "🎁", // Reaction the user must click to join giveaway

    START_EMBED: "#FF468A",
    END_EMBED: "#FF468A",
  },

  IMAGE: {
    ENABLED: true,
    BASE_API: "https://strangeapi.fun/api",
  },

  INVITE: {
    ENABLED: true,
  },

  MODERATION: {

    ENABLED: true, // Should the moderation system be enabled



    EMBED_COLORS: {
      TIMEOUT: "#102027",
      UNTIMEOUT: "#4B636E",
      KICK: "#FF7961",
      SOFTBAN: "#AF4448",
      BAN: "#D32F2F",
      UNBAN: "#00C853",
      VMUTE: "#102027",
      VUNMUTE: "#4B636E",
      DEAFEN: "#102027",
      UNDEAFEN: "#4B636E",
      DISCONNECT: "RANDOM",
      MOVE: "RANDOM",
    }, // Different colors for different moderation actions
  },

  PRESENCE: {
    ENABLED: true, // Whether or not the bot should update its status
    STATUS: "online", // The bot's status [online, idle, dnd, invisible]
    TYPE: "PLAYING", // Status type for the bot [PLAYING | LISTENING | WATCHING | COMPETING]
    MESSAGE: "/help | MythicX", // Your bot status message
  },

  STATS: {

    ENABLED: true, // Should the stats system be enabled

    XP_COOLDOWN: 5, // Cooldown in seconds between messages
    DEFAULT_LVL_UP_MSG: "{member:tag}, You just advanced to **Level {level}**", // Level up message
  },

  SUGGESTIONS: {
    ENABLED: true, // Should the suggestion system be enabled
    EMOJI: {
      UP_VOTE: "⬆️",
      DOWN_VOTE: "⬇️",
    },
    DEFAULT_EMBED: "#4F545C",
    APPROVED_EMBED: "#43B581",
    DENIED_EMBED: "#F04747",
  },

  TICKET: {

    ENABLED: true, // Should the ticket system be enabled

    CREATE_EMBED: "#068ADD",
    CLOSE_EMBED: "#068ADD",
  },
};
