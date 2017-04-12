export default class Counter {

    constructor() {
        $(() => {
            this.initialize();
        });
    }

    initialize(){
        var template = $('#hidden-template').html();
        for (var i = 0; i < 10; i++) {
            $('ul').append(template);
        };

        let currentCount = 0;

        $( "li" ).each(function( index, element ){
            this.$countUpButton = $( this ).find(".js-btn-countUp") ;
            this.$counter_result_id = $( this ).find('#counter_result_id');
            console.log(this.$countUpButton);
            this.$counter_result_id.html( currentCount );
            this.$countUpButton.on('click', () => {
                console.log('click');
                this.$counter_result_id.html(parseInt(this.$counter_result_id.text()) +1);
            });

        });
           
    }

    countUp = () => {
        console.log('click');
        // return 
    }
}