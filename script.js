const products = [
  {
    id: 1,
    name: "Nike Air Force 1 '07 LV8",
    brand: "Nike",
    category: "casual",
    price: 2990000,
    images: [
      { color: "white", src: "images/nike-airforce1-white.jpg" },
      { color: "black", src: "images/nike-airforce1-black.jpg" }
    ],
    short: "Đôi giày huyền thoại với phong cách đường phố.",
    long: "Nike Air Force 1 '07 LV8 giữ nguyên thiết kế kinh điển từ năm 1982 với chất liệu da cao cấp, form dễ phối đồ. Giày mang lại cảm giác thoải mái, bền bỉ và phù hợp với nhiều phong cách khác nhau. Phần đệm Air-Sole mang lại sự êm ái và nhẹ nhàng, lý tưởng cho việc đi lại hàng ngày.",
    sizes: ["38","39","40","41","42","43","44"],
    rating: 4.8,
    reviewCount: 240,
    purchased: 1200,
    rebuy: 35
  },
  {
    id: 2,
    name: "Nike Air Max 90",
    brand: "Nike",
    category: "running",
    price: 3500000,
    images: [
      { color: "white", src: "images/nike-airmax90-white.jpg" },
      { color: "red", src: "images/nike-airmax90-red.jpg" },
      { color: "black", src: "images/nike-airmax90-black.jpg" }
    ],
    short: "Biểu tượng của sự êm ái và phong cách.",
    long: "Nike Air Max 90 nổi bật với đệm Air lớn, đem lại sự thoải mái vượt trội khi chạy bộ và di chuyển hằng ngày. Thiết kế thể thao, màu sắc đa dạng giúp bạn dễ dàng phối đồ. Đế ngoài bằng cao su waffle tăng cường độ bám và độ bền.",
    sizes: ["38","39","40","41","42","43","44"],
    rating: 4.7,
    reviewCount: 310,
    purchased: 2000,
    rebuy: 40
  },
  {
    id: 3,
    name: "Adidas Ultraboost 23",
    brand: "Adidas",
    category: "running",
    price: 4200000,
    images: [
      { color: "black", src: "images/adidas-ultraboost23-black.jpg" },
      { color: "white", src: "images/adidas-ultraboost23-white.jpg" },
      { color: "blue", src: "images/adidas-ultraboost23-blue.jpg" }
    ],
    short: "Đệm Boost siêu êm, hoàn hảo cho mọi quãng đường.",
    long: "Adidas Ultraboost 23 mang đến trải nghiệm chạy bộ đỉnh cao với công nghệ đệm Boost phản hồi năng lượng vượt trội. Thân giày Primeknit ôm sát chân, thoáng khí và hỗ trợ tối đa. Đây là lựa chọn lý tưởng cho cả tập luyện và thi đấu.",
    sizes: ["39","40","41","42","43","44","45"],
    rating: 4.9,
    reviewCount: 450,
    purchased: 2500,
    rebuy: 45
  },
  {
    id: 4,
    name: "Adidas Stan Smith",
    brand: "Adidas",
    category: "casual",
    price: 2200000,
    images: [
      { color: "white", src: "images/adidas-stansmith-white.jpg" },
      { color: "green", src: "images/adidas-stansmith-green.jpg" }
    ],
    short: "Thiết kế cổ điển, phong cách vượt thời gian.",
    long: "Adidas Stan Smith là một biểu tượng thời trang với thiết kế tối giản và thanh lịch. Được làm từ vật liệu tái chế, đôi giày này không chỉ đẹp mà còn thân thiện với môi trường. Phù hợp cho mọi trang phục hàng ngày.",
    sizes: ["37","38","39","40","41","42"],
    rating: 4.6,
    reviewCount: 180,
    purchased: 900,
    rebuy: 30
  },
  {
    id: 5,
    name: "Puma RS-X Reinvention",
    brand: "Puma",
    category: "casual",
    price: 2800000,
    images: [
      { color: "grey", src: "images/puma-rsx-grey.jpg" },
      { color: "black", src: "images/puma-rsx-black.jpg" }
    ],
    short: "Phong cách retro tương lai, đệm êm ái.",
    long: "Puma RS-X Reinvention kết hợp giữa thiết kế retro và công nghệ hiện đại. Đệm RS (Running System) mang lại sự thoải mái tối đa, trong khi các chi tiết màu sắc nổi bật tạo nên vẻ ngoài độc đáo. Hoàn hảo cho những ai yêu thích sự phá cách.",
    sizes: ["38","39","40","41","42","43"],
    rating: 4.5,
    reviewCount: 150,
    purchased: 700,
    rebuy: 28
  },
  {
    id: 6,
    name: "Puma Clyde Hardwood",
    brand: "Puma",
    category: "basketball",
    price: 3100000,
    images: [
      { color: "white", src: "images/puma-clydehardwood-white.jpg" },
      { color: "black", src: "images/puma-clydehardwood-black.jpg" }
    ],
    short: "Hiệu suất cao trên sân bóng rổ, phong cách đường phố.",
    long: "Puma Clyde Hardwood là sự kết hợp hoàn hảo giữa hiệu suất trên sân bóng rổ và phong cách đường phố. Công nghệ ProFoam mang lại đệm nhẹ và phản hồi tốt, trong khi thiết kế cổ điển đảm bảo sự linh hoạt và hỗ trợ cần thiết cho các vận động viên.",
    sizes: ["40","41","42","43","44","45"],
    rating: 4.7,
    reviewCount: 120,
    purchased: 600,
    rebuy: 32
  },
  {
    id: 7,
    name: "New Balance 990v5",
    brand: "New Balance",
    category: "running",
    price: 5000000,
    images: [
      { color: "grey", src: "images/newbalance-990v5-grey.jpg" },
      { color: "black", src: "images/newbalance-990v5-black.jpg" }
    ],
    short: "Sự kết hợp hoàn hảo giữa phong cách và hiệu suất.",
    long: "New Balance 990v5 là một trong những đôi giày chạy bộ cao cấp nhất, được sản xuất tại Mỹ. Với công nghệ đệm ENCAP và ABZORB, giày mang lại sự ổn định và thoải mái vượt trội. Thiết kế cổ điển nhưng không kém phần hiện đại, phù hợp cho cả chạy bộ và đi lại hàng ngày.",
    sizes: ["39","40","41","42","43","44"],
    rating: 4.9,
    reviewCount: 380,
    purchased: 1800,
    rebuy: 48
  },
  {
    id: 8,
    name: "New Balance 574",
    brand: "New Balance",
    category: "casual",
    price: 1800000,
    images: [
      { color: "navy", src: "images/newbalance-574-navy.jpg" },
      { color: "grey", src: "images/newbalance-574-grey.jpg" }
    ],
    short: "Đôi giày cổ điển, dễ phối đồ.",
    long: "New Balance 574 là một trong những mẫu giày phổ biến nhất của New Balance, nổi tiếng với sự thoải mái và phong cách đa năng. Thiết kế đơn giản nhưng tinh tế, dễ dàng kết hợp với nhiều loại trang phục khác nhau, từ thể thao đến thường ngày.",
    sizes: ["36","37","38","39","40","41"],
    rating: 4.4,
    reviewCount: 200,
    purchased: 1000,
    rebuy: 30
  },
  {
    id: 9,
    name: "Nike Metcon 8",
    brand: "Nike",
    category: "training",
    price: 3200000,
    images: [
      { color: "black", src: "images/nike-metcon8-black.jpg" },
      { color: "white", src: "images/nike-metcon8-white.jpg" }
    ],
    short: "Ổn định và bền bỉ cho mọi bài tập.",
    long: "Nike Metcon 8 được thiết kế để đáp ứng mọi yêu cầu của các bài tập cường độ cao. Đế giày rộng và phẳng mang lại sự ổn định tối đa cho các bài tập nâng tạ, trong khi phần thân giày linh hoạt và thoáng khí giúp bạn thoải mái trong suốt buổi tập.",
    sizes: ["39","40","41","42","43","44"],
    rating: 4.8,
    reviewCount: 280,
    purchased: 1500,
    rebuy: 38
  },
  {
    id: 10,
    name: "Adidas Forum Low",
    brand: "Adidas",
    category: "basketball",
    price: 2600000,
    images: [
      { color: "white", src: "images/adidas-forumlow-white.jpg" },
      { color: "blue", src: "images/adidas-forumlow-blue.jpg" }
    ],
    short: "Phong cách bóng rổ cổ điển trở lại.",
    long: "Adidas Forum Low mang trở lại phong cách bóng rổ thập niên 80 với thiết kế cổ điển và các chi tiết đặc trưng. Đôi giày này không chỉ là một lựa chọn thời trang mà còn mang lại sự thoải mái và hỗ trợ tốt cho việc đi lại hàng ngày.",
    sizes: ["38","39","40","41","42","43"],
    rating: 4.6,
    reviewCount: 160,
    purchased: 850,
    rebuy: 29
  },
  {
    id: 11,
    name: "Puma Future Rider Play On",
    brand: "Puma",
    category: "casual",
    price: 2100000,
    images: [
      { color: "multi", src: "images/puma-futurerider-multi.jpg" },
      { color: "black", src: "images/puma-futurerider-black.jpg" }
    ],
    short: "Màu sắc tươi sáng, thoải mái cả ngày.",
    long: "Puma Future Rider Play On là sự kết hợp giữa phong cách retro và sự thoải mái hiện đại. Với đế ngoài Federbein hấp thụ sốc và thân giày nhẹ, đôi giày này lý tưởng cho việc đi lại hàng ngày và tạo điểm nhấn cho trang phục của bạn.",
    sizes: ["37","38","39","40","41","42"],
    rating: 4.5,
    reviewCount: 130,
    purchased: 650,
    rebuy: 27
  },
  {
    id: 12,
    name: "New Balance Fresh Foam X 880v13",
    brand: "New Balance",
    category: "running",
    price: 3800000,
    images: [
      { color: "grey", src: "images/newbalance-880v13-grey.jpg" },
      { color: "blue", src: "images/newbalance-880v13-blue.jpg" }
    ],
    short: "Đệm êm ái, hỗ trợ tối ưu cho chạy bộ hàng ngày.",
    long: "New Balance Fresh Foam X 880v13 là đôi giày chạy bộ đáng tin cậy cho những buổi tập hàng ngày. Công nghệ Fresh Foam X mang lại đệm êm ái và phản hồi tốt, trong khi thiết kế bền bỉ đảm bảo sự thoải mái trên mọi quãng đường.",
    sizes: ["39","40","41","42","43","44"],
    rating: 4.7,
    reviewCount: 250,
    purchased: 1300,
    rebuy: 36
  },
  {
    id: 13,
    name: "Nike Blazer Mid '77 Vintage",
    brand: "Nike",
    category: "casual",
    price: 2700000,
    images: [
      { color: "white", src: "images/nike-blazermid77-white.jpg" },
      { color: "black", src: "images/nike-blazermid77-black.jpg" }
    ],
    short: "Phong cách bóng rổ cổ điển, vượt thời gian.",
    long: "Nike Blazer Mid '77 Vintage mang đến vẻ ngoài cổ điển của bóng rổ thập niên 70. Với phần thân trên bằng da cao cấp và logo Swoosh lớn, đôi giày này là một biểu tượng thời trang đường phố, dễ dàng phối hợp với nhiều trang phục.",
    sizes: ["38","39","40","41","42","43"],
    rating: 4.6,
    reviewCount: 190,
    purchased: 950,
    rebuy: 31
  },
  {
    id: 14,
    name: "Adidas NMD_R1",
    brand: "Adidas",
    category: "casual",
    price: 2900000,
    images: [
      { color: "black", src: "images/adidas-nmdr1-black.jpg" },
      { color: "white", src: "images/adidas-nmdr1-white.jpg" }
    ],
    short: "Thiết kế hiện đại, thoải mái tối đa.",
    long: "Adidas NMD_R1 kết hợp phong cách hiện đại với sự thoải mái của công nghệ Boost. Thân giày bằng vải dệt kim ôm sát chân, mang lại cảm giác nhẹ nhàng và thoáng khí. Đây là lựa chọn hoàn hảo cho những ai tìm kiếm sự kết hợp giữa thời trang và công nghệ.",
    sizes: ["38","39","40","41","42","43"],
    rating: 4.7,
    reviewCount: 210,
    purchased: 1100,
    rebuy: 33
  },
  {
    id: 15,
    name: "Puma Suede Classic",
    brand: "Puma",
    category: "casual",
    price: 1900000,
    images: [
      { color: "black", src: "images/puma-suedeclassic-black.jpg" },
      { color: "red", src: "images/puma-suedeclassic-red.jpg" }
    ],
    short: "Biểu tượng văn hóa sát mặt đất.",
    long: "Puma Suede Classic là một biểu tượng của văn hóa sát mặt đất và hip-hop. Với chất liệu da lộn mềm mại và thiết kế đơn giản, đôi giày này đã trở thành một phần không thể thiếu trong tủ đồ của nhiều người yêu thời trang. Bền bỉ và phong cách.",
    sizes: ["37","38","39","40","41","42"],
    rating: 4.4,
    reviewCount: 140,
    purchased: 750,
    rebuy: 26
  },
  {
    id: 16,
    name: "New Balance FuelCell Rebel v3",
    brand: "New Balance",
    category: "running",
    price: 3600000,
    images: [
      { color: "yellow", src: "images/newbalance-fuelcellrebelv3-yellow.jpg" },
      { color: "black", src: "images/newbalance-fuelcellrebelv3-black.jpg" }
    ],
    short: "Nhẹ nhàng và nhanh nhẹn cho tốc độ.",
    long: "New Balance FuelCell Rebel v3 được thiết kế cho tốc độ và sự nhanh nhẹn. Công nghệ FuelCell mang lại đệm phản hồi cực tốt, giúp bạn bứt tốc dễ dàng. Thân giày nhẹ và thoáng khí, lý tưởng cho các buổi tập tốc độ và thi đấu.",
    sizes: ["39","40","41","42","43","44"],
    rating: 4.8,
    reviewCount: 220,
    purchased: 1150,
    rebuy: 37
  },
  {
    id: 17,
    name: "Nike ZoomX Invincible Run Flyknit 3",
    brand: "Nike",
    category: "running",
    price: 4500000,
    images: [
      { color: "white", src: "images/nike-invinciblerun3-white.jpg" },
      { color: "black", src: "images/nike-invinciblerun3-black.jpg" }
    ],
    short: "Đệm tối đa, bảo vệ chân trên mọi quãng đường.",
    long: "Nike ZoomX Invincible Run Flyknit 3 mang lại trải nghiệm chạy bộ êm ái nhất với lượng đệm ZoomX dồi dào. Được thiết kế để giảm thiểu chấn thương, đôi giày này là lựa chọn hoàn hảo cho các buổi chạy dài và phục hồi. Thân giày Flyknit ôm sát và thoáng khí.",
    sizes: ["39","40","41","42","43","44"],
    rating: 4.9,
    reviewCount: 300,
    purchased: 1600,
    rebuy: 42
  },
  {
    id: 18,
    name: "Adidas Adizero Adios Pro 3",
    brand: "Adidas",
    category: "running",
    price: 5500000,
    images: [
      { color: "orange", src: "images/adidas-adiospro3-orange.jpg" },
      { color: "black", src: "images/adidas-adiospro3-black.jpg" }
    ],
    short: "Tốc độ kỷ lục, dành cho vận động viên chuyên nghiệp.",
    long: "Adidas Adizero Adios Pro 3 là đôi giày đua hàng đầu, được thiết kế để phá vỡ kỷ lục cá nhân. Với công nghệ ENERGYRODS 2.0 và đệm Lightstrike Pro, giày mang lại sự phản hồi năng lượng tối đa và hiệu quả chạy bộ vượt trội. Lựa chọn của các vận động viên marathon hàng đầu.",
    sizes: ["39","40","41","42","43","44"],
    rating: 4.9,
    reviewCount: 180,
    purchased: 900,
    rebuy: 50
  },
  {
    id: 19,
    name: "Puma Deviate Nitro 2",
    brand: "Puma",
    category: "running",
    price: 3900000,
    images: [
      { color: "blue", src: "images/puma-deviatenitro2-blue.jpg" },
      { color: "black", src: "images/puma-deviatenitro2-black.jpg" }
    ],
    short: "Đệm Nitro êm ái, tấm carbon đẩy lực.",
    long: "Puma Deviate Nitro 2 là đôi giày chạy bộ đa năng, phù hợp cho cả tập luyện và thi đấu. Công nghệ đệm NITRO FOAM mang lại sự êm ái và phản hồi, kết hợp với tấm carbon PWRPLATE giúp đẩy lực hiệu quả. Thân giày thoáng khí và ôm chân.",
    sizes: ["39","40","41","42","43","44"],
    rating: 4.7,
    reviewCount: 170,
    purchased: 880,
    rebuy: 39
  },
  {
    id: 20,
    name: "New Balance Fresh Foam X More v4",
    brand: "New Balance",
    category: "running",
    price: 4000000,
    images: [
      { color: "white", src: "images/newbalance-freshfoamxmorev4-white.jpg" },
      { color: "black", src: "images/newbalance-freshfoamxmorev4-black.jpg" }
    ],
    short: "Đệm siêu dày, thoải mái tối đa cho chạy dài.",
    long: "New Balance Fresh Foam X More v4 là đôi giày có lượng đệm lớn nhất của New Balance, mang lại sự thoải mái vượt trội cho các buổi chạy dài và phục hồi. Công nghệ Fresh Foam X cung cấp đệm êm ái và ổn định, giúp bạn duy trì năng lượng trên mọi quãng đường.",
    sizes: ["39","40","41","42","43","44"],
    rating: 4.8,
    reviewCount: 260,
    purchased: 1400,
    rebuy: 41
  },
  {
    id: 21,
    name: "Nike Dunk Low Retro",
    brand: "Nike",
    category: "casual",
    price: 3100000,
    images: [
      { color: "black", src: "images/nike-dunklow-black.jpg" },
      { color: "blue", src: "images/nike-dunklow-blue.jpg" }
    ],
    short: "Phong cách bóng rổ cổ điển, thời thượng.",
    long: "Nike Dunk Low Retro mang lại vẻ ngoài cổ điển từ những năm 80, với sự kết hợp màu sắc đa dạng và thiết kế bền bỉ. Đế ngoài bằng cao su chắc chắn và thân giày bằng da cao cấp giúp giày luôn giữ form và thoải mái khi mang.",
    sizes: ["38","39","40","41","42","43"],
    rating: 4.7,
    reviewCount: 250,
    purchased: 1300,
    rebuy: 38
  },
  {
    id: 22,
    name: "Adidas Superstar",
    brand: "Adidas",
    category: "casual",
    price: 2400000,
    images: [
      { color: "white", src: "images/adidas-superstar-white.jpg" },
      { color: "red", src: "images/adidas-superstar-red.jpg" }
    ],
    short: "Biểu tượng với vỏ sò huyền thoại.",
    long: "Adidas Superstar là một trong những mẫu giày thể thao dễ nhận biết nhất, với mũi giày vỏ sò đặc trưng. Được yêu thích từ những năm 70, đôi giày này vẫn giữ vững vị thế là một biểu tượng thời trang đường phố, phù hợp với mọi lứa tuổi.",
    sizes: ["36","37","38","39","40","41"],
    rating: 4.6,
    reviewCount: 220,
    purchased: 1100,
    rebuy: 30
  },
  {
    id: 23,
    name: "Puma Cali Dream LTH",
    brand: "Puma",
    category: "casual",
    price: 2500000,
    images: [
      { color: "black", src: "images/puma-calidream-black.jpg" },
      { color: "beige", src: "images/puma-calidream-beige.jpg" }
    ],
    short: "Phong cách California phóng khoáng, nữ tính.",
    long: "Puma Cali Dream LTH là một phiên bản hiện đại của đôi giày cổ điển Puma California. Với đế giày platform nhẹ và thân giày bằng da cao cấp, đôi giày này mang lại vẻ ngoài nữ tính, trẻ trung và rất thoải mái cho những ngày năng động.",
    sizes: ["36","37","38","39"],
    rating: 4.5,
    reviewCount: 150,
    purchased: 700,
    rebuy: 25
  },
  {
    id: 24,
    name: "New Balance 550",
    brand: "New Balance",
    category: "basketball",
    price: 2900000,
    images: [
      { color: "white", src: "images/newbalance-550-white.jpg" },
      { color: "red", src: "images/newbalance-550-red.jpg" }
    ],
    short: "Thiết kế bóng rổ thập niên 80, trở lại đầy ấn tượng.",
    long: "New Balance 550 là một mẫu giày bóng rổ cổ điển từ năm 1989, đã trở lại và gây bão trên thị trường thời trang. Thiết kế đơn giản nhưng mạnh mẽ, kết hợp với các phối màu retro giúp đôi giày này trở thành một item hot cho mọi phong cách.",
    sizes: ["39","40","41","42","43"],
    rating: 4.8,
    reviewCount: 280,
    purchased: 1400,
    rebuy: 40
  },
  {
    id: 25,
    name: "Nike Zoom Pegasus 40",
    brand: "Nike",
    category: "running",
    price: 3600000,
    images: [
      { color: "black", src: "images/nike-pegasus40-black.jpg" },
      { color: "blue", src: "images/nike-pegasus40-blue.jpg" }
    ],
    short: "Linh hoạt và phản hồi tốt, cho mọi cự ly.",
    long: "Nike Zoom Pegasus 40 là đôi giày chạy bộ đa năng, phù hợp cho cả người mới bắt đầu và vận động viên chuyên nghiệp. Công nghệ đệm React kết hợp với túi Zoom Air mang lại cảm giác êm ái và nảy, giúp bạn chạy hiệu quả hơn.",
    sizes: ["39","40","41","42","43","44"],
    rating: 4.7,
    reviewCount: 350,
    purchased: 1800,
    rebuy: 42
  },
  {
    id: 26,
    name: "Adidas Ultraboost Light",
    brand: "Adidas",
    category: "running",
    price: 4500000,
    images: [
      { color: "white", src: "images/adidas-ultraboostlight-white.jpg" },
      { color: "black", src: "images/adidas-ultraboostlight-black.jpg" }
    ],
    short: "Phiên bản nhẹ hơn, êm ái hơn.",
    long: "Adidas Ultraboost Light là một bước tiến mới với công nghệ đệm Boost nhẹ hơn 30% so với phiên bản trước. Điều này mang lại cảm giác nhẹ nhàng tối đa mà vẫn giữ được khả năng hoàn trả năng lượng vượt trội. Thân giày Primeknit+ tái chế, thân thiện môi trường.",
    sizes: ["39","40","41","42","43","44"],
    rating: 4.9,
    reviewCount: 280,
    purchased: 1500,
    rebuy: 45
  },
  {
    id: 27,
    name: "Puma Clyde All-Pro",
    brand: "Puma",
    category: "basketball",
    price: 3500000,
    images: [
      { color: "black", src: "images/puma-clydeallpro-black.jpg" },
      { color: "red", src: "images/puma-clydeallpro-red.jpg" }
    ],
    short: "Đôi giày bóng rổ siêu nhẹ, phản hồi tốt.",
    long: "Puma Clyde All-Pro được thiết kế cho những vận động viên muốn tốc độ và sự linh hoạt. Công nghệ đệm ProFoam+ mang lại sự nhẹ nhàng và phản hồi, trong khi hệ thống dây buộc an toàn giúp khóa chặt chân. Thiết kế mạnh mẽ, phù hợp trên sân đấu.",
    sizes: ["40","41","42","43","44"],
    rating: 4.7,
    reviewCount: 160,
    purchased: 800,
    rebuy: 35
  },
  {
    id: 28,
    name: "New Balance Fresh Foam X 1080v13",
    brand: "New Balance",
    category: "running",
    price: 4300000,
    images: [
      { color: "blue", src: "images/newbalance-1080v13-blue.jpg" },
      { color: "pink", src: "images/newbalance-1080v13-pink.jpg" }
    ],
    short: "Đệm cao cấp, chạy êm ái hàng ngày.",
    long: "New Balance Fresh Foam X 1080v13 là đôi giày chạy bộ thoải mái nhất, được thiết kế cho những người chạy muốn sự êm ái tối đa. Công nghệ Fresh Foam X mang lại cảm giác mềm mại và nảy, trong khi phần thân giày Hypoknit ôm sát và thoáng khí.",
    sizes: ["39","40","41","42","43"],
    rating: 4.8,
    reviewCount: 320,
    purchased: 1600,
    rebuy: 40
  },
  {
    id: 29,
    name: "Nike Air Jordan 1 Mid",
    brand: "Nike",
    category: "casual",
    price: 3800000,
    images: [
      { color: "red", src: "images/nike-jordan1mid-red.jpg" },
      { color: "white", src: "images/nike-jordan1mid-white.jpg" }
    ],
    short: "Di sản bóng rổ, biểu tượng thời trang.",
    long: "Nike Air Jordan 1 Mid lấy cảm hứng từ đôi giày bóng rổ kinh điển của Michael Jordan. Thiết kế cổ lửng, chất liệu da cao cấp và logo Swoosh đặc trưng tạo nên một đôi giày vừa mang tính di sản, vừa thời trang.",
    sizes: ["39","40","41","42","43","44"],
    rating: 4.9,
    reviewCount: 400,
    purchased: 2500,
    rebuy: 50
  },
  {
    id: 30,
    name: "Adidas Samba OG",
    brand: "Adidas",
    category: "casual",
    price: 2600000,
    images: [
      { color: "white", src: "images/adidas-samba-white.jpg" },
      { color: "black", src: "images/adidas-samba-black.jpg" }
    ],
    short: "Phong cách bóng đá cổ điển, vượt thời gian.",
    long: "Adidas Samba OG ban đầu được thiết kế cho sân bóng đá trong nhà, nhưng giờ đây đã trở thành một biểu tượng thời trang đường phố. Thiết kế tối giản, chất liệu da mềm mại và đế gum đặc trưng, phù hợp với mọi trang phục.",
    sizes: ["37","38","39","40","41","42"],
    rating: 4.6,
    reviewCount: 200,
    purchased: 1000,
    rebuy: 32
  },
  {
    id: 31,
    name: "Puma Wild Rider Rollin'",
    brand: "Puma",
    category: "casual",
    price: 2300000,
    images: [
      { color: "multi", src: "images/puma-wildrider-multi.jpg" },
      { color: "black", src: "images/puma-wildrider-black.jpg" }
    ],
    short: "Lấy cảm hứng từ văn hóa đường phố, năng động.",
    long: "Puma Wild Rider Rollin' kết hợp các yếu tố retro với thiết kế hiện đại, lấy cảm hứng từ văn hóa đường phố. Với đế giày IMEVA nhẹ và các lớp phủ nhiều màu sắc, đôi giày này mang lại sự thoải mái và phong cách độc đáo.",
    sizes: ["38","39","40","41","42"],
    rating: 4.5,
    reviewCount: 140,
    purchased: 650,
    rebuy: 28
  },
  {
    id: 32,
    name: "New Balance 327",
    brand: "New Balance",
    category: "casual",
    price: 2700000,
    images: [
      { color: "grey", src: "images/newbalance-327-grey.jpg" },
      { color: "blue", src: "images/newbalance-327-blue.jpg" }
    ],
    short: "Thiết kế retro thập niên 70, hiện đại.",
    long: "New Balance 327 lấy cảm hứng từ các mẫu giày chạy bộ cổ điển của New Balance, với thiết kế hiện đại và logo N ngoại cỡ. Giày có thân giày nhẹ, thoải mái và đế ngoài gồ ghề đặc trưng, tạo nên phong cách vừa retro vừa trẻ trung.",
    sizes: ["37","38","39","40","41","42"],
    rating: 4.7,
    reviewCount: 210,
    purchased: 1200,
    rebuy: 35
  },
  {
    id: 33,
    name: "Nike Air Max 270",
    brand: "Nike",
    category: "casual",
    price: 3900000,
    images: [
      { color: "blue", src: "images/nike-airmax270-blue.jpg" },
      { color: "black", src: "images/nike-airmax270-black.jpg" }
    ],
    short: "Đệm Air lớn nhất của Nike, cực kỳ êm ái.",
    long: "Nike Air Max 270 nổi bật với phần đệm Air lớn nhất từ trước đến nay, mang lại cảm giác êm ái và thoải mái tối đa. Giày có thiết kế hiện đại, thời trang, phù hợp với những người muốn có một đôi giày vừa thoải mái vừa phong cách.",
    sizes: ["39","40","41","42","43","44"],
    rating: 4.8,
    reviewCount: 290,
    purchased: 1500,
    rebuy: 40
  },
  {
    id: 34,
    name: "Adidas Ozweego",
    brand: "Adidas",
    category: "casual",
    price: 2700000,
    images: [
      { color: "black", src: "images/adidas-ozweego-black.jpg" },
      { color: "white", src: "images/adidas-ozweego-white.jpg" }
    ],
    short: "Phong cách chunky, thoải mái và độc đáo.",
    long: "Adidas Ozweego lấy cảm hứng từ phong cách thập niên 90 với thiết kế chunky, độc đáo. Công nghệ đệm Adiprene và Adiprene+ mang lại sự thoải mái vượt trội, trong khi các chi tiết phản quang tạo điểm nhấn ấn tượng.",
    sizes: ["38","39","40","41","42","43"],
    rating: 4.5,
    reviewCount: 170,
    purchased: 850,
    rebuy: 28
  },
  {
    id: 35,
    name: "Puma Slipstream Lo Retro",
    brand: "Puma",
    category: "basketball",
    price: 3000000,
    images: [
      { color: "green", src: "images/puma-slipstreamlo-green.jpg" },
      { color: "red", src: "images/puma-slipstreamlo-red.jpg" }
    ],
    short: "Thiết kế bóng rổ cổ điển, thời trang.",
    long: "Puma Slipstream Lo Retro là một mẫu giày bóng rổ cổ điển từ những năm 80, được làm mới với các chi tiết hiện đại. Giày có thân giày bằng da cao cấp, đế ngoài bằng cao su bền bỉ và form dáng thấp, dễ phối đồ.",
    sizes: ["39","40","41","42","43","44"],
    rating: 4.6,
    reviewCount: 130,
    purchased: 700,
    rebuy: 30
  },
  {
    id: 36,
    name: "New Balance 2002R",
    brand: "New Balance",
    category: "casual",
    price: 3800000,
    images: [
      { color: "grey", src: "images/newbalance-2002r-grey.jpg" },
      { color: "black", src: "images/newbalance-2002r-black.jpg" }
    ],
    short: "Thoải mái và phong cách từ di sản chạy bộ.",
    long: "New Balance 2002R là một phiên bản làm lại của mẫu giày chạy bộ từ năm 2010. Giày kết hợp giữa phong cách retro và công nghệ hiện đại, với đệm ABZORB và N-ergy mang lại sự thoải mái tuyệt vời.",
    sizes: ["38","39","40","41","42","43"],
    rating: 4.8,
    reviewCount: 250,
    purchased: 1200,
    rebuy: 38
  },
  {
    id: 37,
    name: "Nike Air Max SC",
    brand: "Nike",
    category: "casual",
    price: 2100000,
    images: [
      { color: "black", src: "images/nike-airmaxsc-black.jpg" },
      { color: "navy", src: "images/nike-airmaxsc-navy.jpg" }
    ],
    short: "Đơn giản, thoải mái, phù hợp hàng ngày.",
    long: "Nike Air Max SC có thiết kế đơn giản nhưng vẫn nổi bật với túi Air có thể nhìn thấy. Giày nhẹ, êm ái và linh hoạt, là lựa chọn tuyệt vời cho các hoạt động thường ngày và đi lại.",
    sizes: ["38","39","40","41","42"],
    rating: 4.5,
    reviewCount: 180,
    purchased: 900,
    rebuy: 29
  },
  {
    id: 38,
    name: "Adidas Gazelle",
    brand: "Adidas",
    category: "casual",
    price: 2300000,
    images: [
      { color: "green", src: "images/adidas-gazelle-green.jpg" },
      { color: "blue", src: "images/adidas-gazelle-blue.jpg" }
    ],
    short: "Biểu tượng thập niên 60, tối giản và cổ điển.",
    long: "Adidas Gazelle là một mẫu giày kinh điển từ những năm 60, với thiết kế tối giản và chất liệu da lộn đặc trưng. Giày có form dáng thon gọn, dễ phối đồ và luôn mang lại vẻ ngoài tinh tế, cổ điển.",
    sizes: ["37","38","39","40","41"],
    rating: 4.7,
    reviewCount: 190,
    purchased: 950,
    rebuy: 34
  },
  {
    id: 39,
    name: "Puma Mayze Classic",
    brand: "Puma",
    category: "casual",
    price: 2800000,
    images: [
      { color: "white", src: "images/puma-mayze-white.jpg" },
      { color: "black", src: "images/puma-mayze-black.jpg" }
    ],
    short: "Đế platform cao, phong cách đường phố.",
    long: "Puma Mayze Classic nổi bật với đế platform dày, mang lại vẻ ngoài cá tính và hiện đại. Thân giày bằng da cao cấp và các chi tiết vàng đồng tạo nên một đôi giày vừa sang trọng vừa năng động, phù hợp với phái nữ.",
    sizes: ["36","37","38","39"],
    rating: 4.6,
    reviewCount: 160,
    purchased: 800,
    rebuy: 31
  },
  {
    id: 40,
    name: "New Balance 530",
    brand: "New Balance",
    category: "running",
    price: 2800000,
    images: [
      { color: "white", src: "images/newbalance-530-white.jpg" },
      { color: "black", src: "images/newbalance-530-black.jpg" }
    ],
    short: "Phong cách retro, nhẹ và thoáng khí.",
    long: "New Balance 530 là một mẫu giày chạy bộ từ những năm 90, được làm mới cho phong cách hàng ngày. Giày có thân giày bằng lưới thoáng khí và đệm ABZORB êm ái, mang lại sự thoải mái và vẻ ngoài hoài cổ, thời trang.",
    sizes: ["37","38","39","40","41","42"],
    rating: 4.7,
    reviewCount: 230,
    purchased: 1100,
    rebuy: 36
  },
  {
    id: 41,
    name: "Nike Court Legacy",
    brand: "Nike",
    category: "casual",
    price: 1900000,
    images: [
      { color: "white", src: "images/nike-courtlegacy-white.jpg" },
      { color: "black", src: "images/nike-courtlegacy-black.jpg" }
    ],
    short: "Thiết kế sân tennis cổ điển, tối giản.",
    long: "Nike Court Legacy lấy cảm hứng từ những đôi giày tennis cổ điển, với thiết kế đơn giản và form dáng gọn gàng. Giày có thân bằng da bền bỉ và đế ngoài bằng cao su, là một lựa chọn lý tưởng cho phong cách tối giản hàng ngày.",
    sizes: ["38","39","40","41","42"],
    rating: 4.4,
    reviewCount: 150,
    purchased: 700,
    rebuy: 25
  },
  {
    id: 42,
    name: "Adidas Ultrabounce",
    brand: "Adidas",
    category: "running",
    price: 2500000,
    images: [
      { color: "black", src: "images/adidas-ultrabounce-black.jpg" },
      { color: "grey", src: "images/adidas-ultrabounce-grey.jpg" }
    ],
    short: "Đệm đàn hồi tốt, nhẹ và thoải mái.",
    long: "Adidas Ultrabounce được thiết kế để mang lại sự thoải mái và độ đàn hồi tốt cho các buổi chạy bộ hàng ngày. Giày có đế đệm Bounce nhẹ, thân giày bằng vải dệt kim thoáng khí, là một lựa chọn kinh tế và hiệu quả.",
    sizes: ["39","40","41","42","43","44"],
    rating: 4.6,
    reviewCount: 180,
    purchased: 900,
    rebuy: 30
  },
  {
    id: 43,
    name: "Puma x Noah",
    brand: "Puma",
    category: "casual",
    price: 3200000,
    images: [
      { color: "multi", src: "images/puma-x-noah.jpg" },
      { color: "blue", src: "images/puma-x-noah-blue.jpg" }
    ],
    short: "Sự kết hợp độc đáo, đậm chất cổ điển.",
    long: "Puma hợp tác với thương hiệu Noah tạo ra một phiên bản độc đáo, lấy cảm hứng từ phong cách cổ điển của thập niên 70 và 80. Thiết kế tinh tế, màu sắc nổi bật và chất liệu cao cấp tạo nên một đôi giày đặc biệt.",
    sizes: ["39","40","41","42"],
    rating: 4.8,
    reviewCount: 90,
    purchased: 500,
    rebuy: 35
  },
  {
    id: 44,
    name: "New Balance 997H",
    brand: "New Balance",
    category: "casual",
    price: 2500000,
    images: [
      { color: "grey", src: "images/newbalance-997h-grey.jpg" },
      { color: "navy", src: "images/newbalance-997h-navy.jpg" }
    ],
    short: "Cổ điển với sự thoải mái hiện đại.",
    long: "New Balance 997H là một phiên bản làm lại của mẫu 997 cổ điển, với thiết kế hiện đại và đế đệm EVA êm ái. Giày có thân giày bằng da lộn và lưới, là một lựa chọn tuyệt vời cho phong cách casual năng động.",
    sizes: ["38","39","40","41","42","43"],
    rating: 4.6,
    reviewCount: 160,
    purchased: 800,
    rebuy: 28
  },
  {
    id: 45,
    name: "Nike Revolution 6",
    brand: "Nike",
    category: "running",
    price: 1800000,
    images: [
      { color: "black", src: "images/nike-revolution6-black.jpg" },
      { color: "grey", src: "images/nike-revolution6-grey.jpg" }
    ],
    short: "Đơn giản, nhẹ và linh hoạt.",
    long: "Nike Revolution 6 là đôi giày chạy bộ cơ bản, lý tưởng cho người mới bắt đầu. Thân giày bằng lưới thoáng khí và đế đệm mềm mại mang lại sự thoải mái và linh hoạt cho các buổi chạy ngắn và tập luyện hàng ngày.",
    sizes: ["39","40","41","42","43","44"],
    rating: 4.3,
    reviewCount: 200,
    purchased: 1000,
    rebuy: 25
  },
  {
    id: 46,
    name: "Adidas Lite Racer Adapt 4.0",
    brand: "Adidas",
    category: "casual",
    price: 1900000,
    images: [
      { color: "black", src: "images/adidas-literaceradapt4-black.jpg" },
      { color: "navy", src: "images/adidas-literaceradapt4-navy.jpg" }
    ],
    short: "Thiết kế slip-on tiện lợi, thoải mái.",
    long: "Adidas Lite Racer Adapt 4.0 là đôi giày slip-on siêu nhẹ, mang lại sự tiện lợi và thoải mái tối đa. Thân giày bằng vải dệt kim thoáng khí, cùng với đệm Cloudfoam êm ái, lý tưởng cho việc đi lại nhanh chóng và các hoạt động hàng ngày.",
    sizes: ["39","40","41","42","43","44"],
    rating: 4.5,
    reviewCount: 150,
    purchased: 750,
    rebuy: 27
  },
  {
    id: 47,
    name: "Puma Softride Enzo NXT",
    brand: "Puma",
    category: "training",
    price: 2200000,
    images: [
      { color: "black", src: "images/puma-softrideenzonxt-black.jpg" },
      { color: "grey", src: "images/puma-softrideenzonxt-grey.jpg" }
    ],
    short: "Đệm mềm mại, hỗ trợ cho tập luyện.",
    long: "Puma Softride Enzo NXT được thiết kế để mang lại sự thoải mái và đệm mềm mại cho các buổi tập luyện. Công nghệ đệm Softride giúp hấp thụ lực tốt, trong khi thiết kế cổ giày cao mang lại sự hỗ trợ cần thiết.",
    sizes: ["39","40","41","42","43"],
    rating: 4.4,
    reviewCount: 110,
    purchased: 500,
    rebuy: 24
  },
  {
    id: 48,
    name: "New Balance Fresh Foam Roav v2",
    brand: "New Balance",
    category: "casual",
    price: 2800000,
    images: [
      { color: "grey", src: "images/newbalance-freshfoamroavv2-grey.jpg" },
      { color: "black", src: "images/newbalance-freshfoamroavv2-black.jpg" }
    ],
    short: "Phong cách hiện đại, êm ái.",
    long: "New Balance Fresh Foam Roav v2 là đôi giày đa năng, kết hợp giữa phong cách hiện đại và sự thoải mái của công nghệ Fresh Foam. Đế giày có rãnh cắt laser giúp tăng cường độ linh hoạt và độ bám, lý tưởng cho cả đi lại và tập luyện nhẹ.",
    sizes: ["38","39","40","41","42"],
    rating: 4.6,
    reviewCount: 140,
    purchased: 700,
    rebuy: 29
  },
  {
    id: 49,
    name: "Nike Air Max Excee",
    brand: "Nike",
    category: "casual",
    price: 2500000,
    images: [
      { color: "black", src: "images/nike-airmaxexcee-black.jpg" },
      { color: "red", src: "images/nike-airmaxexcee-red.jpg" }
    ],
    short: "Lấy cảm hứng từ Air Max 90, thoải mái.",
    long: "Nike Air Max Excee lấy cảm hứng từ Nike Air Max 90 với các đường nét hiện đại. Túi Air nhìn thấy được ở gót giày mang lại sự thoải mái, trong khi các lớp phủ đa dạng tạo nên vẻ ngoài độc đáo và năng động.",
    sizes: ["38","39","40","41","42"],
    rating: 4.5,
    reviewCount: 160,
    purchased: 800,
    rebuy: 30
  },
  {
    id: 50,
    name: "Adidas Duramo SL",
    brand: "Adidas",
    category: "running",
    price: 1900000,
    images: [
      { color: "black", src: "images/adidas-duramosl-black.jpg" },
      { color: "blue", src: "images/adidas-duramosl-blue.jpg" }
    ],
    short: "Đệm nhẹ, thoải mái cho chạy bộ hàng ngày.",
    long: "Adidas Duramo SL là đôi giày chạy bộ nhẹ và thoải mái, lý tưởng cho các buổi tập hàng ngày. Lớp đệm Lightmotion giúp giảm chấn và mang lại cảm giác nhẹ nhàng, trong khi thân giày bằng lưới thoáng khí giữ cho chân bạn luôn mát mẻ.",
    sizes: ["39","40","41","42","43","44"],
    rating: 4.4,
    reviewCount: 130,
    purchased: 650,
    rebuy: 26
  },
  {
    id: 51,
    name: "Puma X-Ray Speed Lite",
    brand: "Puma",
    category: "casual",
    price: 2000000,
    images: [
      { color: "black", src: "images/puma-xrayspeedlite-black.jpg" },
      { color: "white", src: "images/puma-xrayspeedlite-white.jpg" }
    ],
    short: "Phong cách retro, nhẹ và êm ái.",
    long: "Puma X-Ray Speed Lite mang lại phong cách chunky của thập niên 90 với một thiết kế nhẹ hơn. Thân giày bằng vật liệu tổng hợp và lưới, kết hợp với đế đệm SoftFoam+ mang lại sự thoải mái tối đa cho những ngày năng động.",
    sizes: ["39","40","41","42","43"],
    rating: 4.5,
    reviewCount: 150,
    purchased: 700,
    rebuy: 28
  },
  {
    id: 52,
    name: "New Balance 608v5",
    brand: "New Balance",
    category: "training",
    price: 2100000,
    images: [
      { color: "white-navy", src: "images/newbalance-608v5-whitenavy.jpg" },
      { color: "black", src: "images/newbalance-608v5-black.jpg" }
    ],
    short: "Thoải mái và hỗ trợ cho tập luyện đa năng.",
    long: "New Balance 608v5 là đôi giày tập luyện đa năng, nổi tiếng với sự thoải mái và hỗ trợ. Đế giày ABZORB giúp hấp thụ sốc, trong khi phần thân giày bằng da bền bỉ và dễ vệ sinh. Rất phù hợp cho các hoạt động gym và đi lại hàng ngày.",
    sizes: ["39","40","41","42","43","44"],
    rating: 4.4,
    reviewCount: 120,
    purchased: 600,
    rebuy: 25
  },
  {
    id: 53,
    name: "Nike Air Max Alpha Trainer 5",
    brand: "Nike",
    category: "training",
    price: 2800000,
    images: [
      { color: "black", src: "images/nike-airmaxalphatrainer5-black.jpg" },
      { color: "white", src: "images/nike-airmaxalphatrainer5-white.jpg" }
    ],
    short: "Ổn định, hỗ trợ cho mọi bài tập.",
    long: "Nike Air Max Alpha Trainer 5 được thiết kế để mang lại sự ổn định và hỗ trợ cho các bài tập đa dạng. Đế giày rộng và phẳng giúp giữ thăng bằng tốt, trong khi túi Air ở gót mang lại đệm êm ái cho những bước di chuyển nhanh và nhảy.",
    sizes: ["39","40","41","42","43","44"],
    rating: 4.6,
    reviewCount: 170,
    purchased: 850,
    rebuy: 30
  },
  {
    id: 54,
    name: "Adidas Grand Court 2.0",
    brand: "Adidas",
    category: "casual",
    price: 1800000,
    images: [
      { color: "white", src: "images/adidas-grandcourt2-white.jpg" },
      { color: "navy", src: "images/adidas-grandcourt2-navy.jpg" }
    ],
    short: "Phong cách tennis cổ điển, tối giản.",
    long: "Adidas Grand Court 2.0 là đôi giày lấy cảm hứng từ tennis cổ điển, với thiết kế tối giản và sọc 3D đặc trưng của Adidas. Lớp đệm Cloudfoam Comfort mang lại sự êm ái, lý tưởng cho việc đi lại hàng ngày và phối đồ dễ dàng.",
    sizes: ["36","37","38","39","40"],
    rating: 4.4,
    reviewCount: 140,
    purchased: 700,
    rebuy: 25
  },
  {
    id: 55,
    name: "Puma Fuse 2.0",
    brand: "Puma",
    category: "training",
    price: 2900000,
    images: [
      { color: "black", src: "images/puma-fuse2-black.jpg" },
      { color: "grey", src: "images/puma-fuse2-grey.jpg" }
    ],
    short: "Thiết kế phẳng, ổn định cho tập tạ.",
    long: "Puma Fuse 2.0 là đôi giày lý tưởng cho các buổi tập tạ và các bài tập đòi hỏi sự ổn định. Đế giày phẳng và rộng mang lại nền tảng vững chắc, trong khi công nghệ PUMAGRIP cải thiện độ bám. Thân giày được làm từ vật liệu bền bỉ, chịu được cường độ cao.",
    sizes: ["39","40","41","42","43","44"],
    rating: 4.8,
    reviewCount: 90,
    purchased: 450,
    rebuy: 32
  },
  {
    id: 56,
    name: "New Balance Fresh Foam X 860v13",
    brand: "New Balance",
    category: "running",
    price: 3900000,
    images: [
      { color: "black", src: "images/newbalance-freshfoamx860v13-black.jpg" },
      { color: "blue", src: "images/newbalance-freshfoamx860v13-blue.jpg" }
    ],
    short: "Hỗ trợ ổn định, đệm êm ái.",
    long: "New Balance Fresh Foam X 860v13 là đôi giày hỗ trợ ổn định, phù hợp cho những người chạy có bàn chân lật trong (overpronation). Công nghệ Fresh Foam X mang lại đệm êm ái, trong khi cấu trúc hỗ trợ Medial Post giúp giữ cho bàn chân ở vị trí đúng, giảm thiểu chấn thương.",
    sizes: ["39","40","41","42","43","44"],
    rating: 4.7,
    reviewCount: 200,
    purchased: 1000,
    rebuy: 35
  },
  {
    id: 57,
    name: "Nike Air Force 1 High '07",
    brand: "Nike",
    category: "casual",
    price: 3200000,
    images: [
      { color: "white", src: "images/nike-airforce1high-white.jpg" },
      { color: "black", src: "images/nike-airforce1high-black.jpg" }
    ],
    short: "Đôi giày cổ cao, huyền thoại đường phố.",
    long: "Nike Air Force 1 High '07 là phiên bản cổ cao của đôi giày kinh điển, mang lại sự hỗ trợ tốt hơn cho mắt cá chân và một phong cách mạnh mẽ. Giữ nguyên các chi tiết thiết kế ban đầu, đôi giày này là một biểu tượng thời trang không thể thiếu.",
    sizes: ["38","39","40","41","42","43","44"],
    rating: 4.7,
    reviewCount: 210,
    purchased: 1100,
    rebuy: 32
  },
  {
    id: 58,
    name: "Adidas X_PLR Phase",
    brand: "Adidas",
    category: "casual",
    price: 2400000,
    images: [
      { color: "black", src: "images/adidas-xplrphase-black.jpg" },
      { color: "grey", src: "images/adidas-xplrphase-grey.jpg" }
    ],
    short: "Thiết kế hiện đại, thoải mái hàng ngày.",
    long: "Adidas X_PLR Phase là đôi giày casual lấy cảm hứng từ giày chạy bộ, mang lại sự thoải mái tối đa cho các hoạt động hàng ngày. Thân giày bằng lưới thoáng khí và đệm EVA mềm mại, lý tưởng cho việc đi lại và khám phá thành phố.",
    sizes: ["39","40","41","42","43","44"],
    rating: 4.5,
    reviewCount: 130,
    purchased: 650,
    rebuy: 27
  },
  {
    id: 59,
    name: "Puma Rebound Joy",
    brand: "Puma",
    category: "basketball",
    price: 2100000,
    images: [
      { color: "white", src: "images/puma-reboundjoy-white.jpg" },
      { color: "black", src: "images/puma-reboundjoy-black.jpg" }
    ],
    short: "Phong cách bóng rổ cổ điển, thoải mái.",
    long: "Puma Rebound Joy là một đôi giày bóng rổ cổ điển với thiết kế đơn giản và thoải mái. Thân giày bằng da tổng hợp bền bỉ, đế đệm mềm mại và form dáng cao giúp bạn thoải mái khi di chuyển.",
    sizes: ["39","40","41","42","43"],
    rating: 4.5,
    reviewCount: 120,
    purchased: 600,
    rebuy: 28
  },
  {
    id: 60,
    name: "New Balance 860v13",
    brand: "New Balance",
    category: "running",
    price: 3900000,
    images: [
      { color: "blue", src: "images/newbalance-860v13-blue.jpg" },
      { color: "grey", src: "images/newbalance-860v13-grey.jpg" }
    ],
    short: "Hỗ trợ ổn định, đệm êm ái.",
    long: "New Balance 860v13 được thiết kế để mang lại sự ổn định và hỗ trợ cho những người chạy có bàn chân lật trong (overpronation). Công nghệ Fresh Foam X mang lại đệm êm ái, trong khi cấu trúc hỗ trợ Medial Post giúp giữ cho bàn chân ở vị trí đúng, giảm thiểu chấn thương.",
    sizes: ["39","40","41","42","43","44"],
    rating: 4.7,
    reviewCount: 200,
    purchased: 1000,
    rebuy: 35
  }
];

