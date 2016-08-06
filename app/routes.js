export default function routes() {

  // Only allow posts on the messages routes
  this.route('messages', {
    method: 'POST',
    action: 'create'
  });

  // The browser needs a preflight request for now
  this.route('messages', {
    method: 'OPTIONS',
    action: 'preflight'
  });

  // Only allow index route for cards
  this.route('cards', {
    method: 'GET',
    action: 'index'
  });
}
