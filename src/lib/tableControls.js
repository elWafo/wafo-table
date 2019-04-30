import React from 'react';
import PropTypes from 'prop-types';
import locales from './locales.json';
import './styles.css';

const TableControls = ({ size, onSizeChange, search, onSearchChange, updateTable, locale }) => {
  return (
    <div className="table-controls">
      <div className="left">
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
      </div>
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
        <button type="button" className="btn btn-sm btn-light" onClick={updateTable}>
          {locales[locale]['table-button-reload']}
        </button>
      </div>
    </div>
  );
};

TableControls.propTypes = {
  size: PropTypes.string,
  onSizeChange: PropTypes.func,
  search: PropTypes.string,
  onSearchChange: PropTypes.func,
  updateTable: PropTypes.func,
  locale: PropTypes.string,
};

TableControls.defaultProps = {
  size: '10',
  onSizeChange: f => f,
  search: '',
  onSearchChange: f => f,
  updateTable: f => f,
  locale: 'en',
};

export default TableControls;
