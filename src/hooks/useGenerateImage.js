import { useImageContext } from "./useImageContext";

const useGenerateImage = () => {
  const { state, dispatch } = useImageContext();

  const generateSeed = () => Math.floor(Math.random() * 1000000);

  const fetchGenerateImage = async () => {
    const { prompt, model, height, width, noOfImages } = state;
    const totalImages = noOfImages;

    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "SET_ERROR", payload: null });
    dispatch({ type: "SET_IMAGES_LOADING", payload: totalImages });

    for (let i = 0; i < totalImages; i++) {
      const seed = generateSeed();

      try {
        const res = await fetch(
          `https://image.pollinations.ai/prompt/${prompt}?model=${model}&width=${width}&height=${height}&seed=${seed}`
        );

        if (!res.ok) throw new Error(`Image ${i + 1} failed to load`);

        dispatch({ type: "SET_IMAGE_SUCCESS", index: i, url: res.url });
      } catch (error) {
        dispatch({
          type: "SET_IMAGE_ERROR",
          index: i,
          error: error.message || "Failed to load image",
        });
      }
    }

    dispatch({ type: "SET_LOADING", payload: false });
  };

  return fetchGenerateImage;
};

export default useGenerateImage;
