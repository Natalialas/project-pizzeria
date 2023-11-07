import {templates, select} from '../settings.js';
import AmountWidget from './AmountWidget.js';

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

        thisBooking.dom.peopleAmount = bookingElem.querySelector(select.booking.peopleAmount);
        thisBooking.dom.hoursAmount = bookingElem.querySelector(select.booking.hoursAmount);
    }

    initWidgets(){
        const thisBooking = this;
        
        thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);

        thisBooking.dom.peopleAmount.addEventListener('updated', function() {

      });

      thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);

        thisBooking.dom.hoursAmount.addEventListener('updated', function() {
            
      });
    }
}

export default Booking;