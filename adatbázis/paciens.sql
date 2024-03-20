-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Feb 16. 10:22
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
-- Tábla szerkezet ehhez a táblához `paciens`
--

CREATE TABLE `paciens` (
  `ID` int(9) NOT NULL,
  `nev` varchar(12) COLLATE utf8_hungarian_ci NOT NULL,
  `eletkor` int(2) DEFAULT NULL,
  `neme` varchar(6) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `szuletesi_datum` date DEFAULT NULL,
  `mobiltelefon_szama` int(10) DEFAULT NULL,
  `telefonszama` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `paciens`
--

INSERT INTO `paciens` (`ID`, `nev`, `eletkor`, `neme`, `szuletesi_datum`, `telefonszama`) VALUES
(1300528, 'Mezőfi Tamás', 30, 'férfi', '1989-02-23',  62093360),
(1800309, 'Ferenczi Ist', 65, 'nő', '1960-03-28', 670194650),
(2001510, 'Petőfi Sándo', 40, 'férfi', '1979-04-28',  2147483647),
(2345610, 'Kovács Béla', 45, 'férfi', '1978-03-15',  620765130),
(4501560, 'Kováts Mátyá', 30, 'férfi', '1976-05-30', 2147483647);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `paciens`
--
ALTER TABLE `paciens`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `foglalkozas` (`foglalkozas`),
  ADD UNIQUE KEY `foglalkozas_2` (`foglalkozas`),
  ADD KEY `nev` (`nev`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
