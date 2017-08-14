// @flow

declare class Connection {
  /**
   * The underlying adapter in
   * it's raw form as installed
   * by npm.
   * @type {Object} module installed by npm.
   */
  module: Object;

  /**
   * The actual connection that
   * is used to call functions on.
   * @type {[type]}
   */
  connection: mixed;
}
