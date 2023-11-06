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
PRINT N'Suppression de Clé étrangère contrainte sans nom sur [dbo].[Library]...';


GO
ALTER TABLE [dbo].[Library] DROP CONSTRAINT [FK__Library__game_id__5441852A];


GO
PRINT N'Suppression de Clé étrangère [dbo].[PK_Library]...';


GO
ALTER TABLE [dbo].[Library] DROP CONSTRAINT [PK_Library];


GO
PRINT N'Début de la régénération de la table [dbo].[Library]...';


GO
BEGIN TRANSACTION;

SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

SET XACT_ABORT ON;

CREATE TABLE [dbo].[tmp_ms_xx_Library] (
    [Id]              INT          IDENTITY (1, 1) NOT NULL,
    [user_id]         INT          NOT NULL,
    [game_id]         INT          NOT NULL,
    [number_of_hours] DECIMAL (18) NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

IF EXISTS (SELECT TOP 1 1 
           FROM   [dbo].[Library])
    BEGIN
        INSERT INTO [dbo].[tmp_ms_xx_Library] ([user_id], [game_id], [number_of_hours])
        SELECT [user_id],
               [game_id],
               [number_of_hours]
        FROM   [dbo].[Library];
    END

DROP TABLE [dbo].[Library];

EXECUTE sp_rename N'[dbo].[tmp_ms_xx_Library]', N'Library';

COMMIT TRANSACTION;

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;


GO
PRINT N'Création de Clé étrangère contrainte sans nom sur [dbo].[Library]...';


GO
ALTER TABLE [dbo].[Library] WITH NOCHECK
    ADD FOREIGN KEY ([game_id]) REFERENCES [dbo].[Games] ([Id]);


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

INSERT INTO Library(Id, name)
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
        WHERE  [parent_object_id] IN (OBJECT_ID(N'dbo.Library'))
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
