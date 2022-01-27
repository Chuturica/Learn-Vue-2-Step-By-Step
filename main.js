Vue.component('modal', {
    props: ['title', 'body'],

    data() {
        return {
            isVisible: true
        };
    },

    template: `
        
        <div class="modal is-active">
            <div class="modal-background"></div>
                <div class="modal-content">
                    <!-- Any other Bulma elements you want -->
                    <div class="box">
                        <p>
                            Let's move on to our next practical component exercise. A traditional modal box provides some key
                            learning points. In particular, we're going to learn how to communicate between components. What
                            happens if one Vue instance or component needs to be notified when a particular action takes place?
                            How might we broadcast such things?
                        </p>
                    </div>
                    
                </div>
            <button class="modal-close is-large" aria-label="close"></button>
        </div>
    `,

    methods: {
        hideModel() {
            this.isVisible = false;
        }
    }
});


new Vue({
    el: '#root',

    data: {
        showModal: false
    },
})