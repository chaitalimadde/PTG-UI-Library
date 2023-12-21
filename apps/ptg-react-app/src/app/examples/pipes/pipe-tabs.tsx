/**
 * @since March 2022
 * @author Ankit Patidar
 * @updatedby Harsha Zalawa
 * @uses Example using 3D highcharts as reusable component.
 *
 */
/**
 * @since April 2022
 * @author Ankit patidar
 * @desc Filter Example using filter reusable component
 */
import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Pipes from './pipes';
import PipeEvent from './pipe-events';
import CodeIcon from '@mui/icons-material/Code';

/* eslint-disable-next-line */
export interface PipeTabsProps {}

export function PipeTabs(props: PipeTabsProps) {
  const { t } = useTranslation();
  const [showPipeCode, setShowPipeCode] = useState(false);
  const [showEventCode, setShowEventCode] = useState(false);
  
  const ShowPipeCode = () => {
    if(!showPipeCode){
      setShowPipeCode(true);
    }
    else{
      setShowPipeCode(false);
    }
  };

  const ShowEventCode = () => {
    if(!showEventCode){
      setShowEventCode(true);
    }
    else{
      setShowEventCode(false);
    }
  };

  return (
    <div className="w-100">
      <Tabs defaultActiveKey="2d">
        <Tab eventKey="2d" title={t('PIPE')}>
          <div className="row">
          <div className='col-11'></div>
          <div className='col-1 mr-5 mt-2'>
            <CodeIcon onClick={ShowPipeCode} fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
          </div>
          <Pipes showPipeCode={showPipeCode}/>
        </Tab>
        <Tab eventKey="3d" title={t('EVENT')}>
          <div className="row">
          <div className='col-11'></div>
          <div className='col-1 mr-5 mt-2'>
            <CodeIcon onClick={ShowEventCode} fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
          </div>
          <PipeEvent showEventCode={showEventCode} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default PipeTabs;
