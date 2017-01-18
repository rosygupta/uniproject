

/**
 * Courses.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports =  {
//  connection: 'sailsMongodbServer',
  attributes: {
    // Course title
    title: {
      type: 'string',
      required: true
    },
    // COurse fees
    fees: {
      type: 'integer'
    },
    // Course duration
    duration: {
      type: 'float'
    },

    // Below is all specification for relations to another models

    // University of the course
    owner: {
      model: 'university'
    }
  }
};
