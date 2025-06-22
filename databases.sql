-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: mysql:3306
-- Thời gian đã tạo: Th6 22, 2025 lúc 03:04 PM
-- Phiên bản máy phục vụ: 9.0.1
-- Phiên bản PHP: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `shopapp_online`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `banners`
--

CREATE TABLE `banners` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` text,
  `status` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `banner_details`
--

CREATE TABLE `banner_details` (
  `id` int NOT NULL,
  `product_id` int NOT NULL,
  `banner_id` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `brands`
--

CREATE TABLE `brands` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `brands`
--

INSERT INTO `brands` (`id`, `name`, `image`, `created_at`, `updated_at`) VALUES
(1, 'LG', NULL, '2025-06-17 04:56:20', '2025-06-17 04:56:20'),
(2, 'Samsung', NULL, '2025-06-17 04:56:28', '2025-06-17 04:56:28'),
(3, 'Apple', NULL, '2025-06-17 04:56:34', '2025-06-17 04:56:34'),
(4, 'Sonny', NULL, '2025-06-20 08:43:03', '2025-06-20 08:43:03'),
(5, 'Nokia', NULL, '2025-06-20 08:43:23', '2025-06-20 08:43:23'),
(6, 'Google', NULL, '2025-06-20 08:44:13', '2025-06-20 08:44:13');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `name`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Điện thoại thông minh', NULL, '2025-06-17 04:56:38', '2025-06-17 04:56:38'),
(2, 'Đồ gia dụng', NULL, '2025-06-17 04:56:56', '2025-06-17 04:56:56'),
(3, 'Thiết bị điện tử', NULL, '2025-06-20 08:45:57', '2025-06-20 08:45:57');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `feedbacks`
--

CREATE TABLE `feedbacks` (
  `id` int NOT NULL,
  `product_id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `star` int DEFAULT NULL,
  `content` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `news`
--

