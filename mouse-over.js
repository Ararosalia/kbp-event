const mouseoverBtn = document.getElementById('mouseoverBtn');
const message = document.getElementById('message');

mouseoverBtn.addEventListener('mouseover', function() {     
    message.textContent = 'Mouse is over the button!';  
});
