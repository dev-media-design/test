document.addEventListener('DOMContentLoaded', function() {
    // Hide loader when page is fully loaded
    window.addEventListener('load', function() {
      const loader = document.querySelector('.loader');
      loader.style.display = 'none';
    });
  
    // Countdown timer setup
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date('July 26, 2024 00:00:00 GMT+0530');
  
    setInterval(function() {
      const now = new Date().getTime();
      const timeDifference = targetDate - now;
  
      if (timeDifference > 0) {
        let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
        countdownElement.textContent = `${days} day${days !== 1 ? 's' : ''}, ${hours} hour${hours !== 1 ? 's' : ''}, ${minutes} minute${minutes !== 1 ? 's' : ''}, ${seconds} second${seconds !== 1 ? 's' : ''}`;
      } else {
        clearInterval(interval);
        countdownElement.textContent = "Countdown expired";
      }
    }, 1000);
  });
  