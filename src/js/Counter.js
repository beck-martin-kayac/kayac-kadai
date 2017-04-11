export default class Counter {

    constructor() {
        $(() => {
            this.initialize();
        });
    }

    initialize(){
        this.currentCount = 0;
        this.$countUpButton = $('.js-btn-countUp');
        this.$counter_result_id = $('#counter_result_id');
        this.$counter_result_id.html(this.currentCount);
        this.$countUpButton.on('click', this.countUp);
        console.log('init');
    }

    countUp = () => {
        return this.$counter_result_id.html(this.currentCount+=1);
    }
}