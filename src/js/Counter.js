export default class Counter {

    constructor() {
        $(() => {
            this.initialize();
        });
    }

    initialize(){
        let currentCount = 0;

        $( "li" ).each(function( index, element ){
            this.$countUpButton = $( this ).find(".js-btn-countUp") ;
            this.$counter_result_id = $( this ).find('#counter_result_id');
            this.$counter_result_id.html( currentCount );
            this.$countUpButton.on('click', () => {
                this.$counter_result_id.html(parseInt(this.$counter_result_id.text()) +1);
            });

        });
           
    }
}