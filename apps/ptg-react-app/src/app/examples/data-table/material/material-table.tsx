/**
 * @since March 2022
 * @author Harsha Zalawa
 * @uses Example using React Data Grid as reusable component.
 * 
*/
import '../data-table.scss';
import { PtgUiMaterialTable } from '@ptg-ui/react';
import { GRID_Data } from '@ptg-react-app/mock/grid-data';
import { useEffect, useState } from 'react';
import { authClass } from '@ptg-react-app/auth/services/auth.service';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
/* eslint-disable-next-line */
export interface PtgUiMaterialTableExampleProps {
}

export function PtgUiMaterialTableExample(props: PtgUiMaterialTableExampleProps) {
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
  const Columns = [
    { title: "Athlete",field: "athlete" ,width:"20%"},
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
 
import { PtgUiMaterialTable } from '@ptg-ui/react';
import { GRID_Data } from '@ptg-react-app/mock/grid-data';
import { useEffect, useState } from 'react';
import { authClass } from '@ptg-react-app/auth/services/auth.service';
import CodeIcon from '@mui/icons-material/Code';
/* eslint-disable-next-line */
export interface PtgUiMaterialTableExampleProps {
}

export function PtgUiMaterialTableExample(props: PtgUiMaterialTableExampleProps) {
const [gridData, setGridData] = useState([]);
useEffect(() => {
  authClass
    .gridData()
    .then((res: any) => {
      setGridData(res.data);
    })
    .catch((err: any) => console.log(err));
}, []);
  const Columns = [
    { title: "Athlete",field: "athlete" ,width:"20%"},
    { title: "Age",field: "age",filtering: false },
    { title: "Country" ,field: "country",filtering: false},
    { title: "Year",field: "year",filtering: false },
    { title: "Date",field: "date" ,filtering: false},
    { title: "Sport",field: "sport" ,filtering: false},
    { title: "Gold",field: "gold" ,filtering: false},
    { title: "Silver",field: "silver" ,filtering: false},
    { title: "Total",field: "total" ,filtering: false},
  ];
export default PtgUiMaterialTableExample;`

const htmlCode = `
  <PtgUiMaterialTable 
  data ={gridData}
  columns= {Columns}  
  filtering= {true}
  paging= {true}
  paginationPosition={'bottom'}
  grouping={true}
  />
`
  
  return (
    <div>
    <div className='row'>
    <div className = 'col-11'></div>
    <div className='col-1 mr-5 mt-2'>
      <CodeIcon onClick={ShowExampleCode} fontSize="medium" className='show-code-icon'></CodeIcon>
    </div>
    </div>
    
    {!showCode ? (
      <div className=" table-responsive">
      <PtgUiMaterialTable 
        data ={gridData}
        columns= {Columns}  
        filtering= {true}
        paging= {true}
        paginationPosition={'bottom'}
        grouping={true}/>
      </div>
    ): (
      <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
    )}
    </div>
  );
}

export default PtgUiMaterialTableExample;
