Vue.component('coupon',{
    template: '<input placeholder="Enter zour coupon code" @blur="onCouponApplied">',

    methods: {
        onCouponApplied(){
            alert('applierd!');
        }
    }
});

new Vue({
    el: '#root',

    methods: {
        onCouponApplied(){
            alert('It vas applied!');
        }
    }

});

