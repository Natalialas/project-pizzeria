import {templates} from '../settings.js';

class Booking{
    constructor(bookingElem){
        const thisBooking = this;

        thisBooking.render(bookingElem);
        thisBooking.initWidgets();
    }

    render(bookingElem){
        const thisBooking = this;
      
        const generatedHTML = templates.bookingWidget();
        thisBooking.dom = {};
        thisBooking.dom.wrapper = bookingElem;
        thisBooking.dom.wrapper.innerHTML = generatedHTML;
    }

    initWidgets(){
        

    }
}

export default Booking;