"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _proTable = _interopRequireDefault(require("@ant-design/pro-table"));

var _proForm = require("@ant-design/pro-form");

var _icons = require("@ant-design/icons");

var _reactI18next = require("react-i18next");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/** 定制table列表
 * 
 * @param {Array} toolBar 工具栏按钮：如添加、导出，须带图标
 *      如： toolBar={
          [
            <Button type="primary" key="buttonAdd" onClick={() => showDrawer()}> 添加设备 </Button>,
            <Button type="primary" key="buttonXf" onClick={() => navigate('/device/batchIssued')}> 批量下发人员 </Button>
          ]
        }
 * @param {Array} queryFilter 更多搜索表单配置
 *      如： queryFilter={
          [
            <ProFormText name="desc" key="desc" label="创建人" />,
            <ProFormText name="status" key="status" label="更新人" />
          ]
        }
 * 
 * @param {String} searchPlaceholder 搜索提示
 */
var ProTableCustom = function ProTableCustom(props) {
  var formRef = (0, _react.useRef)();

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      formSearchParams = _useState2[0],
      setFormSearchParams = _useState2[1];

  var _useState3 = (0, _react.useState)('searchParams'),
      _useState4 = _slicedToArray(_useState3, 2),
      initSearchColumn = _useState4[0],
      setInitSearchColumn = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showFilter = _useState6[0],
      setShowFilter = _useState6[1];

  var _useState7 = (0, _react.useState)(true),
      _useState8 = _slicedToArray(_useState7, 2),
      searchVisible = _useState8[0],
      setSearchVisible = _useState8[1];

  var formRef2 = (0, _react.useRef)();

  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      condition = _useState10[0],
      setCondition = _useState10[1];

  var columns = props.columns,
      toolBar = props.toolBar,
      queryFilter = props.queryFilter,
      actionRef = props.actionRef,
      searchPlaceholder = props.searchPlaceholder;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_proTable["default"], _extends({}, props, {
    formRef: formRef,
    params: formSearchParams,
    search: false,
    pagination: {
      size: 'default',
      pageSize: 10,
      showSizeChanger: true
    },
    className: "zk-pro-table-custom ".concat(!!queryFilter && 'has-query-filter'),
    toolBarRender: function toolBarRender() {
      return [/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !!queryFilter && !!queryFilter.length && /*#__PURE__*/_react["default"].createElement("div", {
        className: "query-filter"
      }, /*#__PURE__*/_react["default"].createElement(_antd.Popover, {
        placement: "bottom",
        content: /*#__PURE__*/_react["default"].createElement(_proForm.QueryFilter, {
          submitter: false,
          span: 24,
          labelWidth: "auto",
          split: true,
          formRef: formRef2,
          style: {
            paddingTop: '20px'
          }
        }, !!queryFilter.length && queryFilter.map(function (item) {
          return item;
        })),
        trigger: "click"
      }, /*#__PURE__*/_react["default"].createElement(_antd.Button, {
        type: "link",
        onClick: function onClick() {
          setShowFilter(!showFilter);
          setSearchVisible(!searchVisible);
        }
      }, "\u9AD8\u7EA7\u7B5B\u9009 ", showFilter ? /*#__PURE__*/_react["default"].createElement(_icons.UpOutlined, null) : /*#__PURE__*/_react["default"].createElement(_icons.DownOutlined, null))), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
        type: "text",
        onClick: function onClick() {
          var _formRef2$current, _actionRef$current, _actionRef$current2;

          setSearchVisible(true);
          setCondition([]);
          formRef2 === null || formRef2 === void 0 ? void 0 : (_formRef2$current = formRef2.current) === null || _formRef2$current === void 0 ? void 0 : _formRef2$current.resetFields();
          actionRef === null || actionRef === void 0 ? void 0 : (_actionRef$current = actionRef.current) === null || _actionRef$current === void 0 ? void 0 : _actionRef$current.reset();
          actionRef === null || actionRef === void 0 ? void 0 : (_actionRef$current2 = actionRef.current) === null || _actionRef$current2 === void 0 ? void 0 : _actionRef$current2.reload();
        }
      }, "\u6E05\u7A7A"))), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !!toolBar.length && toolBar.map(function (item) {
        return item;
      }))];
    },
    beforeSearchSubmit: function beforeSearchSubmit(params) {
      console.log('beforeSearchSubmit', params);
    },
    onSubmit: function onSubmit(params) {
      console.log('onSubmit', params);
    },
    options: {
      setting: false,
      density: false,
      search: {
        name: initSearchColumn,
        style: {
          width: '280px'
        },
        allowClear: true,
        enterButton: /*#__PURE__*/_react["default"].createElement(_antd.Button, {
          type: "primary"
        }, " \u641C\u7D22 "),
        placeholder: searchPlaceholder || t('common.searchPlaceholder'),
        multiple: true,
        onSearch: function onSearch(keyword) {
          var _formRef2$current2, _actionRef$current3, _actionRef$current3$s;

          var searchJson = (formRef2 === null || formRef2 === void 0 ? void 0 : (_formRef2$current2 = formRef2.current) === null || _formRef2$current2 === void 0 ? void 0 : _formRef2$current2.getFieldFormatValue()) || {};
          setFormSearchParams(searchJson);
          searchJson[initSearchColumn] = keyword;
          var params = [];

          for (var key in searchJson) {
            for (var index in columns) {
              var info = columns[index];

              if (info.dataIndex === key && searchJson[key] !== '') {
                params.push({
                  'name': key,
                  'title': info.title,
                  'value': searchJson[key]
                });
              }
            }
          }

          setCondition(params);
          setSearchVisible(true); // 查询的时候的回到第一页

          actionRef === null || actionRef === void 0 ? void 0 : (_actionRef$current3 = actionRef.current) === null || _actionRef$current3 === void 0 ? void 0 : (_actionRef$current3$s = _actionRef$current3.setPageInfo) === null || _actionRef$current3$s === void 0 ? void 0 : _actionRef$current3$s.call(_actionRef$current3, {
            current: 1
          });
        }
      }
    },
    toolbar: {
      multipleLine: true,
      filter: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (condition === null || condition === void 0 ? void 0 : condition.length) > 0 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          'marginRight': '10px'
        }
      }, " \u67E5\u8BE2\u6761\u4EF6: "), condition === null || condition === void 0 ? void 0 : condition.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement(_antd.Tag, {
          key: item.name
        }, item.title, "(", item.value, ")");
      })))
    }
  })));
};

var _default = ProTableCustom;
exports["default"] = _default;