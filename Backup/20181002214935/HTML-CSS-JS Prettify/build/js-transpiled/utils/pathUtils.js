"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPotentialConfigDirs = exports.getAncestorPaths = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _path = _interopRequireDefault(require("path"));

var _paths = require("./paths");

var _constants = require("./constants");

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
// Returns a list of all absolute ancestor paths starting from a given path.
var getAncestorPaths = function getAncestorPaths(givenPath) {
  var pathParts = _path.default.resolve(givenPath).split(_paths.PATH_SEP);

  return pathParts.map(function (value, key) {
    return pathParts.slice(0, key + 1).join(_paths.PATH_SEP);
  });
}; // Returns all potential directories where a configuration file could exist.


exports.getAncestorPaths = getAncestorPaths;

var getPotentialConfigDirs = function getPotentialConfigDirs() {
  var potentialConfigDirs = getAncestorPaths(_path.default.dirname(_constants.ORIGINAL_FILE_PATH)); // Start with the current directory first, then with the user's home folder,
  // and end with the user's personal sublime settings folder.

  potentialConfigDirs.reverse();
  potentialConfigDirs.push(_paths.USER_HOME_DIR);
  potentialConfigDirs.push.apply(potentialConfigDirs, (0, _toConsumableArray2.default)(_constants.CONFIG_EXTRA_LOOKUP_PATHS || []));
  return potentialConfigDirs.filter(Boolean);
};

exports.getPotentialConfigDirs = getPotentialConfigDirs;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3BhdGhVdGlscy5qcyJdLCJuYW1lcyI6WyJnZXRBbmNlc3RvclBhdGhzIiwiZ2l2ZW5QYXRoIiwicGF0aFBhcnRzIiwicGF0aCIsInJlc29sdmUiLCJzcGxpdCIsIlBBVEhfU0VQIiwibWFwIiwidmFsdWUiLCJrZXkiLCJzbGljZSIsImpvaW4iLCJnZXRQb3RlbnRpYWxDb25maWdEaXJzIiwicG90ZW50aWFsQ29uZmlnRGlycyIsImRpcm5hbWUiLCJPUklHSU5BTF9GSUxFX1BBVEgiLCJyZXZlcnNlIiwicHVzaCIsIlVTRVJfSE9NRV9ESVIiLCJDT05GSUdfRVhUUkFfTE9PS1VQX1BBVEhTIiwiZmlsdGVyIiwiQm9vbGVhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJQTs7QUFFQTs7QUFDQTs7QUFQQTs7O0FBU0E7QUFDTyxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLFNBQUQsRUFBZTtBQUM3QyxNQUFNQyxTQUFTLEdBQUdDLGNBQUtDLE9BQUwsQ0FBYUgsU0FBYixFQUF3QkksS0FBeEIsQ0FBOEJDLGVBQTlCLENBQWxCOztBQUNBLFNBQU9KLFNBQVMsQ0FBQ0ssR0FBVixDQUFjLFVBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLFdBQWdCUCxTQUFTLENBQUNRLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBbUJELEdBQUcsR0FBRyxDQUF6QixFQUE0QkUsSUFBNUIsQ0FBaUNMLGVBQWpDLENBQWhCO0FBQUEsR0FBZCxDQUFQO0FBQ0QsQ0FITSxDLENBS1A7Ozs7O0FBQ08sSUFBTU0sc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixHQUFNO0FBQzFDLE1BQU1DLG1CQUFtQixHQUFHYixnQkFBZ0IsQ0FBQ0csY0FBS1csT0FBTCxDQUFhQyw2QkFBYixDQUFELENBQTVDLENBRDBDLENBRzFDO0FBQ0E7O0FBQ0FGLEVBQUFBLG1CQUFtQixDQUFDRyxPQUFwQjtBQUNBSCxFQUFBQSxtQkFBbUIsQ0FBQ0ksSUFBcEIsQ0FBeUJDLG9CQUF6QjtBQUNBTCxFQUFBQSxtQkFBbUIsQ0FBQ0ksSUFBcEIsT0FBQUosbUJBQW1CLG1DQUFTTSx3Q0FBNkIsRUFBdEMsRUFBbkI7QUFFQSxTQUFPTixtQkFBbUIsQ0FBQ08sTUFBcEIsQ0FBMkJDLE9BQTNCLENBQVA7QUFDRCxDQVZNIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmltcG9ydCB7IFBBVEhfU0VQLCBVU0VSX0hPTUVfRElSIH0gZnJvbSAnLi9wYXRocyc7XG5pbXBvcnQgeyBPUklHSU5BTF9GSUxFX1BBVEgsIENPTkZJR19FWFRSQV9MT09LVVBfUEFUSFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8vIFJldHVybnMgYSBsaXN0IG9mIGFsbCBhYnNvbHV0ZSBhbmNlc3RvciBwYXRocyBzdGFydGluZyBmcm9tIGEgZ2l2ZW4gcGF0aC5cbmV4cG9ydCBjb25zdCBnZXRBbmNlc3RvclBhdGhzID0gKGdpdmVuUGF0aCkgPT4ge1xuICBjb25zdCBwYXRoUGFydHMgPSBwYXRoLnJlc29sdmUoZ2l2ZW5QYXRoKS5zcGxpdChQQVRIX1NFUCk7XG4gIHJldHVybiBwYXRoUGFydHMubWFwKCh2YWx1ZSwga2V5KSA9PiBwYXRoUGFydHMuc2xpY2UoMCwga2V5ICsgMSkuam9pbihQQVRIX1NFUCkpO1xufTtcblxuLy8gUmV0dXJucyBhbGwgcG90ZW50aWFsIGRpcmVjdG9yaWVzIHdoZXJlIGEgY29uZmlndXJhdGlvbiBmaWxlIGNvdWxkIGV4aXN0LlxuZXhwb3J0IGNvbnN0IGdldFBvdGVudGlhbENvbmZpZ0RpcnMgPSAoKSA9PiB7XG4gIGNvbnN0IHBvdGVudGlhbENvbmZpZ0RpcnMgPSBnZXRBbmNlc3RvclBhdGhzKHBhdGguZGlybmFtZShPUklHSU5BTF9GSUxFX1BBVEgpKTtcblxuICAvLyBTdGFydCB3aXRoIHRoZSBjdXJyZW50IGRpcmVjdG9yeSBmaXJzdCwgdGhlbiB3aXRoIHRoZSB1c2VyJ3MgaG9tZSBmb2xkZXIsXG4gIC8vIGFuZCBlbmQgd2l0aCB0aGUgdXNlcidzIHBlcnNvbmFsIHN1YmxpbWUgc2V0dGluZ3MgZm9sZGVyLlxuICBwb3RlbnRpYWxDb25maWdEaXJzLnJldmVyc2UoKTtcbiAgcG90ZW50aWFsQ29uZmlnRGlycy5wdXNoKFVTRVJfSE9NRV9ESVIpO1xuICBwb3RlbnRpYWxDb25maWdEaXJzLnB1c2goLi4uQ09ORklHX0VYVFJBX0xPT0tVUF9QQVRIUyB8fCBbXSk7XG5cbiAgcmV0dXJuIHBvdGVudGlhbENvbmZpZ0RpcnMuZmlsdGVyKEJvb2xlYW4pO1xufTtcbiJdLCJmaWxlIjoidXRpbHMvcGF0aFV0aWxzLmpzIn0=
