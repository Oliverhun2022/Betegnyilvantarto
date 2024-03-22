-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Már 07. 08:08
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
-- Tábla szerkezet ehhez a táblához `fogorvosok`
--

CREATE TABLE `fogorvosok` (
  `ID` int(11) NOT NULL,
  `mobiltelefonszam` int(20) DEFAULT NULL,
  `neve` varchar(30) DEFAULT NULL,
  `email_cim` varchar(30) DEFAULT NULL,
  `alkalmazas` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `fogorvosok`
--

INSERT INTO `fogorvosok` (`ID`, `mobiltelefonszam`, `neve`, `email_cim`, `alkalmazas`) VALUES
(1, 620200145, 'Dr. Kovács István', 'kovacsdoktor@gmail.com', '2024-06-20'),
(2, 630250120, 'Dr. Kálócz Borbála', 'kalocz.borbala@gmail.com', '2024-03-20'),
(3, 647525200, 'Dr. Ugrai György', 'gyorgyugrai@gmail.com', '2024-07-14'),
(4, 620200145, 'Dr. Vajda Antónia Ágota', 'vajdaantonia@gmail.com', '2024-05-30'),
(5, 620200145, 'Dr. Varga Dániel Balázs', 'varga.daniel.balazs@gmail.com', '2024-02-23');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `fogorvosok`
--
ALTER TABLE `fogorvosok`
  ADD PRIMARY KEY (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
