"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetPwdFormLayout = exports.orgInfoFormLayout = exports.defaultFormLayoutRight = exports.defaultFormLayout = void 0;
var defaultFormLayout = {
  form: {
    layout: "horizontal",
    labelAlign: "left",
    labelCol: {
      span: 5
    },
    wrapperCol: {
      offset: 1,
      span: 18
    }
  },
  button: {
    span: 14,
    offset: 6
  },
  drawer: {
    placement: "right",
    width: "500"
  },
  bodyStyle: {
    bodyStyle: {
      paddingBottom: 80
    }
  }
};
exports.defaultFormLayout = defaultFormLayout;
var orgInfoFormLayout = {
  form: {
    layout: "horizontal",
    labelAlign: "left",
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 14
    }
  }
};
exports.orgInfoFormLayout = orgInfoFormLayout;
var resetPwdFormLayout = {
  form: {
    layout: "horizontal",
    labelAlign: "left",
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 8
    }
  }
};
exports.resetPwdFormLayout = resetPwdFormLayout;
var defaultFormLayoutRight = {
  form: {
    layout: "horizontal",
    labelAlign: "right",
    labelCol: {
      span: 6
    },
    wrapperCol: {
      offset: 0,
      span: 18
    }
  },
  button: {
    span: 14,
    offset: 6
  },
  drawer: {
    placement: "right",
    width: "500"
  },
  bodyStyle: {
    bodyStyle: {
      paddingBottom: 80
    }
  }
};
exports.defaultFormLayoutRight = defaultFormLayoutRight;