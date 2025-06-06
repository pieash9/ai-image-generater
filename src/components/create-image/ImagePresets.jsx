import { useState } from "react";
import { useImageContext } from "../../hooks/useImageContext";
import { downloadImage } from "../../utils/downloadImage";

const ImagePresets = () => {
  const {
    state: { images },
    dispatch,
  } = useImageContext();

  const [selectedImage, setSelectedImage] = useState(null);

  const handleDownload = async (url) => {
    await downloadImage(url, (successUrl) => {
      dispatch({ type: "ADD_DOWNLOADED", payload: successUrl });
    });
  };

  return (
    <>
      <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {images?.length > 0 ? (
          images.map((img, index) => (
            <div
              key={index}
              className="image-card rounded-xl overflow-hidden cursor-pointer relative"
            >
              {img.loading ? (
                <div className="w-full h-48 bg-zinc-800 animate-pulse flex items-center justify-center text-zinc-500">
                  Generating image...
                </div>
              ) : img.error ? (
                <div className="w-full h-48 bg-red-900 text-red-200 flex items-center justify-center p-4 text-sm">
                  {img.error}
                </div>
              ) : (
                <>
                  <button
                    onClick={() => handleDownload(img.url)}
                    className="absolute bottom-2 right-2 p-1 bg-black bg-opacity-60 rounded-full text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-image-down-icon lucide-image-down"
                    >
                      <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                      <path d="m14 19 3 3v-5.5" />
                      <path d="m17 22 3-3" />
                      <circle cx={9} cy={9} r={2} />
                    </svg>
                  </button>
                  <img
                    src={img.url}
                    alt="Generated"
                    className="w-full h-48 object-cover"
                    onClick={() => setSelectedImage(img.url)}
                  />
                </>
              )}
            </div>
          ))
        ) : (
          <div className="w-full col-span-full h-48 flex items-center justify-center">
            No image generated yet
          </div>
        )}
      </div>

      {/* Modal viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80  flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-xl font-bold z-10"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Popup View"
              className="max-w-full max-h-[90vh] rounded-xl border border-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImagePresets;
