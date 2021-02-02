<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button v-on:click="toggleDetails">{{ detailsAreVisiable ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisiable">
            <li><strong>Phone :</strong>{{ friend.phone }}</li>
            <li><strong>Email :</strong>{{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    data() {
        return {
        detailsAreVisiable : false,
        friend : {
            id : 'Mann',
            name : 'Mann Patel',
            phone : '2356784190',
            email : 'mann.patel@gmail.com'
        }
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisiable = !this.detailsAreVisiable;
        }
    }
}
</script>