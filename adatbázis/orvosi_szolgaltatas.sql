-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Már 04. 11:53
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `projekt_2`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `orvosi_szolgaltatas`
--

CREATE TABLE `orvosi_szolgaltatas` (
  `id` int(11) NOT NULL,
  `letrehoz_datum` date DEFAULT NULL,
  `frissites_datum` date DEFAULT NULL,
  `szolgaltatasId` varchar(15) DEFAULT NULL,
  `orvosId` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `orvosi_szolgaltatas`
--

INSERT INTO `orvosi_szolgaltatas` (`id`, `letrehoz_datum`, `frissites_datum`, `szolgaltatasId`, `orvosId`) VALUES
(1, '2023-09-15', '2023-09-22', 'TA098', '00AB1234'),
(2, '2023-08-10', '2023-09-17', 'GB321', '16DC5756'),
(3, '2023-10-13', '2023-10-20', 'NE685', '30D01203'),
(4, '2023-11-09', '2023-11-16', 'PP902', '12CD1740'),
(5, '2023-04-15', '2023-04-22', 'DV001', '01ST9120');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `orvosi_szolgaltatas`
--
ALTER TABLE `orvosi_szolgaltatas`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
