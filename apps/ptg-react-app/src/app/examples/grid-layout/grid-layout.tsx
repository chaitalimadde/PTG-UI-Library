/**
 * @since April 2022
 * @author Harsha Zalawa
 * @desc Grid Layout Example
 */

import './grid-layout.scss';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';

/* eslint-disable-next-line */
export interface GridLayoutProps {}

export function GridLayout(props: GridLayoutProps) {
    const { t } = useTranslation();

  return (
   <>
    <div className="row">
        <div className="col-md-11 text-center mb-2 mt-1">
            <h2 className="text-black">{t('GRID_LAYOUT_EXAMPLE_HEADING')}</h2>
        </div>
    </div>

       
        <section className="bg-dark-primary">
        <div className="container">
           
            <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4">
                    <div className="card">
                        <img src="assets/images/img1.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{t('CARD_TITLE_TEXT')}</h5>
                            <p className="card-text">{t('ADD_SOME_QUICK_EX_TEXT')}</p>
                            <a href="#" className="btn btn-primary">{t('GO_SOME_WHERE_TEXT')}</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4">
                    <div className="card">
                        <img src="assets/images/img1.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{t('CARD_TITLE_TEXT')}</h5>
                            <p className="card-text">{t('ADD_SOME_QUICK_EX_TEXT')}</p>
                            <a href="#" className="btn btn-primary">{t('GO_SOME_WHERE_TEXT')}</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4">
                    <div className="card">
                        <img src="assets/images/img1.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{t('CARD_TITLE_TEXT')}</h5>
                            <p className="card-text">{t('ADD_SOME_QUICK_EX_TEXT')}</p>
                            <a href="#" className="btn btn-primary">{t('GO_SOME_WHERE_TEXT')}</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4">
                    <div className="card">
                        <img src="assets/images/img1.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{t('CARD_TITLE_TEXT')}</h5>
                            <p className="card-text">{t('ADD_SOME_QUICK_EX_TEXT')}</p>
                            <a href="#" className="btn btn-primary">{t('GO_SOME_WHERE_TEXT')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section className="bg-image">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center mb-5">
                    <h2 className="text-white">{t('GRID_LAYOUT_OFFSET_HEADING')}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12  mb-4 mb-md-0">
                    <div className="card">
                        <img src="assets/images/img1.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{t('CARD_TITLE_TEXT')}</h5>
                            <p className="card-text">{t('ADD_SOME_QUICK_EX_TEXT')}</p>
                            <a href="#" className="btn btn-primary">{t('GO_SOME_WHERE_TEXT')}</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12  offset-md-4 offset-sm-0">
                    <div className="card">
                        <img src="assets/images/img1.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{t('CARD_TITLE_TEXT')}</h5>
                            <p className="card-text">{t('ADD_SOME_QUICK_EX_TEXT')}</p>
                            <a href="#" className="btn btn-primary">{t('GO_SOME_WHERE_TEXT')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>

    </>
  );
}

export default GridLayout;
