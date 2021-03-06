export function up(schema) {
  return schema.createTable('messages', table => {
    table.increments('id');
    table.string('from');
    table.text('body');
    table.integer('card_id').index();
    table.timestamps();

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
