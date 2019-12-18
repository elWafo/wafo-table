import React from 'react';
import PropTypes from 'prop-types';
import locales from '../locales.json';

const Controls = ({ children, locale, search, onSearchChange, updateTable }) => {
  return (
    <div className="controls">
      <div className="left">{children}</div>
      <div className="right">
        <div className="form-group">
          <input
            type="text"
            id="search"
            name="search"
            className="form-control"
            placeholder={locales[locale]['table-input-search']}
            value={search}
            onChange={onSearchChange}
            onClick={e => e.target.select()}
          />
        </div>
        <button type="button" id="wafotable-reload" className="btn btn-sm btn-light" onClick={updateTable}>
          {locales[locale]['table-button-reload']}
        </button>
      </div>
    </div>
  );
};

Controls.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  locale: PropTypes.string,
  search: PropTypes.string,
  onSearchChange: PropTypes.func,
  updateTable: PropTypes.func,
};

Controls.defaultProps = {
  children: null,
  locale: 'en',
  search: '',
  onSearchChange: f => f,
  updateTable: f => f,
};

export default Controls;
