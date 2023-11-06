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
La colonne [dbo].[Games].[category_id] est en cours de suppression, des données risquent d'être perdues.

Le type de la colonne Name dans la table [dbo].[Games] est actuellement  NCHAR (100) NOT NULL, mais est remplacé par  VARCHAR (50) NOT NULL. Une perte de données peut se produire et le déploiement risque d'échouer si la colonne contient des données incompatibles avec le type  VARCHAR (50) NOT NULL.

Le type de la colonne Price dans la table [dbo].[Games] est actuellement  FLOAT (53) NOT NULL, mais est remplacé par  MONEY NOT NULL. Une perte de données peut se produire et le déploiement risque d'échouer si la colonne contient des données incompatibles avec le type  MONEY NOT NULL.
*/

IF EXISTS (select top 1 1 from [dbo].[Games])
    RAISERROR (N'Lignes détectées. Arrêt de la mise à jour du schéma en raison d''''un risque de perte de données.', 16, 127) WITH NOWAIT

GO
/*
La colonne [dbo].[Users].[nom] est en cours de suppression, des données risquent d'être perdues.

La colonne [dbo].[Users].[prenom] est en cours de suppression, des données risquent d'être perdues.

Le type de la colonne Country dans la table [dbo].[Users] est actuellement  CHAR (2) NULL, mais est remplacé par  TINYINT NULL. Une perte de données peut se produire et le déploiement risque d'échouer si la colonne contient des données incompatibles avec le type  TINYINT NULL.

Le type de la colonne Email dans la table [dbo].[Users] est actuellement  NCHAR (100) NOT NULL, mais est remplacé par  VARCHAR (100) NOT NULL. Une perte de données peut se produire et le déploiement risque d'échouer si la colonne contient des données incompatibles avec le type  VARCHAR (100) NOT NULL.

Le type de la colonne Password dans la table [dbo].[Users] est actuellement  NCHAR (100) NOT NULL, mais est remplacé par  VARCHAR (255) NOT NULL. Une perte de données peut se produire et le déploiement risque d'échouer si la colonne contient des données incompatibles avec le type  VARCHAR (255) NOT NULL.

Le type de la colonne Wallet dans la table [dbo].[Users] est actuellement  FLOAT (53) NOT NULL, mais est remplacé par  MONEY NOT NULL. Une perte de données peut se produire et le déploiement risque d'échouer si la colonne contient des données incompatibles avec le type  MONEY NOT NULL.
*/

IF EXISTS (select top 1 1 from [dbo].[Users])
    RAISERROR (N'Lignes détectées. Arrêt de la mise à jour du schéma en raison d''''un risque de perte de données.', 16, 127) WITH NOWAIT

GO
PRINT N'Suppression de Contrainte par défaut contrainte sans nom sur [dbo].[Users]...';


GO
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [DF__tmp_ms_xx__walle__59063A47];


GO
PRINT N'Suppression de Clé étrangère contrainte sans nom sur [dbo].[Games]...';


GO
ALTER TABLE [dbo].[Games] DROP CONSTRAINT [FK__Games__category___52593CB8];


GO
PRINT N'Modification de Table [dbo].[Games]...';


GO
ALTER TABLE [dbo].[Games] DROP COLUMN [category_id];


GO
ALTER TABLE [dbo].[Games] ALTER COLUMN [name] VARCHAR (50) NOT NULL;

ALTER TABLE [dbo].[Games] ALTER COLUMN [price] MONEY NOT NULL;


GO
ALTER TABLE [dbo].[Games]
    ADD [CategoryId] INT NULL;


GO
PRINT N'Modification de Table [dbo].[Users]...';


GO
ALTER TABLE [dbo].[Users] DROP COLUMN [nom], COLUMN [prenom];


GO
ALTER TABLE [dbo].[Users] ALTER COLUMN [country] TINYINT NULL;

ALTER TABLE [dbo].[Users] ALTER COLUMN [email] VARCHAR (100) NOT NULL;

ALTER TABLE [dbo].[Users] ALTER COLUMN [password] VARCHAR (255) NOT NULL;

ALTER TABLE [dbo].[Users] ALTER COLUMN [wallet] MONEY NOT NULL;


GO
PRINT N'Création de Contrainte unique contrainte sans nom sur [dbo].[Users]...';


GO
ALTER TABLE [dbo].[Users]
    ADD UNIQUE NONCLUSTERED ([Email] ASC);


GO
PRINT N'Création de Table [dbo].[Categories]...';


GO
CREATE TABLE [dbo].[Categories] (
    [Id]   INT          IDENTITY (1, 1) NOT NULL,
    [Name] VARCHAR (50) NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);


GO
PRINT N'Création de Table [dbo].[User_Game]...';


GO
CREATE TABLE [dbo].[User_Game] (
    [UserId]     INT NOT NULL,
    [GameId]     INT NOT NULL,
    [TimePlayed] INT NOT NULL,
    CONSTRAINT [PK_user_game] PRIMARY KEY CLUSTERED ([UserId] ASC, [GameId] ASC)
);


GO
PRINT N'Création de Contrainte par défaut contrainte sans nom sur [dbo].[User_Game]...';


