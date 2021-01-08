import React from 'react'
import DatePicker from 'react-native-datepicker'

export const MyDatePicker = (Component,dateHandler, date) => {
    
    return(
        <DatePicker
        style={{width: 200}}
        // TouchableComponent={Component}
        date="2016-05-01"
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {console.log(date)}}
      />
    )
}