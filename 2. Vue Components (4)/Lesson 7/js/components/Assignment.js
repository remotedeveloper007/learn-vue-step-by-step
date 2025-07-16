export default {
    template: `
        <li>
            <Label>
                {{ assignment.name }}
                <input type="checkbox" v-model="assignment.complete" />
            </Label>
        </li>    
    `,

    props: {
        assignment: Object,
    }
}