CREATE TABLE `news` (
  `id` int NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `image` text,
  `content` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `news_details`
--

CREATE TABLE `news_details` (
  `id` int NOT NULL,
  `product_id` int NOT NULL,
  `news_id` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `status` int DEFAULT NULL,
  `note` text,
  `total` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_details`
--

CREATE TABLE `order_details` (
  `id` int NOT NULL,
  `product_id` int NOT NULL,
  `order_id` int NOT NULL,
  `price` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` text,
  `price` int DEFAULT '0',
  `oldprice` int DEFAULT '0',
  `description` text,
  `specification` text,
  `buyturn` int DEFAULT '0',
  `quantity` int DEFAULT '0',
  `brand_id` int NOT NULL,
  `category_id` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `image`, `price`, `oldprice`, `description`, `specification`, `buyturn`, `quantity`, `brand_id`, `category_id`, `created_at`, `updated_at`) VALUES
(8, 'Galaxy S22 Ultra', '', 24990000, 27990000, 'Galaxy S22•Ultra Ultra với bút S Pen• tích hợp, hiệu năng đột phá và khả năng chụp ảnh chuyên nghiệp, là sự kết hợp hoàn hảo giữa điện thoại và máy tính bảng trong một thiết kế sang trọng', 'Màn hình• Dynamic AMOLED•2X•6.8 inch,\' độ phân giải 3200x1440; Chipset •Exynos 2200; RAM •12GB; Bộ nhớ trong 256GB; Camera sau: chính• 108MP, ultra-wide 12MP, telephoto 10MP và periscope 10MP;• Camera trước: 40MP; Pin 5000 mAh với sạc siêu nhanh.', 320, 85, 2, 1, '2025-06-17 05:15:52', '2025-06-17 05:15:52'),
(15, 'Galaxy S23 Ultra', '', 24990000, 27990000, 'Galaxy S23 Ultra với bút S Pen tích hợp, hiệu năng đột phá và camera chuyên nghiệp.', 'Màn hình 6.8\'\' AMOLED 2X; Chip Snapdragon 8 Gen 2; RAM 12GB; ROM 256GB; Camera 200MP; Pin 5000mAh.', 320, 82, 2, 1, '2025-06-20 08:38:35', '2025-06-20 08:38:35'),
(16, 'iPhone 15 Pro Max', '', 33990000, 36990000, 'Flagship mạnh mẽ nhất của Apple với vi xử lý A17 Pro và thiết kế titan sang trọng.', 'Màn hình 6.7\'\' OLED; Chip A17 Pro; RAM 8GB; ROM 256GB; Camera chính 48MP; Pin 4422mAh.', 500, 75, 3, 1, '2025-06-20 08:38:56', '2025-06-20 08:38:56'),
(17, 'LG Velvet', '', 13990000, 15990000, 'Thiết kế bóng bẩy, hiệu năng mượt mà với Snapdragon 845 và màn hình OLED tuyệt đẹp.', 'Màn hình 6.8\'\' P-OLED; Chip Snapdragon 845; RAM 6GB; ROM 128GB; Camera 48MP; Pin 4300mAh.', 140, 33, 1, 1, '2025-06-20 08:39:09', '2025-06-20 08:39:09'),
(18, 'Samsung Galaxy Z Flip 5', '', 25990000, 29990000, 'Điện thoại gập kiểu vỏ sò với màn hình phụ 3.4\'\' đa năng và thiết kế thời trang.', 'Màn hình 6.7\'\' AMOLED 2X; Chip Snapdragon 8 Gen 2; RAM 8GB; ROM 256GB; Camera kép 12MP; Pin 3700mAh.', 210, 60, 2, 1, '2025-06-20 08:39:51', '2025-06-20 08:39:51'),
(19, 'iPhone 13', '', 17990000, 20990000, 'Hiệu năng ổn định, camera chất lượng cao và hệ sinh thái iOS tối ưu.', 'Màn hình 6.1\'\' Super Retina; Chip A15 Bionic; RAM 4GB; ROM 128GB; Camera kép 12MP; Pin 3227mAh.', 600, 120, 3, 1, '2025-06-20 08:40:00', '2025-06-20 08:40:00'),
(20, 'LG Styler S5GOC', '', 49900000, 52900000, 'Tủ chăm sóc quần áo thông minh, diệt khuẩn, khử mùi bằng hơi nước.', 'Dung tích 5 bộ đồ; Công nghệ TrueSteam; Kết nối Wi-Fi; Màn hình cảm ứng; Chống nhăn vải.', 20, 10, 1, 2, '2025-06-20 08:40:09', '2025-06-20 08:40:09'),
(21, 'Samsung Bespoke AirDresser', '', 52900000, 59900000, 'Tủ chăm sóc áo quần với công nghệ hơi nước JetSteam diệt khuẩn 99.9%.', 'Công nghệ JetSteam, Deodorizing Filter; Kết nối SmartThings; Chống nhăn & làm mới vải.', 18, 5, 2, 2, '2025-06-20 08:40:16', '2025-06-20 08:40:16'),
(22, 'iPhone SE 2022', '', 9990000, 11990000, 'Thiết kế cổ điển, hiệu năng mạnh mẽ với chip A15, giá tốt trong hệ sinh thái Apple.', 'Màn hình 4.7\'\' Retina HD; Chip A15 Bionic; RAM 4GB; ROM 64GB; Camera 12MP; Pin 2018mAh.', 190, 40, 3, 1, '2025-06-20 08:40:26', '2025-06-20 08:40:26'),
(23, 'LG Smart Inverter Microwave', '', 3290000, 3890000, 'Lò vi sóng Inverter tiết kiệm điện, nấu chín đều và giữ được dưỡng chất.', 'Công suất 1000W; Dung tích 25L; Chức năng hâm, nấu, rã đông; Bảng điều khiển cảm ứng.', 85, 22, 1, 2, '2025-06-20 08:40:34', '2025-06-20 08:40:34'),
(24, 'Samsung Galaxy A54', '', 8990000, 10490000, 'Màn hình lớn, pin khỏe, camera ổn định cho nhu cầu sử dụng hằng ngày.', 'Màn hình 6.4\'\' Super AMOLED; Chip Exynos 1380; RAM 8GB; ROM 128GB; Camera 50MP; Pin 5000mAh.', 260, 45, 2, 1, '2025-06-20 08:40:42', '2025-06-20 08:40:42'),
(25, 'iPhone 14', '', 20990000, 22990000, 'Camera cải tiến, hiệu năng ổn định, phù hợp với người dùng phổ thông và yêu thích iOS.', 'Màn hình 6.1\'\' OLED; Chip A15 Bionic; RAM 6GB; ROM 128GB; Camera kép 12MP; Pin 3279mAh.', 480, 110, 3, 1, '2025-06-20 08:40:50', '2025-06-20 08:40:50'),
(26, 'Samsung WindFree Air Conditioner', '', 13490000, 15490000, 'Máy lạnh WindFree không gió buốt, tiết kiệm điện, làm mát nhẹ nhàng.', 'Công suất 1.5HP; Công nghệ WindFree; Digital Inverter Boost; Bộ lọc kháng khuẩn; SmartThings.', 66, 15, 2, 2, '2025-06-20 08:40:58', '2025-06-20 08:40:58'),
(27, 'Sony WH-1000XM5', '', 8990000, 9990000, 'Tai nghe chống ồn cao cấp nhất của Sony với chất âm tuyệt hảo và pin lâu.', 'Driver 30mm; Chống ồn chủ động; Bluetooth 5.2; Pin 30h; Sạc nhanh USB-C.', 150, 38, 4, 3, '2025-06-20 08:47:52', '2025-06-20 08:47:52'),
(28, 'Sony Bravia XR A80K', '', 36990000, 41990000, 'TV OLED 55 inch cao cấp, hình ảnh sắc nét với công nghệ XR OLED Contrast Pro.', 'OLED 55\'\' 4K; Google TV; HDR10/Dolby Vision; 120Hz; HDMI 2.1.', 40, 10, 4, 3, '2025-06-20 08:48:04', '2025-06-20 08:48:04'),
(29, 'Nokia G21', '', 3790000, 4490000, 'Smartphone giá rẻ, pin cực trâu với thời lượng sử dụng đến 3 ngày.', 'Màn hình 6.5\'\' HD+; Chip Unisoc T606; RAM 4GB; ROM 64GB; Pin 5050mAh.', 95, 58, 5, 1, '2025-06-20 08:48:13', '2025-06-20 08:48:13'),
(30, 'Sony SRS-XB43', '', 3990000, 4590000, 'Loa Bluetooth chống nước, âm bass sâu và đèn LED sống động.', 'Bluetooth 5.0; Extra Bass; IP67; Pin 24h; Sạc USB-C.', 78, 22, 4, 3, '2025-06-20 08:48:22', '2025-06-20 08:48:22'),
(31, 'Nokia 8210 4G', '', 1390000, 1590000, 'Điện thoại phổ thông cổ điển, pin lâu và hỗ trợ 4G, phù hợp cho người lớn tuổi.', 'Màn hình 2.8\'\' QVGA; ROM 128MB; Hỗ trợ thẻ nhớ; Pin 1450mAh; Khe SIM kép.', 190, 100, 5, 1, '2025-06-20 08:48:57', '2025-06-20 08:48:57'),
(32, 'Sony ZV-E10', '', 19990000, 21990000, 'Máy ảnh vlog nhỏ gọn với cảm biến APS-C, quay video 4K sắc nét.', 'Cảm biến APS-C 24.2MP; Quay 4K/30fps; Màn xoay; Micro 3 hướng.', 60, 12, 4, 3, '2025-06-20 08:49:05', '2025-06-20 08:49:05'),
(33, 'Nokia T21 Tablet', '', 5590000, 6490000, 'Máy tính bảng giá tốt, pin khỏe, màn hình lớn cho giải trí và học tập.', 'Màn hình 10.4\'\' 2K; Chip Unisoc T612; RAM 4GB; ROM 64GB; Pin 8200mAh.', 70, 26, 5, 3, '2025-06-20 08:49:13', '2025-06-20 08:49:13'),
(34, 'Sony Alpha A7 IV', '', 52990000, 59990000, 'Máy ảnh mirrorless full-frame dành cho dân chuyên với công nghệ lấy nét tiên tiến.', 'Cảm biến 33MP Full-frame; Quay 4K 60fps; Dual Card Slot; ISO 204800.', 25, 8, 4, 3, '2025-06-20 08:49:20', '2025-06-20 08:49:20'),
(35, 'Nokia C12', '', 2190000, 2590000, 'Dòng smartphone giá rẻ, thiết kế gọn nhẹ, pin trâu cho người dùng phổ thông.', 'Màn hình 6.3\'\' HD+; Chip Unisoc SC9863A1; RAM 2GB; ROM 64GB; Pin 3000mAh.', 88, 30, 5, 1, '2025-06-20 08:49:27', '2025-06-20 08:49:27'),
(36, 'Sony HT-S40R', '', 6990000, 7990000, 'Dàn âm thanh 5.1 kênh mạnh mẽ, mang lại trải nghiệm rạp chiếu phim tại gia.', 'Công suất 600W; Kết nối Bluetooth; Hỗ trợ HDMI ARC, USB, Optical; Subwoofer không dây.', 43, 14, 4, 3, '2025-06-20 08:49:35', '2025-06-20 08:49:35');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20250612053906-create-user.js'),
('20250612080756-create-category.js'),
('20250612081544-create-brand.js'),
('20250612082754-create-news.js'),
('20250612082859-create-banner.js'),
('20250616073828-create-order.js'),
('20250616075346-create-product.js'),
('20250616080658-create-banner-detail.js'),
('20250616080658-create-news-detail.js'),
('20250616081707-create-order-detail.js'),
('20250616083045-create-feedback.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `role` int DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `phone` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `banner_details`
--
ALTER TABLE `banner_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `banner_id` (`banner_id`);

--
-- Chỉ mục cho bảng `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `news_details`
--
ALTER TABLE `news_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `news_id` (`news_id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `brand_id` (`brand_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Chỉ mục cho bảng `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `banners`
--
ALTER TABLE `banners`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `banner_details`
--
ALTER TABLE `banner_details`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `news`
--
ALTER TABLE `news`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `news_details`
--
ALTER TABLE `news_details`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- Ràng buộc đối với các bảng kết xuất
--

--
-- Ràng buộc cho bảng `banner_details`
--
ALTER TABLE `banner_details`
  ADD CONSTRAINT `banner_details_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `banner_details_ibfk_2` FOREIGN KEY (`banner_id`) REFERENCES `banners` (`id`);

--
-- Ràng buộc cho bảng `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD CONSTRAINT `feedbacks_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Ràng buộc cho bảng `news_details`
--
ALTER TABLE `news_details`
  ADD CONSTRAINT `news_details_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `news_details_ibfk_2` FOREIGN KEY (`news_id`) REFERENCES `news` (`id`);

--
-- Ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ràng buộc cho bảng `order_details`
--
ALTER TABLE `order_details`
  ADD CONSTRAINT `order_details_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `order_details_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

--
-- Ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
