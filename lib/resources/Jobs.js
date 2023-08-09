'use strict'

const routePath = '/jobs'

module.exports = function(apiHelper) {
    return {
        list: async function(body = {}) {
            return await apiHelper.getMethod(`${routePath}/list`, body);
        },
        listRuns: async function(body = {}) {
            return await apiHelper.getMethod(`${routePath}/runs/list`, body);
        }
    }
}