"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var setItem = function setItem(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.warn("An error while setting localStorage: %o", error);
  }

  return false;
};

var getItem = function getItem(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.warn("An error while getting an item from localStorage: %o", error);
  }

  return null;
};

var removeItem = function removeItem(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.warn("An error while removing an item from localStorage: %o", error);
  }

  return false;
};

var _default = {
  getItem: getItem,
  setItem: setItem,
  removeItem: removeItem
};
exports.default = _default;