// Highlight active nav link
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Sample book data
const books = [
  {
    img: 'https://i.postimg.cc/Y0KpzsmT/Orange-And-Brown-Modern-Illustrative-Indian-Novel-Book-Cover.png',
    title: 'Part 1 - Prarambhik',
    desc: 'Prarambhik exam is the basic introductory level test for beginners to assess fundamental skills and basic knowledge only..'
  },
  {
    img: 'https://i.postimg.cc/7L0tTtDp/Orange-And-Brown-Modern-Illustrative-Indian-Novel-Book-Cover-(1).png',
    title: 'Part 2 - Praveshika Pratham',
    desc: 'Praveshika Pratham is the first-level exam after Prarambhik in Indian classical music or dance, testing foundational theory and practical skills for learners.'
  },
  {
    img: 'https://i.postimg.cc/bNnnP7Tk/Orange-And-Brown-Modern-Illustrative-Indian-Novel-Book-Cover-(2).png',
    title: 'Part 3 - Praveshika Purna',
    desc: 'Praveshika Purna is the third level in classical music education, building on Praveshika Pratham with deeper knowledge of ragas, taals, and performance skills.'
  },
  {
    img: 'https://i.postimg.cc/8CXByqDX/Orange-And-Brown-Modern-Illustrative-Indian-Novel-Book-Cover-(3).png',
    title: 'Part 4 - Madhyama Pratham',
    desc: 'Madhyama Pratham is the second level in classical music education, building on Praveshika Purna with enhanced understanding of ragas, taals, and foundational performance techniques'
  },
  {
    img: 'https://i.postimg.cc/nzQ73r3b/Orange-And-Brown-Modern-Illustrative-Indian-Novel-Book-Cover-(4).png',
    title: 'Part 5 - Madhyama Purn',
    desc: 'Madhyama Purna is the fifth level in classical music education, focusing on refined raga elaboration, complex taals, and deeper performance techniques.'
  },
  {
    img: 'https://i.postimg.cc/prH9kZ9w/Orange-And-Brown-Modern-Illustrative-Indian-Novel-Book-Cover-(5).png',
    title: 'Part 6 - Visharad Pratham',
    desc: 'Visharad Pratham is the first level of advanced classical music education, focusing on mature raga presentation, complex rhythmic structures, and professional-level performance skills.'
  },
  {
    img: 'https://i.postimg.cc/fyDLYRF7/Orange-And-Brown-Modern-Illustrative-Indian-Novel-Book-Cover-(6).png',
    title: 'Part 7 - Visharad Purna',
    desc: 'Visharad Purna is the final stage of advanced classical music training, focusing on mastery of ragas, intricate taals, and polished professional-level performance techniques.'
  }
];

const booksGallery = document.getElementById('booksGallery');

books.forEach(book => {
  const div = document.createElement('div');
  div.classList.add('book');
  div.innerHTML = `
    <img src="${book.img}" alt="${book.title}">
    <h3>${book.title}</h3>
    <p>${book.desc}</p>
  `;
  booksGallery.appendChild(div);
});
