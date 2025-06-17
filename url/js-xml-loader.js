// Original XML URL
const originalXmlUrl = "https://rawcdn.githack.com/LupineVault/imageopensocial/20852f48f9c6f6d059c7f3412ab995dace558aaf/rn3.xml";

// Function to convert the XML URL to the required format
function generateLoaderUrl(xmlUrl) {
  // Replace all '/' with '?'
  const encodedDomain = xmlUrl.replace(/\//g, "?");
  // Final redirector format
  return `https://gituploadtube.github.io/Unblocked-Games/url?domain=${encodedDomain}&container=ig.html`;
}

// Example usage:
const finalUrl = generateLoaderUrl(originalXmlUrl);
console.log("Loadable URL:", finalUrl);

// Optionally, redirect the browser to it:
window.location.href = finalUrl;
