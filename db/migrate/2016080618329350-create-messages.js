export function up(schema) {
  return schema.createTable('messages', table => {
    table.increments('id');
    table.string('message');
    table.string('from');
    table.timestamps();
    table.integer('card_id').index();
    table.index([
      'id',
      'created_at',
      'updated_at'
    ]);
  });
}

export function down(schema) {
  return schema.dropTable('messages');
}
