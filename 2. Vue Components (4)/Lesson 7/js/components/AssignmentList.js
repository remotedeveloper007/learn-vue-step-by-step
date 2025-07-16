import Assignment from './Assignment.js';

export default {
    components: { Assignment },
    template: `
    <section v-show="assignments.length">
        <h2 class="font-bold mb-2">{{ title }}</h2>

        <ul>
            <assignment 
                v-for="assignment in assignments" 
                :key="assignment.id"
                :assignment="assignment"
            ></assignment>

            <!--
            <li v-for="assignment in assignments" :key="assignment.id">
                <Label>
                    {{ assignment.name }}
                    <input type="checkbox" v-model="assignment.complete" />
                </Label>
            </li> -->
        </ul>
    </section>`,

    props: {
        assignments: Array,
        title: String
    }
}
