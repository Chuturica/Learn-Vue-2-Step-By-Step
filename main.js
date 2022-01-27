Vue.component ('tabs',{
    template:`
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs">
                        <a href="#"> {{ tab.name }} </a>
                    </li>
                </ul>
            </div>

            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,
    
    data(){
        return { tabs: []}
    },

    created(){
        this.tabs = this.$children;
    }
});

Vue.component('tab',{
    props: {
        name: { required: true }
    },

    template:`
        <div><slot></slot></div>
    `
});


new Vue({
    el: '#root',

})