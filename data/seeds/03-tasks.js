
exports.seed = function(knex) {
  return knex('tasks').insert([
    {task_description: 'Place on the edge of resource tiles', task_notes: 'needs to be at least 2 edges away from the closest settlement', task_completed: true, project_id: 1},
    {task_description: 'Place road in between 2 edges', task_notes: 'one of the edges has to be your settlement', task_completed: true, project_id: 2},
    {task_description: 'Replace one of your settlements with this', task_completed: false, project_id: 3}
  ]);
};
