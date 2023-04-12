const teamMembers = document.querySelectorAll('.team-member');
for (let i = 0; i < teamMembers.length; i++) {
  teamMembers[i].addEventListener('mouseover', function() {
    this.style.boxShadow = '0px 0px 20px rgba(0,0,0,0.6)';
  });
  teamMembers[i].addEventListener('mouseout', function() {
    this.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.2)';
  });
}
