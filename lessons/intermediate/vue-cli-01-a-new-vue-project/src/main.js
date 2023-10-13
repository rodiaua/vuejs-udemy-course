import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from './components/FriendContact.vue'
import FallthroughButton from './components/FallthroughButton.vue'
import NewFriend from './components/NewFriend.vue'

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('fallthrough-button', FallthroughButton);
app.component('new-friend', NewFriend);

app.mount('#app');