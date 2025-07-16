import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';

export default {
    /** Register components here, before using it */
    components: { AssignmentList, AssignmentCreate },
    
    template: `  
      <section class="flex gap-8">
        <assignment-list :assignments="filters.inProgress" title="In Progress">
            <assignment-create @add="add"></assignment-create>
        </assignment-list>

        <div v-if="showCompleted">
            <assignment-list :assignments="filters.completed" title="Completed" can-toggle @toggle="showCompleted = !showCompleted"></assignment-list>
        </div>


        <!-- One way of Parent-Child State Communication is by using props below -->
        <!--  <assignment-create :assignments="assignments"></assignment-create> -->

        <!-- The other way of Parent-Child State Communication is by using this.$emit('event', […args]) below -->
        <!-- We can listen emit event either by using v-on:add="add" OR by @add="add" -->
        <!-- <assignment-create v-on:add="add"></assignment-create> -->

        <!--   -->

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
            showCompleted: true,
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
