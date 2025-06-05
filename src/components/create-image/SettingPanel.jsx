import { useImageContext } from "../../hooks/useImageContext";
import aspectPresets from "../../utils/aspectPresets";

const SettingPanel = () => {
  const { state, dispatch } = useImageContext();

  const handleRatioClick = (ratio) => {
    const dimensions = aspectPresets[ratio];
    if (dimensions) {
      dispatch({ type: "SET_DIMENSIONS", payload: dimensions });
    }
  };
  return (
    <div className="border border-zinc-700/70 mb-6 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-medium">Advanced Settings</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Model Selection */}
        <div>
          <label
            htmlFor="model"
            className="block text-sm font-medium text-zinc-700 mb-1"
          >
            Model
          </label>
          <select
            id="model"
            value={state.model}
            onChange={(e) =>
              dispatch({ type: "SET_MODEL", payload: e.target.value })
            }
            className="w-full px-3 py-2 bg-zinc-900/10 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors capitalize"
          >
            {models.map((model) => (
              <option
                key={model}
                value={model}
                className="bg-zinc-900 capitalize"
              >
                {model}
              </option>
            ))}
            {/* <option className="bg-zinc-900" value="flux">
              Flux
            </option>
            <option className="bg-zinc-900" value="turbo">
              Turbo
            </option> */}
          </select>
        </div>
        {/* Seed Input : Auto Generated, readonly for user */}
        <div>
          <label
            htmlFor="seed"
            className="block text-sm font-medium text-zinc-700 mb-1"
          >
            Seed (for reproducible results)
          </label>
          <input
            type="number"
            id="seed"
            value={state.seed ?? ""}
            disabled
            className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Random"
          />
        </div>
        {/* Width Input */}
        <div>
          <label
            htmlFor="width"
            className="block text-sm font-medium text-zinc-700 mb-1"
          >
            Width
          </label>
          <input
            type="number"
            id="width"
            value={state.width}
            onChange={(e) =>
              dispatch({
                type: "SET_DIMENSIONS",
                payload: {
                  width: Number(e.target.value),
                  height: state.height,
                },
              })
            }
            className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>
        {/* Height Input */}
        <div>
          <label
            htmlFor="height"
            className="block text-sm font-medium text-zinc-700 mb-1"
          >
            Height
          </label>
          <input
            type="number"
            id="height"
            value={state.height}
            onChange={(e) =>
              dispatch({
                type: "SET_DIMENSIONS",
                payload: { width: state.width, height: Number(e.target.value) },
              })
            }
            className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>
        {/* Aspect Ratio Presets */}
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Aspect Ratio Presets
          </label>
          <div className="flex flex-wrap gap-2">
            {Object.keys(aspectPresets).map((ratio) => (
              <button
                key={ratio}
                onClick={() => handleRatioClick(ratio)}
                className={`px-3 py-3 text-xs rounded transition-colors ${
                  state.width === aspectPresets[ratio].width &&
                  state.height === aspectPresets[ratio].height
                    ? "bg-blue-500 text-white"
                    : "bg-zinc-900/10 hover:bg-zinc-800 text-zinc-300"
                }`}
              >
                {ratio}
              </button>
            ))}
          </div>
        </div>
        {/* No of images */}
        <div>
          <label
            htmlFor="noOfImages"
            className="block text-sm font-medium text-zinc-700 mb-1"
          >
            No of images
          </label>

          {[1, 3, 6, 9].map((number) => (
            <button
              key={number}
              onClick={() =>
                dispatch({
                  type: "SET_NO_OF_IMAGES",
                  payload: number,
                })
              }
              className={`px-3 py-3 text-xs rounded transition-colors ${
                state.noOfImages === number
                  ? "bg-blue-500 text-white"
                  : "bg-zinc-900/10 hover:bg-zinc-800 text-zinc-300"
              }`}
            >
              {number}
            </button>
          ))}
        </div>

        {/* No Logo Toggle */}
      </div>
    </div>
  );
};

export default SettingPanel;

const models = [
  "flux",
  "turbo",
  "openai",
  "openai-fast",
  "openai-large",
  "openai-roblox",
  "qwen-coder",
  "llama",
  "llamascout",
  "mistral",
  "unity",
  "mirexa",
  "midijourney",
  "rtist",
  "searchgpt",
  "evil",
  "deepseek-reasoning",
  "phi",
  "hormoz",
  "hypnosis-tracy",
  "deepseek",
  "grok",
  "sur",
  "bidara",
  "openai-audio",
];
