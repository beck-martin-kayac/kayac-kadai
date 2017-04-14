import $ from 'jquery';
import Counter from './Counter';

let template = $('#hidden-template').html();

    for (var i = 0; i < 10; i++) {
        $('ul').append(template);
    };

const counter = new Counter();
