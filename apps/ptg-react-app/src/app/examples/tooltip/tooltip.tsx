/**
 * @since December 2023
 * @author pooja sawai
 * @uses Example using tooltip as reusable component.
 *
 */

import { useState } from 'react';
import { PtgTooltip } from '@ptg-ui/ptg-ui-web-components-react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';

const TooltipExample = () => {
  const [showCode, setShowCode] = useState(false);

  const ShowExampleCode = () => {
    if (!showCode) {
      setShowCode(true);
    } else {
      setShowCode(false);
    }
  };

  const componentCode = `
  import PtgModal from '@ptg-ui/ptg-ui-web-components-react';

  export default TooltipExample;
  `;

  const cssCode = `
  import '@ptg-ui-web-components/src/global/global.css'`;

  const htmlCode = `
  <PtgTooltip
  text="A Tooltip To The Top"
  tooltip-text="Top Tooltip"
  tooltip-alignment="top"
  background-color="#000"
></PtgTooltip>

<PtgTooltip
  text="A Tooltip To The Bottom"
  tooltip-text="Bottom Tooltip"
  tooltip-alignment="bottom"
  background-color="#000"
></PtgTooltip>

<PtgTooltip
  text="A Tooltip To The Left"
  tooltip-text="Left Tooltip"
  tooltip-alignment="left"
  background-color="#000"
></PtgTooltip>

<PtgTooltip
  text="A Tooltip To The Right"
  tooltip-text="Right Tooltip"
  tooltip-alignment="right"
  background-color="#000"
></PtgTooltip>`;
  return (
    <div className="row">
      <div className="col-11">
        <h5 className="font-weight-bold">Tooltip Example</h5>
      </div>
      <div className="col-1 mr-5 mb-3">
        <CodeIcon
          onClick={ShowExampleCode}
          fontSize="medium"
          className="show-code-icon"
        ></CodeIcon>
      </div>

      {showCode && (
        <ShowCodeComponent
          componentCode={componentCode}
          htmlCode={htmlCode}
          cssCode={cssCode}
        />
      )}
      <PtgTooltip
        text="A Tooltip To The Top"
        tooltip-text="Top Tooltip"
        tooltip-alignment="top"
        background-color="#000"
      ></PtgTooltip>
      <hr />
      <PtgTooltip
        text="A Tooltip To The Bottom"
        tooltip-text="Bottom Tooltip"
        tooltip-alignment="bottom"
        background-color="#000"
      ></PtgTooltip>
      <hr />
      <PtgTooltip
        text="A Tooltip To The Left"
        tooltip-text="Left Tooltip"
        tooltip-alignment="left"
        background-color="#000"
      ></PtgTooltip>
      <hr />
      <PtgTooltip
        text="A Tooltip To The Right"
        tooltip-text="Right Tooltip"
        tooltip-alignment="right"
        background-color="#000"
      ></PtgTooltip>
    </div>
  );
};

export default TooltipExample;
