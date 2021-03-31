import * as moment from 'moment';
import { Property, QueryBuilderConfig } from './components/query-builder';

export const parseQueryToConditions = (query: any) => {
  function searchCondition(conditionValue, myArray) {
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i].condition === conditionValue) {
        return myArray[i];
      }
    }
  }

  const parts = [];
  const config = {
    fields: {}
  };

  return (function parseCondition(queryBlock, parts) {
    queryBlock.forEach(function(block) {
      if (block.bool) {
        const condition = Object.keys(block.bool)[0];
        const minShouldMatch = block.bool.minimum_should_match;
        const found = searchCondition(condition, parts);

        if (!found) {
          parts.push({
            condition,
            minimum_should_match: minShouldMatch || '',
            rules: []
          });
        }

        parseCondition(block.bool[condition], parts[parts.length - 1].rules);
      } else {
        const operator = Object.keys(block)[0];
        const field = Object.keys(block[operator])[0];
        const value = block[operator][field];

        if (parts) {
          parts.push({
            field,
            operator,
            value
          });
        }

        config.fields[field] = {
          name: field.charAt(0).toUpperCase() + field.slice(1),
          // type: typeof value === "string" ? "string" : "number"
          type: value
        };
      }
    });

    return {
      query: parts[0] || [],
      config
    };
  })([query], parts);
};

export const getConfigFromMapping = (properties: Property[]) => {
  if (!properties) { return { fields: {} }; }

  const config: QueryBuilderConfig = {
    fields: {}
  };

  properties.forEach((val) => {
    const name = val.ATTRIBUTENAME
      .toLocaleLowerCase()
      .replace(/(^|_)(\w)/g, s => s.toUpperCase().replace('_', ' '));

    config.fields[val.FIELD] = {
      name,
      type: parseDataType(val.TYPE.toLowerCase()),
      source: val.SOURCE,
      nullable: val.nullable,
      options: val.options
    };
  });

  return config;
};

function parseDataType(typeName: string) {
  const allowedTypes = ['string', 'textarea', 'number', 'time', 'date', 'category', 'boolean'];

  // return default type
  if (allowedTypes.indexOf(typeName) === -1) {
    console.warn(`Type ${typeName} is invalid.`);
    return 'string';
  }
  return typeName;
}

function formatValue(type: string, fieldName: string, value: any) {
  if (type === 'date' && value && Date.parse(value[fieldName])) {
    const newVal = {};
    newVal[fieldName] = moment(value[fieldName]).format('YYYY-MM-DD');

    return newVal;
  }

  return value;
}
