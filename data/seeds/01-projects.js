
exports.seed = function(knex) {
  return knex('projects').insert([
    {project_name: 'settlement', project_description: 'a settlement to collect resources', project_completed: true},
    {project_name: 'road', project_description: 'a way to connect different settlements', project_completed: true},
    {project_name: 'city', project_description: 'like a settlement but with doubled collection'},
    {project_name: 'deployment card'}
  ]);
};
