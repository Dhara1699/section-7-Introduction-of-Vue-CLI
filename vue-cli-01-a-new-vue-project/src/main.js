import { createApp } from 'vue';

import First from './App.vue';
import FriendContact from './components/FriendContact';

 const app = createApp(First);

 app.component ('friend-contact', FriendContact);

 app.mount('#app');
