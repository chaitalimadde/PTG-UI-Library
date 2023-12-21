/**
 * @since March 2022
 * @author Harsha Zalawa
 * @uses Example using calendar as reusable component.
 * 
*/

import './date.scss';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import DateExampleOne from './dateExampleOne';
import DateExampleTwo from './dateExampleTwo';
import DateExampleThree from './dateExampleThree';
import DateExampleFour from './dateExampleFour';
import CodeIcon from '@mui/icons-material/Code';


export interface PtgUiDateExampleProps { 
}

export function PtgUiDateExample(props: PtgUiDateExampleProps) {
  const { t } = useTranslation();

  const [showCodeOne, setShowCodeOne] = useState(false);
  const [showCodeTwo, setShowCodeTwo] = useState(false);
  const [showCodeThree, setShowCodeThree] = useState(false);
  const [showCodeFour, setShowCodeFour] = useState(false);
  
  const ShowExampleCode = () => {
    if(!showCodeOne){
      setShowCodeOne(true);
    }
    else{
      setShowCodeOne(false);
    }
  };

  const ShowExampleCodeTwo = () => {
    if(!showCodeTwo){
      setShowCodeTwo(true)
    }else{
      setShowCodeTwo(false)
    }
  };

  const ShowExampleCodeThree = () => {
    if(!showCodeThree){
      setShowCodeThree(true)
    }else{
      setShowCodeThree(false)
    }
  };

  const ShowExampleCodeFour = () => {
    if(!showCodeFour){
      setShowCodeFour(true)
    }else{
      setShowCodeFour(false)
    }
  };

  return (
    <div className="wrapper">
      <section>
        <div className="row">
          <div className="col-9 mb-3">
            <h4>{t('CALENDAR_EXAMPLE_1')}</h4>
          </div>
          <div className='col-3 mr-5'>
            <CodeIcon onClick={() =>ShowExampleCode()} fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
        </div>
        <DateExampleOne showCodeOne={showCodeOne} />
      </section>
      <hr />
      <section>
        <div className="row">
          <div className="col-9 mb-3">
            <h4>{t('CALENDAR_EXAMPLE_2')}</h4>
          </div>

          <div className='col-3 mr-5'>
              <CodeIcon onClick={ShowExampleCodeTwo} fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
        </div>
        <DateExampleTwo showCodeTwo={showCodeTwo} />
      </section>
      <hr />
            <section>
        <div className="row">
          <div className="col-9 mb-3">
          <h4>{t('CALENDAR_EXAMPLE_3')}</h4>
          </div>

          <div className='col-3 mr-5'>
              <CodeIcon onClick={ShowExampleCodeThree} fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
        </div>
        <DateExampleThree showCodeThree={showCodeThree} />
      </section>
      <hr />
      <section className="pb-5">
        <div className="row">
          <div className="col-9 mb-3">
          <h4>{t('CALENDAR_EXAMPLE_4')}</h4>
          </div>

          <div className='col-3 mr-5'>
              <CodeIcon onClick={ShowExampleCodeFour} fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
        </div>
        <DateExampleFour showCodeFour={showCodeFour} />
      </section>
    </div>
  );
}

export default PtgUiDateExample;
