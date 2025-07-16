export default {
    template: `
        <!-- <form v-on:submit="add"> -->
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black p-1">
                <input type="text" v-model="newAssignment" placeholder="New assignment..." class="p-2 focus:outline-none" />
                <button class="p-2 border-l border-gray-600">Add</button>         
            </div>
        </form>
    `,

    /*
    props: {
        assignments: Array
    }, */

    data() {
        return {
            newAssignment: '' 
        }
    },

    methods: {
        add() {
            /** Child component communicate with its parent using this.$emit('add', this.newAssignment), while parent communicate with its child by using props: { } */
            this.$emit('add', this.newAssignment);

            // this.assignments.push({
            //     name: this.newAssignment,
            //     complete: false,
            //     id: this.assignments.length + 1
            // });
            
            this.newAssignment = '';
        }
    }
}