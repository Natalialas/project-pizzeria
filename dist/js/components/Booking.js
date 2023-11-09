import {templates, select} from '../settings.js';
import AmountWidget from './AmountWidget.js';
import DatePicker from './DatePicker.js';
import HourPicker from './HourPicker.js';

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

        thisBooking.dom.datePicker = bookingElem.querySelector(select.widgets.datePicker.wrapper);
        thisBooking.dom.hourPicker = bookingElem.querySelector(select.widgets.hourPicker.wrapper);
      }

    initWidgets(){
        const thisBooking = this;
        
        thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);

        thisBooking.dom.peopleAmount.addEventListener('updated', function() {

      });

      thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);

        thisBooking.dom.hoursAmount.addEventListener('updated', function() {
            
      });

      thisBooking.datePicker = new DatePicker(thisBooking.dom.datePicker);

        thisBooking.dom.datePicker.addEventListener('updated', function() {
            
      });

      thisBooking.hourPicker = new HourPicker(thisBooking.dom.hourPicker);

        thisBooking.dom.hourPicker.addEventListener('updated', function() {
            
      });
    }
}

export default Booking;