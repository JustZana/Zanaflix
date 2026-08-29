// ==========================================================
// ZANAFLIX SHOWS & EPISODES CATALOG (EDIT HERE TO ADD SHOWS)
// ==========================================================

const moviesData = [
    {
        title: "Geekie Ball Run",
        displayTitle: "Geekie Ball Run",
        img: "https://files.catbox.moe/v5ouka.png",
        logoUrl: "https://files.catbox.moe/392v4j.png",
        hasLogoImage: true,
        trailerUrl: "https://files.catbox.moe/82nqlo.mp4",
        year: "2026",
        rating: "16+",
        seasons: "1 Season",
        desc: "From San Diego to New York across an unforgiving frontier, the cross-country horse race begins. Stakes are high, secrets are buried deep, and a bizarre spinning power changes the rules of the West forever.",
        cast: "Wangan Joestar, Sven Zeppeli, Gishler Brando, Sand Y, Teoloco, Amss Geekie, Eden Geekie",
        genres: "Sci-Fi & Fantasy Anime, Action Anime, Japanese",
        stageName: "1st STAGE",
        episodesStartIndex: 0, // Starts at index 0 in episodesList
        episodesCount: 2         // Has 2 episodes total
    },
    {
        title: "Weekly Fanaf News",
        displayTitle: "Weekly Fanaf News",
        img: "https://files.catbox.moe/c1355e.png",
        logoUrl: "",
        hasLogoImage: false,
        trailerUrl: "",
        year: "2026",
        rating: "12+",
        seasons: "1 Season",
        desc: "Your weekly update covering all things related to the Fazbear universe, animatronic updates, and community highlights from Geekie Productions.",
        cast: "Geekie Productions Crew",
        genres: "News, Gaming, Reality",
        stageName: "SEASON 1",
        episodesStartIndex: null, // No episodes tied to this show
        episodesCount: 0          // Hides the episodes section entirely
    }
    // ---> ADD NEW SHOWS HERE <---
];

const episodesList = [
    {
        title: "Geekie Ball Run - Geekie Ball Run: Part 1",
        url: "https://files.catbox.moe/7d7hzx.mp4",
        partName: "Geekie Ball Run: Part 2",
        thumb: "https://files.catbox.moe/qvgpp0.png",
        duration: "6m 18s",
        desc: "The cross-country race across America begins as Wangan Joestar crosses paths with Sven Zeppeli..."
    },
    {
        title: "Geekie Ball Run - Geekie Ball Run: Part 2",
        url: "https://files.catbox.moe/wpgxij.mp4",
        partName: null,
        thumb: "https://files.catbox.moe/uiupg5.png",
        duration: "8m 15s",
        desc: "After a fateful encounter with outlaw Sven Zeppeli, former racing prodigy Wangan Joestar enters the Geekie Ball Run..."
    }
    // ---> ADD NEW EPISODES HERE <---
];
