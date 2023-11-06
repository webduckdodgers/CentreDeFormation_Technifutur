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
PRINT N'Suppression de Contrainte par défaut contrainte sans nom sur [dbo].[Users]...';


GO
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [DF__Users__wallet__5165187F];


GO
PRINT N'Suppression de Clé étrangère [dbo].[PK_Library]...';


GO
ALTER TABLE [dbo].[Library] DROP CONSTRAINT [PK_Library];


GO
PRINT N'Début de la régénération de la table [dbo].[Users]...';


GO
BEGIN TRANSACTION;

SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

SET XACT_ABORT ON;

CREATE TABLE [dbo].[tmp_ms_xx_Users] (
    [Id]       INT         IDENTITY (1, 1) NOT NULL,
    [nom]      NCHAR (100) NOT NULL,
    [prenom]   NCHAR (50)  NOT NULL,
    [email]    NCHAR (100) NOT NULL,
    [password] NCHAR (100) NOT NULL,
    [wallet]   FLOAT (53)  DEFAULT 0 NOT NULL,
    [country]  CHAR (2)    NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

IF EXISTS (SELECT TOP 1 1 
           FROM   [dbo].[Users])
    BEGIN
        SET IDENTITY_INSERT [dbo].[tmp_ms_xx_Users] ON;
        INSERT INTO [dbo].[tmp_ms_xx_Users] ([Id], [nom], [prenom], [email], [password], [wallet], [country])
        SELECT   [Id],
                 [nom],
                 [prenom],
                 [email],
                 [password],
                 [wallet],
                 [country]
        FROM     [dbo].[Users]
        ORDER BY [Id] ASC;
        SET IDENTITY_INSERT [dbo].[tmp_ms_xx_Users] OFF;
    END

DROP TABLE [dbo].[Users];

EXECUTE sp_rename N'[dbo].[tmp_ms_xx_Users]', N'Users';

COMMIT TRANSACTION;

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;


GO
PRINT N'Création de Clé étrangère [dbo].[PK_Library]...';


GO
ALTER TABLE [dbo].[Library] WITH NOCHECK
    ADD CONSTRAINT [PK_Library] FOREIGN KEY ([user_id]) REFERENCES [dbo].[Users] ([Id]);


GO

SET IDENTITY_INSERT Users ON

INSERT INTO Users(Id, email, password, wallet, country)
VALUES
(1, 'user@user.com', 'Test123=', 120, NULL),
(2, 'admin@admin.com', 'Test123=', 99999, NULL),
(3, 'modo@modo.com', 'Test123=', 5000, NULL),
(4, 'poor@poor.com', 'Test123=', 0, NULL)

SET IDENTITY_INSERT Users OFF

SET IDENTITY_INSERT Categories ON

INSERT INTO Category(Id, name)
VALUES
(1, 'FPS'),
(2, 'RPG')

SET IDENTITY_INSERT Categories OFF

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
PRINT N'Vérification de données existantes par rapport aux nouvelles contraintes';


GO
USE [$(DatabaseName)];


GO
ALTER TABLE [dbo].[Library] WITH CHECK CHECK CONSTRAINT [PK_Library];


GO
PRINT N'Mise à jour terminée.';


GO
