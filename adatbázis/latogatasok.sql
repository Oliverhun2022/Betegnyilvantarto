-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Feb 16. 10:21
-- Kiszolgáló verziója: 10.4.24-MariaDB
-- PHP verzió: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `projekt`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `latogatasok`
--

CREATE TABLE `latogatasok` (
  `tipusa` varchar(15) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `datuma` date DEFAULT NULL,
  `kovetkezo_idopont_egyeztetes_datuma` date DEFAULT NULL,
  `fizetesi_dij` int(10) DEFAULT NULL,
  `kedvezmeny` int(5) DEFAULT NULL,
  `new_date` datetime NOT NULL DEFAULT '2021-06-29 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `latogatasok`
--

INSERT INTO `latogatasok` (`tipusa`, `datuma`, `kovetkezo_idopont_egyeztetes_datuma`, `fizetesi_dij`, `kedvezmeny`, `new_date`) VALUES
('gyökérkezelés', '2021-06-22', '0000-00-00', 140000, 15, '2021-06-29 00:00:00'),
('foghúzás', '2021-07-12', '2021-07-23', 105000, 10, '2021-06-29 00:00:00'),
('fogkőeltávolítá', '2022-09-10', '2022-09-20', 100000, 20, '2021-06-29 00:00:00'),
('fogtömítés', '2022-03-15', '2022-04-15', 98000, 30, '2021-06-29 00:00:00'),
('fogfehérítés', '2023-05-10', '2023-05-30', 120000, 15, '2021-06-29 00:00:00');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `latogatasok`
--
ALTER TABLE `latogatasok`
  ADD UNIQUE KEY `tipusa` (`tipusa`),
  ADD KEY `fizetesi_dij` (`fizetesi_dij`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
