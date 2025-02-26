/*==== navbar toggle ===*/

let navBar = document.querySelector('.navlink');
let menuBar =document.querySelector('#menuBtn');

menuBar.onclick = () =>{
    navBar.classList.toggle('active');
}

/*===== scroll section and sticky navbar===*/

// window.onscroll = () =>{
//     let header = document.querySelector('header');

//     header.classList.toggle('sticky', window.scrollY >100);
// }

/*=== swiper js ===*/

var swiper = new Swiper(".myHome", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});


//   const services = [
//     {
//         title: "Vehicle registration",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam eligendi iste repudiandae provident ab, corporis illo cupiditate non repellendus.",
//         image: "./img/services/reg.jpg", 
//         link: "#"
//     },
//     {
//         title: "Free first three service",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam eligendi iste repudiandae provident ab, corporis illo cupiditate non repellendus.",
//         image: "./img/services/service.jpg",
//         link: "#"
//     },
//     {
//       title: "Original Japan warranty",
//       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam eligendi iste repudiandae provident ab, corporis illo cupiditate non repellendus.",
//       image: "./img/services/warranty-image.jpg",
//       link: "#"
//   },
//   {
//     title: "After sales maintaining free advice",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam eligendi iste repudiandae provident ab, corporis illo cupiditate non repellendus.",
//     image: "./img/services/advice.jpg",
//     link: "#"
// },
// {
//   title: "leasing facilities",
//   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam eligendi iste repudiandae provident ab, corporis illo cupiditate non repellendus.",
//   image: "./img/services/leasing.jpg",
//   link: "#"
// },
// {
//   title: "Clearing and forwarding",
//   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam eligendi iste repudiandae provident ab, corporis illo cupiditate non repellendus.",
//   image: "./img/services/clearing-forwarding.jpg",
//   link: "#"
// }
// ];

// const servicesContainer = document.getElementById("services-list");

// services.forEach(service => {
//     const serviceHTML = `
//         <div class="service-card">
//             <img src="${service.image}" alt="${service.title}">
//             <div class="service-content">
//                 <h3>${service.title}</h3>
//                 <p>${service.description}</p>
//                 <a href="${service.link}" class="service-button">
//                     More Detailed <i class='bx bx-right-arrow-alt'></i>
//                 </a>
//             </div>
//         </div>
//     `;
//     servicesContainer.innerHTML += serviceHTML;
// });
