/**
 * @since March 2022
 * @author Harsha Zalawa
 * @uses Example showing how to use the role based method.
 *
 */
import './role-based.scss';
import { useState } from 'react';
import { PtgUiButton } from '@ptg-ui/react';
import { authClass } from '../../auth/services/auth.service';
import { Role } from './role';
import { useTranslation } from 'react-i18next';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';

/* eslint-disable-next-line */
export interface RoleBasedProps {}

export function RoleBased(props: RoleBasedProps) {
  const { t } = useTranslation();
  //const [flag, setFlag] = useState(authClass.getRole() == 'admin' ? true : false);
  const [showCode, setShowCode] = useState(false);
  
  const ShowExampleCode = () => {
    if(!showCode){
      setShowCode(true);
    }
    else{
      setShowCode(false);
    }
  };

  const flag = Role();
  const componentCode = `
    import { useState } from 'react';
    import { PtgUiButton } from '@ptg-ui/react';
    import { authClass } from '../../auth/services/auth.service';
    import { Role } from './role';
    
    /* eslint-disable-next-line */
    export interface RoleBasedProps {}
    
    export function RoleBased(props: RoleBasedProps) {
      const flag = Role();
      export default RoleBased;`

  const htmlCode = `
  {flag && (
    <>
      <PtgUiButton className="w-100">
        <i className="fa-solid fa-user-plus m-2"></i>
        ADD_USER_TEXT
      </PtgUiButton>
  
      <PtgUiButton className="w-100">
        <i className="fa-solid fa-user-pen m-2"></i>
        EDIT_USER_TEXT
      </PtgUiButton>
    </>
  )}
      <PtgUiButton className="w-100">
        <i className="fa-solid fa-users m-2"></i>
        VIEW_USER_TEXT
      </PtgUiButton> `

  return (
    <>
    

       <div className="row">
       <div className="col-11 mb-3">
         <h4 className="mb-5">{t('ROLE_BASED_EXAMPLE_TEXT')}</h4>
       </div>
       <div className="col-1">
         <CodeIcon onClick={ShowExampleCode} fontSize="medium" className='show-code-icon'></CodeIcon>
       </div>
      </div>
      
      {!showCode ? (
      <>
      {flag && (
        <>
          <div className="row align-items-center mb-2">
            <div className=" col-lg-4 col-md-6 col-sm-6 col-xs-6">
              <h6 className="mt-2">
                {t('BUTTON_VISIBLE_FOR_ADMIN_ROLE_TEXT')}
              </h6>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
              <PtgUiButton className="w-100">
                <i className="fa-solid fa-user-plus m-2"></i>
                {t('ADD_USER_TEXT')}
              </PtgUiButton>
            </div>
          </div>
          <div className="row align-items-center mb-2">
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
              <h6>{t('BUTTON_VISIBLE_FOR_ADMIN_ROLE_TEXT')}</h6>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
              <PtgUiButton className="w-100">
                <i className="fa-solid fa-user-pen m-2"></i>
                {t('EDIT_USER_TEXT')}
              </PtgUiButton>
            </div>
          </div>
        </>
      )}
      <div className="row align-items-center mb-2">
        <div className=" col-lg-4 col-md-6 col-sm-6 col-xs-6">
          <h6>{t('BUTTON_VISIBLE_FOR_EVERYONE_TEXT')}</h6>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
          <PtgUiButton className="w-100">
            <i className="fa-solid fa-users m-2"></i>
            {t('VIEW_USER_TEXT')}
          </PtgUiButton>
        </div>
      </div>
      </>
    ): (
      <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
    )}
     
    </>
  );
}

export default RoleBased;
