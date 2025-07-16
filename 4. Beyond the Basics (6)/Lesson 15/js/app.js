import Assignments from './components/Assignments.js';
import Panel from './components/Panel.js';

export default {
    components: { Assignments, Panel },
    // template: `<Assignments />`

    template: `
        <div class="grid gap-6">
            <assignments></assignments>

            <!--
            <panel>
                This is the default content.
            </panel>
            <panel>
                <template v-slot:heading>Hi! There,</template>

               <template v-slot:default>This is the default content.</template> 
                // This is the default content.
            </panel>

            <panel>
                <template v-slot:heading>Hi! There,</template>

                This is the default content.

                <template v-slot:footer>This is the footer content.</template>   
            </panel>

            <panel theme="light">
                <template v-slot:heading>Hi! There,</template>

                This is the default content.
                
                <template v-slot:footer>This is the footer content.</template>   
            </panel> -->
        </div>
    `

}