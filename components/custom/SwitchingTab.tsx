// src/Tabs.tsx
import { useState } from "react";

interface TabContentProps {
    title: string;
    description: string;
}

const TabContent: React.FC<TabContentProps> = ({ title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-4 m-2">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-custom-db mb-4">{description}</p>
    <button className="bg-custom-lb text-white py-2 px-4 rounded">GET FREE QUOTE</button>
  </div>
);

const SwitchingTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('interior');

  const renderContent = () => {
    switch (activeTab) {
      case 'interior':
        return (
          <div className="flex justify-center">
            <TabContent title="Royal & Elegant 3 BHK" description="Add texture and magnificent touch." />
            <TabContent title="Contemporary & Classy 4 BHK" description="Classic and crisp geometric designs." />
            <TabContent title="Classic Indian Bedroom" description="Bring in traditional and exemplary serenity." />
          </div>
        );
      case 'exterior':
        return (<div className="flex justify-center ">
              <TabContent title="Royal & Elegant 3 BHK" description="Add texture and magnificent touch." />
            <TabContent title="Contemporary & Classy 4 BHK" description="Classic and crisp geometric designs." />
            <TabContent title="Classic Indian Bedroom" description="Bring in traditional and exemplary serenity." />
        </div>
    )
      case 'floorDesign':
        return <div className=" flex justify-center "> 
        <TabContent title="Royal & Elegant 3 BHK" description="Add texture and magnificent touch." />
        <TabContent title="Contemporary & Classy 4 BHK" description="Classic and crisp geometric designs." />
        <TabContent title="Classic Indian Bedroom" description="Bring in traditional and exemplary serenity." />
        </div>;
      default:
        return null;
    }
  };

  return (
    <div className="p-8 bg-custom-bg">
      <div className="flex text-white justify-center gap-20 text-2xl font-bold mb-8">
        <button
          className={`px-4 py-2 mx-2 rounded-full ${activeTab === 'interior' ? 'bg-custom-lb text-white' : 'bg-custom-premium text-black'}`}
          onClick={() => setActiveTab('interior')}
        >
          Interior
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-full ${activeTab === 'exterior' ? 'bg-custom-lb text-white' : 'bg-custom-premium text-black'}`}
          onClick={() => setActiveTab('exterior')}
        >
          Exterior
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-full ${activeTab === 'floorDesign' ? 'bg-custom-lb text-white' : 'bg-custom-premium text-black'}`}
          onClick={() => setActiveTab('floorDesign')}
        >
          Floor Design
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default SwitchingTabs;
