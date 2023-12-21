/**
 * @since April 2022
 * @author Harsha Zalawa 
 * @desc Drag and Drop example using react-beautiful-dnd library
 */

import './drag-n-drop.scss';
import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import DragExampleOne from './dragExampleOne';
import DragExampleTwo from './dragExampleTwo';
import DragExampleFour from './dragExampleFour';
import DragExampleThree from './dragExampleThree/dragExampleThree';
import { useTranslation } from 'react-i18next';

/* eslint-disable-next-line */
export interface DragNDropProps { }

export function DragNDrop(props: DragNDropProps) {
  const { t } = useTranslation();
  
  return (
    <div className="w-100">
      <Tabs defaultActiveKey="example1" className="draganddropmain w-100">
        <Tab eventKey="example1" title={t('DRAG_DROP_EX_1')}>
        <div className="row">
          <div className="col-11 mb-3">
            <h4 className="m-3">{t('DRAG_DROP_EX_1')}</h4>
          </div>
        </div>
        <DragExampleOne />
        
        </Tab>
        <Tab eventKey="example2" title={t('DRAG_DROP_EX_2')}>
        <div className="row">
          <div className="col-11 mb-3">
            <h4 className="m-3">{t('DRAG_DROP_EX_2')}</h4>
          </div>
        </div>
          <DragExampleTwo />
        </Tab>
        <Tab eventKey="example3" title={t('DRAG_DROP_EX_3')}>
        <div className="row">
          <div className="col-11 mb-3">
            <h4 className="m-3">{t('DRAG_DROP_EX_3')}</h4>
          </div>
        </div>
          <DragExampleThree />
        </Tab>
        <Tab eventKey="example4" title={t('DRAG_DROP_EX_4')}>
        <div className="row">
          <div className="col-11 mb-3">
            <h4 className="m-3">{t('DRAG_DROP_EX_4')}</h4>
          </div>
        </div>
          <DragExampleFour />
        </Tab>
      </Tabs>
    </div>
  );
}

export default DragNDrop;
