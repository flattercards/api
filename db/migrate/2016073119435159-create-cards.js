export function up(schema) {
  return schema.createTable('cards', table => {
    table.increments('id');
    table.string('receiver_code');
    table.string('sender_code');
    table.timestamps();

    table.index([
      'id',
      'created_at',
      'updated_at'
    ]);
  });
}

export function down(schema) {
  return schema.dropTable('cards');
}
