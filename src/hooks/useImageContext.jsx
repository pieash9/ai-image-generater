import { useContext } from "react";
import { ImageContext } from "../context/ImageContext";

/**
 * Custom hook for accessing image context.
 * @returns {{
 *   state: {
 *     prompt: string,
 *     model: string,
 *     width: number,
 *     height: number,
 *     noOfImages: number,
 *     seed: number|null,
 *     loading: boolean,
 *     error: string|null,
 *     images: { url: string|null, loading: boolean, error?: string }[],
 *     downloaded: string[]
 *   },
 *   dispatch: import("react").Dispatch<any>
 * }}
 */
export const useImageContext = () => useContext(ImageContext);
