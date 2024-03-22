-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Már 07. 10:56
-- Kiszolgáló verziója: 10.4.25-MariaDB
-- PHP verzió: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `vizsgaremek`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kezelesek`
--

CREATE TABLE `kezelesek` (
  `id` int(11) NOT NULL,
  `tipusa` varchar(30) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `datuma` date DEFAULT NULL,
  `kovetkezo_kezeles_datum` date DEFAULT NULL,
  `fizetesi_dij` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `kezelesek`
--

INSERT INTO `kezelesek` (`id`, `tipusa`, `datuma`, `kovetkezo_kezeles_datum`, `fizetesi_dij`) VALUES
(1, 'gyökérkezelés', '2024-06-22', '2024-06-29', 140000),
(2, 'foghúzás', '2024-07-12', '2024-07-23', 105000),
(3, 'fogkőeltávolítás', '2024-09-10', '2024-09-20', 100000),
(4, 'fogtömítés', '2024-03-15', '2024-04-15', 98000),
(5, 'fogfehérítés', '2024-05-10', '2024-05-30', 120000);
(6, 'fogínykezelés', '2024-08-10', '2024-08-19', 60000);
(7, 'altatásos fogászat', '2024-06-10', '2024-06-30', 100000);
(8, 'fogpótlás', '2024-07-10', '2024-07-17', 106000);
(9, 'fogszabályozás', '2024-05-18', '2024-05-27', 95000);
--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `kezelesek`
--
ALTER TABLE `kezelesek`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
