import React, { useState } from 'react';
import PropTypes from 'prop-types';
import locales from './locales.json';
import './styles.css';

const LocalTable = ({ tableWrapperClass, updateTable, locale }) => {
  const [size, setSize] = useState(10);

  function onSizeChange() {
    //
  }

  return (
    <div className={tableWrapperClass}>
      <div className="table-controls">
        <div className="form-group">
          <label htmlFor="size">{locales[locale]['table-size-label']}</label>
          <select id="size" name="size" className="form-control form-control-sm" value={size}
            onChange={onSizeChange}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="search"
            name="search"
            className="form-control"
            placeholder="Search"
          />
        </div>
        <button type="button" className="btn btn-sm btn-light" onClick={updateTable}>
          {locales[locale]['table-button-reload']}
        </button>
      </div>
    </div>
  );
};

LocalTable.propTypes = {
  tableWrapperClass: PropTypes.string,
  updateTable: PropTypes.func,
  locale: PropTypes.string,
};

LocalTable.defaultProps = {
  tableWrapperClass: 'table-wrapper',
  updateTable: f => f,
  locale: 'en',
};

export default LocalTable;
