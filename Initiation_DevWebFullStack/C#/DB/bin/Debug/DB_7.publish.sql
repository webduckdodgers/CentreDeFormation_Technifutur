/*
Script de déploiement pour DB

Ce code a été généré par un outil.
La modification de ce fichier peut provoquer un comportement incorrect et sera perdue si
le code est régénéré.
*/

GO
SET ANSI_NULLS, ANSI_PADDING, ANSI_WARNINGS, ARITHABORT, CONCAT_NULL_YIELDS_NULL, QUOTED_IDENTIFIER ON;

SET NUMERIC_ROUNDABORT OFF;


GO
:setvar DatabaseName "DB"
:setvar DefaultFilePrefix "DB"
:setvar DefaultDataPath "C:\Program Files\Microsoft SQL Server\MSSQL16.DUCKSERVER\MSSQL\DATA\"
:setvar DefaultLogPath "C:\Program Files\Microsoft SQL Server\MSSQL16.DUCKSERVER\MSSQL\DATA\"

GO
:on error exit
GO
/*
Détectez le mode SQLCMD et désactivez l'exécution du script si le mode SQLCMD n'est pas pris en charge.
Pour réactiver le script une fois le mode SQLCMD activé, exécutez ce qui suit :
SET NOEXEC OFF; 
*/
:setvar __IsSqlCmdEnabled "True"
GO
IF N'$(__IsSqlCmdEnabled)' NOT LIKE N'True'
    BEGIN
        PRINT N'Le mode SQLCMD doit être activé de manière à pouvoir exécuter ce script.';
        SET NOEXEC ON;
    END


GO
USE [$(DatabaseName)];


GO
/*
Le type de la colonne name dans la table [dbo].[Category] est actuellement  NCHAR (50) NOT NULL, mais est remplacé par  VARCHAR (50) NOT NULL. Une perte de données peut se produire et le déploiement risque d'échouer si la colonne contient des données incompatibles avec le type  VARCHAR (50) NOT NULL.
*/

IF EXISTS (select top 1 1 from [dbo].[Category])
    RAISERROR (N'Lignes détectées. Arrêt de la mise à jour du schéma en raison d''''un risque de perte de données.', 16, 127) WITH NOWAIT

GO
PRINT N'Modification de Table [dbo].[Category]...';


GO
ALTER TABLE [dbo].[Category] ALTER COLUMN [name] VARCHAR (50) NOT NULL;


GO

SET IDENTITY_INSERT Users ON

INSERT INTO Users(Id, email, password, wallet, country)
VALUES
(1, 'user@user.com', 'Test123=', 120, NULL),
(2, 'admin@admin.com', 'Test123=', 99999, NULL),
(3, 'modo@modo.com', 'Test123=', 5000, NULL),
(4, 'poor@poor.com', 'Test123=', 0, NULL)

SET IDENTITY_INSERT Users OFF

SET IDENTITY_INSERT Category ON

INSERT INTO Category(Id, name)
VALUES
(1, 'FPS'),
(2, 'RPG')

SET IDENTITY_INSERT Library OFF

SET IDENTITY_INSERT Games ON

INSERT INTO Games(Id, name, price, category_id)
VALUES
(1, 'Counter-Strike 2', 14.99, 1),
(2, 'Skyrim', 19.99, 2)

SET IDENTITY_INSERT Games OFF


INSERT INTO Library(user_id, game_id)
VALUES
(1, 1),
(2, 1),
(2, 2),
(3, 2)
GO

GO
PRINT N'Mise à jour terminée.';


GO
