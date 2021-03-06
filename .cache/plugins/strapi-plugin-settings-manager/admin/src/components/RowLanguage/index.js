/**
 *
 * RowLanguage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { find, get, join, isObject } from 'lodash';
import { FormattedMessage } from 'react-intl';

// utils
import getFlag, { formatLanguageLocale } from '../../utils/getFlag';

import { PopUpWarning } from 'strapi-helper-plugin';

/* eslint-disable react/require-default-props  */
class RowLanguage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      showWarning: false,
    };
  }

  handleDeleteLanguage = () => {
    this.setState({ showWarning: !this.state.showWarning });
    this.props.onDeleteLanguage(this.props.name);
  };

  handleToggleWarning = () =>
    this.setState({ showWarning: !this.state.showWarning });

  toggleWarning = () => this.setState({ showWarning: !this.state.showWarning });

  render() {
    // assign the target id the language name to prepare for delete
    const deleteIcon = this.props.active ? (
      ''
    ) : (
      <i
        className="fa fa-trash"
        style={{ fontSize: '1.1rem', color: 'rgba(14,22,34,0.75)' }}
        onClick={this.handleToggleWarning}
        id={this.props.name}
      />
    );
    // format the locale to
    const defaultLanguageArray = formatLanguageLocale(this.props.name);
    const flag = getFlag(defaultLanguageArray);
    // retrieve language name from i18n translation
    const languageObject = find(
      get(this.props.listLanguages, ['sections', '0', 'items', '0', 'items']),
      ['value', join(defaultLanguageArray, '_')],
    );
    // apply i18n
    const languageDisplay = isObject(languageObject) ? (
      <FormattedMessage
        {...{ id: `settings-manager.${languageObject.name}` }}
      />
    ) : (
      ''
    );

    const languageLabel = this.props.active ? (
      <FormattedMessage id="settings-manager.list.languages.default.languages">
        {message => (
          <div className={this.props.liStyles.stmitalicText}>{message}</div>
        )}
      </FormattedMessage>
    ) : (
      // set the span's id with the language name to retrieve it
      <FormattedMessage id="settings-manager.list.languages.set.languages">
        {message => (
          <button
            className={this.props.liStyles.stmnormal}
            onClick={this.props.onDefaultLanguageChange}
            id={this.props.name}
          >
            {message}
          </button>
        )}
      </FormattedMessage>
    );

    return (
      <li style={{ marginTop: '0' }}>
        <div className={this.props.liStyles.stmhoveredLanguage} />
        <div className={this.props.liStyles.stmlanguage} />
        <div
          className={`${this.props.liStyles.stmborderBottom} ${
            this.props.liStyles.stmflexLiLanguage
          }`}
        >
          <div
            className={`${this.props.liStyles.stmflexed} ${
              this.props.liStyles.stmflagContainer
            }`}
          >
            <div>
              <span
                className={`${
                  this.props.liStyles.stmflag
                } flag-icon flag-icon-${flag}`}
              />
            </div>
            <div
              className={`${this.props.liStyles.stmlabel} ${
                this.props.liStyles.stmcapitalized
              }`}
            >
              {languageDisplay}
            </div>
          </div>
          <div className="text-center" style={{ width: '33%' }}>
            {this.props.name}
          </div>
          <div style={{ display: 'flex', width: '33%' }}>
            <div className={this.props.liStyles.stmcentered}>
              {languageLabel}
            </div>
            <div className={this.props.liStyles.stmtrashContainer}>
              {deleteIcon}
            </div>
          </div>
        </div>
        <div>
          <PopUpWarning
            isOpen={this.state.showWarning}
            toggleModal={this.toggleWarning}
            onConfirm={this.handleDeleteLanguage}
            content={{
              message: 'settings-manager.popUpWarning.languages.delete.message',
            }}
            popUpWarningType="danger"
          />
        </div>
      </li>
    );
  }
}

RowLanguage.propTypes = {
  active: PropTypes.bool,
  listLanguages: PropTypes.object,
  liStyles: PropTypes.object,
  name: PropTypes.string,
  onDefaultLanguageChange: PropTypes.func,
  onDeleteLanguage: PropTypes.func,
};

export default RowLanguage;
