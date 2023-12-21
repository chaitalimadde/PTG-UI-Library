/**
 * @since March 2022
 * @author Harsha Zalawa
 * @desc Example using multi select checkbox as reusable component.
 */

import './select.scss';
import { useState } from 'react';
import { CITY_LIST } from '../../mock/mocks';
import { PtgUiMultiSelectbox } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
/* eslint-disable-next-line */
export interface MultiSelectCheckboxProps {}

export function MultiSelectCheckbox(props: MultiSelectCheckboxProps) {
  /*-----onSelect method -----*/
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

  const onSelect: any = (event: any) => {
    console.log('Select Values,onSelect', event);
  };


  const componentCode = `

  export const CITY_LIST = [
    // { value: '', label: 'Select' },
    { value: 'pune', label: 'Pune', name:'city' },
    { value: 'indore', label: 'Indore',name:'city' },
    { value: 'gujarat', label: 'Gujarat',name:'city' },
    { value: 'Karnataka', label: 'Karnataka',name:'city' },
    { value: 'goa', label: 'Goa',name:'city' },
  ];

    import { CITY_LIST } from '../../mock/mocks';
    import { PtgUiMultiSelectbox } from '@ptg-ui/react';
    import CodeIcon from '@mui/icons-material/Code';
    /* eslint-disable-next-line */
    export interface MultiSelectCheckboxProps {}
    
    export function MultiSelectCheckbox(props: MultiSelectCheckboxProps) {
    
      const onSelect: any = (event: any) => {
        console.log('Select Values,onSelect', event);
      };
     export default MultiSelectCheckbox;`

  const htmlCode = `
  
  // Single Select Box
    <PtgUiMultiSelectbox
      name="city"
      list={CITY_LIST}
      onSelect={onSelect}
      showCheckbox={true}
      singleSelect={true}
      placeholder={t('SELECT_PLACEHOLDER')}
    />

  // Multi Select Box
    <PtgUiMultiSelectbox
      name="city"
      list={CITY_LIST}
      onSelect={onSelect}
      showCheckbox={true}
      singleSelect={false}
      placeholder={t('SELECT_PLACEHOLDER')}
    /> `
  return (
    <>
      <div className="row">
        <div className="col-11 mb-3">
          <h4>{t('SINGLE_SELECT_TEXT')}</h4>
        </div>
        <div className="col-1">
          <CodeIcon onClick={ShowExampleCode} fontSize="medium" className='show-code-icon'></CodeIcon>
        </div>
      </div>
    
  
    {/*-----Usable component PtgUiMultiSelectbox single select-----*/}
    {!showCode ? (
      <>
      <div className="col-lg-4 mb-3 col-sm-6 col-xs-12">
        <PtgUiMultiSelectbox
          name="city"
          list={CITY_LIST}
          onSelect={onSelect}
          showCheckbox={true}
          singleSelect={true}
          placeholder={t('SELECT_PLACEHOLDER')}/>
      </div>

     <hr />
     <section>
      <div className="col-11 mb-3">
        <h4>{t('MULTI_SELECT_TEXT')}</h4>
      </div>
       
    {/*-----Usable component PtgUiMultiSelectbox multi select-----*/}
    <div className="col-lg-4 mb-3 col-sm-6 col-xs-12 multi-select">
      <PtgUiMultiSelectbox
        name="city"
        list={CITY_LIST}
        onSelect={onSelect}
        showCheckbox={true}
        singleSelect={false}
        placeholder={t('SELECT_PLACEHOLDER')}
      />
    </div>
    </section>
    </>
    ):(
      <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
    )}
    </>
  );
}

export default MultiSelectCheckbox;
