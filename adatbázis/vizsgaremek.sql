-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Már 06. 13:06
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
-- Adatbázis: `vizsgaremek`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `beteg_adatai`
--

CREATE TABLE `beteg_adatai` (
  `id` int(11) NOT NULL,
  `nev` varchar(30) DEFAULT NULL,
  `eletkor` int(10) DEFAULT NULL,
  `neme` varchar(10) DEFAULT NULL,
  `szuletesi_datum` date DEFAULT NULL,
  `telefonszama` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `beteg_adatai`
--

INSERT INTO `beteg_adatai` (`id`, `nev`, `eletkor`, `neme`, `szuletesi_datum`, `telefonszama`) VALUES
(1, 'Kovács Béla', 45, 'férfi', '1978-03-15', 620765130),
(2, 'Mezőfi Tamás', 30, 'férfi', '1989-02-23', 62093360),
(3, 'Ferenczi Istvánné', 65, 'nő', '1960-03-28', 670194650),
(4, 'Petőfi Sándor', 40, 'férfi', '1979-04-28', 2147483647),
(5, 'Kováts Mátyás', 30, 'férfi', '1976-05-30', 620474836);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `beteg_adatai`
--
ALTER TABLE `beteg_adatai`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
