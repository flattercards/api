export default function routes() {
  this.resource('messages');
  this.route('cards', {
    method: 'GET',
    action: 'index'
  });
}
