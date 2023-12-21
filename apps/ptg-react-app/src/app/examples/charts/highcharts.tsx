/**
 * @since March 2022
 * @author Ankit Patidar
 * @updatedby Harsha Zalawa
 * @uses Example using 3D highcharts as reusable component.
 * 
*/
import { useState } from 'react';
import PtgUiHCLine from './highcharts/line/line';
import PtgUiHCLineBar from './highcharts/linebar/linebar';
import PtgUiHCSColumn from './highcharts/stackedColumn/stackedColumn';
import { PtgUiColumn, PtgUiPie, PtgUi3dLine, PtgUi3dColumn, PtgUi3dPie } from '@ptg-ui/react';
import { highchartsLineData, highchartsPieData, highchartsColumnData, line3DOptions, column3DOptions, pie3dData } from '@ptg-react-app/mock/mocks';
import { Tabs, Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';


/* eslint-disable-next-line */
export interface HighchartsProps { }

export function Highcharts(props: HighchartsProps) {
  const { t } = useTranslation();

  const [barChartCode, setBarChartCode] = useState(false);
  const [pieChartCode, setPieChartCode] = useState(false);
  const [lineBarChartCode, setLineBarChartCode ] = useState(false);
  const [stackChartCode, setStackChartCode ] = useState(false);
  const [bar3DCode, setBar3DCode] = useState(false);
  const [pie3DCode, setPie3DCode ] = useState(false);
  const [line3DCode, setLine3DCode ] = useState(false);

  const ShowBarChartCode = () => {
    if(!barChartCode){
      setBarChartCode(true);
    }
    else{
      setBarChartCode(false);
    }
  };

  const ShowPieChartCode = () => {
    if(!pieChartCode){
      setPieChartCode(true);
    }
    else{
      setPieChartCode(false);
    }
  };

  
  const ShowLineBarChartCode = () => {
    if(!lineBarChartCode){
      setLineBarChartCode(true);
    }
    else{
      setLineBarChartCode(false);
    }
  };

   
  const ShowStackBarChartCode = () => {
    if(!stackChartCode){
      setStackChartCode(true);
    }
    else{
      setStackChartCode(false);
    }
  };

  const ShowBar3DCode = () => {
    if(!bar3DCode){
      setBar3DCode(true);
    }
    else{
      setBar3DCode(false);
    }
  };

  
  const ShowPie3DCode = () => {
    if(!pie3DCode){
      setPie3DCode(true);
    }
    else{
      setPie3DCode(false);
    }
  };

   
  const ShowLine3DCode = () => {
    if(!line3DCode){
      setLine3DCode(true);
    }
    else{
      setLine3DCode(false);
    }
  };
  
  
  const barChartComponentCode = `
  
  export const highchartsColumnData:any ={
    title:'my Charts',
    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 
      216.4, 194.1, 95.6, 54.4],
    remainingOptions:{
      xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        
    },
    }
  }

    import { PtgUiColumn } from '@ptg-ui/react';
    import { highchartsColumnData } from '@ptg-react-app/mock/mocks';
    import { Tabs, Tab } from 'react-bootstrap';
    
    export interface HighchartsProps { }
    
    export function Highcharts(props: HighchartsProps) {
     
    export default Highcharts;`

  const barChartHtmlCode = `
    <PtgUiColumn {...highchartsColumnData} />
  `

  const pieChartComponentCode = `

    export const highchartsPieData = {
      title:'My charts',
      data: [{ name: 'Chrome', y: 61.41, sliced: true, selected: true }, 
      { name: 'Internet Explorer', y: 11.84 },
      { name: 'Firefox', y: 10.85 }, 
      { name: 'Edge', y: 4.67 }, 
      { name: 'Safari', y: 4.18 }, 
      { name: 'Sogou Explorer', y: 1.64 }, 
      { name: 'Opera', y: 1.6 }, 
      { name: 'QQ', y: 1.2 }, 
      { name: 'Other', y: 2.61 }]
    }
   
    import { PtgUiPie } from '@ptg-ui/react';
    import { highchartsPieData } from '@ptg-react-app/mock/mocks';
    import { Tabs, Tab } from 'react-bootstrap';
    
    export interface HighchartsProps { }
    
    export function Highcharts(props: HighchartsProps) {
     
    export default Highcharts;`

  const pieChartHtmlCode = `
    <PtgUiPie {...highchartsPieData} />
  `

  const lineBarComponentCode = `
 
  export const highchartsLineBarData:any = {
    title:'my Charts',
    subtitle:"Source: WorldClimate.com",
    categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    remainingOptions:{
    series:[{
      name: 'Rainfall',
      type: 'column',
      //yAxis: 1,
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      tooltip: {
          valueSuffix: ' mm'
      }
  
  }, {
      name: 'Temperature',
      type: 'spline',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
      tooltip: {
          valueSuffix: '°C'
      }
  }]
  }
  }
  
  import PtgUiHCLineBar from './highcharts/linebar/linebar';
  import { highchartsLineData } from '@ptg-react-app/mock/mocks';
  import { Tabs, Tab } from 'react-bootstrap';
  
  export interface HighchartsProps { }
  
  export function Highcharts(props: HighchartsProps) {
   
  export default Highcharts;`
  

  const lineBarHtmlCode = `
  <PtgUiHCLineBar {...highchartsLineData} />
  `

  const stackChartComponentCode = `

    export const highchartStackedColumnData:any ={
      title:"Stacked Column",
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
      remainingOptions:{
        series: [{
          name: 'John',
          data: [5, 3, 4, 7, 2]
      }, {
          name: 'Jane',
          data: [2, 2, 3, 2, 1]
      }, {
          name: 'Joe',
          data: [3, 4, 4, 2, 5]
      }]
      }
    }
    
    import PtgUiHCLineBar from './highcharts/linebar/linebar';
    import { highchartsLineData } from '@ptg-react-app/mock/mocks';
    import { Tabs, Tab } from 'react-bootstrap';
    
    export interface HighchartsProps { }
    
    export function Highcharts(props: HighchartsProps) {
     
    export default Highcharts;`

  const stackChartHtmlCode = `
    <PtgUiHCSColumn {...highchartStackedColumnData} />
  `

  const bar3DComponentCode = `

    export const column3DOptions:any = {
      //title:"Languages",
      data: [
        {
          name: 'Year 1800',
          data: [107, 31, 635, 203, 2]
        }
      ],
      categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
    }
    
    import { PtgUi3dColumn } from '@ptg-ui/react';
    import { column3DOptions } from '@ptg-react-app/mock/mocks';
    import { Tabs, Tab } from 'react-bootstrap';
    
    export interface HighchartsProps { }
    
    export function Highcharts(props: HighchartsProps) {
     
    export default Highcharts;`

  const bar3DHtmlCode = `
    <PtgUi3dColumn {...column3DOptions} />
  `

  const pie3DComponentCode = `

    export const pie3dData:any =
    {
      data:[
        ['Firefox', 45.0],
        ['IE', 26.8],
        {
            name: 'Chrome',
            y: 12.8,
            sliced: true,
            selected: true
        },
        ['Safari', 8.5],
        ['Opera', 6.2],
        ['Others', 0.7]
      ],
      title: ''
    }

    import { Tabs, Tab } from 'react-bootstrap';
    import { PtgUi3dPie } from '@ptg-ui/react';
    import { pie3dData } from '@ptg-react-app/mock/mocks'
    
    export interface HighchartsProps { }
    
    export function Highcharts(props: HighchartsProps) {
     
    export default Highcharts;`

  const pie3DHtmlCode = `
    <PtgUi3dPie {...pie3dData} />
  `

  const line3DComponentCode = `

    export const line3DOptions:any = {
      //title:"Languages",
      data: [
        {
          name: 'Year 1800',
          data: [107, 31, 635, 203, 2]
        }
      ],
      categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
    }
  
    import { Tabs, Tab } from 'react-bootstrap';
    import { PtgUi3dLine } from '@ptg-ui/react';
    import { line3DOptions } from '@ptg-react-app/mock/mocks';
    
    export interface HighchartsProps { }
    
    export function Highcharts(props: HighchartsProps) {
     
    export default Highcharts;`

  const line3DHtmlCode = `
     <PtgUi3dLine {...line3DOptions} />
  `

  return (
    <div className="w-77">
      <Tabs defaultActiveKey="2d">
        <Tab eventKey="2d" title="2D graphs">
          <div className='row'>
          <div className="col-11 mb-3">
          <h4 className="m-3">{t('BAR_CHART_TEXT')}</h4>
          </div>

          <div className='col-1 mr-3 mt-3'>
          <CodeIcon onClick={ShowBarChartCode} fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
          </div>
          
          {!barChartCode ? (
            <PtgUiColumn {...highchartsColumnData} />
          ):(
            <ShowCodeComponent componentCode={barChartComponentCode} htmlCode={barChartHtmlCode}/>
          )}
          
          <div className='row'>
          <div className="col-11 mb-3">
          <h4 className="m-3">{t('PIE_CHART_TEXT')}</h4>
          </div>

          <div className='col-1 mr-5 mt-3'>
          <CodeIcon onClick={ShowPieChartCode} fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
          </div>
          
          {!pieChartCode ? (
            <PtgUiPie {...highchartsPieData} />
          ):(
            <ShowCodeComponent componentCode={pieChartComponentCode} htmlCode={pieChartHtmlCode}/>
          )}
          
          <PtgUiHCLine {...highchartsLineData} />

          <div className='row'>
          <div className="col-11 mb-3">
          <h4 className="m-3">{t('LINE_BAR_CHART_TEXT')}</h4>
          </div>

          <div className='col-1 mr-5 mt-3'>
          <CodeIcon onClick={ShowLineBarChartCode} fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
          </div>

          {!lineBarChartCode ? (
            <PtgUiHCLineBar />
          ):(
            <ShowCodeComponent componentCode={lineBarComponentCode} htmlCode={lineBarHtmlCode}/>
          )}

          <div className='row'>
          <div className="col-11 mb-3">
          <h4 className="m-3">{t('STACKED_CHART')}</h4>
          </div>

          <div className='col-1 mr-5 mt-3'>
          <CodeIcon onClick={ShowStackBarChartCode} fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
          </div>
          
          {!stackChartCode ? (
            <PtgUiHCSColumn />
          ):(
            <ShowCodeComponent componentCode={stackChartComponentCode} htmlCode={stackChartHtmlCode}/>
          )}
          

        </Tab>
        <Tab eventKey="3d" title="3D Graphs">
          <div className='row'>
          <div className="col-11 mb-3">
          <h4 className="m-3">{t('BAR_CHART_TEXT')}</h4>
          </div>

          <div className='col-1 mr-5 mt-3'>
          <CodeIcon onClick={ShowBar3DCode} fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
          </div>
          {!bar3DCode ? (
            <PtgUi3dColumn {...column3DOptions} />
          ):(
            <ShowCodeComponent componentCode={bar3DComponentCode} htmlCode={bar3DHtmlCode}/>
          )}
          
          <div className='row'>
          <div className="col-11 mb-3">
          <h4 className="m-3">{t('PIE_CHART_TEXT')}</h4>
          </div>

          <div className='col-1 mr-5 mt-3'>
          <CodeIcon onClick={ShowPie3DCode} fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
          </div>
          {!pie3DCode ? (
            <PtgUi3dPie {...pie3dData} />
          ):(
            <ShowCodeComponent componentCode={pie3DComponentCode} htmlCode={pie3DHtmlCode}/>
          )}
          
          <div className='row'>
          <div className="col-11 mb-3">
          <h4 className="m-3">{t('LINE_CHART_TEXT')}</h4>
          </div>

          <div className='col-1 mr-5 mt-3'>
          <CodeIcon onClick={ShowLine3DCode} fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
          </div>
          {!line3DCode ? (
            <PtgUi3dLine {...line3DOptions} />
          ):(
            <ShowCodeComponent componentCode={line3DComponentCode} htmlCode={line3DHtmlCode}/>
          )}
         
        </Tab>
      </Tabs>
    </div>
  );
}

export default Highcharts;
