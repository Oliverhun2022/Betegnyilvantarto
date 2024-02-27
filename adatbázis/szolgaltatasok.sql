-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Feb 27. 10:50
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
-- Tábla szerkezet ehhez a táblához `szolgaltatasok`
--

CREATE TABLE `szolgaltatasok` (
  `id` int(11) NOT NULL,
  `parodontalis_betegseg` varchar(255) DEFAULT NULL,
  `fenykep` varchar(255) DEFAULT NULL,
  `letrehozas_datum` date DEFAULT NULL,
  `frissites_datum` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `szolgaltatasok`
--

INSERT INTO `szolgaltatasok` (`id`, `parodontalis_betegseg`, `fenykep`, `letrehozas_datum`, `frissites_datum`) VALUES
(11023, 'halitózis', 'extraorális fotózás', '2024-02-10', '2024-02-13'),
(20112, 'foglazulás', 'digitális fotózás', '2024-01-17', '2024-01-22'),
(20321, 'fogvesztés', 'intraorális fotózás', '2024-01-23', '2024-01-26'),
(32110, 'fogíny duzzanat', 'szájüregi fotózás', '2024-01-15', '2024-01-20'),
(57199, 'ínyvérzés', 'dental fotózás', '2023-12-09', '2023-12-16');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `szolgaltatasok`
--
ALTER TABLE `szolgaltatasok`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
