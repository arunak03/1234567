function showSegment(segmentId,linkId){
    const segments =document.querySelectorAll('.segment');
    segments.forEach(segment=>{
        segment.style.display='none';  
    });
   const selectedSegment = document.getElementById(segmentId);
   selectedSegment.style.display='block';

   const links = document.querySelectorAll('.nav-link');
   links.forEach(link =>{
    link.classList.remove('active-link');
   })
   const selectedLink = document.getElementById(linkId);
   selectedLink.classList.add('active-link');
}
