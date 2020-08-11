import React from "react";
import { FormattedMessage } from "react-intl";

import { SubLevelComponent } from "./SubLevelComponent";

function RootLevelComponent(props) {
  return (
    <div>
      <FormattedMessage id="1" defaultMessage="root level component" />
      <SubLevelComponent />
    </div>
  );
}

export { RootLevelComponent };
