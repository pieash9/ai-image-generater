import ImagePresets from "./ImagePresets";
import Search from "./Search";
import SettingPanel from "./SettingPanel";
import WelcomeMessage from "./WelcomeMessage";

const CreateImage = () => {
  return (
    <>
      <WelcomeMessage />
      <Search />
      <SettingPanel />
      <ImagePresets />
    </>
  );
};

export default CreateImage;