const modelImageSets = {
  duongpho: [
    "images/duongpho1.png",
    "images/duongpho2.png",
    "images/duongpho3.png",
    "images/duongpho4.png"
  ],
  urban: [
    "images/urban1.png",
    "images/urban2.png",
    "images/urban3.png",
    "images/urban4.png"
  ],
  thethao: [
    "images/thethao1.png",
    "images/thethao2.png",
    "images/thethao3.png"
  ],
  chaybo: [
    "images/chaybo1.png",
    "images/chaybo2.png",
    "images/chaybo3.png"
  ],
  casual: [
    "images/thuongngay1.png",
    "images/thuongngay2.png",
    "images/thuongngay3.png"
  ],
  mixmatch: [
    "images/phoido1.png",
    "images/phoido2.png",
    "images/phoido3.png"
  ],
};


let cart=[];
let currentHero=0;
let heroTimer=null;
const slidesCount=4;
let loggedIn = false;

let viewList=[...products];
const PER_PAGE=12;
let currentPage=1;

document.addEventListener("DOMContentLoaded",()=>{
  initHeader();
  initHero();
  initFeatured();
  initFilters();
  initSearch();
  initCart();
  initAuth();
  initContact();
  initServices();
  initModelViewer();

  renderProducts(viewList);
});

