-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 28, 2018 at 03:58 PM
-- Server version: 5.7.22-0ubuntu0.16.04.1
-- PHP Version: 7.2.4-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_hotel`
--

-- --------------------------------------------------------

--
-- Table structure for table `configurazioni`
--

USE `db_hotel`;

CREATE TABLE `configurazioni` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(1024) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `configurazioni`
--

INSERT INTO `configurazioni` (`id`, `title`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Letto Singolo', 'Disponibile un letto singolo', '2018-05-28 11:33:11', '2018-05-28 11:33:11'),
(2, 'Letto Singolo + matrimoniale', 'Disponibile un letto singolo e uno matrimoniale', '2018-05-28 11:33:11', '2018-05-28 11:33:11'),
(3, 'Letto Matrimoniale', 'Disponibile un letto matrimoniale', '2018-05-28 11:33:11', '2018-05-28 11:33:11'),
(4, 'Due letti matrimoniali', 'Disponibili due letti matrimoniali', '2018-05-28 11:33:11', '2018-05-28 11:33:11');

-- --------------------------------------------------------

--
-- Table structure for table `ospiti`
--

CREATE TABLE `ospiti` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_of_birth` datetime NOT NULL,
  `document_type` varchar(1024) COLLATE utf8mb4_unicode_ci NOT NULL,
  `document_number` varchar(1024) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ospiti`
--

INSERT INTO `ospiti` (`id`, `name`, `lastname`, `date_of_birth`, `document_type`, `document_number`, `created_at`, `updated_at`) VALUES
(31, 'Elizabeth', 'Romaguera', '2005-03-12 10:37:05', 'CI', '838-743-2106 x4269', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(32, 'Madie', 'Sanford', '1964-04-02 17:51:08', 'CI', '+1-543-639-8712', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(33, 'Orion', 'Hilpert', '1975-06-30 18:04:07', 'Driver License', '424.999.8375 x49210', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(34, 'Lysanne', 'Buckridge', '1960-01-25 05:59:53', 'CI', '886.221.5466 x374', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(35, 'Jessie', 'Kozey', '1982-06-05 06:00:13', 'CI', '468.469.5883', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(36, 'Shemar', 'Keeling', '1957-06-14 11:43:50', 'CI', '721-324-9086 x042', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(37, 'Edwardo', 'Pacocha', '1959-03-29 01:01:36', 'CI', '1-743-362-6164', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(38, 'Delilah', 'Renner', '1922-11-05 18:13:56', 'Driver License', '841.324.4824 x198', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(39, 'Jacquelyn', 'Ankunding', '1992-11-19 06:15:10', 'CI', '1-732-298-9263', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(40, 'Willie', 'Borer', '1926-12-17 17:48:37', 'CI', '247.970.3935 x1106', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(41, 'Tristian', 'Koss', '2003-01-27 03:01:13', 'Driver License', '1-827-946-6491 x7524', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(42, 'Kamron', 'Murphy', '2002-12-17 15:29:31', 'CI', '267.993.2963 x05234', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(43, 'Helene', 'Hansen', '2000-02-24 12:21:08', 'Driver License', '+1-964-705-7555', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(44, 'Charley', 'Abernathy', '1930-04-24 00:12:40', 'CI', '985.370.0304', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(45, 'Dion', 'Leannon', '1993-09-22 15:41:21', 'Driver License', '1-326-694-2607', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(46, 'Zelda', 'Johns', '1953-04-03 20:58:01', 'Driver License', '285.344.1948', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(47, 'Hadley', 'Collins', '1947-06-04 11:31:03', 'Driver License', '+1-514-312-2554', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(48, 'Emilie', 'Grant', '2010-12-18 14:22:44', 'Driver License', '719-908-6475', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(49, 'Deron', 'Hand', '1953-08-06 18:27:40', 'Driver License', '+14688925868', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(50, 'Laurence', 'Green', '2008-12-25 13:42:07', 'Driver License', '(302) 697-0481 x65340', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(51, 'Adriana', 'Abernathy', '1952-06-01 03:28:30', 'Driver License', '953.949.4537 x603', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(52, 'Tyrel', 'Murphy', '1977-03-02 10:51:34', 'CI', '1-620-470-6907', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(53, 'Dandre', 'Kautzer', '1988-05-22 08:37:49', 'Driver License', '1-257-565-5268 x0572', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(54, 'Arlo', 'Keeling', '1924-03-09 05:05:51', 'Driver License', '480-402-1713', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(55, 'Nikita', 'Donnelly', '2001-12-26 02:54:30', 'Driver License', '(682) 794-3218', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(56, 'Gillian', 'Reichel', '2000-09-01 03:03:09', 'CI', '+1-751-368-6085', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(57, 'Briana', 'Cartwright', '1926-01-21 14:47:47', 'CI', '540.302.1002 x294', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(58, 'Shirley', 'Brakus', '1951-08-19 19:37:29', 'Driver License', '1-471-981-2812', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(59, 'Lamar', 'Koch', '1983-08-29 16:27:17', 'CI', '(492) 531-7248 x513', '2018-05-28 11:40:27', '2018-05-28 11:40:27'),
(60, 'Lafayette', 'Brakus', '1955-09-02 02:12:26', 'CI', '351.512.4630 x454', '2018-05-28 11:40:27', '2018-05-28 11:40:27');

-- --------------------------------------------------------

--
-- Table structure for table `pagamenti`
--

CREATE TABLE `pagamenti` (
  `id` int(10) UNSIGNED NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` float(6,2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenotazione_id` int(10) UNSIGNED NOT NULL,
  `pagante_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pagamenti`
--

INSERT INTO `pagamenti` (`id`, `status`, `price`, `prenotazione_id`, `pagante_id`, `created_at`, `updated_at`) VALUES
(1, 'pending', '977', 1, 3, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(2, 'rejected', '773', 2, 23, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(3, 'accepted', '869', 3, 10, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(4, 'pending', '671', 4, 6, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(5, 'accepted', '117', 5, 16, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(6, 'accepted', '59', 6, 4, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(7, 'pending', '993', 7, 6, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(8, 'rejected', '512', 8, 28, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(9, 'pending', '389', 9, 13, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(10, 'pending', '332', 10, 25, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(11, 'accepted', '67', 11, 5, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(12, 'rejected', '154', 12, 6, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(13, 'accepted', '434', 13, 4, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(14, 'accepted', '562', 14, 30, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(15, 'pending', '614', 15, 6, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(16, 'pending', '222', 16, 11, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(17, 'accepted', '152', 17, 25, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(18, 'pending', '777', 18, 30, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(19, 'accepted', '822', 19, 7, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(20, 'pending', '554', 20, 26, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(21, 'accepted', '416', 21, 16, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(22, 'accepted', '666', 22, 28, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(23, 'pending', '370', 23, 16, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(24, 'pending', '647', 24, 9, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(25, 'pending', '106', 25, 29, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(26, 'rejected', '609', 26, 19, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(27, 'pending', '508', 27, 5, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(28, 'pending', '82', 28, 28, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(29, 'rejected', '88', 29, 21, '2018-05-28 11:53:45', '2018-05-28 11:53:45'),
(30, 'pending', '991', 30, 21, '2018-05-28 11:53:45', '2018-05-28 11:53:45');

-- --------------------------------------------------------

--
-- Table structure for table `paganti`
--

CREATE TABLE `paganti` (
  `id` int(10) UNSIGNED NOT NULL,
  `ospite_id` int(10) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(2056) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `paganti`
--

INSERT INTO `paganti` (`id`, `ospite_id`, `name`, `lastname`, `address`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Bridgette', 'Casper', '81674 Penelope Island Suite 950\nJohnathonbury, MA 03282-3387', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(2, NULL, 'Karl', 'Schiller', '88145 Goodwin Wells\nLake Queenie, NJ 71199-1820', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(3, NULL, 'Russel', 'Olson', '9417 Nienow Glens\nUlisesberg, PA 78162', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(4, NULL, 'Conrad', 'Kuhic', '39763 Moore Vista\nFrancoville, KS 68933', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(5, 49, 'Deron', 'Hand', '39539 Koch Road Suite 738\nNicklausland, NH 02610', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(6, 31, 'Elizabeth', 'Romaguera', '3125 Kenya Path Apt. 401\nThoraborough, TN 06428', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(7, 38, 'Delilah', 'Renner', '378 Natasha Club Suite 118\nBereniceport, CO 11295-3035', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(8, NULL, 'Rigoberto', 'Sawayn', '5636 Kane Light\nFerrychester, ND 40361', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(9, 59, 'Lamar', 'Koch', '96745 Elvera Creek\nEast Ryley, MT 62332-5731', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(10, NULL, 'Adolfo', 'Reichel', '36672 Lind Fork\nLoweside, NV 59434', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(11, NULL, 'Malvina', 'Thompson', '1318 Brekke Burg\nEast Zora, NM 43539-7220', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(12, NULL, 'Amaya', 'Weber', '331 Stark Stravenue Apt. 107\nNew Kristopher, AK 02112', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(13, 32, 'Madie', 'Sanford', '3338 Bailey Squares Suite 869\nWest Lavadafort, NV 53874', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(14, 36, 'Shemar', 'Keeling', '981 Schuster Land Suite 995\nWest Nona, KY 29605-8262', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(15, NULL, 'Cade', 'Gerlach', '381 Mayert Forest Suite 060\nPort Octavia, NV 04284', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(16, 40, 'Willie', 'Borer', '58939 Lesley Rue Apt. 237\nNew Jonland, OR 87204-3568', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(17, 45, 'Dion', 'Leannon', '7557 Jaquan Place Suite 009\nPort Cassie, NY 53495-7760', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(18, NULL, 'Annabell', 'Hansen', '24668 Turner Loop Suite 646\nCheyanneview, CT 90744', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(19, 56, 'Gillian', 'Reichel', '430 Runolfsson Flats Apt. 195\nHuelmouth, MI 79097', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(20, NULL, 'Heath', 'Metz', '588 Dasia Meadow\nTurcottefort, ID 82414', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(21, NULL, 'Hester', 'Cummings', '6916 Jacky Lights\nRogahnchester, KS 19145', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(22, NULL, 'Amanda', 'Marks', '52706 Osinski Courts\nSouth Shayneshire, AL 06374', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(23, 40, 'Willie', 'Borer', '49750 Prohaska Tunnel Suite 547\nEmardview, NH 87814-6625', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(24, 52, 'Tyrel', 'Murphy', '2086 Doyle Villages Suite 053\nNew Khalil, UT 44809', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(25, 34, 'Lysanne', 'Buckridge', '603 Kimberly Trafficway Apt. 213\nPort Rigobertoland, ME 85569', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(26, NULL, 'Laurence', 'Skiles', '9830 Kelsi Land Suite 498\nPort Neldaport, MN 75598-3168', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(27, NULL, 'Alberta', 'Nienow', '67354 Donnelly Stravenue Suite 104\nBrakusfurt, PA 11778-8271', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(28, 33, 'Orion', 'Hilpert', '82832 Goyette Hills Apt. 580\nDeontaeton, MD 65739-6172', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(29, NULL, 'Mabelle', 'Botsford', '965 Myles Cliff Suite 237\nEast Justenfort, HI 03346', '2018-05-28 11:47:31', '2018-05-28 11:47:31'),
(30, 42, 'Kamron', 'Murphy', '501 Dicki Light\nPort Marvinburgh, VT 00388-6906', '2018-05-28 11:47:31', '2018-05-28 11:47:31');

-- --------------------------------------------------------

--
-- Table structure for table `prenotazioni`
--

CREATE TABLE `prenotazioni` (
  `id` int(10) UNSIGNED NOT NULL,
  `stanza_id` int(10) UNSIGNED NOT NULL,
  `configurazione_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `prenotazioni`
--

INSERT INTO `prenotazioni` (`id`, `stanza_id`, `configurazione_id`, `created_at`, `updated_at`) VALUES
(1, 12, 3, '2018-05-20 03:59:11', '2018-05-20 03:59:11'),
(2, 10, 1, '2018-04-13 20:36:11', '2018-04-13 20:36:11'),
(3, 6, 2, '2018-04-27 01:58:11', '2018-04-27 01:58:11'),
(4, 1, 2, '2018-05-24 21:58:11', '2018-05-24 21:58:11'),
(5, 10, 1, '2018-04-16 05:33:11', '2018-04-16 05:33:11'),
(6, 13, 4, '2018-05-20 06:37:11', '2018-05-20 06:37:11'),
(7, 8, 2, '2018-04-22 00:36:11', '2018-04-22 00:36:11'),
(8, 9, 3, '2018-04-10 09:16:11', '2018-04-10 09:16:11'),
(9, 15, 1, '2018-04-13 20:53:11', '2018-04-13 20:53:11'),
(10, 11, 2, '2018-05-20 11:16:11', '2018-05-20 11:16:11'),
(11, 4, 1, '2018-05-13 23:04:11', '2018-05-13 23:04:11'),
(12, 10, 1, '2018-04-29 19:56:11', '2018-04-29 19:56:11'),
(13, 11, 4, '2018-04-21 01:04:11', '2018-04-21 01:04:11'),
(14, 4, 1, '2018-05-20 01:43:11', '2018-05-20 01:43:11'),
(15, 3, 3, '2018-05-08 20:22:11', '2018-05-08 20:22:11'),
(16, 14, 4, '2018-05-07 19:20:11', '2018-05-07 19:20:11'),
(17, 13, 4, '2018-05-09 01:17:11', '2018-05-09 01:17:11'),
(18, 8, 2, '2018-04-25 00:51:11', '2018-04-25 00:51:11'),
(19, 11, 3, '2018-05-25 21:15:11', '2018-05-25 21:15:11'),
(20, 7, 2, '2018-05-18 05:32:11', '2018-05-18 05:32:11'),
(21, 13, 3, '2018-05-11 19:57:11', '2018-05-11 19:57:11'),
(22, 15, 1, '2018-04-23 04:22:11', '2018-04-23 04:22:11'),
(23, 14, 2, '2018-04-21 09:34:11', '2018-04-21 09:34:11'),
(24, 4, 1, '2018-04-27 19:56:11', '2018-04-27 19:56:11'),
(25, 10, 1, '2018-04-18 08:40:11', '2018-04-18 08:40:11'),
(26, 15, 1, '2018-05-24 10:35:11', '2018-05-24 10:35:11'),
(27, 9, 4, '2018-05-17 21:26:11', '2018-05-17 21:26:11'),
(28, 10, 1, '2018-05-13 05:19:11', '2018-05-13 05:19:11'),
(29, 6, 2, '2018-04-12 10:20:11', '2018-04-12 10:20:11'),
(30, 5, 3, '2018-04-16 09:21:11', '2018-04-16 09:21:11');

-- --------------------------------------------------------

--
-- Table structure for table `prenotazioni_has_ospiti`
--

CREATE TABLE `prenotazioni_has_ospiti` (
  `id` int(10) UNSIGNED NOT NULL,
  `prenotazione_id` int(10) UNSIGNED NOT NULL,
  `ospite_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `prenotazioni_has_ospiti`
--

INSERT INTO `prenotazioni_has_ospiti` (`id`, `prenotazione_id`, `ospite_id`, `created_at`, `updated_at`) VALUES
(1, 1, 32, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(2, 2, 56, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(3, 3, 58, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(4, 4, 46, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(5, 5, 41, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(6, 6, 46, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(7, 7, 40, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(8, 8, 43, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(9, 9, 58, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(10, 10, 41, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(11, 11, 37, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(12, 12, 33, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(13, 13, 46, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(14, 14, 41, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(15, 15, 51, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(16, 16, 50, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(17, 17, 38, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(18, 18, 54, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(19, 19, 31, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(20, 20, 36, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(21, 21, 55, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(22, 22, 35, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(23, 23, 47, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(24, 24, 49, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(25, 25, 51, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(26, 26, 55, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(27, 27, 47, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(28, 28, 32, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(29, 29, 54, '2018-05-28 11:57:00', '2018-05-28 11:57:00'),
(30, 30, 56, '2018-05-28 11:57:00', '2018-05-28 11:57:00');

-- --------------------------------------------------------

--
-- Table structure for table `stanze`
--

CREATE TABLE `stanze` (
  `id` int(10) UNSIGNED NOT NULL,
  `room_number` int(11) NOT NULL,
  `floor` int(11) NOT NULL,
  `beds` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `stanze`
--

INSERT INTO `stanze` (`id`, `room_number`, `floor`, `beds`, `created_at`, `updated_at`) VALUES
(1, 100, 1, 2, '2018-05-28 11:33:11', '2018-05-28 11:33:11'),
(2, 101, 1, 3, '2018-05-28 11:33:11', '2018-05-28 11:33:11'),
(3, 102, 1, 3, '2018-05-28 11:33:11', '2018-05-28 11:33:11'),
(4, 103, 1, 1, '2018-05-28 11:33:11', '2018-05-28 11:33:11'),
(5, 104, 1, 2, '2018-05-28 11:33:11', '2018-05-28 11:33:11'),
(6, 105, 1, 2, '2018-05-28 11:33:11', '2018-05-28 11:33:11'),
(7, 201, 2, 2, '2018-05-28 11:33:11', '2018-05-28 11:33:11'),
(8, 202, 2, 3, '2018-05-28 11:33:11', '2018-05-28 11:33:11'),
(9, 203, 2, 3, '2018-05-28 11:33:11', '2018-05-28 11:33:11'),
(10, 204, 2, 1, '2018-05-28 11:33:11', '2018-05-28 11:33:11'),
(11, 205, 2, 2, '2018-05-28 11:33:11', '2018-05-28 11:33:11'),
(12, 301, 3, 3, '2018-05-28 11:33:11', '2018-05-28 11:33:11'),
(13, 302, 3, 3, '2018-05-28 11:33:11', '2018-05-28 11:33:11'),
(14, 303, 3, 2, '2018-05-28 11:33:11', '2018-05-28 11:33:11'),
(15, 304, 3, 1, '2018-05-28 11:33:11', '2018-05-28 11:33:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `configurazioni`
--
ALTER TABLE `configurazioni`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ospiti`
--
ALTER TABLE `ospiti`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pagamenti`
--
ALTER TABLE `pagamenti`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pagamenti_prenotazione_id_foreign` (`prenotazione_id`),
  ADD KEY `pagamenti_pagante_id_foreign` (`pagante_id`);

--
-- Indexes for table `paganti`
--
ALTER TABLE `paganti`
  ADD PRIMARY KEY (`id`),
  ADD KEY `paganti_ospite_id_foreign` (`ospite_id`);

--
-- Indexes for table `prenotazioni`
--
ALTER TABLE `prenotazioni`
  ADD PRIMARY KEY (`id`),
  ADD KEY `prenotazioni_stanza_id_foreign` (`stanza_id`),
  ADD KEY `prenotazioni_configurazione_id_foreign` (`configurazione_id`);

--
-- Indexes for table `prenotazioni_has_ospiti`
--
ALTER TABLE `prenotazioni_has_ospiti`
  ADD PRIMARY KEY (`id`),
  ADD KEY `prenotazioni_has_ospiti_prenotazione_id_foreign` (`prenotazione_id`),
  ADD KEY `prenotazioni_has_ospiti_ospite_id_foreign` (`ospite_id`);

--
-- Indexes for table `stanze`
--
ALTER TABLE `stanze`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `configurazioni`
--
ALTER TABLE `configurazioni`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `ospiti`
--
ALTER TABLE `ospiti`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
--
-- AUTO_INCREMENT for table `pagamenti`
--
ALTER TABLE `pagamenti`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT for table `paganti`
--
ALTER TABLE `paganti`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT for table `prenotazioni`
--
ALTER TABLE `prenotazioni`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT for table `prenotazioni_has_ospiti`
--
ALTER TABLE `prenotazioni_has_ospiti`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT for table `stanze`
--
ALTER TABLE `stanze`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `pagamenti`
--
ALTER TABLE `pagamenti`
  ADD CONSTRAINT `pagamenti_pagante_id_foreign` FOREIGN KEY (`pagante_id`) REFERENCES `paganti` (`id`),
  ADD CONSTRAINT `pagamenti_prenotazione_id_foreign` FOREIGN KEY (`prenotazione_id`) REFERENCES `prenotazioni` (`id`);

--
-- Constraints for table `paganti`
--
ALTER TABLE `paganti`
  ADD CONSTRAINT `paganti_ospite_id_foreign` FOREIGN KEY (`ospite_id`) REFERENCES `ospiti` (`id`);

--
-- Constraints for table `prenotazioni`
--
ALTER TABLE `prenotazioni`
  ADD CONSTRAINT `prenotazioni_configurazione_id_foreign` FOREIGN KEY (`configurazione_id`) REFERENCES `configurazioni` (`id`),
  ADD CONSTRAINT `prenotazioni_stanza_id_foreign` FOREIGN KEY (`stanza_id`) REFERENCES `stanze` (`id`);

--
-- Constraints for table `prenotazioni_has_ospiti`
--
ALTER TABLE `prenotazioni_has_ospiti`
  ADD CONSTRAINT `prenotazioni_has_ospiti_ospite_id_foreign` FOREIGN KEY (`ospite_id`) REFERENCES `ospiti` (`id`),
  ADD CONSTRAINT `prenotazioni_has_ospiti_prenotazione_id_foreign` FOREIGN KEY (`prenotazione_id`) REFERENCES `prenotazioni` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
