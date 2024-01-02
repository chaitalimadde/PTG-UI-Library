/**
 * @since December 2023
 * @author Nimish Jain
 * @uses Example using dialog/modal as reusable component.
 *
*/

import { useState } from 'react';
import { PtgModal } from '@ptg-ui/ptg-ui-web-components-react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';

const DialogExample = () => {

  const [showCode, setShowCode] = useState(false);

  const ShowExampleCode = () => {
    if(!showCode) {
      setShowCode(true);
    } else {
      setShowCode(false);
    }
  };

  const modalClosed = (event) => {
    console.log('Modal Closed successfully', event.returnValue);
  }

  const componentCode = `
  import PtgModal from '@ptg-ui/ptg-ui-web-components-react';

  const modalClosed = (event) => {
    console.log('Modal Closed successfully', event.returnValue);
  }

  const confirmClicked = (event) => {
    console.log('Confirm Button Clicked', event.returnValue);
  }

  export default DialogExample;
  `

  const cssCode = `
  import '@ptg-ui-web-components/src/global/global.css'`;

  const htmlCode = `
    <PtgModal
      modal-size='lg' // 'md' || 'sm'
      confirm-button-name="Okay"
      btn-name='Open Modal' // Button name to open the dialog
      modal-header-name="Header Name Here"
      show-header='false' // true/false to display/hide the header of dialog
      show-footer='false' // true/false to display/hide the footer of dialog
      onModalClose={modalClosed} // Event name: onModalClose
      onConfirmClose={confirmClicked}> // Event name: onConfirmClose
      <div slot="body-block"> // Slot
        <h2>React Slot for Body</h2>
      </div>
    </PtgModal>`
    return (
    <div className='row'>
      <div className="col-11">
        <h5 className="font-weight-bold">Dialog/Modal</h5>
      </div>
      <div className='col-1 mr-5 mb-3'>
        <CodeIcon onClick={ShowExampleCode} fontSize="medium" className='show-code-icon'></CodeIcon>
      </div>

      {showCode && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} cssCode={cssCode}/>
      )}
        <PtgModal
          modal-size='lg' modal-header-name="Header Name Here"
          confirm-button-name="Okay" onOnModalClose={modalClosed}>
          <div slot="body-block">
            <h2>React Slot for Body</h2>
          </div>
        </PtgModal>
    </div>
  );
};

export default DialogExample;
