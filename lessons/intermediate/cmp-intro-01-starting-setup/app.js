const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manule Cold',
                    phone: '3320348883274',
                    email: 'man@lcoalhost.com'
                },
                {
                    id: 'jul',
                    name: 'Jul Jones',
                    phone: '4720346663274',
                    email: 'jul@lcoalhost.com'
                }
            ]
        }
    }
})

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">{{!detailsAreVisiable? 'Show':'Hide' }} Details</button>
        <ul v-if="detailsAreVisiable">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
     </li>`,
    data() {
        return {
            detailsAreVisiable: false,
            friend: {
                id: 'jul',
                name: 'Jul Jones',
                phone: '4720346663274',
                email: 'jul@lcoalhost.com'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisiable = !this.detailsAreVisiable;
        }
    }
});

app.mount('#app');