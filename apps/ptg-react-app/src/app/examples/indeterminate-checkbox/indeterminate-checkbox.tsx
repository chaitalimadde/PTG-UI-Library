/**
 * @since April 2022
 * @author Harsha Zalawa
 * @desc Indeterminate checkbox example using indeterminate checkbox reusable component
 */

import  style from './indeterminate-checkbox.module.scss';
import { useState } from 'react';
import { CHECKBOX_DATA } from '../../mock/mocks';
import { PtgUiIndeterminateCheckbox } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
/* eslint-disable-next-line */
export interface IndeterminateCheckboxProps {}

export function IndeterminateCheckbox(props: IndeterminateCheckboxProps) {
  const { t } = useTranslation();

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
    
  export const CHECKBOX_DATA  = [
    { "id": 1,"name": "IT","parentId": 0 },
    { "id": 2,"name": "Programming","parentId": 1 },
    { "id": 4, "name": "Frontend", "parentId": 2 },
    { "id": 5, "name": "Angular 1", "parentId": 4 },
    { "id": 6, "name": "Angular 2", "parentId": 4 },
    { "id": 7, "name": "ReactJS", "parentId": 4 },
    { "id": 8, "name": "Backend", "parentId": 2 },
    { "id": 9, "name": "C#", "parentId": 8 },
    { "id": 10, "name": "Java", "parentId": 8 },
    { "id": 11, "name": "Python", "parentId": 8 },
    { "id": 12, "name": "Networking", "parentId": 1 },
    { "id": 13, "name": "Internet", "parentId": 12 },
    { "id": 14, "name": "Security", "parentId": 12 }
  ];
  
    import  style from './indeterminate-checkbox.module.scss';
    import { CHECKBOX_DATA } from '../../mock/mocks';
    import { PtgUiIndeterminateCheckbox } from '@ptg-ui/react';
    
    /* eslint-disable-next-line */
    export interface IndeterminateCheckboxProps {}
    
    export function IndeterminateCheckbox(props: IndeterminateCheckboxProps) {
    
    
    export default IndeterminateCheckbox;
  `

  const htmlCode = `
    <PtgUiIndeterminateCheckbox items={CHECKBOX_DATA} />
  `
  return (
    <section>
      <div className="row">
        <div className="col-11 mb-3">
          <h4>{t('INTERMEDIATE_CHECKBOX_TEXT')}</h4>
        </div>
        <div className="col-1">
        <CodeIcon onClick={ShowExampleCode} fontSize="medium" className='show-code-icon'></CodeIcon>
        </div>
      </div>
      {!showCode ? (
        <div className="row">
          <div className="col-10 mb-3">
            <div className={style['checkbox-list']}>
            {/*-----Usable component PtgUiIndeterminateCheckbox for Indeterminate Checkbox-----*/}
            <PtgUiIndeterminateCheckbox items={CHECKBOX_DATA} />
          </div>
          </div>
        </div>
      ): (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
    
    </section>
  );
}

export default IndeterminateCheckbox;
