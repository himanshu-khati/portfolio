import { TAB_DATA } from "../utils/constants";
import { v4 as uuidv4 } from "uuid";
const TabContent = ({ activeTab }) => {
  const getContent = () => {
    const selectedTab = TAB_DATA.find((data) => data.id === activeTab);
    return selectedTab
      ? selectedTab.content.map((item) => <li key={uuidv4()}>{item}</li>)
      : null;
  };

  return (
    <div className="mt-2">
      <ul className="list-disc pl-6">{getContent()}</ul>
    </div>
  );
};

export default TabContent;
