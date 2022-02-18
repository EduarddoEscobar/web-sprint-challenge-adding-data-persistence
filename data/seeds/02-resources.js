
exports.seed = function(knex) {
  return knex('resources').insert([
    {resource_name: 'wood', resource_description: 'comes from trees'},
    {resource_name: 'brick'},
    {resource_name: 'wool', resource_description: 'comes from sheeps'},
    {resource_name: 'wheat', resource_description: 'harvested from crops'},
    {resource_name: 'stone'}
  ]);
};
