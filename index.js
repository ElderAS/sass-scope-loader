const { getOptions } = require('loader-utils')
const validateOptions = require('schema-utils')

const schema = {
  type: 'object',
  properties: {
    selector: {
      type: 'string',
    },
  },
}

module.exports = function(source) {
  const options = getOptions(this) || {}

  if (!options.selector) {
    console.error('SassScopeLoader: options.selector is required')
    return source
  }

  validateOptions(schema, options, 'SassScopeLoader')

  return `${options.selector} { ${source} }`
}