function fmtVND(n){return new Intl.NumberFormat('vi-VN',{style:'currency',currency:'VND'}).format(n)}

function initHeader(){
  const header=document.querySelector('.site-header');
  const toggle=()=>{const atTop=window.scrollY<50;header.classList.toggle('transparent',atTop);header.classList.toggle('solid',!atTop)};
  toggle();window.addEventListener('scroll',toggle);
  const ham=document.getElementById('hamburger');
  const nav=document.querySelector('.main-nav');
  ham.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex'});
  updateAuthButton();
}

function initHero(){
  const slider=document.getElementById('hero-slider');
  const dots=document.getElementById('hero-dots');
  for(let i=0;i<slidesCount;i++){const b=document.createElement('button');if(i===0)b.classList.add('active');b.addEventListener('click',()=>goHero(i));dots.appendChild(b)}
  document.getElementById('hero-prev').addEventListener('click',()=>goHero((currentHero-1+slidesCount)%slidesCount));
  document.getElementById('hero-next').addEventListener('click',()=>goHero((currentHero+1)%slidesCount));
  heroTimer=setInterval(()=>goHero((currentHero+1)%slidesCount),5000);
  function goHero(i){currentHero=i;slider.style.transform=`translateX(-${i*100}%)`;[...dots.children].forEach((d,idx)=>d.classList.toggle('active',idx===i))}
  window.goHero=goHero;

  const end=Date.now()+2*60*60*1000;const el=document.getElementById('flash-countdown');
  function tick(){const diff=Math.max(0,end-Date.now());const h=String(Math.floor(diff/3600000)).padStart(2,'0');const m=String(Math.floor((diff%3600000)/60000)).padStart(2,'0');const s=String(Math.floor((diff%60000)/1000)).padStart(2,'0');if(el)el.textContent=`${h}:${m}:${s}`}
  setInterval(tick,1000);tick();
}

