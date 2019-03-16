// date.html 
//   Illustrates the use of the Date object by 
//   displaying the parts of a current date and
//   using two Date objects to time a calculation
    
// Get the current date

      var today = new Date();

// Fetch the various parts of the date

      var dateString = today.toLocaleString();
      var day = today.getDate();
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var years = today.getFullYear();  
      //Write your own code here 


// Display the parts

      document.write(
        "Date: " + dateString + "<br />",
        "Day: " + days[today.getDay()] + " " + day +" "+months[today.getMonth()]+ " "+years +"<br />");
      //Write your own code here
 
