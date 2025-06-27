function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.display = 'flex';
    }
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.display = 'none';
    }
}



const slider = document.querySelector('.slider');
if (slider) {
    let nextButton = document.querySelector('.nextPrevArrows .next');
    let prevButton = document.querySelector('.nextPrevArrows .prev');

    nextButton.onclick = () => {
        let items = document.querySelectorAll('.slider .list .item');
        document.querySelector('.slider .list').appendChild(items[0]);
        slider.classList.add('next');
        slider.classList.remove('prev');
    };

    prevButton.onclick = () => {
        let items = document.querySelectorAll('.slider .list .item');
        document.querySelector('.slider .list').prepend(items[items.length - 1]);
        slider.classList.add('prev');
        slider.classList.remove('next');
    };

    
    slider.addEventListener('animationend', () => {
        slider.classList.remove('next');
        slider.classList.remove('prev');
    });
}



if (document.querySelector('.container-1 .content p')) {
    function adjustContent() {
        const content1 = document.querySelector('.container-1 .content p');
        const content2 = document.querySelector('.container-2 .content p');
        const content3 = document.querySelector('.container-3 .content p');
        
        // Reset to default
        content1.innerHTML = `
            There’s no other place like Bali in this world. <br>
            A magical blend of culture, people, nature, activities, culinary delights and much more. <br>
            Whatever your age, background, budget or interest, <br>
            there’s something great for everyone to explore and discover. <br>
            And that’s a promise.
        `;
        content2.innerHTML = `
            Hinduism, the third-largest religion in Indonesia, has a long history in Indonesia. <br>
            Today, the island of Bali is famous for its unique Balinese Hindu culture.
        `;
        content3.innerHTML = `
            Bali packs a lot into one small island - from breathtaking waterfalls like Sekumpul <br>
            in the north to the white sand beaches of Nyang Nyang in the south.
        `;

        // Apply specific changes based on window width
        if (window.innerWidth <= 420) {
            content1.innerHTML = `
            There’s no other place like Bali in this world. <br>
            A magical blend of culture, people, nature, activities, <br>
            culinary delights and much more. Whatever your age, background, <br>
            budget or interest, there’s something great for everyone to explore and discover. <br>
            And that’s a promise.
            `;
        }
        
        if (window.innerWidth <=393) {
            content1.innerHTML = `
            There’s no other place like Bali in this world. <br>
            A magical blend of culture, people, nature, activities, <br>
            culinary delights and much more. Whatever your age, background, <br>
            budget or interest, there’s something great for everyone to explore and discover. And that’s a promise.
            `;
            content2.innerHTML = `
                Hinduism, the third-largest religion in Indonesia, <br>
                has a long history in Indonesia. <br> 
                Today, the island of Bali is famous for its unique Balinese Hindu culture.
            `;
            content3.innerHTML = `
                Bali packs a lot into one small island - <br>
                from breathtaking waterfalls like Sekumpul in the north <br>
                to the white sand beaches of Nyang Nyang in the south.
            `;
        }
    }
    
    adjustContent();
    window.addEventListener('resize', adjustContent);
}