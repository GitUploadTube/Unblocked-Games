// Your XML link
const originalXmlUrl = "https://rawcdn.githack.com/LupineVault/imageopensocial/20852f48f9c6f6d059c7f3412ab995dace558aaf/rn3.xml";

// Converts to loader format for gituploadtube
function generateLoaderUrl(xmlUrl) {
  const encoded = xmlUrl.replace(/\//g, "?");
  return `https://gituploadtube.github.io/Unblocked-Games/url?domain=${encoded}&container=ig.html`;
}

// Generate and use it
const finalUrl = generateLoaderUrl(originalXmlUrl);
console.log("Loader URL:", finalUrl);
alert("Redirecting to:\n" + finalUrl);

// Optional: Automatically go to the loader
window.location.href = finalUrl;
