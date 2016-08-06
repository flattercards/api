export function up(schema) {
  return schema.createTable('cards', table => {
    table.increments('id');
    table.string('code').index();
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
