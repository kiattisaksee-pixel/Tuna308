document.addEventListener('DOMContentLoaded', () => {

    // ==================== 1. รูปภาพหาย → placeholder ====================
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function() {
            this.src = 'https://via.placeholder.com/300x300/cccccc/666666?text=ไม่มีรูป';
        };
    });

    // ==================== 2. สินค้า ====================
    const products = [
        {id: 1, cat: 'อาหาร', name: 'ราเม็งกึ่งสำเร็จรูปฮอกไกโด', price: 599},
        {id: 2, cat: 'อาหาร', name: 'แกงกะหรี่กึ่งสำเร็จรูปสไตล์ซัปโปโร', price: 599},
        {id: 3, cat: 'อาหาร', name: 'เนยฮอกไกโด', price: 299},
        {id: 4, cat: 'อาหาร', name: 'ชีสฮอกไกโด', price: 299},
        {id: 5, cat: 'อาหาร', name: 'ซุปข้าวโพดแบบแพ็ก', price: 300},
        {id: 6, cat: 'อาหาร', name: 'ข้าวโพดอบกรอบ', price: 400},
        {id: 7, cat: 'อาหาร', name: 'หอยเชลล์ตากแห้ง', price: 1000},
        {id: 8, cat: 'อาหาร', name: 'ปลาแซลมอนรมควัน', price: 1500},
        {id: 9, cat: 'อาหาร', name: 'เบคอน/แฮมสไตล์ฮอกไกโด', price: 899},
        {id: 10, cat: 'อาหาร', name: 'นมผงฮอกไกโดสำหรับทำของหวาน', price: 500},
        {id: 11, cat: 'ขนม', name: 'คุกกี้นมฮอกไกโด', price: 900},
        {id: 12, cat: 'ขนม', name: 'คอร์นช็อกโกแลต', price: 399},
        {id: 13, cat: 'ขนม', name: 'ช็อกโกแลตนมสด', price: 799},
        {id: 14, cat: 'ขนม', name: 'มันฝรั่งแท่งอบกรอบ (jagapokkuru สไตล์นั้น)', price: 799},
        {id: 15, cat: 'ขนม', name: 'คาราเมลนม', price: 350},
        {id: 16, cat: 'ขนม', name: 'เค้กชีสซอฟต์แบบแพ็ก', price: 899},
        {id: 17, cat: 'ขนม', name: 'โมจิถั่วแดงแบบแช่เย็น', price: 400},
        {id: 18, cat: 'ขนม', name: 'แพนเค้กสำเร็จรูปสไตล์ซัปโปโร', price: 900},
        {id: 19, cat: 'ขนม', name: 'ไอซ์คุกกี้ (แบบเก็บได้)', price: 699},
        {id: 20, cat: 'ขนม', name: 'บัตเตอร์แซนด์ (คุกกี้สอดไส้ครีมเนย)', price: 750},
        {id: 203, cat: 'ขนม', name: 'Kit Kat Hokkaido', price: 799},
        {id: 21, cat: 'ของใช้เครื่องครัว', name: 'แก้วแกะลายฮอกไกโด', price: 499},
        {id: 22, cat: 'ของใช้เครื่องครัว', name: 'จานเซรามิกลายธรรมชาติฮอกไกโด', price: 675},
        {id: 23, cat: 'ของใช้เครื่องครัว', name: 'ชามไม้แกะมือ', price: 400},
        {id: 24, cat: 'ของใช้เครื่องครัว', name: 'ถ้วยชาแบบญี่ปุ่น', price: 500},
        {id: 25, cat: 'ของใช้เครื่องครัว', name: 'แก้วเบียร์ลายภูเขาไฟ', price: 800},
        {id: 26, cat: 'ของใช้เครื่องครัว', name: 'มีดครัวสไตล์ญี่ปุ่น', price: 1500},
        {id: 27, cat: 'ของใช้เครื่องครัว', name: 'กระติกน้ำลายหมีโฮคุโตะ', price: 1200},
        {id: 28, cat: 'ของใช้เครื่องครัว', name: 'ตะเกียบไม้แกะลาย', price: 500},
        {id: 29, cat: 'ของใช้เครื่องครัว', name: 'ที่รองแก้วไม้', price: 500},
        {id: 30, cat: 'ของใช้เครื่องครัว', name: 'ผ้าเช็ดครัวลายฮอกไกโด', price: 400},
        {id: 31, cat: 'Skincare', name: 'สบู่ธรรมชาติจากนมฮอกไกโด', price: 399},
        {id: 32, cat: 'Skincare', name: 'โลชั่นนมนุ่ม', price: 999},
        {id: 33, cat: 'Skincare', name: 'สครับถั่วแดงอาซึกิ', price: 850},
        {id: 34, cat: 'Skincare', name: 'ครีมทามือกลิ่นลาเวนเดอร์', price: 699},
        {id: 35, cat: 'Skincare', name: 'น้ำมันหอมลาเวนเดอร์', price: 800},
        {id: 36, cat: 'Skincare', name: 'แชมพูสมุนไพรฮอกไกโด', price: 700},
        {id: 37, cat: 'Skincare', name: 'ครีมน้ำนมบำรุงผิว', price: 900},
        {id: 38, cat: 'Skincare', name: 'เจลอาบน้ำกลิ่นข้าวโพดหวาน', price: 1200},
        {id: 39, cat: 'Skincare', name: 'บอดี้โลชั่นกลิ่นดอกไม้เหนือ', price: 1000},
        {id: 40, cat: 'Skincare', name: 'บาล์มปากน้ำผึ้งฮอกไกโด', price: 900},
        {id: 41, cat: 'ของใช้ทั่วไป', name: 'พวงกุญแจลายฮอกไกโด', price: 800},
        {id: 42, cat: 'ของใช้ทั่วไป', name: 'หมีเทพ', price: 9999999},
        {id: 43, cat: 'ของใช้ทั่วไป', name: 'กระเป๋าผ้าแผนที่ฮอกไกโด', price: 500},
        {id: 44, cat: 'ของใช้ทั่วไป', name: 'เคสโทรศัพท์ลายภูเขาไฟ', price: 500},
        {id: 45, cat: 'ของใช้ทั่วไป', name: 'ร่มลายหิมะ', price: 799},
        {id: 46, cat: 'ของใช้ทั่วไป', name: 'ปากกาลายซัปโปโร', price: 300},
        {id: 47, cat: 'ของใช้ทั่วไป', name: 'ผ้าเช็ดหน้าเทนุกิ', price: 299},
        {id: 48, cat: 'ของใช้ทั่วไป', name: 'แก้วน้ำพกพาลายวินเทอร์', price: 900},
        {id: 49, cat: 'ของใช้ทั่วไป', name: 'โปสการ์ดวิวหิมะ', price: 599},
        {id: 50, cat: 'ของใช้ทั่วไป', name: 'พวงติดกระเป๋ารูปเพนกวิน', price: 400},
        {id: 51, cat: 'เสื้อผ้า', name: 'เสื้อยืดลายฮอกไกโด', price: 1200},
        {id: 52, cat: 'เสื้อผ้า', name: 'เสื้อผ้าลายชนเผ่าไอนุ', price: 2500},
        {id: 53, cat: 'เสื้อผ้า', name: 'เสื้อฮู้ดลายหมีฮอกไกโด', price: 3000},
        {id: 54, cat: 'เสื้อผ้า', name: 'ถุงเท้าลายหิมะ', price: 599},
        {id: 55, cat: 'เสื้อผ้า', name: 'หมวกไหมพรม', price: 499},
        {id: 56, cat: 'เสื้อผ้า', name: 'ผ้าพันคอไหมพรม', price: 999},
        {id: 57, cat: 'เสื้อผ้า', name: 'แจ็กเก็ตลายภูมิภาคฮอกไกโด', price: 2300},
        {id: 58, cat: 'เสื้อผ้า', name: 'ถุงมือฤดูหนาว', price: 500},
        {id: 59, cat: 'เสื้อผ้า', name: 'เสื้อยืดกราฟิกเมืองซัปโปโร', price: 999},
        {id: 60, cat: 'เสื้อผ้า', name: 'เสื้อกันลมลายทะเลเหนือ', price: 3000},
        {id: 61, cat: 'เครื่องปรุง', name: 'ซุปมิโซะฮอกไกโด', price: 600},
        {id: 62, cat: 'เครื่องปรุง', name: 'น้ำซุปทงคัตสึแบบผง', price: 800},
        {id: 63, cat: 'เครื่องปรุง', name: 'ซอสซีฟู้ดสำหรับปิ้งย่าง', price: 800},
        {id: 64, cat: 'เครื่องปรุง', name: 'ผงแกงกะหรี่ฮอกไกโด', price: 500},
        {id: 65, cat: 'เครื่องปรุง', name: 'ผงปลาคัตสึโอะ', price: 500},
        {id: 66, cat: 'เครื่องปรุง', name: 'ซอสถั่วเหลืองกลิ่นหวาน', price: 750},
        {id: 67, cat: 'เครื่องปรุง', name: 'น้ำมันงาคั่ว', price: 899},
        {id: 68, cat: 'เครื่องปรุง', name: 'เกลือดอกไม้ทะเลฮอกไกโด', price: 999},
        {id: 69, cat: 'เครื่องปรุง', name: 'ฟุริคาเกะปลาแซลมอน', price: 700},
        {id: 70, cat: 'เครื่องปรุง', name: 'น้ำซุปคอมบุสาหรับทำราเม็ง', price: 500},
        {id: 71, cat: 'งานฝีมือ', name: 'ไม้แกะสลักรูปหมีฮอกไกโด', price: 1599},
        {id: 72, cat: 'งานฝีมือ', name: 'จานไม้แกะมือ', price: 899},
        {id: 73, cat: 'งานฝีมือ', name: 'เครื่องประดับทำจากไม้ท้องถิ่น', price: 1500},
        {id: 74, cat: 'งานฝีมือ', name: 'แก้วทำมือสไตล์ฮอกไกโด', price: 1200},
        {id: 75, cat: 'งานฝีมือ', name: 'ตุ๊กตาไอนุ', price: 1600},
        {id: 76, cat: 'งานฝีมือ', name: 'เข็มกลัดทำมือ', price: 1500},
        {id: 77, cat: 'งานฝีมือ', name: 'นกไม้', price: 1777},
        {id: 78, cat: 'งานฝีมือ', name: 'กล่องไม้แกะลาย', price: 900},
        {id: 79, cat: 'งานฝีมือ', name: 'เครื่องรางทำจากวัสดุธรรมชาติ', price: 9999},
        {id: 80, cat: 'งานฝีมือ', name: 'โคมไฟไม้แกะสไตล์ญี่ปุ่น', price: 3000},
        {id: 81, cat: 'ของจิปาถะ', name: 'กระดาษโน้ตกาว (โพสต์อิท) ลายฮอกไกโด', price: 400},
        {id: 82, cat: 'ของจิปาถะ', name: 'ปากกาลูกลื่นลายฮอกไกโด', price: 500},
        {id: 83, cat: 'ของจิปาถะ', name: 'เทปมาสกิ้งลายฮอกไกโด', price: 799},
        {id: 84, cat: 'ของจิปาถะ', name: 'ชุดโปสการ์ดฮอกไกโด', price: 799},
        {id: 85, cat: 'ของจิปาถะ', name: 'สมุดโน้ตลายฮอกไกโด', price: 699},
        {id: 86, cat: 'ของจิปาถะ', name: 'แฟ้มใส (Clear File) ฮอกไกโด', price: 777},
        {id: 87, cat: 'ของจิปาถะ', name: 'แม่เหล็กติดตู้เย็นฮอกไกโด', price: 900},
        {id: 88, cat: 'ของจิปาถะ', name: 'พวงกุญแจฮอกไกโด (เครื่องเขียน)', price: 500},
        {id: 89, cat: 'ของจิปาถะ', name: 'ชุดสติกเกอร์ฮอกไกโด', price: 200},
        {id: 90, cat: 'ของจิปาถะ', name: 'ปฏิทินฮอกไกโด', price: 1000},
        {id: 91, cat: 'เครื่องดื่ม', name: 'Sapporo Beer', price: 699},
        {id: 92, cat: 'เครื่องดื่ม', name: 'Asahikawa Wine', price: 1000},
        {id: 93, cat: 'เครื่องดื่ม', name: 'Tokachi Wine', price: 900},
        {id: 94, cat: 'เครื่องดื่ม', name: 'Hokkaido Melon Soda', price: 1600},
        {id: 95, cat: 'เครื่องดื่ม', name: 'Sapporo Milk', price: 1200},
        {id: 96, cat: 'เครื่องดื่ม', name: 'Hokkaido Coffee Milk', price: 600},
        {id: 97, cat: 'เครื่องดื่ม', name: 'Yubari Melon Juice', price: 2000},
        {id: 98, cat: 'เครื่องดื่ม', name: 'Haskap Juice', price: 1400},
        {id: 99, cat: 'เครื่องดื่ม', name: 'Hokkaido Apple Juice', price: 500},
        {id: 100, cat: 'เครื่องดื่ม', name: 'Hokkaido Cocoa', price: 600},
        {id: 202, cat: 'ขนม', name: 'คุกกี้ฮอกไกโด', price: 500},
    ];

    function getFolderFromCat(cat) {
        const map = {
            'อาหาร': '1Food', 'ขนม': '2Sweet', 'ของใช้เครื่องครัว': '3Kitchen utensils',
            'Skincare': '4Body and skin care', 'ของใช้ทั่วไป': '5Daily necessities',
            'เสื้อผ้า': '6clothing', 'เครื่องปรุง': '7seasoning', 'งานฝีมือ': '8Handmade',
            'ของจิปาถะ': '9Miscellaneous', 'เครื่องดื่ม': '10Drink'
        };
        return map[cat] || '9Miscellaneous';
    }

    // Prepare an array of image candidate paths for each product.
    // This lets the app try multiple folders (common variants: `Img`, `Img 2`, `img2`) before
    // falling back to the placeholder image.
    products.forEach(p => {
        const folder = getFolderFromCat(p.cat);
    
        p.imageCandidates = [
            `Img/${folder}/${p.id}.JPG`,
            `Img/${folder}/${p.id}.jpg`, 
            `Img2/${folder}/${p.id}.JPG`,
            `Img2/${folder}/${p.id}.jpg`
        ];
    });

    let cart = [];
    const itemsPerPage = 6;
    let currentPage = 1;
    let currentCat = 'all';
    let filteredProducts = products;

 // ==================== แสดงสินค้า ====================
    function displayProducts(page = 1) {
        const grid = document.querySelector('.product-grid');
        grid.innerHTML = '';
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageProducts = filteredProducts.slice(start, end);

        pageProducts.forEach(product => {
            const div = document.createElement('div');
            div.className = 'product';

            // Image element with progressive fallback through imageCandidates
            const imgEl = document.createElement('img');
            imgEl.alt = product.name;
            // default to first candidate (if it exists)
            const candidates = product.imageCandidates || [];
            imgEl.dataset.imgIndex = '0';
            imgEl.src = candidates[0] || 'https://via.placeholder.com/300x300/cccccc/666666?text=ไม่มีรูป';
            imgEl.onerror = function() {
                // Attempt next candidate, otherwise fallback to placeholder
                let idx = parseInt(this.dataset.imgIndex || '0', 10) + 1;
                if (candidates[idx]) {
                    this.dataset.imgIndex = String(idx);
                    this.src = candidates[idx];
                } else {
                    this.onerror = null;
                    this.src = 'https://via.placeholder.com/300x300/cccccc/666666?text=ไม่มีรูป';
                }
            };

            const title = document.createElement('h3');
            title.textContent = product.name;

            const price = document.createElement('p');
            price.textContent = `${product.price} บาท`;

            const btn = document.createElement('button');
            btn.textContent = 'ใส่ตะกร้า';
            btn.onclick = () => addToCart(product.id);

            div.appendChild(imgEl);
            div.appendChild(title);
            div.appendChild(price);
            div.appendChild(btn);
            grid.appendChild(div);
        });
        displayPagination();
    }

    function displayPagination() {
        const pagination = document.querySelector('.pagination');
        pagination.innerHTML = '';
        const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.textContent = i;
            if (i === currentPage) btn.classList.add('active');
            btn.onclick = () => { currentPage = i; displayProducts(i); };
            pagination.appendChild(btn);
        }
    }

    // ==================== หมวดหมู่ ====================
    const catButtons = document.querySelectorAll('.cat-btn');

    catButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // ลบ class active ออกจากทุกปุ่ม
            catButtons.forEach(b => b.classList.remove('active-cat'));
            
            // เพิ่ม class active ให้ปุ่มที่กด
            btn.classList.add('active-cat');

            // อัปเดตสินค้า
            currentCat = btn.dataset.cat;
            filteredProducts = currentCat === 'all' ? products : products.filter(p => p.cat === currentCat);
            currentPage = 1;
            displayProducts();
        });
    });

