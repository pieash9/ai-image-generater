export const downloadImage = async (url, onSuccess) => {
  try {
    const response = await fetch(url, { mode: "cors" });
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const filename = decodeURIComponent(url.split("/").pop().split("?")[0]);

    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = filename || "image.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(blobUrl);

    onSuccess(url);
  } catch (err) {
    console.error("Download failed:", err);
  }
};
