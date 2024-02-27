-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Feb 23. 13:38
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
-- Tábla szerkezet ehhez a táblához `orvosi_specializacio`
--

CREATE TABLE `orvosi_specializacio` (
  `id` int(11) NOT NULL,
  `letrehozas_datum` date,
  `modositas_datum` date,
  `szintId` int(25),
  `specializacioId` int(11),
  `orvosId` int(25)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `orvosi_specializacio`
--

INSERT INTO `orvosi_specializacio` (`id`, `letrehozas_datum`, `modositas_datum`, `szintId`, `specializacioId`, `orvosId`) VALUES
(50, '2024-01-18', '2024-01-20', NULL, 21474, 21002),
(100, '2024-01-10', '2024-01-17', NULL, 21022, 12345),
(150, '2024-01-21', '2024-01-25', NULL, 21347, 10171),
(202, '2024-02-10', '2024-02-15', NULL, 62035, 10300),
(300, '2024-02-13', '2024-02-20', NULL, 21447, 10172);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `orvosi_specializacio`
--
ALTER TABLE `orvosi_specializacio`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `orvosi_specializacio`
--
ALTER TABLE `orvosi_specializacio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=301;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