function initFeatured(){
  const track=document.getElementById('marquee-track');
  // Lọc sản phẩm có rating cao và rebuy nhiều
  const featuredProducts = products
    .filter(p => p.rating >= 4.7 && p.rebuy >= 35) // Ví dụ: rating từ 4.7 trở lên và rebuy từ 35% trở lên
    .sort((a, b) => (b.rating * b.rebuy) - (a.rating * a.rebuy)); // Sắp xếp theo tổng điểm rating và rebuy

  // Lấy 10 sản phẩm nổi bật nhất, nếu không đủ thì lặp lại
  let ten = featuredProducts.slice(0, 10);
  if (ten.length < 10) {
    const remaining = 10 - ten.length;
    ten = [...ten, ...products.slice(0, remaining)]; // Thêm các sản phẩm đầu tiên nếu không đủ
  }

  function card(p){const d=document.createElement('div');d.className='card';d.style.minWidth='260px';d.innerHTML=`
    <img class="thumb" src="${p.images[0].src}" alt="${p.name}"/>
    <div class="body">
      <div style="font-weight:800">${p.name}</div>
      <div class="rating">${renderStars(p.rating)}<span style="color:#6b7280;font-size:12px">(${p.reviewCount})</span></div>
      <div class="price">${fmtVND(p.price)}</div>
      <div class="actions">
        <button class="btn" data-add="${p.id}">Thêm vào giỏ</button>
      </div>
    </div>`;
    d.addEventListener('click', (e) => {
      if (!e.target.closest('[data-add]')) {
        openProductModal(p.id);
      }
    });
    return d;
  }
  const frag=document.createDocumentFragment();
  const dup=[...ten,...ten]; // Duplicate for continuous marquee effect
  dup.forEach(p=>frag.appendChild(card(p)));
  track.appendChild(frag);
  track.addEventListener('click',e=>{
    const add=e.target.closest('[data-add]');
    if(add){addToCart(+add.dataset.add)}
  });
}

