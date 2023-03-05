'use strict';

const routePath = '/secrets';

module.exports = function(apiHelper) {
  return {
    listScopes: async function() {
      return await apiHelper.getMethod(`${routePath}/scopes/list`);
    },

    createScope: async function(scope, initial_manage_principal) {
      const body = {
        scope: scope,
        initial_manage_principal: initial_manage_principal
      };

      return await apiHelper.postMethod(`${routePath}/scopes/create`, body);
    },

    deleteScope: async function(scope) {
        const body = {
            scope: scope
        }
      return await apiHelper.postMethod(`${routePath}/scopes/create`, body);
    },

    put: async function(scope, key, string_value) {
      const body = {
        scope:scope,
        key:key,
        string_value:string_value
      };

      return await apiHelper.postMethod(`${routePath}/put`, body);
    },

    delete: async function(scope, key) {
      const body = {
        scope: scope,
        key: key
      };

      return await apiHelper.postMethod(`${routePath}/delete`, body);
    },

    list: async function(scope) {
      return await apiHelper.getMethod(`${routePath}/list`, { scope });
    },

    putSecretAcl: async function(scope, principal, permission) {
      const body = {
        scope: scope,
        principal: principal,
        permission: permission
      };

      return await apiHelper.postMethod(`${routePath}/acls/put`, body);
    },

    deleteSecretAcl: async function(scope, principal) {
      const body = {
        scope: scope,
        principal: principal
      };

      return await apiHelper.postMethod(`${routePath}/acls/delete`, body);
    },

    getSecretAcl: async function(principal, permission) {
      const body = {
        principal:principal,
        permission:permission
      };

      return await apiHelper.getMethod(`${routePath}/acls/get`, body);
    },

    listSecretAcl: async function(scope) {
      return await apiHelper.getMethod(`${routePath}/acls/list`, { scope });
    },
  }
};