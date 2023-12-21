/**
 * @since April 2022
 * @author Harsha Zalawa
 * @uses Example using React Data Grid as reusable component.
 * 
*/
import '../data-table.scss';
import { GRID_Data } from '@ptg-react-app/mock/grid-data';
import MaterialTable from "@material-table/core";
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import { ExportCsv, ExportPdf } from '@material-table/exporters';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { PtgUiButton } from '@ptg-ui/react';
import { authClass } from '@ptg-react-app/auth/services/auth.service';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';

/* eslint-disable-next-line */
export interface PtgUiMaterialTableButtonExampleProps {
}

export function PtgUiMaterialTableButtonExample(props: PtgUiMaterialTableButtonExampleProps) {
  const { t } = useTranslation();
  const [gridData, setGridData] = useState([]);
  const [showCode, setShowCode] = useState(false);
  
  const ShowExampleCode = () => {
    if(!showCode){
      setShowCode(true);
    }
    else{
      setShowCode(false);
    }
  };
  useEffect(() => {
    authClass
      .gridData()
      .then((res: any) => {
        setGridData(res.data);
      })
      .catch((err: any) => console.log(err));
  }, []);
  const Columns:any = [
    { title: "Athlete",field: "athlete"},
    { title: "Age",field: "age",filtering: false },
    { title: "Country" ,field: "country",filtering: false},
    { title: "Year",field: "year",filtering: false },
    { title: "Date",field: "date" ,filtering: false},
    { title: "Sport",field: "sport" ,filtering: false},
    { title: "Gold",field: "gold" ,filtering: false},
    { title: "Silver",field: "silver" ,filtering: false},
    { title: "Total",field: "total" ,filtering: false},
  ]; 

  const componentCode = `
import { GRID_Data } from '@ptg-react-app/mock/grid-data';
import MaterialTable from "@material-table/core";
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import { ExportCsv, ExportPdf } from '@material-table/exporters';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { PtgUiButton } from '@ptg-ui/react';
import { authClass } from '@ptg-react-app/auth/services/auth.service';
import CodeIcon from '@mui/icons-material/Code';

/* eslint-disable-next-line */
export interface PtgUiMaterialTableButtonExampleProps {
}

export function PtgUiMaterialTableButtonExample(props: PtgUiMaterialTableButtonExampleProps) {
  const { t } = useTranslation();
  const [gridData, setGridData] = useState([]);
  useEffect(() => {
    authClass
      .gridData()
      .then((res: any) => {
        setGridData(res.data);
      })
      .catch((err: any) => console.log(err));
  }, []);
  const Columns:any = [
    { title: "Athlete",field: "athlete"},
    { title: "Age",field: "age",filtering: false },
    { title: "Country" ,field: "country",filtering: false},
    { title: "Year",field: "year",filtering: false },
    { title: "Date",field: "date" ,filtering: false},
    { title: "Sport",field: "sport" ,filtering: false},
    { title: "Gold",field: "gold" ,filtering: false},
    { title: "Silver",field: "silver" ,filtering: false},
    { title: "Total",field: "total" ,filtering: false},
  ]; 
 export default PtgUiMaterialTableButtonExample;
`

const htmlCode = `
<MaterialTable
columns={Columns}
data={gridData}
title="Material Table"
actions={[
    {
      icon: () =>  <PtgUiButton
                    className="btn-sm">
                    {t('CLICK_HERE')}
                    </PtgUiButton>,
          tooltip: 'Click Here',
          onClick: (event: any, rowData: any) => {
          console.log(event, rowData);
          alert("Button Clicked");
      }
    }
  ]}
/>
`
  return (
    <div className="table-responsive">
    <div className='row'>
    <div className = 'col-11'></div>
    <div className='col-1 mr-5 mt-2'>
      <CodeIcon onClick={ShowExampleCode} fontSize="medium" className='show-code-icon'></CodeIcon>
    </div>
    </div>

    {!showCode ? (
       <MaterialTable
       columns={Columns}
       data={gridData}
       title="Material Table"
       // options={{
       //   exportMenu: [{
       //     label: 'Export PDF',
       //     exportFunc: (cols: any, datas: any) => ExportPdf(cols, datas, 'pdfFileName')
       //   }, {
       //     label: 'Export CSV',
       //     exportFunc: (cols: any, datas: any) => ExportCsv(cols, datas, 'csvFileName')
       //   }],
       //   actionsColumnIndex: -1
       // }}
       actions={[
           {
             icon: () =>  <PtgUiButton
                           className="btn-sm">
                           {t('CLICK_HERE')}
                           </PtgUiButton>,
                 tooltip: 'Click Here',
                 onClick: (event: any, rowData: any) => {
                 console.log(event, rowData);
                 alert("Button Clicked");
             }
           }
         ]}
       />
    ):(
      <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
    )}
  </div>
  );
}

export default PtgUiMaterialTableButtonExample;