function renderStars(r){const full=Math.round(r||0);let h='';for(let i=1;i<=5;i++){h+=i<=full?'<i class="fa-solid fa-star"></i>':'<i class="fa-regular fa-star"></i>'}return h}

function renderProducts(arr){
  viewList=[...arr];
  const grid=document.getElementById('products-grid');grid.innerHTML='';
  const start=(currentPage-1)*PER_PAGE;
  const pageItems=viewList.slice(start,start+PER_PAGE);

  const frag=document.createDocumentFragment();
  pageItems.forEach(p=>{
    const el=document.createElement('div');el.className='card';el.innerHTML=`
      <img class="thumb" src="${p.images[0].src}" alt="${p.name}"/>
      <div class="body">
        <div style="display:flex;justify-content:space-between;gap:8px;align-items:center">
          <div style="font-weight:800">${p.name}</div>
          <span class="chip">${p.brand}</span>
        </div>
        <div class="rating">${renderStars(p.rating)}<span style="color:#6b7280;font-size:12px">(${p.reviewCount})</span></div>
        <div class="meta">
          <span>Đã mua: ${p.purchased}</span>
          <span>Mua lại: ${p.rebuy}%</span>
        </div>
        <div class="price">${fmtVND(p.price)}</div>
        <div style="color:#6b7280;font-size:14px">${p.short}</div>
        <div class="actions">
          <button class="btn" data-add="${p.id}">Thêm vào giỏ</button>
        </div>
      </div>`;
    el.addEventListener('click', (e) => {
      if (!e.target.closest('[data-add]')) {
        openProductModal(p.id);
      }
    });
    frag.appendChild(el);
  });
  grid.appendChild(frag);
  grid.onclick=(e)=>{
    const add=e.target.closest('[data-add]');
    if(add){addToCart(+add.dataset.add)}
  };

  renderPagination();
}

