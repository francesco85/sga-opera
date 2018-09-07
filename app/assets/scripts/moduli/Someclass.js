import $ from 'jquery';

class Someclass{
    constructor(){
        this.property1 = $('#mail');
        this.events();
    }
    
    events(){
        this.property1.click(this.someMethods.bind(this));
    }
    
    someMethods(){
        console.log('something new');
    }
}

export default Someclass;