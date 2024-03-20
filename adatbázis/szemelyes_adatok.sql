-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Feb 13. 09:00
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
-- Adatbázis: `regisztracio`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `szemelyes_adatok`
--

CREATE TABLE `szemelyes_adatok` (
  `ID` int DEFAULT NULL,
  `TAJ_szam` int(11) DEFAULT NULL,
  `nev` varchar(25) DEFAULT NULL,
  `szuletesi_ido` date DEFAULT NULL,
  `neme` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `szemelyes_adatok`
--

INSERT INTO `szemelyes_adatok` (`ID`, `TAJ_szam`, `nev`,  `szuletesi_ido`, `neme`) VALUES
(1, '233200123', 'dr.Borbáth Csaba', '1986-03-20', 'férfi'),
(2, '120345690', 'dr.Kovács István', '1990-02-20', 'férfi'),
(3, '210564300', 'dr.Baranyai Orsolya', '1980-04-10', 'nő'),
(4, '231123456', 'dr.Dózsa Anita', '1990-10-05', 'nő');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