// ตั้งค่าเริ่มต้น: ปุ่ม "ทั้งหมด" เป็น active
document.querySelector('.cat-btn[data-cat="all"]').classList.add('active-cat');

    // ==================== ค้นหา ====================
    function searchProducts() {
        const query = document.getElementById('search-input').value.toLowerCase();
        filteredProducts = products.filter(p => 
            (currentCat === 'all' || p.cat === currentCat) && 
            p.name.toLowerCase().includes(query)
        );
        currentPage = 1;
        displayProducts();
    }
    document.getElementById('search-input').addEventListener('input', searchProducts);

    // ==================== สไลด์แบนเนอร์ ====================
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    function showSlide() {
        slides.forEach(s => s.classList.remove('active'));
        slides[slideIndex].classList.add('active');
        slideIndex = (slideIndex + 1) % slides.length;
    }
    setInterval(showSlide, 3000);

    // ==================== ตะกร้า ====================
    window.addToCart = function(id) {
        const product = products.find(p => p.id === id);
        const item = cart.find(i => i.id === id);
        if (item) item.quantity++;
        else cart.push({ ...product, quantity: 1 });
        updateCart();
    };

    window.removeFromCart = function(id) {
        cart = cart.filter(i => i.id !== id);
        updateCart();
    };

    // ฟังก์ชันเพิ่ม/ลดจำนวน
    window.increaseQuantity = function(id) {
        const item = cart.find(i => i.id === id);
        if (item) {
            item.quantity++;
            updateCart();
        }
    };

    window.decreaseQuantity = function(id) {
        const item = cart.find(i => i.id === id);
        if (item) {
            item.quantity--;
            if (item.quantity <= 0) {
                removeFromCart(id);
            } else {
                updateCart();
            }
        }
    };

    // อัปเดตตะกร้า
    function updateCart() {
        document.getElementById('cart-count').textContent = cart.reduce((s, i) => s + i.quantity, 0);
        const itemsDiv = document.getElementById('cart-items');
        itemsDiv.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            itemsDiv.innerHTML = '<p style="text-align:center; color:#95a5a6; padding:20px;">ตะกร้าว่างเปล่า</p>';
            document.getElementById('total-price').textContent = '0';
            return;
        }

        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>สินค้า</th>
                    <th>จำนวน</th>
                    <th>ราคา</th>
                    <th>ลบ</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;
        const tbody = table.querySelector('tbody');

        cart.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.name}</td>
                <td style="text-align: center;">
                    <button class="qty-btn qty-minus" onclick="decreaseQuantity(${item.id})">-</button>
                    <span class="qty-display">${item.quantity}</span>
                    <button class="qty-btn qty-plus" onclick="increaseQuantity(${item.id})">+</button>
                </td>
                <td><strong>${(item.price * item.quantity).toLocaleString()} บาท</strong></td>
                <td>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">ลบ</button>
                </td>
            `;
            tbody.appendChild(tr);
            total += item.price * item.quantity;
        });

        itemsDiv.appendChild(table);
        document.getElementById('total-price').textContent = total.toLocaleString();

        // ปุ่มชำระเงิน
        const checkoutBtn = document.querySelector('.checkout-btn-official');
        if (checkoutBtn) {
            checkoutBtn.onclick = () => {
                alert(`ขอบคุณที่ซื้อสินค้า! รวมทั้งสิ้น ${total.toLocaleString()} บาท`);
                cart = [];
                updateCart();
                document.getElementById('cart-modal').style.display = 'none';
            };
        }
    }

    // ==================== Modal ====================
    const aboutModal = document.getElementById('about-modal');
    const cartModal = document.getElementById('cart-modal');

    // เปิด "เกี่ยวกับเรา" (ทั้งจากเมนูและ footer)
    document.getElementById('about-trigger')?.addEventListener('click', e => {
        e.preventDefault();
        aboutModal.style.display = 'block';
    });
    document.getElementById('about-trigger-footer')?.addEventListener('click', e => {
        e.preventDefault();
        aboutModal.style.display = 'block';
    });

    document.getElementById('cart-btn').onclick = () => {
        cartModal.style.display = 'block';
        updateCart();
    };

    document.querySelectorAll('.modal .close').forEach(btn => {
        btn.onclick = () => btn.closest('.modal').style.display = 'none';
    });

    window.onclick = e => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    };

    displayProducts();
    showSlide();
    updateCart();

});



