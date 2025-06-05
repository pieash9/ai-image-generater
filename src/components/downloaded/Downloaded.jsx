import { useImageContext } from "../../hooks/useImageContext";
import { downloadImage } from "../../utils/downloadImage";
import Header from "../Header";

const Downloaded = () => {
  const {
    state: { downloaded },
    dispatch,
  } = useImageContext();

  const handleDownload = async (url) => {
    await downloadImage(url, (successUrl) => {
      dispatch({ type: "ADD_DOWNLOADED", payload: successUrl });
    });
  };
  return (
    <>
      {/* Welcome Message */}
      <h2 className="text-4xl font-bold mb-8">
        Downloaded <span className="text-2xl">👋</span>
      </h2>
      {/* Image Presets Section */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Image Card 1 */}
          {downloaded.length > 0 ? (
            downloaded.map((img) => (
              <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
                <a
                  onClick={() => handleDownload(img)}
                  className="absolute bottom-2 right-2  p-1 "
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
                </a>
                <img
                  src={img}
                  alt="Anime character in kimono"
                  className="w-full h-48 object-cover"
                />
              </div>
            ))
          ) : (
            <div className="w-full col-span-full h-28  flex items-center justify-center ">
              No downloaded images
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Downloaded;
