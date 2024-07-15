-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2024 年 07 月 15 日 17:33
-- 伺服器版本： 8.3.0
-- PHP 版本： 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `proj57`
--

-- --------------------------------------------------------

--
-- 資料表結構 `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 傾印資料表的資料 `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, '謝鈺婷', 'mail62771@test.com', '$2b$10$vXEqx1ZzP9ZYMirtYrcR.uS5u9C4Ndwg98iK9w9CIS1f638916jB.'),
(2, '鄧冠霖', 'mail29919@test.com', '$2b$10$vXEqx1ZzP9ZYMirtYrcR.uS5u9C4Ndwg98iK9w9CIS1f638916jB.'),
(3, '王宗翰', 'mail78284@test.com', '$2b$10$lfDFoL5WrZ3gHRVDmCyV5ebDrdVqblElsZ5o6hwcQuG.6ezzuC/MS'),
(4, '劉詩涵', 'mail76513@test.com', '$2b$10$Q7jwc29wTGV4w6Hm.nc5d.XMsk3lH9L1fDxQkU4.FvCezKg/YaBJ2'),
(5, 'abc', 'aaa', '$2b$10$vlWSek73Idbo5GT5pxlu0OEgsDbTW9obweYDNlQW3FnBi66uSu2Ge');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