function renderPagination(){
  const total=viewList.length;
  const pages=Math.max(1,Math.ceil(total/PER_PAGE));
  const wrap=document.getElementById('pagination');wrap.innerHTML='';
  function makeBtn(lbl,pg,active=false,disabled=false){
    const b=document.createElement('button');b.textContent=lbl;
    if(active) b.classList.add('active');
    if(disabled) b.disabled=true;
    b.addEventListener('click',()=>{currentPage=pg;renderProducts(viewList);window.scrollTo({top:document.getElementById('products').offsetTop-70,behavior:'smooth'})});
    return b;
  }
  wrap.appendChild(makeBtn("«",Math.max(1,currentPage-1),false,currentPage===1));
  const windowSize=5;
  let start=Math.max(1,currentPage-Math.floor(windowSize/2));
  let end=Math.min(pages,start+windowSize-1);
  start=Math.max(1,end-windowSize+1);
  for(let i=start;i<=end;i++){wrap.appendChild(makeBtn(String(i),i,i===currentPage))}
  wrap.appendChild(makeBtn("»",Math.min(pages,currentPage+1),false,currentPage===pages));
}

let filterTimeout;
function initFilters(){
  const sizes=[...new Set(products.flatMap(p=>p.sizes))].sort((a,b)=>+a-+b);
  const wrap=document.getElementById('f-sizes');sizes.forEach(s=>{const b=document.createElement('button');b.type='button';b.className='chip';b.textContent=s;b.dataset.size=s;wrap.appendChild(b)});
  wrap.addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;b.classList.toggle('active');debounceApplyFilters()});
  const range=document.getElementById('f-rating');const val=document.getElementById('rating-val');range.addEventListener('input',()=>{val.textContent=range.value;debounceApplyFilters()});

  document.getElementById('f-category').addEventListener('change', debounceApplyFilters);
  document.getElementById('f-brand').addEventListener('change', debounceApplyFilters);
  document.getElementById('f-min').addEventListener('input', debounceApplyFilters);
  document.getElementById('f-max').addEventListener('input', debounceApplyFilters);
  document.getElementById('f-sort').addEventListener('change', debounceApplyFilters);

  document.getElementById('btn-reset').addEventListener('click',()=>{
    document.getElementById('f-category').value='all';
    document.getElementById('f-brand').value='all';
    document.getElementById('f-min').value='';
    document.getElementById('f-max').value='';
    range.value=0;
    val.textContent='0';
    wrap.querySelectorAll('.chip.active').forEach(c=>c.classList.remove('active'));
    document.getElementById('f-sort').value='popular';
    currentPage=1;
    renderProducts(products);
  });
}

