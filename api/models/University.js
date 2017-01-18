/*
 * University.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */



module.exports = {
//  connection: 'sailsMongodbServer',
  attributes: {
    // Name of the university
    name: {
      type: 'string',
      required: true
    },
    // Uni description
    description: {
      type: 'text'
    },

    rank :{
     type: 'integer',
     unique:true
	},

   typeofestablishment:{
	type: 'text'
	},

    // Below is all specification for relations to another models

    // Courses that are attached to uni
   	entry: {
      collection: 'courses',
      via: 'owner',
    }
  }
};
