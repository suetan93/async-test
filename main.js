/*
get a random number less than 10,
then, wait three seconds
then, write the number to the hard drive
Then, once all that is done, console log "I'm done!"

CONSTRAINTS
- You must use "getNumLessThan.js" to generate your random number. Note: the "getNumLessThan.js" file is just an overly complicated way to make getting a random number asynchronous (there is no reason for it to be asynchronous, other than as an exercise).
- No editing any file except main.js (comments are the exception)
*/

const getNumLessThanTen = require('./getNumLessThan.js')
const waitOneSecond = require('./waitOneSecond.js')
const writeToFile = require('./writeToHardDrive.js')

//call getNumLessThanTen, pass a callback function
 //if err received
   //console log it
   //otherwise call waitOnesecond three times
     //if err, log it, if not call waitonesec again
    //after third time, call write to file
      //if err log,
      //otherwise console log i am done


  getNumLessThanTen((err, num) => {
    if (err) {
      console.log(err)
    } else {
      waitOneSecond((err, success) => {
        if (err) {
          console.log(err)
        } else {
          waitOneSecond((err, success) => {
            if (err) {
              console.log(err)
            } else {
              waitOneSecond((err, success) => {
                if (err) {
                  console.log(err)
                } else {
                  writeToFile(num, (err) => {
                    if (err) {
                      console.log(err)
                    } else {
                      console.log(num)
                      console.log("I'm done!")
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  })



