import React, { useCallback, useState } from "react";
import ProfileFr from "./ProfileFr";
import AboutTab from "./about/AboutTab";
import SettingTab from "./setting/SettingTab";
import PhotosTab from "./photosFr/PhotosTab";
import { contentPage } from "./ProfileConstants";

const FriendProfile = () => {
  const [tab, setTab] = useState(contentPage.ABOUTTAB);
  const showContent = (key: string) => {
    switch (key) {
      case contentPage.ABOUTTAB:
        return <AboutTab />;
      case contentPage.SETTING:
        return <SettingTab />;
      case contentPage.PHOTOS:
        return <PhotosTab />;
      default:
        break;
    }
  };

  const ShowProfile = useCallback(() => {
    return <ProfileFr tab={tab} changeTab={setTab} />;
  }, []);

  return (
    <section>
      <div className="gap2 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row merged20" id="page-contents">
                <ShowProfile />
                {showContent(tab)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendProfile;
