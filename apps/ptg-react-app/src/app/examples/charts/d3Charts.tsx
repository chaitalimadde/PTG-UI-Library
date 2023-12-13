/**
 * @since March 2022
 * @author Ankit Patidar
 * @uses Example using 3D charts as reusable component.
 * 
*/
import {useState, useEffect} from  'react'
import { PtgUiD3Line, PtgUiD3Bar, PtgUiD3Pie, PtguseFetch } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
import { d3BarData, d3LineData, d3PieData } from '@ptg-react-app/mock/mocks';
import { Container, Row } from 'react-bootstrap';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';

/* eslint-disable-next-line */

export interface PtgUiD3BarProps {
  data?:[],
}
export interface D3ChartsProps { }

export function D3Charts(props: D3ChartsProps) {
  const [apiDataBarChartData, setapiDataBarChartData] = useState<PtgUiD3BarProps>();
  const [apiDataPieChartData, setapiDataPieChartData] = useState<PtgUiD3BarProps>();
  const [apiDataLineChartData, setapiDataLineChartData] = useState<PtgUiD3BarProps>();
  const {data:apiDataBarChart} = PtguseFetch('http://localhost:1337/api/d3-bar-lists') as any

  const fetchApiBarChart = ()=>{
    const data = apiDataBarChart.map(item=>{
      return{
        id:item.id, 
        Framework: item.attributes.Framework,
        Stars:item.attributes.Stars,
        Released:item.attributes.Released,
        color:item.attributes.color,
      }
     })
     setapiDataBarChartData({
      ...apiDataBarChartData, 
      data:data,
     })
    }
    const {data:apiDataPieChart} = PtguseFetch('http://localhost:1337/api/d3-pie-lists') as any
   

    const fetchApiPieChart = ()=>{
      const data = apiDataPieChart.map(item=>{
        return{
          id:item.id, 
          Framework: item.attributes.Framework,
          Stars:item.attributes.Stars,
          Released:item.attributes.Released,
          color:item.attributes.color,
        }
       })
       
       setapiDataPieChartData(
        {
          ...apiDataPieChartData,
          data:data
      })
      }
      const {data:apiDataLineChart} = PtguseFetch('http://localhost:1337/api/d3-line-lists') as any
    const fetchApiLineChart = ()=>{
      const data = apiDataLineChart.map(item=>{
        return{
          id:item.id, 
          date: new Date(item.attributes.date),
          value:item.attributes.value,
        }
       })
       
       setapiDataLineChartData({
        ...d3LineData,
        data
       })
      }
  useEffect(()=>{
    fetchApiBarChart()
  },[apiDataBarChart])
  useEffect(()=>{
    fetchApiPieChart()
  },[apiDataPieChart])
  useEffect(()=>{
    fetchApiLineChart()
  },[apiDataLineChart])
  const { t } = useTranslation();
  const [barChartCode, setBarChartCode] = useState(false);
  const [pieChartCode, setPieChartCode] = useState(false);
  const [lineChartCode, setLineChartCode] = useState(false);

  const ShowExampleCode = () => {
    if(!barChartCode){
      setBarChartCode(true);
    }
    else{
      setBarChartCode(false);
    }
  };

  const ShowExampleCodeTwo = () => {
    if(!pieChartCode){
      setPieChartCode(true)
    }else{
      setPieChartCode(false)
    }
  };

  const ShowExampleCodeThree = () => {
    if(!lineChartCode){
      setLineChartCode(true)
    }else{
      setLineChartCode(false)
    }
  };

  const componentCodeBarChart = `
  export const d3BarData:any = {
    height:600,
    width:800,
    title:"My Charts",
    source:'Trending languages',
    x_title:'Languages',
    y_title:'Numbers',
    data: [
      { Framework: 'Vuee', Stars: '100000', Released: '2014', color: '#454545' },
      { Framework: 'React', Stars: '120793', Released: '2013', color: 'blue' },
      { Framework: 'Angular', Stars: '92342', Released: '2016', color: 'green' },
      { Framework: 'Backbone', Stars: '67647', Released: '2010',color: 'orange',},
      { Framework: 'Ember', Stars: '121471', Released: '2011', color: 'pink' },
    ],
  }
 
  import {  PtgUiD3Bar } from '@ptg-ui/react';
  import { d3BarData } from '@ptg-react-app/mock/mocks';

  export interface D3ChartsProps { }
  
  export function D3Charts(props: D3ChartsProps) {
   
  
  export default D3Charts;
  
  `
  const htmlCodeBarChart = `
    <PtgUiD3Bar {...d3BarData} />
  `

  const componentCodePieChart = `
  
  export const d3PieData:any= {
    height:600,
      width:800,
      innerRadius:0,
      outerRadius:150,
      data: [
        { Framework: 'Vuee', Stars: '100000', Released: '2014', color: '#454545' },
        { Framework: 'React', Stars: '120793', Released: '2013', color: 'blue' },
        { Framework: 'Angular', Stars: '92342', Released: '2016', color: 'green' },
        { Framework: 'Backbone', Stars: '67647', Released: '2010',color: 'orange' },
        { Framework: 'Ember', Stars: '121471', Released: '2011', color: 'pink' },
      ],
    }

  import {PtgUiD3Pie } from '@ptg-ui/react';
  import { d3PieData } from '@ptg-react-app/mock/mocks';

  export interface D3ChartsProps { }
  export function D3Charts(props: D3ChartsProps) {
   
  
  export default D3Charts;

`

  const htmlCodePieChart = `
    <PtgUiD3Pie {...d3PieData} />
  `

  const componentCodeLineChart = `

  export const d3LineData:any =
  {data:[
  { date:new Date("2022-03-01"), value:130 },
  { date:new Date("2022-02-15"), value:300 },
  { date: new Date("2022-02-01"), value:1000 },
  ]};

  import { PtgUiD3Line } from '@ptg-ui/react';
  import { d3LineData } from '@ptg-react-app/mock/mocks';

  export interface D3ChartsProps { }
  export function D3Charts(props: D3ChartsProps) {
   
  
  export default D3Charts;`

  const htmlCodeLineChart = `
    <PtgUiD3Line {...d3LineData} />
  `


  return (
    <Container fluid>
        <Row>
          <div className="col-11 mb-3">
            <h4>{t('BAR_CHART_TEXT')}</h4>
          </div>
         
          <div className='col-1 mr-5'>
            <CodeIcon onClick={ShowExampleCode} fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
          
          {!barChartCode ? 
           (apiDataBarChartData && apiDataBarChartData?.data?.length ? <PtgUiD3Bar {...apiDataBarChartData} /> :null)
          : (
           <ShowCodeComponent componentCode={componentCodeBarChart} htmlCode={htmlCodeBarChart} />
          )}
        </Row>

        <Row>
        <div className="col-11 mb-3">
          <h4>{t('PIE_CHART_TEXT')}</h4>
        </div>
        <div className='col-1 mr-5'>
          <CodeIcon onClick={ShowExampleCodeTwo} fontSize="medium" className='show-code-icon'></CodeIcon>
        </div>

        {!pieChartCode ? (
          apiDataPieChartData && apiDataPieChartData?.data?.length ? <PtgUiD3Pie {...apiDataPieChartData} /> : null
        ): (
          <ShowCodeComponent componentCode={componentCodePieChart} htmlCode={htmlCodePieChart} />
        )}
        
        </Row>
        <Row>
        <div className="col-11 mb-3">
          <h4>{t('LINE_CHART_TEXT')}</h4>
        </div>

        <div className='col-1 mr-5'>
          <CodeIcon onClick={ShowExampleCodeThree} fontSize="medium" className='show-code-icon'></CodeIcon>
        </div>
        {!lineChartCode ? (
          apiDataLineChartData && apiDataLineChartData?.data?.length ? <PtgUiD3Line {...apiDataLineChartData} /> :null
        ): (
          <ShowCodeComponent componentCode={componentCodeLineChart} htmlCode={htmlCodeLineChart} /> 
        )}
         
        </Row>
      </Container>
  );
}

export default D3Charts;