function debounceApplyFilters() {
  clearTimeout(filterTimeout);
  filterTimeout = setTimeout(applyFilters, 300);
}

function applyFilters(){
  const cat=document.getElementById('f-category').value;
  const brand=document.getElementById('f-brand').value;
  const min=+document.getElementById('f-min').value||0;
  const max=+document.getElementById('f-max').value||Infinity;
  const rating=+document.getElementById('f-rating').value||0;
  const sizes=[...document.querySelectorAll('#f-sizes .chip.active')].map(x=>x.dataset.size);
  const sort=document.getElementById('f-sort').value;
  let out=products.filter(p=>(cat==='all'||p.category===cat)&&(brand==='all'||p.brand===brand)&&p.price>=min&&p.price<=max&&p.rating>=rating&&(sizes.length===0||sizes.some(s=>p.sizes.includes(s))));
  if(sort==='price-asc') out.sort((a,b)=>a.price-b.price);
  if(sort==='price-desc') out.sort((a,b)=>b.price-a.price);
  if(sort==='rating-desc') out.sort((a,b)=>b.rating-a.rating);
  if(sort==='purchased-desc') out.sort((a,b)=>b.purchased-a.purchased);
  currentPage=1;
  renderProducts(out);
  toast(`Tìm thấy ${out.length} sản phẩm`);
}

function initSearch(){
  const doSearch=()=>{
    const q=document.getElementById('search-input').value.trim().toLowerCase();
    const res=products.filter(p=>p.name.toLowerCase().includes(q)||p.short.toLowerCase().includes(q)||p.long.toLowerCase().includes(q));
    
    if (res.length === 1) {
      openProductModal(res[0].id);
    } else {
      currentPage=1;
      renderProducts(res);
      toast(`Kết quả: ${res.length}`);
    }
  }
  document.getElementById('btn-search').addEventListener('click',doSearch);
  document.getElementById('search-input').addEventListener('keydown',e=>{if(e.key==='Enter')doSearch()});
}

function initCart(){
  const saved=localStorage.getItem('cart');cart=saved?JSON.parse(saved):[];updateCart();
  document.getElementById('btn-cart').addEventListener('click',()=>toggleCart(true));
  document.getElementById('cart-close').addEventListener('click',()=>toggleCart(false));
  document.getElementById('btn-checkout').addEventListener('click',()=>{if(cart.length===0){alert('Giỏ hàng trống');return}alert('Thanh toán thành công (demo)');cart=[];persistCart();updateCart();toggleCart(false)});
}

function addToCart(id) {
  openProductModal(id);
}

function addProductToCartConfirmed(id, size, color, quantity) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  const existingItemIndex = cart.findIndex(item => item.id === id && item.size === size && item.color === color);

  if (existingItemIndex > -1) {
    cart[existingItemIndex].q += quantity;
  } else {
    cart.push({ id: p.id, name: p.name, price: p.price, img: p.images.find(img => img.color === color)?.src || p.images[0].src, q: quantity, size: size, color: color });
  }
  persistCart();
  updateCart();
  toast(`Đã thêm ${quantity} x ${p.name} Size: ${size}, Màu:${color} vào giỏ`);
  document.getElementById('product-modal').classList.remove('show');
  document.getElementById('overlay').classList.remove('show');
}

