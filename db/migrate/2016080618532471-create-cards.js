export function up(schema) {
  return schema.createTable('cards', table => {
    table.increments('id');
    table.string('code').unique();
    table.timestamps();

    table.index([
      'id',
      'code',
      'created_at',
      'updated_at'
    ]);
  });
}

export function down(schema) {
  return schema.dropTable('cards');
}
