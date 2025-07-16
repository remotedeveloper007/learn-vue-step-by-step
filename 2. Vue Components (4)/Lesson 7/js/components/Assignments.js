import AssignmentList from './AssignmentList.js';

export default {
    components: { AssignmentList },
    
    template: `  
      <section class="space-y-6">
        <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>

        <assignment-list :assignments="filters.completed" title="Completed Assignments"></assignment-list>
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
            assignments: [
                { name: 'Finish Project', complete: false, id: 1 },
                { name: 'Read Chapter 4', complete: false, id: 2 },
                { name: 'Turn in homework', complete: false, id: 3 },
            ]
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
        }
    }
            
}
