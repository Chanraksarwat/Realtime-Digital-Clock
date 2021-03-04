# Realtime-Digital-Clock
  # Objective:
  To create and display realtime digital clock. 

# Link:
https://chanraksarwat.github.io/Realtime-Digital-Clock/.

# Pseudocode for Realtime Digital Clock Mini Project

1. Create a function "showTime" 

2. Create an instance of the Date object

3. Using the methods of Date object get "hours, minus, and secs

4. Set AM/PM depending on the hour value. The Date object works on 24-hour format so we change hour back to 1 when it get’s larger than 12. The AM/PM also changes according to that.

5. Now call the function at the end to start function at exact reloading/rendering time as setInterval() will call first after 1s of rendering.

6. Now replace the string variable in the “div” using innerHTML property.

7. To call the function every second use setInterval() method and set time-interval as 1000ms which is equal to 1s.

8. Now call the function at the end to start function at exact reloading/rendering time as setInterval() will call first after 1s of rendering.
