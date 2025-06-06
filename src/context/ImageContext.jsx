import { createContext } from "react";
import { useImmerReducer } from "use-immer";

export const ImageContext = createContext(null);

const initialState = {
  prompt: "",
  model: "flux",
  width: 1024,
  height: 1024,
  noOfImages: 3,
  seed: null,
  loading: false,
  error: null,
  images: [],
  downloaded: [],
  batchStartIndex: 0,
};

const reducer = (draft, action) => {
  switch (action.type) {
    case "SET_PROMPT": {
      draft.prompt = action.payload;
      return;
    }
    case "SET_MODEL": {
      draft.model = action.payload;
      return;
    }
    case "SET_DIMENSIONS": {
      draft.width = action.payload.width;
      draft.height = action.payload.height;
      return;
    }
    case "SET_NO_OF_IMAGES": {
      draft.noOfImages = action.payload;
      return;
    }
    case "SET_IMAGES_LOADING": {
      draft.batchStartIndex = draft.images.length;
      const placeholders = Array.from({ length: action.payload }).map(() => ({
        url: null,
        loading: true,
        error: null,
      }));
      draft.images.push(...placeholders);
      return;
    }
    case "SET_IMAGE_SUCCESS": {
      const { index, url } = action;
      const targetIndex = draft.batchStartIndex + index;
      if (draft.images[targetIndex]) {
        draft.images[targetIndex].url = url;
        draft.images[targetIndex].loading = false;
        draft.images[targetIndex].error = null;
      }
      return;
    }
    case "SET_IMAGE_ERROR": {
      const { index, error } = action;
      const targetIndex = draft.batchStartIndex + index;

      if (draft.images[targetIndex]) {
        draft.images[targetIndex].url = null;
        draft.images[targetIndex].loading = false;
        draft.images[targetIndex].error = error;
      }
      return;
    }
    case "SET_LOADING": {
      draft.loading = action.payload;
      return;
    }
    case "SET_ERROR": {
      draft.error = action.payload;
      return;
    }
    case "ADD_DOWNLOADED": {
      const url = action.payload;
      if (!draft.downloaded.includes(url)) {
        draft.downloaded.push(url);
      }
      return;
    }
  }
};

export const ImageProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  return (
    <ImageContext.Provider value={{ state, dispatch }}>
      {children}
    </ImageContext.Provider>
  );
};
