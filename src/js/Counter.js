export default class Counter {

    constructor(id) {
        $(() => {
            this.id = id;
            this.initialize();
        });
    }

    initialize(){
        console.log(this.id);
        $('#hidden-template li').attr('data-id', this.id );
        var template = $('#hidden-template').html();
        console.log($(template).attr('data-id', this.id ));
        $(template).attr('data-id', this.id );
        $('ul').append(template);

        let currentCount = 0;

            this.$countUpButton = $(".js-btn-countUp") ;
            this.$counter_result_id = $('#counter_result_id');
            this.$counter_result_id.html( currentCount );
            this.$countUpButton.on('click', () => {
              this.$counter_result_id.html(parseInt(this.$counter_result_id.text()) +1);
            });
    }
}

// todo 
export class TurboCounter extends Counter {
    constructor(id) {
        super(id);
    }
    initialize(){
        var template = $('#hidden-template').html();
        $('ul').append(template);
    
        let currentCount = 0;

            this.$countUpButton = $( this ).find(".js-btn-countUp") ;
            this.$counter_result_id = $( this ).find('#counter_result_id');
            this.$counter_result_id.html( currentCount );
            this.$countUpButton.on('click', () => {
                this.$counter_result_id.html(parseInt(this.$counter_result_id.text()) +1);
            });

    }
}

// todo 
export class UltraTurboCounter extends Counter {
    constructor(id) {
        super(id);
    }
    initialize(){
        var template = $('#hidden-template').html();
        $('ul').append(template);
    
        let currentCount = 0;

            this.$countUpButton = $( this ).find(".js-btn-countUp") ;
            this.$counter_result_id = $( this ).find('#counter_result_id');
            this.$counter_result_id.html( currentCount );
            this.$countUpButton.on('click', () => {
                this.$counter_result_id.html(parseInt(this.$counter_result_id.text()) +1);
            });

    }
}