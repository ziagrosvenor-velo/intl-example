import React from "react";
import { FormattedMessage } from "react-intl";

function SubLevelComponent(props) {
  return (
    <div>
      <FormattedMessage id="2" defaultMessage="sub level component" />
    </div>
  );
}

export { SubLevelComponent };
