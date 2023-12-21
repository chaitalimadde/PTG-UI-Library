import { PtgUiButton, PtgUiInput, PtgUiSelect } from '@ptg-ui/react';
import { CARD_LIST } from '@ptg-react-app/mock/mocks';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const StepThree = ({
  showNext,
  showPrevious,
  details,
  handleChange,
  error,
  handleBlur,
}: any) => {
  const [isDisabled, setIsDisabled] = useState(true)
  const { t } = useTranslation();
  useEffect(()=>{
    setIsDisabled(!(details.cardType && details.cardNumber && !error.cardNumber && details.cvc && !error.cvc && details.expiration && details.cardHolder))
  },[details,error])

  return (
    <div className="p-2">
      <div className="col-md-12 mb-2">
        <label htmlFor="inputCardType">{t('CARD_TYPE')} </label>
        <PtgUiSelect
          name="cardType"
          list={CARD_LIST}
          id="inputCardType"
          data-testid="city"
          className={`sel-placeholder w-100 bg_0 ${
            error.cardType ? 'border-danger' : ''
          }`}
          aria-label="given-name"
          onBlur={handleBlur}
          value={details.cardType}
          onChange={handleChange}
        />
      </div>
      <div className="row">
        <div className="col-md-6 mb-2">
          <label htmlFor="inputCardNumber">{t('CARD_NUMBER')} </label>
          <PtgUiInput
            className={`w-100 form-control bg_0 ${
              error.cardNumber ? 'border-danger' : ''
            }`}
            type="text"
            name="cardNumber"
            id="inputCardNumber"
            value={details.cardNumber}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3 mb-2">
          <label htmlFor="inputCvc">{t('CVC')} </label>
          <PtgUiInput
            className={`w-100 form-control bg_0 ${
              error.cvc ? 'border-danger' : ''
            }`}
            type="text"
            name="cvc"
            id="inputCvc"
            value={details.cvc}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3 mb-2">
          <label htmlFor="inputexpirationDate">{t('EXPIRATION_DATE')} </label>
          <PtgUiInput
            className={`w-100 form-control bg_0 ${
              error.expiration ? 'border-danger' : ''
            }`}
            type="text"
            name="expiration"
            id="inputexpirationDate"
            placeholder="MM/YY"
            value={details.expiration}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="col-md-12 form-group required mb-2">
        <label htmlFor="inputCardHolderName">{t('CARD_HOLDER_NAME')} </label>
        <PtgUiInput
          className={`w-100 form-control bg_0 ${
            error.cardHolder ? 'border-danger' : ''
          }`}
          type="text"
          name="cardHolder"
          id="inputCardHolderName"
          value={details.cardHolder}
          onChange={handleChange}
        />
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12 mt-2">
          <PtgUiButton
            className="w-100"
            type="button"
            onClick={showPrevious}
            aria-label="previous"
            data-testid="previous"
          >
            {t('PREVIOUS')}
          </PtgUiButton>
        </div>
        <div className="col-md-6 col-sm-12 col-xs-12 mt-2">
          <PtgUiButton
            className="w-100"
            type="button"
            onClick={showNext}
            disabled={isDisabled}
            aria-label="next"
            data-testid="next"
          >
            {t('NEXT')}
          </PtgUiButton>
        </div>
      </div>
    </div>
  );
};
