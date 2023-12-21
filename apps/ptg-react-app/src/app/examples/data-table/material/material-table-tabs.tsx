/**
 * @since March 2022
 * @author Harsha Zalawa
 * @uses Example using 3D highcharts as reusable component.
 * 
*/

import { Tabs, Tab } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import PtgUiMaterialTableExample from './material-table';
import PtgUiMaterialTableButtonExample from './material-table-button';



/* eslint-disable-next-line */
export interface HighchartsProps { }

export function Highcharts(props: HighchartsProps) {
  const { t } = useTranslation();
  return (
    <div className="w-100">
      <Tabs defaultActiveKey="2d">
        <Tab eventKey="2d" title={t('REUSABLE_MATERIAL_TABLE')}>
                 <PtgUiMaterialTableExample/>
           </Tab>
        <Tab eventKey="3d" title={t('MATERIAL_TABLE_WITH_ACTION_BTN')}>
            <PtgUiMaterialTableButtonExample />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Highcharts;
