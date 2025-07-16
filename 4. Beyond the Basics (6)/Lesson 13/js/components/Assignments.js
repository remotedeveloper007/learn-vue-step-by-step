import AssignmentList from './AssignmentList.js';

export default {
    components: { AssignmentList },
    
    template: `  
      <section class="space-y-6">
        <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>

        <assignment-list :assignments="filters.completed" title="Completed Assignments"></assignment-list>


        <!-- <form v-on:submit="add"> -->
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black p-1">
                <input type="text" v-model="newAssignment" placeholder="New assignment..." class="p-2 focus:outline-none" />
                <button class="p-2 border-l border-gray-600">Add</button>         
            </div>
        </form>
      </section>   



        <!--
        // <section v-show="inProgressAssignments.length">
        //     <h2 class="font-bold mb-2">In Progress</h2>

        //     <ul>
        //         <li v-for="assignment in inProgressAssignments" :key="assignment.id">
        //             <Label>
        //                 {{ assignment.name }}
        //                 <input type="checkbox" v-model="assignment.complete" />
        //             </Label>
        //         </li>
        //     </ul>
        // </section> -->

        <!--
        <section v-show="completed.length" class="mt-8">
            <h2 class="font-bold mb-2">Completed Assignments</h2>

            <ul>
                <li v-for="assignment in completed" :key="assignment.id">
                    <Label>
                        {{ assignment.name }}
                        <input type="checkbox" v-model="assignment.complete" />
                    </Label>
                </li>
            </ul>
        </section> -->
    `,

    data() {
        return {
            assignments: [],

            newAssignment: '',
        }
    },

    computed: {
        // inProgress() {
        //     return this.assignments.filter(assignment => ! assignment.complete);
        // },

        // completed() {
        //     return this.assignments.filter(assignment => assignment.complete);
        // },

        filters() {
          return {
            inProgress: this.assignments.filter(assignment => ! assignment.complete),

            completed: this.assignments.filter(assignment => assignment.complete)
          }
        },


    },

    methods: {
        add(e) {
            // e.preventDefault();
            // alert(this.newAssignment)

            this.assignments.push({
                name: this.newAssignment,
                complete: false,
                id: this.assignments.length + 1
            });

            this.newAssignment = '';
        }
    },

    // created() {
    //     fetch('http://localhost:3001/assignments')
    //     .then(response => response.json()).then(assignments =>{
    //         // console.log(assignments)
    //         this.assignments = assignments
    //     })
    // }

    async created() {
        // await fetch('http://localhost:3001/assignments')
        // .then((resp) => resp.json())
        // .then((assignments) => {
        //     this.assignments = assignments
        // });
        const response = await fetch('http://localhost:3001/assignments')
        this.assignments = await response.json();
    }
            
}
