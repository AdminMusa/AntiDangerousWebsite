// List of known scam websites
const scamWebsites = [
    "http://www.gravematters.us/Templates/rob.html",
    "https://www.9minecraft.net/",
    "https://vipcopperapp.monster/?t=399d989273ecfdccbe70f48b4ae6f9e0",
    "https://www.6minecraft.net/",
    "https://7minecraft.net/",
    "https://igetintopc.com/",
    "kingmodapk.com/",
    "apkmodget.com/",
    "www.wizcase.com",
    "techspot.com",
    "aladel.net",
    "bpwhamburgorchardpark.org",
    "clicnews.com",
    "dfwdiesel.net",
    "divineenterprises.net",
    "gardensrestaurantandcatering.com",
    "ginedis.com",
    "gncr.org",
    "hdvideoforums.org",
    "hihanin.com",
    "kingfamilyphotoalbum.com",
    "likaraoke.com",
    "gay.com",
    "mactep.org",
    "magic4you.nu",
    "nacjalneg.info",
    "pronline.ru",
    "qsng.cn",
    "seksburada.net",
    "sportsmansclub.net",
    "tathli.com",
    "teamclouds.com",
    "texaswhitetailfever.com",
    "xnescat.info"
];

// Check if the current URL matches any of the scam websites
if (scamWebsites.includes(window.location.href)) {
    // Redirect to a blank page or any other safe page
    document.body.innerHTML = '<h1>This is a scam website</h1><p>Please avoid this website.</p>';
    document.body.style.backgroundColor = "#ffcccc"; // Optional: Change background color to alert the user
    throw new Error("Blocked scam website");
}
