/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React, { useEffect, useState } from 'react';
import {
  PtgUiButton,
  PtgUiInput,
  PtgUiSelect,
  PtgUiCheckbox,
  PtgUiRadio,
  PtgUiDatePicker,
  PtgUiTextArea,
} from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';


import {
  COUNTRY_LIST,
  GENDER_LIST_SELECT,
  SALUTATION_LIST,
  STATE_LIST,
} from '@ptg-react-app/mock/mocks';

export const StepTwo = ({
  showNext,
  showPrevious,
  details,
  handleChange,
  error,
  handleBlur,
}: any) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    setIsDisabled(
      !(
        details.Greeting.length &&
        details.Gender.length &&
        details.firstName &&
        details.lastName &&
        details.email &&
        !error.email &&
        details.phone &&
        !error.phone &&
        details.zipCode &&
        !error.zipCode &&
        details.state &&
        details.homeAddress &&
        details.country
      )
    );
  }, [details, error]);

  return (
    <div className="p-2">
      <div className="row">
        <div className="form-group required col-md-4 mb-2">
          <label htmlFor="inputGreeting">{t('GREETING')} </label>
          <PtgUiSelect
            name="Greeting"
            list={SALUTATION_LIST}
            id="inputGreeting"
            data-testid="city"
            className={`sel-placeholder w-100 bg_0 ${
              error.Greeting ? 'border-danger' : ''
            }`}
            aria-label="given-name"
            onBlur={handleBlur}
            value={details.Greeting}
            onChange={handleChange}
          />
        </div>
        <div className="form-group required col-md-8 mb-2">
          <label htmlFor="inputGender">{t('GENDER')} </label>
          <PtgUiSelect
            name="Gender"
            list={GENDER_LIST_SELECT}
            id="inputGender"
            data-testid="city"
            className={`sel-placeholder w-100 bg_0 ${
              error.Gender ? 'border-danger' : ''
            }`}
            aria-label="given-name"
            onBlur={handleBlur}
            value={details.Gender}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group required row">
        <div className="col-md-6 mb-2">
          <label htmlFor="inputFirstName">{t('FIRST_NAME')} </label>
          <PtgUiInput
            className={`w-100 form-control bg_0 ${
              error.firstName ? 'border-danger' : ''
            }`}
            type="text"
            name="firstName"
            id="inputFirstName"
            value={details.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 mb-2">
          <label htmlFor="inputLastName">{t('LAST_NAME')} </label>
          <PtgUiInput
            className={`w-100 form-control bg_0 ${
              error.lastName ? 'border-danger' : ''
            }`}
            type="text"
            name="lastName"
            id="inputLastName"
            value={details.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group required col-md-12 mb-2">
        <label htmlFor="inputEmail">{t('LABEL_EMAIL')} </label>
        <PtgUiInput
          className={`w-100 form-control bg_0 ${
            error.email ? 'border-danger' : ''
          }`}
          type="text"
          name="email"
          id="inputEmail"
          value={details.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group required col-md-12 mb-2">
        <label htmlFor="inputPhone">{t('PHONE')} </label>
        <PtgUiInput
          className={`w-100 form-control bg_0 ${
            error.phone ? 'border-danger' : ''
          }`}
          type="phone"
          name="phone"
          id="inputPhone"
          value={details.phone}
          onChange={handleChange}
        />
      </div>
      <div className="form-group required vrow">
        <div className="col-md-4 mb-2">
          <label htmlFor="inputZipCode">{t('ZIP_CODE')}</label>
          <PtgUiInput
            className={`w-100 form-control bg_0 ${
              error.zipCode ? 'border-danger' : ''
            }`}
            type="text"
            name="zipCode"
            id="inputZipCode"
            value={details.zipCode}
            onChange={handleChange}
          />
        </div>
        <div className="form-group required col-md-8 mb-2">
          <label htmlFor="inputState">{t('STATE')} </label>
          <PtgUiSelect
            name="state"
            list={STATE_LIST}
            id="inputState"
            data-testid="city"
            className={`sel-placeholder w-100 bg_0 ${
              error.state ? 'border-danger' : ''
            }`}
            aria-label="given-name"
            onBlur={handleBlur}
            value={details.state}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group required col-md-12 mb-2">
        <label htmlFor="inputAddress">{t('HOME_ADDRESS')} </label>
        <PtgUiTextArea
          className={`w-100 form-control bg_0 ${
            error.homeAddress ? 'border-danger' : ''
          }`}
          rows="2"
          name="homeAddress"
          id="inputAddress"
          value={details.homeAddress}
          onChange={handleChange}
        />
      </div>
      <div className="form-group required col-md-12 mb-2">
        <label htmlFor="inputContry">{t('COUNTRY')} </label>
        <PtgUiSelect
          name="country"
          list={COUNTRY_LIST}
          id="inputContry"
          data-testid="city"
          className={`sel-placeholder w-100 bg_0 ${
            error.country ? 'border-danger' : ''
          }`}
          aria-label="given-name"
          onBlur={handleBlur}
          value={details.country}
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
            aria-label="next"
            data-testid="next"
            disabled={isDisabled}
          >
            {t('NEXT')}
          </PtgUiButton>
        </div>
      </div>
    </div>
  );
};