GO
ALTER TABLE [dbo].[User_Game]
    ADD DEFAULT 0 FOR [TimePlayed];


GO
PRINT N'Création de Clé étrangère contrainte sans nom sur [dbo].[Games]...';


GO
ALTER TABLE [dbo].[Games] WITH NOCHECK
    ADD FOREIGN KEY ([CategoryId]) REFERENCES [dbo].[Categories] ([Id]);


GO
PRINT N'Création de Clé étrangère contrainte sans nom sur [dbo].[User_Game]...';


GO
ALTER TABLE [dbo].[User_Game] WITH NOCHECK
    ADD FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([Id]);


GO
PRINT N'Création de Clé étrangère contrainte sans nom sur [dbo].[User_Game]...';


GO
ALTER TABLE [dbo].[User_Game] WITH NOCHECK
    ADD FOREIGN KEY ([GameId]) REFERENCES [dbo].[Games] ([Id]);


GO
SET IDENTITY_INSERT Users ON

INSERT INTO Users(Id, Email, Password, Wallet, Country)
VALUES
(1, 'user@user.com', 'Test123=', 120, NULL),
(2, 'admin@admin.com', 'Test123=', 99999, NULL),
(3, 'modo@modo.com', 'Test123=', 5000, NULL),
(4, 'poor@poor.com', 'Test123=', 0, NULL)

SET IDENTITY_INSERT Users OFF

SET IDENTITY_INSERT Categories ON

INSERT INTO Categories(Id, Name)
VALUES
(1, 'FPS'),
(2, 'RPG')

SET IDENTITY_INSERT Categories OFF

SET IDENTITY_INSERT Games ON

INSERT INTO Games(Id, Name, Price, CategoryId)
VALUES
(1, 'Counter-Strike 2', 14.99, 1),
(2, 'Skyrim', 19.99, 2)

SET IDENTITY_INSERT Games OFF


INSERT INTO User_Game(UserId, GameId)
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
CREATE TABLE [#__checkStatus] (
    id           INT            IDENTITY (1, 1) PRIMARY KEY CLUSTERED,
    [Schema]     NVARCHAR (256),
    [Table]      NVARCHAR (256),
    [Constraint] NVARCHAR (256)
);

SET NOCOUNT ON;

DECLARE tableconstraintnames CURSOR LOCAL FORWARD_ONLY
    FOR SELECT SCHEMA_NAME([schema_id]),
               OBJECT_NAME([parent_object_id]),
               [name],
               0
        FROM   [sys].[objects]
        WHERE  [parent_object_id] IN (OBJECT_ID(N'dbo.Games'), OBJECT_ID(N'dbo.User_Game'))
               AND [type] IN (N'F', N'C')
                   AND [object_id] IN (SELECT [object_id]
                                       FROM   [sys].[check_constraints]
                                       WHERE  [is_not_trusted] <> 0
                                              AND [is_disabled] = 0
                                       UNION
                                       SELECT [object_id]
                                       FROM   [sys].[foreign_keys]
                                       WHERE  [is_not_trusted] <> 0
                                              AND [is_disabled] = 0);

DECLARE @schemaname AS NVARCHAR (256);

DECLARE @tablename AS NVARCHAR (256);

DECLARE @checkname AS NVARCHAR (256);

DECLARE @is_not_trusted AS INT;

DECLARE @statement AS NVARCHAR (1024);

BEGIN TRY
    OPEN tableconstraintnames;
    FETCH tableconstraintnames INTO @schemaname, @tablename, @checkname, @is_not_trusted;
    WHILE @@fetch_status = 0
        BEGIN
            PRINT N'Vérification de la contrainte : ' + @checkname + N' [' + @schemaname + N'].[' + @tablename + N']';
            SET @statement = N'ALTER TABLE [' + @schemaname + N'].[' + @tablename + N'] WITH ' + CASE @is_not_trusted WHEN 0 THEN N'CHECK' ELSE N'NOCHECK' END + N' CHECK CONSTRAINT [' + @checkname + N']';
            BEGIN TRY
                EXECUTE [sp_executesql] @statement;
            END TRY
            BEGIN CATCH
                INSERT  [#__checkStatus] ([Schema], [Table], [Constraint])
                VALUES                  (@schemaname, @tablename, @checkname);
            END CATCH
            FETCH tableconstraintnames INTO @schemaname, @tablename, @checkname, @is_not_trusted;
        END
END TRY
BEGIN CATCH
    PRINT ERROR_MESSAGE();
END CATCH

IF CURSOR_STATUS(N'LOCAL', N'tableconstraintnames') >= 0
    CLOSE tableconstraintnames;

IF CURSOR_STATUS(N'LOCAL', N'tableconstraintnames') = -1
    DEALLOCATE tableconstraintnames;

SELECT N'Échec de vérification de la contrainte :' + [Schema] + N'.' + [Table] + N',' + [Constraint]
FROM   [#__checkStatus];

IF @@ROWCOUNT > 0
    BEGIN
        DROP TABLE [#__checkStatus];
        RAISERROR (N'Une erreur s''est produite lors de la vérification des contraintes', 16, 127);
    END

SET NOCOUNT OFF;

DROP TABLE [#__checkStatus];


GO
PRINT N'Mise à jour terminée.';


GO
