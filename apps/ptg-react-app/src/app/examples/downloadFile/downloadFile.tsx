/**
 * @since April 2022
 * @author Ankit Patidar
 * @uses Example using download as reusable component.
 *
*/

import { useState } from 'react';
import PtgUiDownload from '@ptg-ui/libs/ptg-ui-react-lib/src/lib/download-file/downloadFile';
import { downloadFileData } from '../../mock/mocks';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';

const DownloadFileExample = () => {

  const [showCode, setShowCode] = useState(false);

  const ShowExampleCode = () => {
    if(!showCode){
      setShowCode(true);
    }
    else{
      setShowCode(false);
    }
  };

  const componentCode = `
  export const downloadFileData:any = {
    columns:['SN', 'NAME', 'DESIGNATION', 'DEPARTMENT'],
    data: [
      [1, 'Astik', 'Manager', 'Engineering and MBA'],
      [2, 'Yogita', 'QA', 'Testing'],
      [3, 'Rajesh', 'Manager', 'Management'],
      [4, 'Swapnil', 'Developer', 'Development'],
      [5, 'Anmol', 'Consultant', 'HR'],
      [6, 'Mansi', 'Software Developer', 'Engineering'],
      [7, 'Astik', 'Manager', 'Engineering and MBA'],
      [8, 'Yogita', 'QA', 'Testing'],
      [9, 'Rajesh', 'Manager', 'Management'],
      [10, 'Yogita', 'QA', 'Testing'],
    ]
  }

  import PtgUiDownload from '@ptg-ui/libs/ptg-ui-react-lib/src/lib/download-file/downloadFile';
  import { downloadFileData } from '../../mock/mocks';

  export default DownloadFileExample;
  `
  const htmlCode = `
    <PtgUiDownload
      columns={downloadFileData.columns}
      dataToDownload={downloadFileData.data}
    />
  `
    return (
    <div className='row'>
      <div className="col-11">
        <h5 className="font-weight-bold">File Download</h5>
      </div>
      <div className='col-1 mr-5 mb-3'>
        <CodeIcon onClick={ShowExampleCode} fontSize="medium" className='show-code-icon'></CodeIcon>
      </div>

      {!showCode ? (
        <PtgUiDownload
        columns={downloadFileData.columns}
        dataToDownload={downloadFileData.data}
        />
      ):(
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
    </div>
  );
};

export default DownloadFileExample;
