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
  `tipusa` varchar(15) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `datuma` date DEFAULT NULL,
  `kovetkezo_kezeles_datum` date DEFAULT NULL,
  `fizetesi_dij` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `kezelesek`
--

INSERT INTO `kezelesek` (`id`, `tipusa`, `datuma`, `kovetkezo_kezeles_datum`, `fizetesi_dij`) VALUES
(1, 'gyökérkezelés', '2021-06-22', '0000-00-00', 140000),
(2, 'foghúzás', '2021-07-12', '2021-07-23', 105000),
(3, 'fogkőeltávolítá', '2022-09-10', '2022-09-20', 100000),
(4, 'fogtömítés', '2022-03-15', '2022-04-15', 98000),
(5, 'fogfehérítés', '2023-05-10', '2023-05-30', 120000);

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
