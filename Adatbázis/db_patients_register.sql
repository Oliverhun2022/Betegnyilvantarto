-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Ápr 08. 23:09
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `db_patients_register`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `patients`
--

CREATE TABLE `patients` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `motherName` varchar(255) NOT NULL,
  `idCardNumber` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `identifierType` varchar(255) NOT NULL,
  `tajNumber` varchar(255) NOT NULL,
  `nationality` varchar(255) NOT NULL,
  `placeOfBirth` varchar(255) NOT NULL,
  `dateOfBirth` date NOT NULL,
  `sex` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `postalCode` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `UserId` int(11) NOT NULL,
  `drugAllergy` text DEFAULT NULL,
  `allergy` text DEFAULT NULL,
  `chronicIllness` text DEFAULT NULL,
  `constantMedication` text DEFAULT NULL,
  `diagnosis` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `softDelete` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `patients`
--

INSERT INTO `patients` (`id`, `firstName`, `lastName`, `motherName`, `idCardNumber`, `email`, `identifierType`, `tajNumber`, `nationality`, `placeOfBirth`, `dateOfBirth`, `sex`, `country`, `city`, `postalCode`, `address`, `UserId`, `drugAllergy`, `allergy`, `chronicIllness`, `constantMedication`, `diagnosis`, `createdAt`, `updatedAt`, `softDelete`) VALUES
(7, 'Vezeteknev', 'Keresztnev', 'Vezeteknev Keresztnev', '54uf8d32TZ', 'email@gmail.com', 'Taj kártya', '120-23', 'hungarian', 'Város', '1977-01-01', 'férfi', 'hungary', 'lakhely', '3900', 'lakcim', 9, 'nincs', 'nincs', 'nincs', 'nincs', 'beteg', '2024-04-08 20:46:22', '2024-04-08 20:49:07', NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `treatments`
--

CREATE TABLE `treatments` (
  `id` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  `PatientId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `dateOfTreatment` date NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `softDelete` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `treatments`
--

INSERT INTO `treatments` (`id`, `description`, `PatientId`, `UserId`, `dateOfTreatment`, `createdAt`, `updatedAt`, `softDelete`) VALUES
(9, 'leiras', 7, 9, '2024-01-01', '2024-04-08 20:51:22', '2024-04-08 20:51:22', NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'doctor',
  `token` varchar(255) DEFAULT NULL,
  `isVerified` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `softDelete` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`id`, `fullName`, `email`, `password`, `role`, `token`, `isVerified`, `createdAt`, `updatedAt`, `softDelete`) VALUES
(9, 'Vezeteknev keresztnev', 'edem0712@gmail.com', '$2a$10$MPQNSX2qoqVTcchVpJ9B2uvrsHubbmX1CSRsZykXMETM8SuxpRi/m', 'doctor', '', 1, '2024-04-08 19:57:52', '2024-04-08 20:25:25', NULL);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`);

--
-- A tábla indexei `treatments`
--
ALTER TABLE `treatments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PatientId` (`PatientId`),
  ADD KEY `UserId` (`UserId`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT a táblához `treatments`
--
ALTER TABLE `treatments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `patients`
--
ALTER TABLE `patients`
  ADD CONSTRAINT `patients_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `treatments`
--
ALTER TABLE `treatments`
  ADD CONSTRAINT `treatments_ibfk_1` FOREIGN KEY (`PatientId`) REFERENCES `patients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `treatments_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
