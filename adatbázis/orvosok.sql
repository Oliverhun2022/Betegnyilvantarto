-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Már 04. 08:34
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
-- Tábla szerkezet ehhez a táblához `orvosok`
--

CREATE TABLE `orvosok` (
  `id` int(11) NOT NULL,
  `elso_nev` varchar(15) DEFAULT NULL,
  `utolso_nev` varchar(15) DEFAULT NULL,
  `iranyitoszam` int(11) DEFAULT NULL,
  `cim` text DEFAULT NULL,
  `telefon` int(11) DEFAULT NULL,
  `egyalkalmas_jelszo` int(11) DEFAULT NULL,
  `letrehoz_datuma` date DEFAULT NULL,
  `frissit_datuma` date DEFAULT NULL,
  `varosId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `orvosok`
--

INSERT INTO `orvosok` (`id`, `elso_nev`, `utolso_nev`, `iranyitoszam`, `cim`, `telefon`, `egyalkalmas_jelszo`, `letrehoz_datuma`, `frissit_datuma`) VALUES
(1, 'dr.Bognár', 'Virág', 1014, 'Hegedűs Gyula utca 33.', 2147483647, 12345, '2023-06-19', '2023-06-26'),
(2, 'dr.Balogh', 'Orsolya', 1017, 'Szent István körút 18.', 620220410, 23412, '2023-05-21', '2023-05-28'),
(3, 'dr.Szabó', 'Zoltán', 1030, 'Boldog Sándor István körút 1-3.', 620310200, 98764, '2023-06-21', '2023-06-28'),
(4, 'dr.Tóth', 'Réka', 1017, 'Munkácsy Mihály utca 15.', 620320195, 64556, '2023-07-20', '2023-07-27'),
(5, 'dr.Tóbiás', 'Dávid', 1017, 'Szent István körút 18.', 620320195, 23412, '2023-04-21', '2023-04-28');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `orvosok`
--
ALTER TABLE `orvosok`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