function persistCart(){localStorage.setItem('cart',JSON.stringify(cart))}
function updateCart(){
  const list=document.getElementById('cart-items');list.innerHTML='';
  let total=0;
  cart.forEach((i,idx)=>{
    total+=i.price*i.q;
    const row=document.createElement('div');row.className='cart-item';row.innerHTML=`
      <img src="${i.img}" alt="${i.name}"/>
      <div style="flex:1">
        <div style="font-weight:800">${i.name}</div>
        <div style="color:#111827">${fmtVND(i.price)}</div>
        <div style="font-size:12px; color:var(--muted);">Size: ${i.size || 'N/A'}, Màu: <span style="display:inline-block; width:12px; height:12px; border-radius:50%; background-color:${i.color || 'transparent'}; border:1px solid #ccc;"></span></div>
        <div style="display:flex;gap:6px;align-items:center;margin-top:6px">
          <button class="icon-btn" data-dec="${idx}"><i class="fa-solid fa-minus"></i></button>
          <span>${i.q}</span>
          <button class="icon-btn" data-inc="${idx}"><i class="fa-solid fa-plus"></i></button>
          <button class="icon-btn" data-del="${idx}" style="margin-left:auto;color:#ef4444"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>`;
    list.appendChild(row);
  });
  list.onclick=(e)=>{
    const dec=e.target.closest('[data-dec]');const inc=e.target.closest('[data-inc]');const del=e.target.closest('[data-del]');
    if(dec){const k=+dec.dataset.dec;cart[k].q=Math.max(1,cart[k].q-1);persistCart();updateCart()}
    if(inc){const k=+inc.dataset.inc;cart[k].q++;persistCart();updateCart()}
    if(del){const k=+del.dataset.del;cart.splice(k,1);persistCart();updateCart()}
  };
  document.getElementById('cart-total').textContent=fmtVND(total);
  document.getElementById('cart-count').textContent=cart.reduce((s,i)=>s+i.q,0);
}
function toggleCart(open){const c=document.getElementById('cart');const ov=document.getElementById('overlay');if(open){c.classList.add('open');ov.classList.add('show')}else{c.classList.remove('open');ov.classList.remove('show')}}

function openProductModal(id){
  const p=products.find(x=>x.id===id);if(!p)return;
  const ov=document.getElementById('overlay');const modal=document.getElementById('product-modal');
  const hero=document.getElementById('pm-hero');const thumbs=document.getElementById('pm-thumbs');
  const name=document.getElementById('pm-name');const stars=document.getElementById('pm-stars');
  const rc=document.getElementById('pm-review-count');const pur=document.getElementById('pm-purchased');const reb=document.getElementById('pm-rebuy');
  const price=document.getElementById('pm-price');const desc=document.getElementById('pm-desc');
  const sizesContainer=document.getElementById('pm-size-list');
  const colorsContainer = document.getElementById('pm-color-list');
  const quantityInput = document.getElementById('pm-quantity-input');

  hero.src=p.images[0].src;
  thumbs.innerHTML='';
  p.images.forEach((imgData,idx)=>{
    const im=document.createElement('img');
    im.src=imgData.src;
    im.alt=`${p.name} - ${imgData.color}`;
    if(idx===0)im.classList.add('active');
    im.addEventListener('click',()=>{
      hero.src=imgData.src;
      thumbs.querySelectorAll('img').forEach(x=>x.classList.remove('active'));
      im.classList.add('active');
    });
    thumbs.appendChild(im);
  });

  name.textContent=p.name;stars.innerHTML=renderStars(p.rating);rc.textContent=`${p.reviewCount} đánh giá`;pur.textContent=`Đã mua ${p.purchased}`;reb.textContent=`Mua lại ${p.rebuy}%`;price.textContent=fmtVND(p.price);desc.textContent=p.long;
  
  sizesContainer.innerHTML='';
  p.sizes.forEach(s=>{
    const b=document.createElement('button');b.className='chip';b.textContent=s;b.dataset.size=s;
    b.addEventListener('click',()=>{sizesContainer.querySelectorAll('.chip').forEach(x=>x.classList.remove('active'));b.classList.add('active')});
    sizesContainer.appendChild(b);
  });

  colorsContainer.innerHTML = '';
  p.images.forEach(imgData => {
    const b = document.createElement('button');
    b.className = 'chip';
    b.style.backgroundColor = imgData.color;
    b.dataset.color = imgData.color;
    b.dataset.imgSrc = imgData.src; // Store image source for color
    b.addEventListener('click', () => {
      colorsContainer.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      hero.src = imgData.src; // Change main image on color selection
      thumbs.querySelectorAll('img').forEach(x=>x.classList.remove('active'));
      thumbs.querySelector(`img[src="${imgData.src}"]`).classList.add('active');
    });
    colorsContainer.appendChild(b);
  });

  quantityInput.value = 1;

  document.getElementById('pm-add').onclick=()=>{
    const selectedSizeElement = sizesContainer.querySelector('.chip.active');
    const selectedColorElement = colorsContainer.querySelector('.chip.active');
    const quantity = parseInt(quantityInput.value);

    if (!selectedSizeElement) {
      toast('Vui lòng chọn kích thước!');
      return;
    }
    if (!selectedColorElement) {
      toast('Vui lòng chọn màu sắc!');
      return;
    }
    if (quantity < 1) {
      toast('Số lượng phải lớn hơn 0!');
      return;
    }

    const size = selectedSizeElement.dataset.size;
    const color = selectedColorElement.dataset.color;
    addProductToCartConfirmed(p.id, size, color, quantity);
  };
  ov.classList.add('show');modal.classList.add('show');
}
document.getElementById('pm-close').addEventListener('click',()=>{document.getElementById('overlay').classList.remove('show');document.getElementById('product-modal').classList.remove('show')});
document.getElementById('overlay').addEventListener('click',()=>{document.querySelectorAll('.modal').forEach(m=>m.classList.remove('show'));document.getElementById('overlay').classList.remove('show')});

function initAuth(){
  const modal=document.getElementById('auth-modal');const ov=document.getElementById('overlay');
  document.getElementById('btn-login').addEventListener('click',()=>{
    if (loggedIn) {
      if (confirm('Bạn có muốn đăng xuất không?')) {
        loggedIn = false;
        updateAuthButton();
        toast('Đã đăng xuất.');
      }
    } else {
      ov.classList.add('show');modal.classList.add('show');
    }
  });
  modal.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{modal.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));t.classList.add('active');modal.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('show'));document.getElementById('tab-'+t.dataset.tab).classList.add('show')}));
  document.getElementById('do-login').addEventListener('click',()=>{const e=document.getElementById('login-email').value.trim();const p=document.getElementById('login-pass').value.trim();if(!e||!p){alert('Vui lòng nhập đầy đủ');return}toast('Đăng nhập thành công (demo)');loggedIn = true; updateAuthButton(); modal.classList.remove('show');ov.classList.remove('show')});
  document.getElementById('do-register').addEventListener('click',()=>{const n=document.getElementById('reg-name').value.trim();const e=document.getElementById('reg-email').value.trim();const p=document.getElementById('reg-pass').value.trim();if(!n||!e||!p){alert('Vui lòng nhập đầy đủ');return}toast('Tạo tài khoản thành công (demo)');loggedIn = true; updateAuthButton(); modal.classList.remove('show');ov.classList.remove('show')});
}

function updateAuthButton() {
  const btnLogin = document.getElementById('btn-login');
  if (loggedIn) {
    btnLogin.innerHTML = '<i class="fa-solid fa-user"></i> Tài khoản';
    btnLogin.classList.remove('ghost');
    btnLogin.classList.add('icon-btn');
  } else {
    btnLogin.innerHTML = 'Đăng nhập';
    btnLogin.classList.add('ghost');
    btnLogin.classList.remove('icon-btn');
  }
}

function initContact(){document.getElementById('contact-form').addEventListener('submit',e=>{e.preventDefault();const n=document.getElementById('c-name').value.trim();const em=document.getElementById('c-email').value.trim();const ph=document.getElementById('c-phone').value.trim();const msg=document.getElementById('c-msg').value.trim();if(!n||!em||!ph||!msg){alert('Vui lòng điền đầy đủ thông tin');return}toast('Đã gửi liên hệ! Chúng tôi sẽ phản hồi sớm.');e.target.reset()})}

function initServices(){
  const ticker=document.getElementById('service-ticker');
  if(ticker){setTimeout(()=>ticker.classList.add('active'),300)}

  document.querySelectorAll('.service-card .svc-more').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const card=btn.closest('.service-card');
      const detail=card.dataset.detail||"";
      const url = card.dataset.url;
      if (url) {
        window.open(url, '_blank'); // Open in new tab
      } else {
        toast(detail);
      }
    });
  });
}

function initModelViewer() {
  const modelsGrid = document.getElementById('models-grid');
  const modelModal = document.getElementById('model-modal');
  const mmHero = document.getElementById('mm-hero');
  const mmThumbs = document.getElementById('mm-thumbs');
  const mmClose = document.getElementById('mm-close');
  const overlay = document.getElementById('overlay');

  modelsGrid.addEventListener('click', (e) => {
    const figure = e.target.closest('figure');
    if (figure) {
      const imageSetKey = figure.dataset.imgSet;
      openModelModal(imageSetKey);
    }
  });

  mmClose.addEventListener('click', () => {
    modelModal.classList.remove('show');
    overlay.classList.remove('show');
  });

  function openModelModal(imageSetKey) {
    const images = modelImageSets[imageSetKey];
    if (!images || images.length === 0) return;

    mmHero.src = images[0];
    mmThumbs.innerHTML = '';

    images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'model thumbnail';
      if (src === images[0]) {
        img.classList.add('active');
      }
      img.addEventListener('click', () => {
        mmHero.src = src;
        mmThumbs.querySelectorAll('img').forEach(thumb => thumb.classList.remove('active'));
        img.classList.add('active');
      });
      mmThumbs.appendChild(img);
    });

    overlay.classList.add('show');
    modelModal.classList.add('show');
  }
}

function toast(t){const c=document.getElementById('toast');const d=document.createElement('div');d.className='toast';d.textContent=t;c.appendChild(d);setTimeout(()=>{d.style.opacity=0;setTimeout(()=>d.remove(),300)},2200)}
